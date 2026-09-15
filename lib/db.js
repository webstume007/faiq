/**
 * Database Access Layer
 * Centralized data access functions for all Supabase tables.
 * Includes complete CRUD, Audit Logging, Session Lifecycles, Hifz, Dars-e-Nizami, and Notifications.
 */
import { supabase } from './supabaseClient';
export { supabase };
import { calculateHifzProgressStats } from './quranData';

// ============================================================
// AUDIT LOGGING (Activity Log)
// ============================================================

/** Log an administrative or system activity */
export async function logActivity(userId, action, entityType, entityId, oldValue = null, newValue = null, description = '') {
  if (!userId) return;
  try {
    await supabase.from('activity_log').insert({
      user_id: userId,
      action,
      entity_type: entityType,
      entity_id: entityId,
      old_value: oldValue,
      new_value: newValue,
      description,
    });
  } catch (err) {
    console.error('Failed to log activity:', err);
  }
}

/** Get activity log entries */
export async function getActivityLog(limit = 50, filters = {}) {
  let query = supabase
    .from('activity_log')
    .select(`
      *,
      user:users(first_name, last_name, role)
    `)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (filters.entity_type) query = query.eq('entity_type', filters.entity_type);
  if (filters.user_id) query = query.eq('user_id', filters.user_id);

  const { data } = await query;
  return data || [];
}

// ============================================================
// USERS
// ============================================================

/** Authenticate user by CNIC + password via Supabase Auth */
export async function authenticateUser(cnic, password) {
  // Step 1: look up email by CNIC
  const { data: email, error: rpcErr } = await supabase.rpc('get_email_by_cnic', { p_cnic: cnic });
  if (rpcErr || !email) return null;

  // Step 2: sign in with Supabase Auth
  const { data: authData, error: authErr } = await supabase.auth.signInWithPassword({ email, password });
  if (authErr || !authData?.user) return null;

  // Step 3: fetch profile from public.users
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', authData.user.id)
    .single();
  if (error || !data) return null;
  const { password_hash, ...safeUser } = data;
  return safeUser;
}

/** Find user by CNIC */
export async function findUserByCnic(cnic) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('cnic', cnic)
    .single();
  if (error || !data) return null;
  const { password_hash, ...safeUser } = data;
  return safeUser;
}

/** Get all users (admin) */
export async function getAllUsers() {
  const { data } = await supabase
    .from('users')
    .select('id, cnic, role, first_name, last_name, email, phone, current_address, permanent_address, date_of_birth, education, avatar_url, is_verified, created_at')
    .order('created_at', { ascending: false });
  return data || [];
}

/** Get users by role */
export async function getUsersByRole(role) {
  const { data } = await supabase
    .from('users')
    .select('id, cnic, role, first_name, last_name, email, phone, is_verified, created_at')
    .eq('role', role)
    .order('created_at', { ascending: false });
  return data || [];
}

/**
 * Create user via Supabase Auth (admin flow — teacher/admin accounts created by admin).
 * Uses supabase.auth.admin is not available from browser; this path is only used for
 * server-side or admin-created accounts where we manually insert into public.users
 * after the auth user is already created.
 */
export async function createUser(userData, actorId = null) {
  const existing = await findUserByCnic(userData.cnic);
  if (existing) return { error: 'An account with this CNIC already exists.' };

  // For admin-created accounts (teacher role etc.), insert profile directly.
  // The auth account should be created separately via Supabase Auth (signup or invite).
  const { data, error } = await supabase
    .from('users')
    .insert({
      cnic: userData.cnic,
      role: userData.role,
      first_name: userData.firstName || userData.first_name,
      last_name: userData.lastName || userData.last_name,
      email: userData.email,
      phone: userData.phone,
      current_address: userData.currentAddress || userData.current_address,
      permanent_address: userData.permanentAddress || userData.permanent_address,
      date_of_birth: userData.dateOfBirth || userData.date_of_birth,
      education: userData.education,
      is_verified: userData.is_verified || false,
    })
    .select()
    .single();

  if (error) return { error: error.message };
  const { password_hash, ...safeUser } = data;

  if (actorId) {
    await logActivity(actorId, 'create', 'user', safeUser.id, null, safeUser, `Created user ${safeUser.first_name} ${safeUser.last_name} (${safeUser.role})`);
  }

  return { user: safeUser };
}

/** Update user */
export async function updateUser(userId, updates, actorId = null) {
  const { data: oldUser } = await supabase.from('users').select('*').eq('id', userId).single();

  const { data, error } = await supabase
    .from('users')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();
  if (error) return { error: error.message };
  const { password_hash, ...safeUser } = data;

  if (actorId) {
    await logActivity(actorId, 'update', 'user', userId, oldUser, safeUser, `Updated user profile for ${safeUser.first_name} ${safeUser.last_name}`);
  }

  return { user: safeUser };
}

/** Delete user */
export async function deleteUser(userId, actorId = null) {
  const { data: oldUser } = await supabase.from('users').select('*').eq('id', userId).single();
  const { error } = await supabase.from('users').delete().eq('id', userId);
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'delete', 'user', userId, oldUser, null, `Deleted user ${oldUser?.first_name} ${oldUser?.last_name}`);
  }

  return { success: true };
}

// ============================================================
// TEACHERS
// ============================================================

/** Get all teachers with user details */
export async function getAllTeachers() {
  const { data } = await supabase
    .from('teachers')
    .select(`
      *,
      user:users(id, cnic, first_name, last_name, email, phone, education, avatar_url, is_verified, created_at)
    `)
    .order('created_at', { ascending: false });
  return data || [];
}

/** Create teacher (creates user + teacher profile) */
export async function createTeacher(userData, teacherData, actorId = null) {
  const result = await createUser({ ...userData, role: 'teacher', is_verified: true }, actorId);
  if (result.error) return result;

  const { data, error } = await supabase
    .from('teachers')
    .insert({
      id: result.user.id,
      employee_id: teacherData.employee_id,
      qualification: teacherData.qualification,
      specialization: teacherData.specialization,
      joining_date: teacherData.joining_date,
      status: 'active',
    })
    .select()
    .single();

  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'teacher', data.id, null, data, `Created teacher account for ${result.user.first_name} ${result.user.last_name} (${teacherData.employee_id})`);
  }

  return { teacher: data, user: result.user };
}

/** Update teacher profile */
export async function updateTeacher(teacherId, updates, actorId = null) {
  const { data: oldData } = await supabase.from('teachers').select('*').eq('id', teacherId).single();
  const { data, error } = await supabase
    .from('teachers')
    .update(updates)
    .eq('id', teacherId)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'update', 'teacher', teacherId, oldData, data, `Updated teacher details for ID ${teacherId}`);
  }

  return { teacher: data };
}

/** Delete teacher account */
export async function deleteTeacher(teacherId, actorId = null) {
  await supabase.from('teachers').delete().eq('id', teacherId);
  return await deleteUser(teacherId, actorId);
}

// ============================================================
// GUARDIANS
// ============================================================

/** Get all guardians with user details and student count */
export async function getAllGuardians() {
  const { data } = await supabase
    .from('guardians')
    .select(`
      *,
      user:users(id, cnic, first_name, last_name, email, phone, current_address, permanent_address, education, avatar_url, is_verified, created_at),
      students:students(id, first_name, last_name, roll_no, program_type)
    `)
    .order('created_at', { ascending: false });
  return data || [];
}

/** Create guardian (user + guardian profile) */
export async function createGuardian(userData, guardianData, actorId = null) {
  const result = await createUser({ ...userData, role: 'guardian' }, actorId);
  if (result.error) return result;

  const { data, error } = await supabase
    .from('guardians')
    .insert({
      id: result.user.id,
      occupation: guardianData.occupation,
      relation_to_student: guardianData.relation_to_student || '',
    })
    .select()
    .single();

  if (error) return { error: error.message };
  return { guardian: data, user: result.user };
}

/** Update guardian profile (Onboarding) */
export async function updateGuardianProfile(userId, userData, guardianData, actorId = null) {
  const { error: userError } = await supabase
    .from('users')
    .update({
      first_name: userData.first_name,
      last_name: userData.last_name,
      phone: userData.phone,
      current_address: userData.current_address,
      profile_picture_url: userData.profile_picture_url,
    })
    .eq('id', userId);
  
  if (userError) return { error: userError.message };

  const { error: guardianError } = await supabase
    .from('guardians')
    .update({
      father_name: guardianData.father_name,
      relation_to_student: guardianData.relation_to_student,
      occupation: guardianData.occupation,
      estimated_earning: guardianData.estimated_earning,
      child_count: guardianData.child_count,
      onboarding_complete: true,
    })
    .eq('id', userId);

  if (guardianError) return { error: guardianError.message };
  
  if (actorId) {
    await logActivity(actorId, 'update', 'guardian', userId, null, { userData, guardianData }, `Completed guardian onboarding`);
  }

  return { success: true };
}

// ============================================================
// SESSIONS & SESSION LIFECYCLE
// ============================================================

/** Get all sessions */
export async function getAllSessions() {
  const { data } = await supabase
    .from('sessions')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

/** Get active session */
export async function getActiveSession() {
  const { data } = await supabase
    .from('sessions')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  return data;
}

/** Create new session */
export async function createSession(sessionData, actorId = null) {
  // If new session is set as active, deactivate previous ones
  if (sessionData.is_active) {
    await supabase.from('sessions').update({ is_active: false }).neq('id', '00000000-0000-0000-0000-000000000000');
  }

  const { data, error } = await supabase
    .from('sessions')
    .insert({
      name: sessionData.name,
      start_date: sessionData.start_date,
      end_date: sessionData.end_date,
      fee_structure: sessionData.fee_structure || {},
      is_active: sessionData.is_active ?? true,
      status: sessionData.status || 'active',
      cloned_from: sessionData.cloned_from || null,
    })
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'session', data.id, null, data, `Created session ${data.name}`);
  }

  return { session: data };
}

/** Clone a session's courses, classes, and subjects to a new session */
export async function cloneSession(sourceSessionId, newSessionData, actorId = null) {
  // 1. Create the new session
  const { session, error } = await createSession({
    ...newSessionData,
    cloned_from: sourceSessionId,
  }, actorId);
  if (error) return { error };

  // 2. Fetch source session courses
  const { data: sourceCourses } = await supabase
    .from('session_courses')
    .select('*')
    .eq('session_id', sourceSessionId);

  const courseIdMap = {};

  if (sourceCourses && sourceCourses.length > 0) {
    for (const sc of sourceCourses) {
      const { data: newCourse } = await supabase
        .from('session_courses')
        .insert({
          session_id: session.id,
          course_name: sc.course_name,
          course_code: sc.course_code,
          course_type: sc.course_type,
          class_level: sc.class_level,
          duration: sc.duration,
          description: sc.description,
        })
        .select()
        .single();
      if (newCourse) courseIdMap[sc.id] = newCourse.id;
    }
  }

  // 3. Fetch and clone classes
  const { data: sourceClasses } = await supabase
    .from('session_classes')
    .select('*')
    .eq('session_id', sourceSessionId);

  if (sourceClasses && sourceClasses.length > 0) {
    for (const sclass of sourceClasses) {
      const newCourseId = courseIdMap[sclass.course_id] || sclass.course_id;
      const { data: newClass } = await supabase
        .from('session_classes')
        .insert({
          session_id: session.id,
          course_id: newCourseId,
          class_name: sclass.class_name,
          section: sclass.section,
          semester: sclass.semester,
          incharge_teacher_id: sclass.incharge_teacher_id,
          max_students: sclass.max_students,
        })
        .select()
        .single();

      // Clone subjects for this class
      if (newClass) {
        const { data: sourceSubjects } = await supabase
          .from('class_subjects')
          .select('*')
          .eq('class_id', sclass.id);

        if (sourceSubjects && sourceSubjects.length > 0) {
          for (const sub of sourceSubjects) {
            await supabase.from('class_subjects').insert({
              class_id: newClass.id,
              course_id: newCourseId,
              subject_name: sub.subject_name,
              subject_code: sub.subject_code,
              credit_hours: sub.credit_hours,
              teacher_id: sub.teacher_id,
            });
          }
        }
      }
    }
  }

  if (actorId) {
    await logActivity(actorId, 'clone', 'session', session.id, { sourceSessionId }, session, `Cloned session ${session.name} from source ID ${sourceSessionId}`);
  }

  return { session };
}

/** Archive a session (make read-only) */
export async function archiveSession(sessionId, actorId = null) {
  const { data, error } = await supabase
    .from('sessions')
    .update({
      status: 'archived',
      is_active: false,
      archived_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', sessionId)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'archive', 'session', sessionId, null, data, `Archived session ${data.name}`);
  }

  return { session: data };
}

/** Update session */
export async function updateSession(sessionId, updates, actorId = null) {
  const { data: oldData } = await supabase.from('sessions').select('*').eq('id', sessionId).single();
  const { data, error } = await supabase
    .from('sessions')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', sessionId)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'update', 'session', sessionId, oldData, data, `Updated session ${data.name}`);
  }

  return { session: data };
}

// ============================================================
// PROMOTION & ROLLOVER
// ============================================================

/** Get eligible students for promotion from a session */
export async function getPromotionCandidates(sessionId) {
  const { data } = await supabase
    .from('students')
    .select(`
      *,
      class:session_classes(
        id, class_name, section,
        course:session_courses(id, course_name, course_code, course_type, class_level)
      ),
      guardian:guardians(user:users(first_name, last_name, phone))
    `)
    .eq('session_id', sessionId)
    .eq('status', 'active');
  return data || [];
}

/** Bulk promote students to new session / next class level */
export async function promoteStudents(promotions, actorId = null) {
  const results = [];
  for (const p of promotions) {
    // p: { student_id, from_session_id, to_session_id, from_class_id, to_class_id, from_class_level, to_class_level, promotion_type, notes }
    const { data: promo, error: promoErr } = await supabase
      .from('student_promotions')
      .insert({
        student_id: p.student_id,
        from_session_id: p.from_session_id,
        to_session_id: p.to_session_id,
        from_class_id: p.from_class_id,
        to_class_id: p.to_class_id,
        from_class_level: p.from_class_level,
        to_class_level: p.to_class_level,
        promotion_type: p.promotion_type,
        promoted_by: actorId,
        notes: p.notes,
      })
      .select()
      .single();

    if (!promoErr) {
      if (p.promotion_type === 'promoted' || p.promotion_type === 'held_back') {
        // Update student record to new class and session
        await supabase
          .from('students')
          .update({
            session_id: p.to_session_id,
            class_id: p.to_class_id || p.from_class_id,
            updated_at: new Date().toISOString(),
          })
          .eq('id', p.student_id);
      } else if (p.promotion_type === 'graduated') {
        await supabase
          .from('students')
          .update({ status: 'graduated', updated_at: new Date().toISOString() })
          .eq('id', p.student_id);
      }
      results.push(promo);
    }
  }

  if (actorId && results.length > 0) {
    await logActivity(actorId, 'promote', 'student_promotions', actorId, null, { count: results.length }, `Bulk processed ${results.length} student promotions`);
  }

  return { count: results.length };
}

// ============================================================
// COURSES & CLASSES
// ============================================================

/** Get courses for a session */
export async function getSessionCourses(sessionId) {
  let query = supabase.from('session_courses').select('*');
  if (sessionId) query = query.eq('session_id', sessionId);
  const { data } = await query.order('course_name');
  return data || [];
}

/** Create course */
export async function createCourse(courseData, actorId = null) {
  const { data, error } = await supabase
    .from('session_courses')
    .insert(courseData)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'course', data.id, null, data, `Created course ${data.course_name} (${data.course_code})`);
  }

  return { course: data };
}

/** Get all courses across all sessions */
export async function getAllCourses() {
  const { data } = await supabase
    .from('session_courses')
    .select(`*, session:sessions(name, is_active, status)`)
    .order('course_name');
  return data || [];
}

/** Get classes for a session */
export async function getSessionClasses(sessionId) {
  let query = supabase
    .from('session_classes')
    .select(`
      *,
      course:session_courses(course_name, course_code, course_type, class_level),
      incharge:teachers(
        id, employee_id, qualification,
        user:users(first_name, last_name, phone)
      )
    `);
  if (sessionId) query = query.eq('session_id', sessionId);
  const { data } = await query.order('class_name');
  return data || [];
}

/** Get all classes */
export async function getAllClasses() {
  const { data } = await supabase
    .from('session_classes')
    .select(`
      *,
      course:session_courses(course_name, course_code, course_type, class_level),
      session:sessions(name, is_active, status),
      incharge:teachers(
        id, employee_id,
        user:users(first_name, last_name)
      )
    `)
    .order('class_name');
  return data || [];
}

/** Create class */
export async function createClass(classData, actorId = null) {
  const { data, error } = await supabase
    .from('session_classes')
    .insert(classData)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'class', data.id, null, data, `Created class ${data.class_name}`);
  }

  return { class: data };
}

/** Get subjects for a class */
export async function getClassSubjects(classId) {
  const { data } = await supabase
    .from('class_subjects')
    .select(`
      *,
      teacher:teachers(
        id, employee_id,
        user:users(first_name, last_name, phone)
      )
    `)
    .eq('class_id', classId)
    .order('subject_name');
  return data || [];
}

/** Create subject */
export async function createSubject(subjectData, actorId = null) {
  const { data, error } = await supabase
    .from('class_subjects')
    .insert(subjectData)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'subject', data.id, null, data, `Created subject ${data.subject_name}`);
  }

  return { subject: data };
}

// ============================================================
// STUDENTS
// ============================================================

/** Get all students with guardian and class info */
export async function getAllStudents(sessionId = null) {
  let query = supabase
    .from('students')
    .select(`
      *,
      guardian:guardians(
        id, occupation, relation_to_student,
        user:users(first_name, last_name, cnic, phone, email)
      ),
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(course_name, course_code, course_type, class_level),
        session:sessions(id, name, is_active)
      )
    `);

  if (sessionId) query = query.eq('session_id', sessionId);
  const { data } = await query.order('enrolled_at', { ascending: false });
  return data || [];
}

/** Get students by guardian */
export async function getStudentsByGuardian(guardianId) {
  const { data } = await supabase
    .from('students')
    .select(`
      *,
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(course_name, course_code, course_type, class_level),
        session:sessions(id, name, is_active)
      )
    `)
    .eq('guardian_id', guardianId)
    .eq('status', 'active')
    .order('first_name');
  return data || [];
}

/** Get student by ID */
export async function getStudentById(studentId) {
  const { data } = await supabase
    .from('students')
    .select(`
      *,
      guardian:guardians(
        id, occupation, relation_to_student,
        user:users(first_name, last_name, cnic, phone, email, current_address)
      ),
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(course_name, course_code, course_type, class_level),
        session:sessions(id, name, is_active)
      )
    `)
    .eq('id', studentId)
    .single();
  return data;
}

/** Create student */
export async function createStudent(studentData, actorId = null) {
  const { data, error } = await supabase
    .from('students')
    .insert(studentData)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'student', data.id, null, data, `Enrolled student ${data.first_name} ${data.last_name} (${data.roll_no})`);
  }

  return { student: data };
}

/** Update student */
export async function updateStudent(studentId, updates, actorId = null) {
  const { data: oldData } = await supabase.from('students').select('*').eq('id', studentId).single();
  const { data, error } = await supabase
    .from('students')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', studentId)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'update', 'student', studentId, oldData, data, `Updated student ${data.first_name} ${data.last_name}`);
  }

  return { student: data };
}

/** Delete student */
export async function deleteStudent(studentId, actorId = null) {
  const { data: oldData } = await supabase.from('students').select('*').eq('id', studentId).single();
  const { error } = await supabase.from('students').delete().eq('id', studentId);
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'delete', 'student', studentId, oldData, null, `Deleted student ${oldData?.first_name} ${oldData?.last_name}`);
  }

  return { success: true };
}

// ============================================================
// ADMISSIONS
// ============================================================

/** Get all admission applications */
export async function getAllAdmissions() {
  const { data } = await supabase
    .from('admission_applications')
    .select(`
      *,
      guardian:guardians(
        id, occupation,
        user:users(first_name, last_name, cnic, phone, email)
      ),
      session:sessions(id, name, is_active)
    `)
    .order('created_at', { ascending: false });
  return data || [];
}

/** Create admission application */
export async function createAdmission(admissionData) {
  const { data, error } = await supabase
    .from('admission_applications')
    .insert(admissionData)
    .select()
    .single();
  if (error) return { error: error.message };
  return { admission: data };
}

/** Update admission status */
export async function updateAdmission(admissionId, updates, actorId = null) {
  const { data: oldData } = await supabase.from('admission_applications').select('*').eq('id', admissionId).single();
  const { data, error } = await supabase
    .from('admission_applications')
    .update({ ...updates, reviewed_at: new Date().toISOString() })
    .eq('id', admissionId)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'update', 'admission', admissionId, oldData, data, `Updated admission application to ${updates.status}`);
  }

  return { admission: data };
}

/** Approve admission: creates student record + auto-generates challan */
export async function approveAdmissionAndEnroll(applicationId, classId, actorId = null) {
  // 1. Fetch application
  const { data: app } = await supabase
    .from('admission_applications')
    .select('*')
    .eq('id', applicationId)
    .single();
  if (!app) return { error: 'Application not found' };

  // 2. Generate roll number
  const prefix = app.course_type === 'hifz' ? 'HFZ' : 'DN';
  const year = new Date().getFullYear();
  const { count } = await supabase.from('students').select('id', { count: 'exact', head: true });
  const rollNo = `${prefix}-${year}-${String((count || 0) + 1).padStart(3, '0')}`;

  // 3. Create student record
  const { data: student, error: sErr } = await supabase
    .from('students')
    .insert({
      roll_no: rollNo,
      first_name: app.student_first_name,
      last_name: app.student_last_name,
      date_of_birth: app.student_dob,
      gender: app.student_gender,
      guardian_id: app.guardian_id,
      class_id: classId,
      session_id: app.session_id,
      b_form_no: app.student_b_form,
      program_type: app.course_type,
      status: 'active',
      previous_enrollment_id: app.previous_enrollment_id,
    })
    .select()
    .single();

  if (sErr) return { error: sErr.message };

  // 4. Update application status
  await supabase
    .from('admission_applications')
    .update({
      status: 'approved',
      reviewed_by: actorId,
      reviewed_at: new Date().toISOString(),
    })
    .eq('id', applicationId);

  // 5. Auto generate admission fee challan
  const { challan } = await createChallan({
    student_id: student.id,
    session_id: app.session_id,
    title: `Admission & First Month Fee (${app.desired_course || (app.course_type === 'hifz' ? 'Hifz' : 'Dars-e-Nizami')})`,
    amount: 15000,
    due_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    month: new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
    description: 'Initial admission fee and tuition',
    created_by: actorId,
  });

  if (actorId) {
    await logActivity(actorId, 'approve', 'admission', applicationId, null, { student_id: student.id, challan_id: challan?.id }, `Approved admission and enrolled student ${student.first_name} ${student.last_name} (${rollNo})`);
  }

  return { student, challan };
}

// ============================================================
// CHALLANS & FEES
// ============================================================

/** Get all challans (admin view) */
export async function getAllChallans(sessionId = null) {
  let query = supabase
    .from('challans')
    .select(`
      *,
      student:students(first_name, last_name, roll_no, program_type,
        class:session_classes(class_name, section)
      ),
      payment:challan_payments(*)
    `);
  if (sessionId) query = query.eq('session_id', sessionId);
  const { data } = await query.order('created_at', { ascending: false });
  return data || [];
}

/** Get challans for a student (guardian view with compensated masking) */
export async function getStudentChallans(studentId) {
  const { data } = await supabase
    .from('challans')
    .select(`
      *,
      payment:challan_payments(*)
    `)
    .eq('student_id', studentId)
    .order('due_date', { ascending: false });

  if (!data) return [];

  // Mask compensated challans so parents see "paid"
  return data.map((c) => {
    if (c.compensation_status === 'compensated') {
      return {
        ...c,
        status: 'paid',
        is_compensated: true,
      };
    }
    return c;
  });
}

/** Get challans pending verification */
export async function getPendingChallans() {
  const { data } = await supabase
    .from('challans')
    .select(`
      *,
      student:students(first_name, last_name, roll_no, program_type,
        class:session_classes(class_name, section)
      ),
      payment:challan_payments(*)
    `)
    .eq('status', 'pending_verification')
    .order('created_at', { ascending: false });
  return data || [];
}

/** Create challan */
export async function createChallan(challanData, actorId = null) {
  const { count } = await supabase.from('challans').select('id', { count: 'exact', head: true });
  const challanNo = `CHN-${new Date().getFullYear()}-${String((count || 0) + 1).padStart(4, '0')}`;

  const { data, error } = await supabase
    .from('challans')
    .insert({
      ...challanData,
      challan_no: challanNo,
      compensation_status: challanData.compensation_status || 'none',
    })
    .select()
    .single();

  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'challan', data.id, null, data, `Created challan ${data.challan_no} for amount Rs. ${data.amount}`);
  }

  return { challan: data };
}

/** Submit challan payment (guardian submits TID) */
export async function submitChallanPayment(paymentData) {
  const { data: payment, error: payError } = await supabase
    .from('challan_payments')
    .insert({
      challan_id: paymentData.challan_id,
      payment_method: paymentData.payment_method || 'bank',
      transaction_id: paymentData.transaction_id,
      amount_paid: paymentData.amount_paid,
      screenshot_url: paymentData.screenshot_url || null,
      status: 'pending',
    })
    .select()
    .single();
  if (payError) return { error: payError.message };

  await supabase
    .from('challans')
    .update({ status: 'pending_verification', updated_at: new Date().toISOString() })
    .eq('id', paymentData.challan_id);

  return { payment };
}

/** Verify challan payment (Paid / Rejected / Compensated) */
export async function verifyChallanPayment(paymentId, challanId, status, verifiedBy, rejectionReason = null) {
  if (paymentId) {
    await supabase
      .from('challan_payments')
      .update({
        status,
        verified_by: verifiedBy,
        verified_at: new Date().toISOString(),
        rejection_reason: rejectionReason,
      })
      .eq('id', paymentId);
  }

  const challanStatus = status === 'approved' ? 'paid' : (status === 'compensated' ? 'paid' : 'unpaid');
  const compStatus = status === 'compensated' ? 'compensated' : 'none';

  const { data, error } = await supabase
    .from('challans')
    .update({
      status: challanStatus,
      compensation_status: compStatus,
      updated_at: new Date().toISOString(),
    })
    .eq('id', challanId)
    .select()
    .single();

  if (error) return { error: error.message };

  if (verifiedBy) {
    await logActivity(verifiedBy, 'verify', 'challan', challanId, null, { status: challanStatus, compensation: compStatus }, `Verified challan payment as ${status}`);
  }

  return { challan: data };
}

/** Mark challan as compensated directly */
export async function markChallanCompensated(challanId, verifiedBy) {
  return await verifyChallanPayment(null, challanId, 'compensated', verifiedBy);
}

// ============================================================
// BANK & FEE CONFIGURATION
// ============================================================

/** Get active bank config */
export async function getActiveBankConfig() {
  const { data } = await supabase
    .from('bank_config')
    .select('*')
    .eq('is_active', true)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();
  return data;
}

/** Update bank config */
export async function updateBankConfig(bankData, actorId = null) {
  let res;
  if (bankData.id) {
    res = await supabase
      .from('bank_config')
      .update({ ...bankData, updated_by: actorId, updated_at: new Date().toISOString() })
      .eq('id', bankData.id)
      .select()
      .single();
  } else {
    res = await supabase
      .from('bank_config')
      .insert({ ...bankData, updated_by: actorId })
      .select()
      .single();
  }

  if (res.data && actorId) {
    await logActivity(actorId, 'update', 'bank_config', res.data.id, null, res.data, `Updated institute bank account details`);
  }

  return res.data;
}

// ============================================================
// HIFZ UL QURAN MODULE
// ============================================================

/** Save Hifz daily progress (Sabaq, Sabqi) */
export async function saveHifzDailyProgress(progressData, actorId = null) {
  const { data, error } = await supabase
    .from('hifz_daily_progress')
    .upsert(progressData, { onConflict: 'student_id,date' })
    .select();
  if (error) return { error: error.message };

  if (actorId && data?.[0]) {
    await logActivity(actorId, 'save', 'hifz_daily_progress', data[0].id, null, data[0], `Recorded Hifz Sabaq progress for student ${data[0].student_id}`);
  }

  return { records: data };
}

/** Save Manzil (Para revision) records */
export async function saveManzilRecords(manzilData, actorId = null) {
  const { data, error } = await supabase
    .from('hifz_manzil_records')
    .upsert(manzilData, { onConflict: 'student_id,date,para_number' })
    .select();
  if (error) return { error: error.message };
  return { records: data };
}

/** Get Hifz daily progress for a student */
export async function getStudentHifzHistory(studentId) {
  const [daily, manzil] = await Promise.all([
    supabase.from('hifz_daily_progress').select('*').eq('student_id', studentId).order('date', { ascending: false }),
    supabase.from('hifz_manzil_records').select('*').eq('student_id', studentId).order('date', { ascending: false }),
  ]);

  const dailyRecords = daily.data || [];
  const manzilRecords = manzil.data || [];
  const stats = calculateHifzProgressStats(dailyRecords, manzilRecords);

  return {
    dailyRecords,
    manzilRecords,
    stats,
  };
}

/** Get Hifz entries for a class on a date (Teacher View) */
export async function getHifzEntriesForClass(classId, date) {
  const { data: students } = await supabase
    .from('students')
    .select('id, roll_no, first_name, last_name, photo_url')
    .eq('class_id', classId)
    .eq('status', 'active')
    .order('roll_no');

  if (!students) return [];

  const studentIds = students.map((s) => s.id);
  const [daily, manzil] = await Promise.all([
    supabase.from('hifz_daily_progress').select('*').in('student_id', studentIds).eq('date', date),
    supabase.from('hifz_manzil_records').select('*').in('student_id', studentIds).eq('date', date),
  ]);

  const dailyMap = (daily.data || []).reduce((acc, r) => ({ ...acc, [r.student_id]: r }), {});
  const manzilMap = (manzil.data || []).reduce((acc, r) => ({ ...acc, [r.student_id]: r }), {});

  return students.map((st) => ({
    student: st,
    daily: dailyMap[st.id] || null,
    manzil: manzilMap[st.id] || null,
  }));
}

// ============================================================
// DARS-E-NIZAMI & TEST SESSIONS
// ============================================================

/** Create test session */
export async function createTestSession(testData, actorId = null) {
  const { data, error } = await supabase
    .from('test_sessions')
    .insert(testData)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'test_session', data.id, null, data, `Created test session ${data.name}`);
  }

  return { testSession: data };
}

/** Get test sessions */
export async function getTestSessions(sessionId = null) {
  let query = supabase.from('test_sessions').select('*').order('created_at', { ascending: false });
  if (sessionId) query = query.eq('session_id', sessionId);
  const { data } = await query;
  return data || [];
}

/** Submit test results */
export async function submitTestResults(results, actorId = null) {
  const { data, error } = await supabase
    .from('test_results')
    .upsert(results, { onConflict: 'test_session_id,student_id,class_subject_id' })
    .select();
  if (error) return { error: error.message };

  if (actorId && data?.length > 0) {
    await logActivity(actorId, 'save', 'test_results', actorId, null, { count: data.length }, `Entered ${data.length} test marks`);
  }

  return { results: data };
}

/** Get test results for a student */
export async function getStudentTestResults(studentId) {
  const { data } = await supabase
    .from('test_results')
    .select(`
      *,
      test_session:test_sessions(name, test_type, start_date, end_date),
      subject:class_subjects(subject_name, subject_code)
    `)
    .eq('student_id', studentId)
    .order('created_at', { ascending: false });
  return data || [];
}

// ============================================================
// ATTENDANCE & ABSENCE ESCALATION
// ============================================================

/** Mark attendance with audit and consecutive absence calculation */
export async function markAttendance(records, actorId = null) {
  const { data, error } = await supabase
    .from('attendance_records')
    .upsert(records, { onConflict: 'student_id,class_subject_id,date' })
    .select();
  if (error) return { error: error.message };

  // Check for consecutive absences
  for (const r of records) {
    if (r.status === 'absent') {
      const { data: history } = await supabase
        .from('attendance_records')
        .select('status, date')
        .eq('student_id', r.student_id)
        .order('date', { ascending: false })
        .limit(5);

      if (history && history.length >= 2) {
        const consecutiveAbsences = history.filter((h) => h.status === 'absent').length;
        if (consecutiveAbsences >= 2) {
          await supabase.from('absence_flags').upsert({
            student_id: r.student_id,
            session_id: r.session_id || 'e0000000-0000-0000-0000-000000000001',
            consecutive_absences: consecutiveAbsences,
            flag_date: r.date,
            status: 'active',
          }, { onConflict: 'student_id,session_id,flag_date' });
        }
      }
    }
  }

  if (actorId && data?.length > 0) {
    await logActivity(actorId, 'save', 'attendance', actorId, null, { count: data.length }, `Marked attendance for ${data.length} students`);
  }

  return { records: data };
}

/** Get attendance for a student */
export async function getStudentAttendance(studentId) {
  const { data } = await supabase
    .from('attendance_records')
    .select(`
      *,
      subject:class_subjects(subject_name, subject_code)
    `)
    .eq('student_id', studentId)
    .order('date', { ascending: false });
  return data || [];
}

/** Get student attendance stats */
export async function getStudentAttendanceStats(studentId) {
  const { data } = await supabase
    .from('attendance_records')
    .select('status')
    .eq('student_id', studentId);
  if (!data) return { total: 0, present: 0, absent: 0, leave: 0, percentage: 0 };
  const total = data.length;
  const present = data.filter((r) => r.status === 'present').length;
  const absent = data.filter((r) => r.status === 'absent').length;
  const leave = data.filter((r) => r.status === 'leave').length;
  return {
    total,
    present,
    absent,
    leave,
    percentage: total > 0 ? ((present / total) * 100).toFixed(1) : 0,
  };
}

/** Get active absence flags (Escalations) */
export async function getActiveAbsenceFlags() {
  const { data } = await supabase
    .from('absence_flags')
    .select(`
      *,
      student:students(
        id, first_name, last_name, roll_no, program_type,
        class:session_classes(class_name, section),
        guardian:guardians(user:users(first_name, last_name, phone))
      )
    `)
    .eq('status', 'active')
    .order('consecutive_absences', { ascending: false });
  return data || [];
}

/** Resolve absence flag */
export async function resolveAbsenceFlag(flagId, actorId, resolutionNotes = '') {
  const { data, error } = await supabase
    .from('absence_flags')
    .update({
      status: 'resolved',
      resolved_at: new Date().toISOString(),
      resolved_by: actorId,
      resolution_notes: resolutionNotes,
    })
    .eq('id', flagId)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'resolve', 'absence_flags', flagId, null, data, `Resolved absence flag for student`);
  }

  return { flag: data };
}

// ============================================================
// NOTIFICATIONS
// ============================================================

/** Get notification configs */
export async function getNotificationConfigs() {
  const { data } = await supabase.from('notification_config').select('*').order('event_type');
  return data || [];
}

/** Update notification config */
export async function updateNotificationConfig(id, updates) {
  const { data, error } = await supabase
    .from('notification_config')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) return { error: error.message };
  return { config: data };
}

/** Get notification logs */
export async function getNotificationLogs(limit = 50) {
  const { data } = await supabase
    .from('notification_log')
    .select(`
      *,
      recipient:users(first_name, last_name, phone)
    `)
    .order('created_at', { ascending: false })
    .limit(limit);
  return data || [];
}

/** Log sent notification */
export async function logNotification(notificationData) {
  const { data, error } = await supabase
    .from('notification_log')
    .insert(notificationData)
    .select()
    .single();
  return { log: data, error: error?.message };
}

// ============================================================
// ANNOUNCEMENTS
// ============================================================

/** Get all announcements */
export async function getAllAnnouncements() {
  const { data } = await supabase
    .from('announcements')
    .select(`
      *,
      author:users(first_name, last_name)
    `)
    .order('is_pinned', { ascending: false })
    .order('created_at', { ascending: false });
  return data || [];
}

/** Get announcements by role */
export async function getAnnouncementsByRole(role) {
  const { data } = await supabase
    .from('announcements')
    .select(`
      *,
      author:users(first_name, last_name)
    `)
    .contains('target_roles', [role])
    .order('is_pinned', { ascending: false })
    .order('created_at', { ascending: false });
  return data || [];
}

/** Create announcement */
export async function createAnnouncement(announcementData, actorId = null) {
  const { data, error } = await supabase
    .from('announcements')
    .insert(announcementData)
    .select()
    .single();
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'create', 'announcement', data.id, null, data, `Posted announcement: ${data.title}`);
  }

  return { announcement: data };
}

/** Delete announcement */
export async function deleteAnnouncement(id, actorId = null) {
  const { error } = await supabase.from('announcements').delete().eq('id', id);
  if (error) return { error: error.message };

  if (actorId) {
    await logActivity(actorId, 'delete', 'announcement', id, null, null, `Deleted announcement ID ${id}`);
  }

  return { success: true };
}

// ============================================================
// DASHBOARD STATS & GLOBAL SEARCH
// ============================================================

/** Get admin dashboard stats */
export async function getDashboardStats(sessionId = null) {
  const [
    students,
    teachers,
    guardians,
    pendingAdmissions,
    pendingChallans,
    absenceFlags,
    hifzCount,
    darsCount,
  ] = await Promise.all([
    supabase.from('students').select('id', { count: 'exact', head: true }).eq('status', 'active'),
    supabase.from('teachers').select('id', { count: 'exact', head: true }).eq('status', 'active'),
    supabase.from('guardians').select('id', { count: 'exact', head: true }),
    supabase.from('admission_applications').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
    supabase.from('challans').select('id', { count: 'exact', head: true }).eq('status', 'pending_verification'),
    supabase.from('absence_flags').select('id', { count: 'exact', head: true }).eq('status', 'active'),
    supabase.from('students').select('id', { count: 'exact', head: true }).eq('status', 'active').eq('program_type', 'hifz'),
    supabase.from('students').select('id', { count: 'exact', head: true }).eq('status', 'active').eq('program_type', 'dars_nizami'),
  ]);

  return {
    totalStudents: students.count || 0,
    totalTeachers: teachers.count || 0,
    totalGuardians: guardians.count || 0,
    pendingAdmissions: pendingAdmissions.count || 0,
    pendingChallans: pendingChallans.count || 0,
    activeAbsenceFlags: absenceFlags.count || 0,
    hifzStudents: hifzCount.count || 0,
    darsStudents: darsCount.count || 0,
  };
}

/** Global Search */
export async function globalSearch(query) {
  const searchTerm = `%${query}%`;
  const [students, teachers, guardians] = await Promise.all([
    supabase
      .from('students')
      .select('id, roll_no, first_name, last_name, program_type')
      .or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},roll_no.ilike.${searchTerm}`)
      .limit(5),
    supabase
      .from('users')
      .select('id, cnic, first_name, last_name, role')
      .eq('role', 'teacher')
      .or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},cnic.ilike.${searchTerm}`)
      .limit(5),
    supabase
      .from('users')
      .select('id, cnic, first_name, last_name, role')
      .eq('role', 'guardian')
      .or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},cnic.ilike.${searchTerm}`)
      .limit(5),
  ]);

  return {
    students: students.data || [],
    teachers: teachers.data || [],
    guardians: guardians.data || [],
  };
}

/** Get classes assigned to a teacher */
export async function getTeacherClasses(teacherId) {
  const [inchargeClasses, subjectClasses] = await Promise.all([
    supabase
      .from('session_classes')
      .select(`
        *,
        course:session_courses(course_name, course_code, course_type, class_level),
        session:sessions(id, name, is_active)
      `)
      .eq('incharge_teacher_id', teacherId),
    supabase
      .from('class_subjects')
      .select(`
        *,
        class:session_classes(
          id, class_name, section, semester,
          course:session_courses(course_name, course_code, course_type, class_level),
          session:sessions(id, name, is_active)
        )
      `)
      .eq('teacher_id', teacherId),
  ]);

  const classesMap = {};

  (inchargeClasses.data || []).forEach((c) => {
    classesMap[c.id] = { ...c, role: 'Incharge Teacher', subjects: [] };
  });

  (subjectClasses.data || []).forEach((sc) => {
    if (sc.class) {
      if (!classesMap[sc.class.id]) {
        classesMap[sc.class.id] = { ...sc.class, role: 'Subject Teacher', subjects: [] };
      }
      classesMap[sc.class.id].subjects.push(sc);
    }
  });

  return Object.values(classesMap);
}
