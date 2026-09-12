(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/teacher\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/teacher.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/teacher.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/teacher";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/teacher.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[project]/lib/auth.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "getPortalPath",
    ()=>getPortalPath,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "requireAuth",
    ()=>requireAuth
]);
/**
 * Auth Session Management
 * Uses localStorage to persist login sessions.
 * Will be replaced with Supabase auth later.
 */ const AUTH_KEY = 'sms_auth_session';
const login = (user)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    }
};
const logout = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem(AUTH_KEY);
    }
};
const getCurrentUser = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const data = localStorage.getItem(AUTH_KEY);
        if (data) {
            try {
                return JSON.parse(data);
            } catch  {
                return null;
            }
        }
    }
    return null;
};
const requireAuth = (requiredRole)=>{
    const user = getCurrentUser();
    if (!user) return null;
    if (requiredRole && user.role !== requiredRole) return null;
    return user;
};
const getPortalPath = (role)=>{
    switch(role){
        case 'admin':
            return '/admin';
        case 'teacher':
            return '/teacher';
        case 'guardian':
            return '/guardian';
        default:
            return '/login';
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/db.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "approveAdmissionAndEnroll",
    ()=>approveAdmissionAndEnroll,
    "archiveSession",
    ()=>archiveSession,
    "authenticateUser",
    ()=>authenticateUser,
    "cloneSession",
    ()=>cloneSession,
    "createAdmission",
    ()=>createAdmission,
    "createAnnouncement",
    ()=>createAnnouncement,
    "createChallan",
    ()=>createChallan,
    "createClass",
    ()=>createClass,
    "createCourse",
    ()=>createCourse,
    "createGuardian",
    ()=>createGuardian,
    "createSession",
    ()=>createSession,
    "createStudent",
    ()=>createStudent,
    "createSubject",
    ()=>createSubject,
    "createTeacher",
    ()=>createTeacher,
    "createTestSession",
    ()=>createTestSession,
    "createUser",
    ()=>createUser,
    "deleteAnnouncement",
    ()=>deleteAnnouncement,
    "deleteStudent",
    ()=>deleteStudent,
    "deleteTeacher",
    ()=>deleteTeacher,
    "deleteUser",
    ()=>deleteUser,
    "findUserByCnic",
    ()=>findUserByCnic,
    "getActiveAbsenceFlags",
    ()=>getActiveAbsenceFlags,
    "getActiveBankConfig",
    ()=>getActiveBankConfig,
    "getActiveSession",
    ()=>getActiveSession,
    "getActivityLog",
    ()=>getActivityLog,
    "getAllAdmissions",
    ()=>getAllAdmissions,
    "getAllAnnouncements",
    ()=>getAllAnnouncements,
    "getAllChallans",
    ()=>getAllChallans,
    "getAllClasses",
    ()=>getAllClasses,
    "getAllCourses",
    ()=>getAllCourses,
    "getAllGuardians",
    ()=>getAllGuardians,
    "getAllSessions",
    ()=>getAllSessions,
    "getAllStudents",
    ()=>getAllStudents,
    "getAllTeachers",
    ()=>getAllTeachers,
    "getAllUsers",
    ()=>getAllUsers,
    "getAnnouncementsByRole",
    ()=>getAnnouncementsByRole,
    "getClassSubjects",
    ()=>getClassSubjects,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getHifzEntriesForClass",
    ()=>getHifzEntriesForClass,
    "getNotificationConfigs",
    ()=>getNotificationConfigs,
    "getNotificationLogs",
    ()=>getNotificationLogs,
    "getPendingChallans",
    ()=>getPendingChallans,
    "getPromotionCandidates",
    ()=>getPromotionCandidates,
    "getSessionClasses",
    ()=>getSessionClasses,
    "getSessionCourses",
    ()=>getSessionCourses,
    "getStudentAttendance",
    ()=>getStudentAttendance,
    "getStudentAttendanceStats",
    ()=>getStudentAttendanceStats,
    "getStudentById",
    ()=>getStudentById,
    "getStudentChallans",
    ()=>getStudentChallans,
    "getStudentHifzHistory",
    ()=>getStudentHifzHistory,
    "getStudentTestResults",
    ()=>getStudentTestResults,
    "getStudentsByGuardian",
    ()=>getStudentsByGuardian,
    "getTeacherClasses",
    ()=>getTeacherClasses,
    "getTestSessions",
    ()=>getTestSessions,
    "getUsersByRole",
    ()=>getUsersByRole,
    "globalSearch",
    ()=>globalSearch,
    "logActivity",
    ()=>logActivity,
    "logNotification",
    ()=>logNotification,
    "markAttendance",
    ()=>markAttendance,
    "markChallanCompensated",
    ()=>markChallanCompensated,
    "promoteStudents",
    ()=>promoteStudents,
    "resolveAbsenceFlag",
    ()=>resolveAbsenceFlag,
    "saveHifzDailyProgress",
    ()=>saveHifzDailyProgress,
    "saveManzilRecords",
    ()=>saveManzilRecords,
    "submitChallanPayment",
    ()=>submitChallanPayment,
    "submitTestResults",
    ()=>submitTestResults,
    "updateAdmission",
    ()=>updateAdmission,
    "updateBankConfig",
    ()=>updateBankConfig,
    "updateNotificationConfig",
    ()=>updateNotificationConfig,
    "updateSession",
    ()=>updateSession,
    "updateStudent",
    ()=>updateStudent,
    "updateTeacher",
    ()=>updateTeacher,
    "updateUser",
    ()=>updateUser,
    "verifyChallanPayment",
    ()=>verifyChallanPayment
]);
/**
 * Database Access Layer
 * Centralized data access functions for all Supabase tables.
 * Includes complete CRUD, Audit Logging, Session Lifecycles, Hifz, Dars-e-Nizami, and Notifications.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quranData.js [client] (ecmascript)");
;
;
;
async function logActivity(userId, action, entityType, entityId, oldValue = null, newValue = null, description = '') {
    if (!userId) return;
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('activity_log').insert({
            user_id: userId,
            action,
            entity_type: entityType,
            entity_id: entityId,
            old_value: oldValue,
            new_value: newValue,
            description
        });
    } catch (err) {
        console.error('Failed to log activity:', err);
    }
}
async function getActivityLog(limit = 50, filters = {}) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('activity_log').select(`
      *,
      user:users(first_name, last_name, role)
    `).order('created_at', {
        ascending: false
    }).limit(limit);
    if (filters.entity_type) query = query.eq('entity_type', filters.entity_type);
    if (filters.user_id) query = query.eq('user_id', filters.user_id);
    const { data } = await query;
    return data || [];
}
async function authenticateUser(cnic, password) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('cnic', cnic).eq('password_hash', password).single();
    if (error || !data) return null;
    const { password_hash, ...safeUser } = data;
    return safeUser;
}
async function findUserByCnic(cnic) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('cnic', cnic).single();
    if (error || !data) return null;
    const { password_hash, ...safeUser } = data;
    return safeUser;
}
async function getAllUsers() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, cnic, role, first_name, last_name, email, phone, current_address, permanent_address, date_of_birth, education, avatar_url, is_verified, created_at').order('created_at', {
        ascending: false
    });
    return data || [];
}
async function getUsersByRole(role) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, cnic, role, first_name, last_name, email, phone, is_verified, created_at').eq('role', role).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createUser(userData, actorId = null) {
    const existing = await findUserByCnic(userData.cnic);
    if (existing) return {
        error: 'An account with this CNIC already exists.'
    };
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').insert({
        cnic: userData.cnic,
        password_hash: userData.password,
        role: userData.role,
        first_name: userData.firstName || userData.first_name,
        last_name: userData.lastName || userData.last_name,
        email: userData.email,
        phone: userData.phone,
        current_address: userData.currentAddress || userData.current_address,
        permanent_address: userData.permanentAddress || userData.permanent_address,
        date_of_birth: userData.dateOfBirth || userData.date_of_birth,
        education: userData.education,
        is_verified: userData.is_verified || false
    }).select().single();
    if (error) return {
        error: error.message
    };
    const { password_hash, ...safeUser } = data;
    if (actorId) {
        await logActivity(actorId, 'create', 'user', safeUser.id, null, safeUser, `Created user ${safeUser.first_name} ${safeUser.last_name} (${safeUser.role})`);
    }
    return {
        user: safeUser
    };
}
async function updateUser(userId, updates, actorId = null) {
    const { data: oldUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', userId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', userId).select().single();
    if (error) return {
        error: error.message
    };
    const { password_hash, ...safeUser } = data;
    if (actorId) {
        await logActivity(actorId, 'update', 'user', userId, oldUser, safeUser, `Updated user profile for ${safeUser.first_name} ${safeUser.last_name}`);
    }
    return {
        user: safeUser
    };
}
async function deleteUser(userId, actorId = null) {
    const { data: oldUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', userId).single();
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').delete().eq('id', userId);
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'delete', 'user', userId, oldUser, null, `Deleted user ${oldUser?.first_name} ${oldUser?.last_name}`);
    }
    return {
        success: true
    };
}
async function getAllTeachers() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('teachers').select(`
      *,
      user:users(id, cnic, first_name, last_name, email, phone, education, avatar_url, is_verified, created_at)
    `).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createTeacher(userData, teacherData, actorId = null) {
    const result = await createUser({
        ...userData,
        role: 'teacher',
        is_verified: true
    }, actorId);
    if (result.error) return result;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('teachers').insert({
        id: result.user.id,
        employee_id: teacherData.employee_id,
        qualification: teacherData.qualification,
        specialization: teacherData.specialization,
        joining_date: teacherData.joining_date,
        status: 'active'
    }).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'teacher', data.id, null, data, `Created teacher account for ${result.user.first_name} ${result.user.last_name} (${teacherData.employee_id})`);
    }
    return {
        teacher: data,
        user: result.user
    };
}
async function updateTeacher(teacherId, updates, actorId = null) {
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('teachers').select('*').eq('id', teacherId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('teachers').update(updates).eq('id', teacherId).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'update', 'teacher', teacherId, oldData, data, `Updated teacher details for ID ${teacherId}`);
    }
    return {
        teacher: data
    };
}
async function deleteTeacher(teacherId, actorId = null) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('teachers').delete().eq('id', teacherId);
    return await deleteUser(teacherId, actorId);
}
async function getAllGuardians() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('guardians').select(`
      *,
      user:users(id, cnic, first_name, last_name, email, phone, current_address, permanent_address, education, avatar_url, is_verified, created_at),
      students:students(id, first_name, last_name, roll_no, program_type)
    `).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createGuardian(userData, guardianData, actorId = null) {
    const result = await createUser({
        ...userData,
        role: 'guardian'
    }, actorId);
    if (result.error) return result;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('guardians').insert({
        id: result.user.id,
        occupation: guardianData.occupation,
        relation_to_student: guardianData.relation_to_student || 'Father'
    }).select().single();
    if (error) return {
        error: error.message
    };
    return {
        guardian: data,
        user: result.user
    };
}
async function getAllSessions() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('sessions').select('*').order('created_at', {
        ascending: false
    });
    return data || [];
}
async function getActiveSession() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('sessions').select('*').eq('is_active', true).order('created_at', {
        ascending: false
    }).limit(1).maybeSingle();
    return data;
}
async function createSession(sessionData, actorId = null) {
    // If new session is set as active, deactivate previous ones
    if (sessionData.is_active) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('sessions').update({
            is_active: false
        }).neq('id', '00000000-0000-0000-0000-000000000000');
    }
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('sessions').insert({
        name: sessionData.name,
        start_date: sessionData.start_date,
        end_date: sessionData.end_date,
        fee_structure: sessionData.fee_structure || {},
        is_active: sessionData.is_active ?? true,
        status: sessionData.status || 'active',
        cloned_from: sessionData.cloned_from || null
    }).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'session', data.id, null, data, `Created session ${data.name}`);
    }
    return {
        session: data
    };
}
async function cloneSession(sourceSessionId, newSessionData, actorId = null) {
    // 1. Create the new session
    const { session, error } = await createSession({
        ...newSessionData,
        cloned_from: sourceSessionId
    }, actorId);
    if (error) return {
        error
    };
    // 2. Fetch source session courses
    const { data: sourceCourses } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').select('*').eq('session_id', sourceSessionId);
    const courseIdMap = {};
    if (sourceCourses && sourceCourses.length > 0) {
        for (const sc of sourceCourses){
            const { data: newCourse } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').insert({
                session_id: session.id,
                course_name: sc.course_name,
                course_code: sc.course_code,
                course_type: sc.course_type,
                class_level: sc.class_level,
                duration: sc.duration,
                description: sc.description
            }).select().single();
            if (newCourse) courseIdMap[sc.id] = newCourse.id;
        }
    }
    // 3. Fetch and clone classes
    const { data: sourceClasses } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select('*').eq('session_id', sourceSessionId);
    if (sourceClasses && sourceClasses.length > 0) {
        for (const sclass of sourceClasses){
            const newCourseId = courseIdMap[sclass.course_id] || sclass.course_id;
            const { data: newClass } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').insert({
                session_id: session.id,
                course_id: newCourseId,
                class_name: sclass.class_name,
                section: sclass.section,
                semester: sclass.semester,
                incharge_teacher_id: sclass.incharge_teacher_id,
                max_students: sclass.max_students
            }).select().single();
            // Clone subjects for this class
            if (newClass) {
                const { data: sourceSubjects } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select('*').eq('class_id', sclass.id);
                if (sourceSubjects && sourceSubjects.length > 0) {
                    for (const sub of sourceSubjects){
                        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').insert({
                            class_id: newClass.id,
                            course_id: newCourseId,
                            subject_name: sub.subject_name,
                            subject_code: sub.subject_code,
                            credit_hours: sub.credit_hours,
                            teacher_id: sub.teacher_id
                        });
                    }
                }
            }
        }
    }
    if (actorId) {
        await logActivity(actorId, 'clone', 'session', session.id, {
            sourceSessionId
        }, session, `Cloned session ${session.name} from source ID ${sourceSessionId}`);
    }
    return {
        session
    };
}
async function archiveSession(sessionId, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('sessions').update({
        status: 'archived',
        is_active: false,
        archived_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }).eq('id', sessionId).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'archive', 'session', sessionId, null, data, `Archived session ${data.name}`);
    }
    return {
        session: data
    };
}
async function updateSession(sessionId, updates, actorId = null) {
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('sessions').select('*').eq('id', sessionId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('sessions').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', sessionId).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'update', 'session', sessionId, oldData, data, `Updated session ${data.name}`);
    }
    return {
        session: data
    };
}
async function getPromotionCandidates(sessionId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
      *,
      class:session_classes(
        id, class_name, section,
        course:session_courses(id, course_name, course_code, course_type, class_level)
      ),
      guardian:guardians(user:users(first_name, last_name, phone))
    `).eq('session_id', sessionId).eq('status', 'active');
    return data || [];
}
async function promoteStudents(promotions, actorId = null) {
    const results = [];
    for (const p of promotions){
        // p: { student_id, from_session_id, to_session_id, from_class_id, to_class_id, from_class_level, to_class_level, promotion_type, notes }
        const { data: promo, error: promoErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('student_promotions').insert({
            student_id: p.student_id,
            from_session_id: p.from_session_id,
            to_session_id: p.to_session_id,
            from_class_id: p.from_class_id,
            to_class_id: p.to_class_id,
            from_class_level: p.from_class_level,
            to_class_level: p.to_class_level,
            promotion_type: p.promotion_type,
            promoted_by: actorId,
            notes: p.notes
        }).select().single();
        if (!promoErr) {
            if (p.promotion_type === 'promoted' || p.promotion_type === 'held_back') {
                // Update student record to new class and session
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').update({
                    session_id: p.to_session_id,
                    class_id: p.to_class_id || p.from_class_id,
                    updated_at: new Date().toISOString()
                }).eq('id', p.student_id);
            } else if (p.promotion_type === 'graduated') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').update({
                    status: 'graduated',
                    updated_at: new Date().toISOString()
                }).eq('id', p.student_id);
            }
            results.push(promo);
        }
    }
    if (actorId && results.length > 0) {
        await logActivity(actorId, 'promote', 'student_promotions', actorId, null, {
            count: results.length
        }, `Bulk processed ${results.length} student promotions`);
    }
    return {
        count: results.length
    };
}
async function getSessionCourses(sessionId) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').select('*');
    if (sessionId) query = query.eq('session_id', sessionId);
    const { data } = await query.order('course_name');
    return data || [];
}
async function createCourse(courseData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').insert(courseData).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'course', data.id, null, data, `Created course ${data.course_name} (${data.course_code})`);
    }
    return {
        course: data
    };
}
async function getAllCourses() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').select(`*, session:sessions(name, is_active, status)`).order('course_name');
    return data || [];
}
async function getSessionClasses(sessionId) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select(`
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
async function getAllClasses() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select(`
      *,
      course:session_courses(course_name, course_code, course_type, class_level),
      session:sessions(name, is_active, status),
      incharge:teachers(
        id, employee_id,
        user:users(first_name, last_name)
      )
    `).order('class_name');
    return data || [];
}
async function createClass(classData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').insert(classData).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'class', data.id, null, data, `Created class ${data.class_name}`);
    }
    return {
        class: data
    };
}
async function getClassSubjects(classId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select(`
      *,
      teacher:teachers(
        id, employee_id,
        user:users(first_name, last_name, phone)
      )
    `).eq('class_id', classId).order('subject_name');
    return data || [];
}
async function createSubject(subjectData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').insert(subjectData).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'subject', data.id, null, data, `Created subject ${data.subject_name}`);
    }
    return {
        subject: data
    };
}
async function getAllStudents(sessionId = null) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
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
    const { data } = await query.order('enrolled_at', {
        ascending: false
    });
    return data || [];
}
async function getStudentsByGuardian(guardianId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
      *,
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(course_name, course_code, course_type, class_level),
        session:sessions(id, name, is_active)
      )
    `).eq('guardian_id', guardianId).eq('status', 'active').order('first_name');
    return data || [];
}
async function getStudentById(studentId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
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
    `).eq('id', studentId).single();
    return data;
}
async function createStudent(studentData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').insert(studentData).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'student', data.id, null, data, `Enrolled student ${data.first_name} ${data.last_name} (${data.roll_no})`);
    }
    return {
        student: data
    };
}
async function updateStudent(studentId, updates, actorId = null) {
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('*').eq('id', studentId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', studentId).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'update', 'student', studentId, oldData, data, `Updated student ${data.first_name} ${data.last_name}`);
    }
    return {
        student: data
    };
}
async function deleteStudent(studentId, actorId = null) {
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('*').eq('id', studentId).single();
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').delete().eq('id', studentId);
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'delete', 'student', studentId, oldData, null, `Deleted student ${oldData?.first_name} ${oldData?.last_name}`);
    }
    return {
        success: true
    };
}
async function getAllAdmissions() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select(`
      *,
      guardian:guardians(
        id, occupation,
        user:users(first_name, last_name, cnic, phone, email)
      ),
      session:sessions(id, name, is_active)
    `).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createAdmission(admissionData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').insert(admissionData).select().single();
    if (error) return {
        error: error.message
    };
    return {
        admission: data
    };
}
async function updateAdmission(admissionId, updates, actorId = null) {
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select('*').eq('id', admissionId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').update({
        ...updates,
        reviewed_at: new Date().toISOString()
    }).eq('id', admissionId).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'update', 'admission', admissionId, oldData, data, `Updated admission application to ${updates.status}`);
    }
    return {
        admission: data
    };
}
async function approveAdmissionAndEnroll(applicationId, classId, actorId = null) {
    // 1. Fetch application
    const { data: app } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select('*').eq('id', applicationId).single();
    if (!app) return {
        error: 'Application not found'
    };
    // 2. Generate roll number
    const prefix = app.course_type === 'hifz' ? 'HFZ' : 'DN';
    const year = new Date().getFullYear();
    const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id', {
        count: 'exact',
        head: true
    });
    const rollNo = `${prefix}-${year}-${String((count || 0) + 1).padStart(3, '0')}`;
    // 3. Create student record
    const { data: student, error: sErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').insert({
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
        previous_enrollment_id: app.previous_enrollment_id
    }).select().single();
    if (sErr) return {
        error: sErr.message
    };
    // 4. Update application status
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').update({
        status: 'approved',
        reviewed_by: actorId,
        reviewed_at: new Date().toISOString()
    }).eq('id', applicationId);
    // 5. Auto generate admission fee challan
    const { challan } = await createChallan({
        student_id: student.id,
        session_id: app.session_id,
        title: `Admission & First Month Fee (${app.desired_course || (app.course_type === 'hifz' ? 'Hifz' : 'Dars-e-Nizami')})`,
        amount: 15000,
        due_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        month: new Date().toLocaleString('default', {
            month: 'long',
            year: 'numeric'
        }),
        description: 'Initial admission fee and tuition',
        created_by: actorId
    });
    if (actorId) {
        await logActivity(actorId, 'approve', 'admission', applicationId, null, {
            student_id: student.id,
            challan_id: challan?.id
        }, `Approved admission and enrolled student ${student.first_name} ${student.last_name} (${rollNo})`);
    }
    return {
        student,
        challan
    };
}
async function getAllChallans(sessionId = null) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challans').select(`
      *,
      student:students(first_name, last_name, roll_no, program_type,
        class:session_classes(class_name, section)
      ),
      payment:challan_payments(*)
    `);
    if (sessionId) query = query.eq('session_id', sessionId);
    const { data } = await query.order('created_at', {
        ascending: false
    });
    return data || [];
}
async function getStudentChallans(studentId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challans').select(`
      *,
      payment:challan_payments(*)
    `).eq('student_id', studentId).order('due_date', {
        ascending: false
    });
    if (!data) return [];
    // Mask compensated challans so parents see "paid"
    return data.map((c)=>{
        if (c.compensation_status === 'compensated') {
            return {
                ...c,
                status: 'paid',
                is_compensated: true
            };
        }
        return c;
    });
}
async function getPendingChallans() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challans').select(`
      *,
      student:students(first_name, last_name, roll_no, program_type,
        class:session_classes(class_name, section)
      ),
      payment:challan_payments(*)
    `).eq('status', 'pending_verification').order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createChallan(challanData, actorId = null) {
    const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challans').select('id', {
        count: 'exact',
        head: true
    });
    const challanNo = `CHN-${new Date().getFullYear()}-${String((count || 0) + 1).padStart(4, '0')}`;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challans').insert({
        ...challanData,
        challan_no: challanNo,
        compensation_status: challanData.compensation_status || 'none'
    }).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'challan', data.id, null, data, `Created challan ${data.challan_no} for amount Rs. ${data.amount}`);
    }
    return {
        challan: data
    };
}
async function submitChallanPayment(paymentData) {
    const { data: payment, error: payError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challan_payments').insert({
        challan_id: paymentData.challan_id,
        payment_method: paymentData.payment_method || 'bank',
        transaction_id: paymentData.transaction_id,
        amount_paid: paymentData.amount_paid,
        screenshot_url: paymentData.screenshot_url || null,
        status: 'pending'
    }).select().single();
    if (payError) return {
        error: payError.message
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challans').update({
        status: 'pending_verification',
        updated_at: new Date().toISOString()
    }).eq('id', paymentData.challan_id);
    return {
        payment
    };
}
async function verifyChallanPayment(paymentId, challanId, status, verifiedBy, rejectionReason = null) {
    if (paymentId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challan_payments').update({
            status,
            verified_by: verifiedBy,
            verified_at: new Date().toISOString(),
            rejection_reason: rejectionReason
        }).eq('id', paymentId);
    }
    const challanStatus = status === 'approved' ? 'paid' : status === 'compensated' ? 'paid' : 'unpaid';
    const compStatus = status === 'compensated' ? 'compensated' : 'none';
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challans').update({
        status: challanStatus,
        compensation_status: compStatus,
        updated_at: new Date().toISOString()
    }).eq('id', challanId).select().single();
    if (error) return {
        error: error.message
    };
    if (verifiedBy) {
        await logActivity(verifiedBy, 'verify', 'challan', challanId, null, {
            status: challanStatus,
            compensation: compStatus
        }, `Verified challan payment as ${status}`);
    }
    return {
        challan: data
    };
}
async function markChallanCompensated(challanId, verifiedBy) {
    return await verifyChallanPayment(null, challanId, 'compensated', verifiedBy);
}
async function getActiveBankConfig() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('bank_config').select('*').eq('is_active', true).order('updated_at', {
        ascending: false
    }).limit(1).maybeSingle();
    return data;
}
async function updateBankConfig(bankData, actorId = null) {
    let res;
    if (bankData.id) {
        res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('bank_config').update({
            ...bankData,
            updated_by: actorId,
            updated_at: new Date().toISOString()
        }).eq('id', bankData.id).select().single();
    } else {
        res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('bank_config').insert({
            ...bankData,
            updated_by: actorId
        }).select().single();
    }
    if (res.data && actorId) {
        await logActivity(actorId, 'update', 'bank_config', res.data.id, null, res.data, `Updated institute bank account details`);
    }
    return res.data;
}
async function saveHifzDailyProgress(progressData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('hifz_daily_progress').upsert(progressData, {
        onConflict: 'student_id,date'
    }).select();
    if (error) return {
        error: error.message
    };
    if (actorId && data?.[0]) {
        await logActivity(actorId, 'save', 'hifz_daily_progress', data[0].id, null, data[0], `Recorded Hifz Sabaq progress for student ${data[0].student_id}`);
    }
    return {
        records: data
    };
}
async function saveManzilRecords(manzilData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('hifz_manzil_records').upsert(manzilData, {
        onConflict: 'student_id,date,para_number'
    }).select();
    if (error) return {
        error: error.message
    };
    return {
        records: data
    };
}
async function getStudentHifzHistory(studentId) {
    const [daily, manzil] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('hifz_daily_progress').select('*').eq('student_id', studentId).order('date', {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('hifz_manzil_records').select('*').eq('student_id', studentId).order('date', {
            ascending: false
        })
    ]);
    const dailyRecords = daily.data || [];
    const manzilRecords = manzil.data || [];
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__["calculateHifzProgressStats"])(dailyRecords, manzilRecords);
    return {
        dailyRecords,
        manzilRecords,
        stats
    };
}
async function getHifzEntriesForClass(classId, date) {
    const { data: students } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id, roll_no, first_name, last_name, photo_url').eq('class_id', classId).eq('status', 'active').order('roll_no');
    if (!students) return [];
    const studentIds = students.map((s)=>s.id);
    const [daily, manzil] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('hifz_daily_progress').select('*').in('student_id', studentIds).eq('date', date),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('hifz_manzil_records').select('*').in('student_id', studentIds).eq('date', date)
    ]);
    const dailyMap = (daily.data || []).reduce((acc, r)=>({
            ...acc,
            [r.student_id]: r
        }), {});
    const manzilMap = (manzil.data || []).reduce((acc, r)=>({
            ...acc,
            [r.student_id]: r
        }), {});
    return students.map((st)=>({
            student: st,
            daily: dailyMap[st.id] || null,
            manzil: manzilMap[st.id] || null
        }));
}
async function createTestSession(testData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('test_sessions').insert(testData).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'test_session', data.id, null, data, `Created test session ${data.name}`);
    }
    return {
        testSession: data
    };
}
async function getTestSessions(sessionId = null) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('test_sessions').select('*').order('created_at', {
        ascending: false
    });
    if (sessionId) query = query.eq('session_id', sessionId);
    const { data } = await query;
    return data || [];
}
async function submitTestResults(results, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('test_results').upsert(results, {
        onConflict: 'test_session_id,student_id,class_subject_id'
    }).select();
    if (error) return {
        error: error.message
    };
    if (actorId && data?.length > 0) {
        await logActivity(actorId, 'save', 'test_results', actorId, null, {
            count: data.length
        }, `Entered ${data.length} test marks`);
    }
    return {
        results: data
    };
}
async function getStudentTestResults(studentId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('test_results').select(`
      *,
      test_session:test_sessions(name, test_type, start_date, end_date),
      subject:class_subjects(subject_name, subject_code)
    `).eq('student_id', studentId).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function markAttendance(records, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').upsert(records, {
        onConflict: 'student_id,class_subject_id,date'
    }).select();
    if (error) return {
        error: error.message
    };
    // Check for consecutive absences
    for (const r of records){
        if (r.status === 'absent') {
            const { data: history } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').select('status, date').eq('student_id', r.student_id).order('date', {
                ascending: false
            }).limit(5);
            if (history && history.length >= 2) {
                const consecutiveAbsences = history.filter((h)=>h.status === 'absent').length;
                if (consecutiveAbsences >= 2) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').upsert({
                        student_id: r.student_id,
                        session_id: r.session_id || 'e0000000-0000-0000-0000-000000000001',
                        consecutive_absences: consecutiveAbsences,
                        flag_date: r.date,
                        status: 'active'
                    }, {
                        onConflict: 'student_id,session_id,flag_date'
                    });
                }
            }
        }
    }
    if (actorId && data?.length > 0) {
        await logActivity(actorId, 'save', 'attendance', actorId, null, {
            count: data.length
        }, `Marked attendance for ${data.length} students`);
    }
    return {
        records: data
    };
}
async function getStudentAttendance(studentId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').select(`
      *,
      subject:class_subjects(subject_name, subject_code)
    `).eq('student_id', studentId).order('date', {
        ascending: false
    });
    return data || [];
}
async function getStudentAttendanceStats(studentId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').select('status').eq('student_id', studentId);
    if (!data) return {
        total: 0,
        present: 0,
        absent: 0,
        leave: 0,
        percentage: 0
    };
    const total = data.length;
    const present = data.filter((r)=>r.status === 'present').length;
    const absent = data.filter((r)=>r.status === 'absent').length;
    const leave = data.filter((r)=>r.status === 'leave').length;
    return {
        total,
        present,
        absent,
        leave,
        percentage: total > 0 ? (present / total * 100).toFixed(1) : 0
    };
}
async function getActiveAbsenceFlags() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').select(`
      *,
      student:students(
        id, first_name, last_name, roll_no, program_type,
        class:session_classes(class_name, section),
        guardian:guardians(user:users(first_name, last_name, phone))
      )
    `).eq('status', 'active').order('consecutive_absences', {
        ascending: false
    });
    return data || [];
}
async function resolveAbsenceFlag(flagId, actorId, resolutionNotes = '') {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').update({
        status: 'resolved',
        resolved_at: new Date().toISOString(),
        resolved_by: actorId,
        resolution_notes: resolutionNotes
    }).eq('id', flagId).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'resolve', 'absence_flags', flagId, null, data, `Resolved absence flag for student`);
    }
    return {
        flag: data
    };
}
async function getNotificationConfigs() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('notification_config').select('*').order('event_type');
    return data || [];
}
async function updateNotificationConfig(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('notification_config').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', id).select().single();
    if (error) return {
        error: error.message
    };
    return {
        config: data
    };
}
async function getNotificationLogs(limit = 50) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('notification_log').select(`
      *,
      recipient:users(first_name, last_name, phone)
    `).order('created_at', {
        ascending: false
    }).limit(limit);
    return data || [];
}
async function logNotification(notificationData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('notification_log').insert(notificationData).select().single();
    return {
        log: data,
        error: error?.message
    };
}
async function getAllAnnouncements() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('announcements').select(`
      *,
      author:users(first_name, last_name)
    `).order('is_pinned', {
        ascending: false
    }).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function getAnnouncementsByRole(role) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('announcements').select(`
      *,
      author:users(first_name, last_name)
    `).contains('target_roles', [
        role
    ]).order('is_pinned', {
        ascending: false
    }).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createAnnouncement(announcementData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('announcements').insert(announcementData).select().single();
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'create', 'announcement', data.id, null, data, `Posted announcement: ${data.title}`);
    }
    return {
        announcement: data
    };
}
async function deleteAnnouncement(id, actorId = null) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('announcements').delete().eq('id', id);
    if (error) return {
        error: error.message
    };
    if (actorId) {
        await logActivity(actorId, 'delete', 'announcement', id, null, null, `Deleted announcement ID ${id}`);
    }
    return {
        success: true
    };
}
async function getDashboardStats(sessionId = null) {
    const [students, teachers, guardians, pendingAdmissions, pendingChallans, absenceFlags, hifzCount, darsCount] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('teachers').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('guardians').select('id', {
            count: 'exact',
            head: true
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'pending'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('challans').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'pending_verification'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active').eq('program_type', 'hifz'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active').eq('program_type', 'dars_nizami')
    ]);
    return {
        totalStudents: students.count || 0,
        totalTeachers: teachers.count || 0,
        totalGuardians: guardians.count || 0,
        pendingAdmissions: pendingAdmissions.count || 0,
        pendingChallans: pendingChallans.count || 0,
        activeAbsenceFlags: absenceFlags.count || 0,
        hifzStudents: hifzCount.count || 0,
        darsStudents: darsCount.count || 0
    };
}
async function globalSearch(query) {
    const searchTerm = `%${query}%`;
    const [students, teachers, guardians] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id, roll_no, first_name, last_name, program_type').or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},roll_no.ilike.${searchTerm}`).limit(5),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, cnic, first_name, last_name, role').eq('role', 'teacher').or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},cnic.ilike.${searchTerm}`).limit(5),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, cnic, first_name, last_name, role').eq('role', 'guardian').or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},cnic.ilike.${searchTerm}`).limit(5)
    ]);
    return {
        students: students.data || [],
        teachers: teachers.data || [],
        guardians: guardians.data || []
    };
}
async function getTeacherClasses(teacherId) {
    const [inchargeClasses, subjectClasses] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select(`
        *,
        course:session_courses(course_name, course_code, course_type, class_level),
        session:sessions(id, name, is_active)
      `).eq('incharge_teacher_id', teacherId),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select(`
        *,
        class:session_classes(
          id, class_name, section, semester,
          course:session_courses(course_name, course_code, course_type, class_level),
          session:sessions(id, name, is_active)
        )
      `).eq('teacher_id', teacherId)
    ]);
    const classesMap = {};
    (inchargeClasses.data || []).forEach((c)=>{
        classesMap[c.id] = {
            ...c,
            role: 'Incharge Teacher',
            subjects: []
        };
    });
    (subjectClasses.data || []).forEach((sc)=>{
        if (sc.class) {
            if (!classesMap[sc.class.id]) {
                classesMap[sc.class.id] = {
                    ...sc.class,
                    role: 'Subject Teacher',
                    subjects: []
                };
            }
            classesMap[sc.class.id].subjects.push(sc);
        }
    });
    return Object.values(classesMap);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/quranData.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Comprehensive Quran Data & Helpers
 * Contains all 114 Surahs, 30 Paras (Juz), and helpers for Hifz tracking.
 */ __turbopack_context__.s([
    "QURAN_PARAS",
    ()=>QURAN_PARAS,
    "QURAN_SURAHS",
    ()=>QURAN_SURAHS,
    "TOTAL_QURAN_AYAHS",
    ()=>TOTAL_QURAN_AYAHS,
    "TOTAL_QURAN_PARAS",
    ()=>TOTAL_QURAN_PARAS,
    "TOTAL_QURAN_SURAHS",
    ()=>TOTAL_QURAN_SURAHS,
    "calculateHifzProgressStats",
    ()=>calculateHifzProgressStats,
    "formatAyahRange",
    ()=>formatAyahRange,
    "getParaByNumber",
    ()=>getParaByNumber,
    "getSurahByNumber",
    ()=>getSurahByNumber
]);
const QURAN_SURAHS = [
    {
        number: 1,
        name_arabic: "الفاتحة",
        name_english: "Al-Fatihah",
        name_urdu: "الفاتحہ",
        ayahs: 7,
        type: "Meccan",
        para_start: 1,
        para_end: 1
    },
    {
        number: 2,
        name_arabic: "البقرة",
        name_english: "Al-Baqarah",
        name_urdu: "البقرۃ",
        ayahs: 286,
        type: "Medinan",
        para_start: 1,
        para_end: 3
    },
    {
        number: 3,
        name_arabic: "آل عمران",
        name_english: "Ali 'Imran",
        name_urdu: "آل عمران",
        ayahs: 200,
        type: "Medinan",
        para_start: 3,
        para_end: 4
    },
    {
        number: 4,
        name_arabic: "النساء",
        name_english: "An-Nisa",
        name_urdu: "النساء",
        ayahs: 176,
        type: "Medinan",
        para_start: 4,
        para_end: 6
    },
    {
        number: 5,
        name_arabic: "المائدة",
        name_english: "Al-Ma'idah",
        name_urdu: "المائدۃ",
        ayahs: 120,
        type: "Medinan",
        para_start: 6,
        para_end: 7
    },
    {
        number: 6,
        name_arabic: "الأنعام",
        name_english: "Al-An'am",
        name_urdu: "الانعام",
        ayahs: 165,
        type: "Meccan",
        para_start: 7,
        para_end: 8
    },
    {
        number: 7,
        name_arabic: "الأعراف",
        name_english: "Al-A'raf",
        name_urdu: "الاعراف",
        ayahs: 206,
        type: "Meccan",
        para_start: 8,
        para_end: 9
    },
    {
        number: 8,
        name_arabic: "الأنفال",
        name_english: "Al-Anfal",
        name_urdu: "الانفال",
        ayahs: 75,
        type: "Medinan",
        para_start: 9,
        para_end: 10
    },
    {
        number: 9,
        name_arabic: "التوبة",
        name_english: "At-Tawbah",
        name_urdu: "التوبۃ",
        ayahs: 129,
        type: "Medinan",
        para_start: 10,
        para_end: 11
    },
    {
        number: 10,
        name_arabic: "يونس",
        name_english: "Yunus",
        name_urdu: "یونس",
        ayahs: 109,
        type: "Meccan",
        para_start: 11,
        para_end: 11
    },
    {
        number: 11,
        name_arabic: "هود",
        name_english: "Hud",
        name_urdu: "ہود",
        ayahs: 123,
        type: "Meccan",
        para_start: 11,
        para_end: 12
    },
    {
        number: 12,
        name_arabic: "يوسف",
        name_english: "Yusuf",
        name_urdu: "یوسف",
        ayahs: 111,
        type: "Meccan",
        para_start: 12,
        para_end: 13
    },
    {
        number: 13,
        name_arabic: "الرعد",
        name_english: "Ar-Ra'd",
        name_urdu: "الرعد",
        ayahs: 43,
        type: "Medinan",
        para_start: 13,
        para_end: 13
    },
    {
        number: 14,
        name_arabic: "إبراهيم",
        name_english: "Ibrahim",
        name_urdu: "ابراہیم",
        ayahs: 52,
        type: "Meccan",
        para_start: 13,
        para_end: 13
    },
    {
        number: 15,
        name_arabic: "الحجر",
        name_english: "Al-Hijr",
        name_urdu: "الحجر",
        ayahs: 99,
        type: "Meccan",
        para_start: 14,
        para_end: 14
    },
    {
        number: 16,
        name_arabic: "النحل",
        name_english: "An-Nahl",
        name_urdu: "النحل",
        ayahs: 128,
        type: "Meccan",
        para_start: 14,
        para_end: 14
    },
    {
        number: 17,
        name_arabic: "الإسراء",
        name_english: "Al-Isra",
        name_urdu: "الاسراء",
        ayahs: 111,
        type: "Meccan",
        para_start: 15,
        para_end: 15
    },
    {
        number: 18,
        name_arabic: "الكهف",
        name_english: "Al-Kahf",
        name_urdu: "الکہف",
        ayahs: 110,
        type: "Meccan",
        para_start: 15,
        para_end: 16
    },
    {
        number: 19,
        name_arabic: "مريم",
        name_english: "Maryam",
        name_urdu: "مریم",
        ayahs: 98,
        type: "Meccan",
        para_start: 16,
        para_end: 16
    },
    {
        number: 20,
        name_arabic: "طه",
        name_english: "Taha",
        name_urdu: "طٰہٰ",
        ayahs: 135,
        type: "Meccan",
        para_start: 16,
        para_end: 16
    },
    {
        number: 21,
        name_arabic: "الأنبياء",
        name_english: "Al-Anbiya",
        name_urdu: "الانبیاء",
        ayahs: 112,
        type: "Meccan",
        para_start: 17,
        para_end: 17
    },
    {
        number: 22,
        name_arabic: "الحج",
        name_english: "Al-Hajj",
        name_urdu: "الحج",
        ayahs: 78,
        type: "Medinan",
        para_start: 17,
        para_end: 17
    },
    {
        number: 23,
        name_arabic: "المؤمنون",
        name_english: "Al-Mu'minun",
        name_urdu: "المؤمنون",
        ayahs: 118,
        type: "Meccan",
        para_start: 18,
        para_end: 18
    },
    {
        number: 24,
        name_arabic: "النور",
        name_english: "An-Nur",
        name_urdu: "النور",
        ayahs: 64,
        type: "Medinan",
        para_start: 18,
        para_end: 18
    },
    {
        number: 25,
        name_arabic: "الفرقان",
        name_english: "Al-Furqan",
        name_urdu: "الفرقان",
        ayahs: 77,
        type: "Meccan",
        para_start: 18,
        para_end: 19
    },
    {
        number: 26,
        name_arabic: "الشعراء",
        name_english: "Ash-Shu'ara",
        name_urdu: "الشعراء",
        ayahs: 227,
        type: "Meccan",
        para_start: 19,
        para_end: 19
    },
    {
        number: 27,
        name_arabic: "النمل",
        name_english: "An-Naml",
        name_urdu: "النمل",
        ayahs: 93,
        type: "Meccan",
        para_start: 19,
        para_end: 20
    },
    {
        number: 28,
        name_arabic: "القصص",
        name_english: "Al-Qasas",
        name_urdu: "القصص",
        ayahs: 88,
        type: "Meccan",
        para_start: 20,
        para_end: 20
    },
    {
        number: 29,
        name_arabic: "العنكبوت",
        name_english: "Al-'Ankabut",
        name_urdu: "العنکبوت",
        ayahs: 69,
        type: "Meccan",
        para_start: 20,
        para_end: 21
    },
    {
        number: 30,
        name_arabic: "الروم",
        name_english: "Ar-Rum",
        name_urdu: "الروم",
        ayahs: 60,
        type: "Meccan",
        para_start: 21,
        para_end: 21
    },
    {
        number: 31,
        name_arabic: "لقمان",
        name_english: "Luqman",
        name_urdu: "لقمان",
        ayahs: 34,
        type: "Meccan",
        para_start: 21,
        para_end: 21
    },
    {
        number: 32,
        name_arabic: "السجدة",
        name_english: "As-Sajdah",
        name_urdu: "السجدۃ",
        ayahs: 30,
        type: "Meccan",
        para_start: 21,
        para_end: 21
    },
    {
        number: 33,
        name_arabic: "الأحزاب",
        name_english: "Al-Ahzab",
        name_urdu: "الاحزاب",
        ayahs: 73,
        type: "Medinan",
        para_start: 21,
        para_end: 22
    },
    {
        number: 34,
        name_arabic: "سبأ",
        name_english: "Saba",
        name_urdu: "سبا",
        ayahs: 54,
        type: "Meccan",
        para_start: 22,
        para_end: 22
    },
    {
        number: 35,
        name_arabic: "فاطر",
        name_english: "Fatir",
        name_urdu: "فاطر",
        ayahs: 45,
        type: "Meccan",
        para_start: 22,
        para_end: 22
    },
    {
        number: 36,
        name_arabic: "يس",
        name_english: "Ya-Sin",
        name_urdu: "یٰسٓ",
        ayahs: 83,
        type: "Meccan",
        para_start: 22,
        para_end: 23
    },
    {
        number: 37,
        name_arabic: "الصافات",
        name_english: "As-Saffat",
        name_urdu: "الصافات",
        ayahs: 182,
        type: "Meccan",
        para_start: 23,
        para_end: 23
    },
    {
        number: 38,
        name_arabic: "ص",
        name_english: "Sad",
        name_urdu: "صٓ",
        ayahs: 88,
        type: "Meccan",
        para_start: 23,
        para_end: 23
    },
    {
        number: 39,
        name_arabic: "الزمر",
        name_english: "Az-Zumar",
        name_urdu: "الزمر",
        ayahs: 75,
        type: "Meccan",
        para_start: 23,
        para_end: 24
    },
    {
        number: 40,
        name_arabic: "غافر",
        name_english: "Ghafir",
        name_urdu: "المؤمن / غافر",
        ayahs: 85,
        type: "Meccan",
        para_start: 24,
        para_end: 24
    },
    {
        number: 41,
        name_arabic: "فصلت",
        name_english: "Fussilat",
        name_urdu: "فصلت / حٰم السجدۃ",
        ayahs: 54,
        type: "Meccan",
        para_start: 24,
        para_end: 25
    },
    {
        number: 42,
        name_arabic: "الشورى",
        name_english: "Ash-Shura",
        name_urdu: "الشوریٰ",
        ayahs: 53,
        type: "Meccan",
        para_start: 25,
        para_end: 25
    },
    {
        number: 43,
        name_arabic: "الزخرف",
        name_english: "Az-Zukhruf",
        name_urdu: "الزخرف",
        ayahs: 89,
        type: "Meccan",
        para_start: 25,
        para_end: 25
    },
    {
        number: 44,
        name_arabic: "الدخان",
        name_english: "Ad-Dukhan",
        name_urdu: "الدخان",
        ayahs: 59,
        type: "Meccan",
        para_start: 25,
        para_end: 25
    },
    {
        number: 45,
        name_arabic: "الجاثية",
        name_english: "Al-Jathiyah",
        name_urdu: "الجاثیہ",
        ayahs: 37,
        type: "Meccan",
        para_start: 25,
        para_end: 25
    },
    {
        number: 46,
        name_arabic: "الأحقاف",
        name_english: "Al-Ahqaf",
        name_urdu: "الاحقاف",
        ayahs: 35,
        type: "Meccan",
        para_start: 26,
        para_end: 26
    },
    {
        number: 47,
        name_arabic: "محمد",
        name_english: "Muhammad",
        name_urdu: "محمد",
        ayahs: 38,
        type: "Medinan",
        para_start: 26,
        para_end: 26
    },
    {
        number: 48,
        name_arabic: "الفتح",
        name_english: "Al-Fath",
        name_urdu: "الفتح",
        ayahs: 29,
        type: "Medinan",
        para_start: 26,
        para_end: 26
    },
    {
        number: 49,
        name_arabic: "الحجرات",
        name_english: "Al-Hujurat",
        name_urdu: "الحجرات",
        ayahs: 18,
        type: "Medinan",
        para_start: 26,
        para_end: 26
    },
    {
        number: 50,
        name_arabic: "ق",
        name_english: "Qaf",
        name_urdu: "قٓ",
        ayahs: 45,
        type: "Meccan",
        para_start: 26,
        para_end: 26
    },
    {
        number: 51,
        name_arabic: "الذاريات",
        name_english: "Adh-Dhariyat",
        name_urdu: "الذاریات",
        ayahs: 60,
        type: "Meccan",
        para_start: 26,
        para_end: 27
    },
    {
        number: 52,
        name_arabic: "الطور",
        name_english: "At-Tur",
        name_urdu: "الطور",
        ayahs: 49,
        type: "Meccan",
        para_start: 27,
        para_end: 27
    },
    {
        number: 53,
        name_arabic: "النجم",
        name_english: "An-Najm",
        name_urdu: "النجم",
        ayahs: 62,
        type: "Meccan",
        para_start: 27,
        para_end: 27
    },
    {
        number: 54,
        name_arabic: "القمر",
        name_english: "Al-Qamar",
        name_urdu: "القمر",
        ayahs: 55,
        type: "Meccan",
        para_start: 27,
        para_end: 27
    },
    {
        number: 55,
        name_arabic: "الرحمن",
        name_english: "Ar-Rahman",
        name_urdu: "الرحمٰن",
        ayahs: 78,
        type: "Medinan",
        para_start: 27,
        para_end: 27
    },
    {
        number: 56,
        name_arabic: "الواقعة",
        name_english: "Al-Waqi'ah",
        name_urdu: "الواقعہ",
        ayahs: 96,
        type: "Meccan",
        para_start: 27,
        para_end: 27
    },
    {
        number: 57,
        name_arabic: "الحديد",
        name_english: "Al-Hadid",
        name_urdu: "الحدید",
        ayahs: 29,
        type: "Medinan",
        para_start: 27,
        para_end: 27
    },
    {
        number: 58,
        name_arabic: "المجادلة",
        name_english: "Al-Mujadila",
        name_urdu: "المجادلہ",
        ayahs: 22,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 59,
        name_arabic: "الحشر",
        name_english: "Al-Hashr",
        name_urdu: "الحشر",
        ayahs: 24,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 60,
        name_arabic: "الممتحنة",
        name_english: "Al-Mumtahanah",
        name_urdu: "الممتحنہ",
        ayahs: 13,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 61,
        name_arabic: "الصف",
        name_english: "As-Saff",
        name_urdu: "الصف",
        ayahs: 14,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 62,
        name_arabic: "الجمعة",
        name_english: "Al-Jumu'ah",
        name_urdu: "الجمعہ",
        ayahs: 11,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 63,
        name_arabic: "المنافقون",
        name_english: "Al-Munafiqun",
        name_urdu: "المنافقون",
        ayahs: 11,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 64,
        name_arabic: "التغابن",
        name_english: "At-Taghabun",
        name_urdu: "التغابن",
        ayahs: 18,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 65,
        name_arabic: "الطلاق",
        name_english: "At-Talaq",
        name_urdu: "الطلاق",
        ayahs: 12,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 66,
        name_arabic: "التحريم",
        name_english: "At-Tahrim",
        name_urdu: "التحریم",
        ayahs: 12,
        type: "Medinan",
        para_start: 28,
        para_end: 28
    },
    {
        number: 67,
        name_arabic: "الملك",
        name_english: "Al-Mulk",
        name_urdu: "الملک",
        ayahs: 30,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 68,
        name_arabic: "القلم",
        name_english: "Al-Qalam",
        name_urdu: "القلم",
        ayahs: 52,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 69,
        name_arabic: "الحاقة",
        name_english: "Al-Haqqah",
        name_urdu: "الحاقہ",
        ayahs: 52,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 70,
        name_arabic: "المعارج",
        name_english: "Al-Ma'arij",
        name_urdu: "المعارج",
        ayahs: 44,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 71,
        name_arabic: "نوح",
        name_english: "Nuh",
        name_urdu: "نوح",
        ayahs: 28,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 72,
        name_arabic: "الجن",
        name_english: "Al-Jinn",
        name_urdu: "الجن",
        ayahs: 28,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 73,
        name_arabic: "المزمل",
        name_english: "Al-Muzzammil",
        name_urdu: "المزمل",
        ayahs: 20,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 74,
        name_arabic: "المدثر",
        name_english: "Al-Muddaththir",
        name_urdu: "المدثر",
        ayahs: 56,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 75,
        name_arabic: "القيامة",
        name_english: "Al-Qiyamah",
        name_urdu: "القیامہ",
        ayahs: 40,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 76,
        name_arabic: "الإنسان",
        name_english: "Al-Insan",
        name_urdu: "الدھر / الانسان",
        ayahs: 31,
        type: "Medinan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 77,
        name_arabic: "المرسلات",
        name_english: "Al-Mursalat",
        name_urdu: "المرسلات",
        ayahs: 50,
        type: "Meccan",
        para_start: 29,
        para_end: 29
    },
    {
        number: 78,
        name_arabic: "النبأ",
        name_english: "An-Naba",
        name_urdu: "النباء / عم",
        ayahs: 40,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 79,
        name_arabic: "النازعات",
        name_english: "An-Nazi'at",
        name_urdu: "النازعات",
        ayahs: 46,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 80,
        name_arabic: "عبس",
        name_english: "'Abasa",
        name_urdu: "عبس",
        ayahs: 42,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 81,
        name_arabic: "التكوير",
        name_english: "At-Takwir",
        name_urdu: "التکویر",
        ayahs: 29,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 82,
        name_arabic: "الانفطار",
        name_english: "Al-Infitar",
        name_urdu: "الانفطار",
        ayahs: 19,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 83,
        name_arabic: "المطففين",
        name_english: "Al-Mutaffifin",
        name_urdu: "المطففین",
        ayahs: 36,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 84,
        name_arabic: "الانشقاق",
        name_english: "Al-Inshiqaq",
        name_urdu: "الانشقاق",
        ayahs: 25,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 85,
        name_arabic: "البروج",
        name_english: "Al-Buruj",
        name_urdu: "البروج",
        ayahs: 22,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 86,
        name_arabic: "الطارق",
        name_english: "At-Tariq",
        name_urdu: "الطارق",
        ayahs: 17,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 87,
        name_arabic: "الأعلى",
        name_english: "Al-A'la",
        name_urdu: "الاعلیٰ",
        ayahs: 19,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 88,
        name_arabic: "الغاشية",
        name_english: "Al-Ghashiyah",
        name_urdu: "الغاشیہ",
        ayahs: 26,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 89,
        name_arabic: "الفجر",
        name_english: "Al-Fajr",
        name_urdu: "الفجر",
        ayahs: 30,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 90,
        name_arabic: "البلد",
        name_english: "Al-Balad",
        name_urdu: "البلد",
        ayahs: 20,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 91,
        name_arabic: "الشمس",
        name_english: "Ash-Shams",
        name_urdu: "الشمس",
        ayahs: 15,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 92,
        name_arabic: "الليل",
        name_english: "Al-Layl",
        name_urdu: "اللیل",
        ayahs: 21,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 93,
        name_arabic: "الضحى",
        name_english: "Ad-Duhaa",
        name_urdu: "الضحیٰ",
        ayahs: 11,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 94,
        name_arabic: "الشرح",
        name_english: "Ash-Sharh",
        name_urdu: "الم نشرح / الانشراح",
        ayahs: 8,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 95,
        name_arabic: "التين",
        name_english: "At-Tin",
        name_urdu: "التین",
        ayahs: 8,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 96,
        name_arabic: "العلق",
        name_english: "Al-'Alaq",
        name_urdu: "العلق / اقرا",
        ayahs: 19,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 97,
        name_arabic: "القدر",
        name_english: "Al-Qadr",
        name_urdu: "القدر",
        ayahs: 5,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 98,
        name_arabic: "البينة",
        name_english: "Al-Bayyinah",
        name_urdu: "البینہ",
        ayahs: 8,
        type: "Medinan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 99,
        name_arabic: "الزلزلة",
        name_english: "Az-Zalzalah",
        name_urdu: "الزلزال",
        ayahs: 8,
        type: "Medinan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 100,
        name_arabic: "العاديات",
        name_english: "Al-'Adiyat",
        name_urdu: "العادیات",
        ayahs: 11,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 101,
        name_arabic: "القارعة",
        name_english: "Al-Qari'ah",
        name_urdu: "القارعہ",
        ayahs: 11,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 102,
        name_arabic: "التكاثر",
        name_english: "At-Takathur",
        name_urdu: "التکاثر",
        ayahs: 8,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 103,
        name_arabic: "العصر",
        name_english: "Al-'Asr",
        name_urdu: "العصر",
        ayahs: 3,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 104,
        name_arabic: "الهمزة",
        name_english: "Al-Humazah",
        name_urdu: "الہمزۃ",
        ayahs: 9,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 105,
        name_arabic: "الفيل",
        name_english: "Al-Fil",
        name_urdu: "الفیل",
        ayahs: 5,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 106,
        name_arabic: "قريش",
        name_english: "Quraysh",
        name_urdu: "قریش",
        ayahs: 4,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 107,
        name_arabic: "الماعون",
        name_english: "Al-Ma'un",
        name_urdu: "الماعون",
        ayahs: 7,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 108,
        name_arabic: "الكوثر",
        name_english: "Al-Kawthar",
        name_urdu: "الکوثر",
        ayahs: 3,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 109,
        name_arabic: "الكافرون",
        name_english: "Al-Kafirun",
        name_urdu: "الکافرون",
        ayahs: 6,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 110,
        name_arabic: "النصر",
        name_english: "An-Nasr",
        name_urdu: "النصر",
        ayahs: 3,
        type: "Medinan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 111,
        name_arabic: "المسد",
        name_english: "Al-Masad",
        name_urdu: "اللہب / المسد",
        ayahs: 5,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 112,
        name_arabic: "الإخلاص",
        name_english: "Al-Ikhlas",
        name_urdu: "الاخلاص",
        ayahs: 4,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 113,
        name_arabic: "الفلق",
        name_english: "Al-Falaq",
        name_urdu: "الفلق",
        ayahs: 5,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    },
    {
        number: 114,
        name_arabic: "الناس",
        name_english: "An-Nas",
        name_urdu: "الناس",
        ayahs: 6,
        type: "Meccan",
        para_start: 30,
        para_end: 30
    }
];
const QURAN_PARAS = [
    {
        number: 1,
        name_arabic: "الم",
        name_english: "Alif-Lam-Mim",
        start_surah: 1,
        start_ayah: 1,
        end_surah: 2,
        end_ayah: 141,
        total_rukus: 16
    },
    {
        number: 2,
        name_arabic: "سَيَقُولُ",
        name_english: "Sayaqulu",
        start_surah: 2,
        start_ayah: 142,
        end_surah: 2,
        end_ayah: 252,
        total_rukus: 16
    },
    {
        number: 3,
        name_arabic: "تِلْكَ الرُّسُلُ",
        name_english: "Tilka-r-Rusul",
        start_surah: 2,
        start_ayah: 253,
        end_surah: 3,
        end_ayah: 92,
        total_rukus: 20
    },
    {
        number: 4,
        name_arabic: "لَنْ تَنَالُوا",
        name_english: "Lan Tanalu",
        start_surah: 3,
        start_ayah: 93,
        end_surah: 4,
        end_ayah: 23,
        total_rukus: 20
    },
    {
        number: 5,
        name_arabic: "وَالْمُحْصَنَاتُ",
        name_english: "Wa-l-Muhsanat",
        start_surah: 4,
        start_ayah: 24,
        end_surah: 4,
        end_ayah: 147,
        total_rukus: 24
    },
    {
        number: 6,
        name_arabic: "لَا يُحِبُّ اللَّهُ",
        name_english: "La Yuhibbullah",
        start_surah: 4,
        start_ayah: 148,
        end_surah: 5,
        end_ayah: 81,
        total_rukus: 21
    },
    {
        number: 7,
        name_arabic: "وَإِذَا سَمِعُوا",
        name_english: "Wa Iza Sami'u",
        start_surah: 5,
        start_ayah: 82,
        end_surah: 6,
        end_ayah: 110,
        total_rukus: 24
    },
    {
        number: 8,
        name_arabic: "وَلَوْ أَنَّنَا",
        name_english: "Wa Law Annana",
        start_surah: 6,
        start_ayah: 111,
        end_surah: 7,
        end_ayah: 87,
        total_rukus: 20
    },
    {
        number: 9,
        name_arabic: "قَالَ الْمَلَأُ",
        name_english: "Qal-al-Mala'u",
        start_surah: 7,
        start_ayah: 88,
        end_surah: 8,
        end_ayah: 40,
        total_rukus: 24
    },
    {
        number: 10,
        name_arabic: "وَاعْلَمُوا",
        name_english: "Wa'lamu",
        start_surah: 8,
        start_ayah: 41,
        end_surah: 9,
        end_ayah: 92,
        total_rukus: 18
    },
    {
        number: 11,
        name_arabic: "يَعْتَذِرُونَ",
        name_english: "Ya'tazirun",
        start_surah: 9,
        start_ayah: 93,
        end_surah: 11,
        end_ayah: 5,
        total_rukus: 26
    },
    {
        number: 12,
        name_arabic: "وَمَا مِنْ دَابَّةٍ",
        name_english: "Wa Ma Min Dabbah",
        start_surah: 11,
        start_ayah: 6,
        end_surah: 12,
        end_ayah: 52,
        total_rukus: 22
    },
    {
        number: 13,
        name_arabic: "وَمَا أُبَرِّئُ",
        name_english: "Wa Ma Ubarri'u",
        start_surah: 12,
        start_ayah: 53,
        end_surah: 14,
        end_ayah: 52,
        total_rukus: 28
    },
    {
        number: 14,
        name_arabic: "رُبَمَا",
        name_english: "Rubama",
        start_surah: 15,
        start_ayah: 1,
        end_surah: 16,
        end_ayah: 128,
        total_rukus: 29
    },
    {
        number: 15,
        name_arabic: "سُبْحَانَ الَّذِي",
        name_english: "Subhana-llazi",
        start_surah: 17,
        start_ayah: 1,
        end_surah: 18,
        end_ayah: 74,
        total_rukus: 24
    },
    {
        number: 16,
        name_arabic: "قَالَ أَلَمْ",
        name_english: "Qala Alam",
        start_surah: 18,
        start_ayah: 75,
        end_surah: 20,
        end_ayah: 135,
        total_rukus: 24
    },
    {
        number: 17,
        name_arabic: "اقْتَرَبَ",
        name_english: "Iqtaraba",
        start_surah: 21,
        start_ayah: 1,
        end_surah: 22,
        end_ayah: 78,
        total_rukus: 17
    },
    {
        number: 18,
        name_arabic: "قَدْ أَفْلَحَ",
        name_english: "Qad Aflaha",
        start_surah: 23,
        start_ayah: 1,
        end_surah: 25,
        end_ayah: 20,
        total_rukus: 20
    },
    {
        number: 19,
        name_arabic: "وَقَالَ الَّذِينَ",
        name_english: "Wa Qalallazina",
        start_surah: 25,
        start_ayah: 21,
        end_surah: 27,
        end_ayah: 55,
        total_rukus: 30
    },
    {
        number: 20,
        name_arabic: "أَمَّنْ خَلَقَ",
        name_english: "Amman Khalaq",
        start_surah: 27,
        start_ayah: 56,
        end_surah: 29,
        end_ayah: 45,
        total_rukus: 22
    },
    {
        number: 21,
        name_arabic: "اتْلُ مَا أُوحِيَ",
        name_english: "Utlu Ma Uhiya",
        start_surah: 29,
        start_ayah: 46,
        end_surah: 33,
        end_ayah: 30,
        total_rukus: 29
    },
    {
        number: 22,
        name_arabic: "وَمَنْ يَقْنُتْ",
        name_english: "Wa May-Yaqnut",
        start_surah: 33,
        start_ayah: 31,
        end_surah: 36,
        end_ayah: 27,
        total_rukus: 22
    },
    {
        number: 23,
        name_arabic: "وَمَا لِيَ",
        name_english: "Wa Maliya",
        start_surah: 36,
        start_ayah: 28,
        end_surah: 39,
        end_ayah: 31,
        total_rukus: 27
    },
    {
        number: 24,
        name_arabic: "فَمَنْ أَظْلَمُ",
        name_english: "Fa Man Azlamu",
        start_surah: 39,
        start_ayah: 32,
        end_surah: 41,
        end_ayah: 46,
        total_rukus: 29
    },
    {
        number: 25,
        name_arabic: "إِلَيْهِ يُرَدُّ",
        name_english: "Ilayhi Yuraddu",
        start_surah: 41,
        start_ayah: 47,
        end_surah: 45,
        end_ayah: 37,
        total_rukus: 29
    },
    {
        number: 26,
        name_arabic: "حم",
        name_english: "Ha-Mim",
        start_surah: 46,
        start_ayah: 1,
        end_surah: 51,
        end_ayah: 30,
        total_rukus: 29
    },
    {
        number: 27,
        name_arabic: "قَالَ فَمَا خَطْبُكُمْ",
        name_english: "Qala Fama Khatbukum",
        start_surah: 51,
        start_ayah: 31,
        end_surah: 57,
        end_ayah: 29,
        total_rukus: 30
    },
    {
        number: 28,
        name_arabic: "قَدْ سَمِعَ اللَّهُ",
        name_english: "Qad Sami' Allah",
        start_surah: 58,
        start_ayah: 1,
        end_surah: 66,
        end_ayah: 12,
        total_rukus: 22
    },
    {
        number: 29,
        name_arabic: "تَبَارَكَ الَّذِي",
        name_english: "Tabaraka-llazi",
        start_surah: 67,
        start_ayah: 1,
        end_surah: 77,
        end_ayah: 50,
        total_rukus: 30
    },
    {
        number: 30,
        name_arabic: "عَمَّ",
        name_english: "'Amma",
        start_surah: 78,
        start_ayah: 1,
        end_surah: 114,
        end_ayah: 6,
        total_rukus: 39
    }
];
const TOTAL_QURAN_AYAHS = 6236;
const TOTAL_QURAN_SURAHS = 114;
const TOTAL_QURAN_PARAS = 30;
function getSurahByNumber(num) {
    return QURAN_SURAHS.find((s)=>s.number === Number(num)) || null;
}
function getParaByNumber(num) {
    return QURAN_PARAS.find((p)=>p.number === Number(num)) || null;
}
function formatAyahRange(surahStart, ayahStart, surahEnd, ayahEnd) {
    const startSurah = getSurahByNumber(surahStart);
    const endSurah = getSurahByNumber(surahEnd);
    if (!startSurah) return "—";
    if (!surahEnd || surahStart === surahEnd) {
        if (!ayahEnd || ayahStart === ayahEnd) {
            return `${startSurah.name_english} (${startSurah.name_arabic}) — Ayah ${ayahStart}`;
        }
        return `${startSurah.name_english} (${startSurah.name_arabic}) — Ayah ${ayahStart} to ${ayahEnd}`;
    }
    return `${startSurah.name_english} (Ayah ${ayahStart}) to ${endSurah?.name_english || ''} (Ayah ${ayahEnd})`;
}
function calculateHifzProgressStats(dailyRecords = [], manzilRecords = []) {
    // Count unique paras revised in manzil
    const revisedParas = new Set((manzilRecords || []).map((r)=>r.para_number));
    // Count estimated total ayahs memorized from latest sabaq
    let maxSurah = 0;
    let maxAyah = 0;
    let totalAyahsMemorized = 0;
    // If daily records are provided, find highest surah/ayah reached or sum
    if (dailyRecords && dailyRecords.length > 0) {
        const sorted = [
            ...dailyRecords
        ].sort((a, b)=>new Date(b.date) - new Date(a.date));
        const latest = sorted[0];
        if (latest.sabaq_surah_end) {
            maxSurah = latest.sabaq_surah_end;
            maxAyah = latest.sabaq_ayah_end || 1;
        }
    }
    // Calculate ayahs up to maxSurah - 1 + maxAyah
    if (maxSurah > 0) {
        for(let i = 1; i < maxSurah; i++){
            const s = getSurahByNumber(i);
            if (s) totalAyahsMemorized += s.ayahs;
        }
        totalAyahsMemorized += maxAyah;
    }
    const completionPercentage = Math.min(100, parseFloat((totalAyahsMemorized / TOTAL_QURAN_AYAHS * 100).toFixed(1)));
    const manzilPercentage = Math.min(100, parseFloat((revisedParas.size / TOTAL_QURAN_PARAS * 100).toFixed(1)));
    return {
        totalAyahsMemorized: Math.min(TOTAL_QURAN_AYAHS, totalAyahsMemorized),
        totalAyahs: TOTAL_QURAN_AYAHS,
        completionPercentage,
        currentSurah: getSurahByNumber(maxSurah) || QURAN_SURAHS[0],
        currentAyah: maxAyah,
        revisedParasCount: revisedParas.size,
        revisedParas: Array.from(revisedParas).sort((a, b)=>a - b),
        manzilPercentage
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabaseClient.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
/**
 * Supabase Client Configuration
 * Connects to the Al-Faeq Supabase project.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [client] (ecmascript) <locals>");
;
const supabaseUrl = 'https://qndquneksfcaflwhfolb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZHF1bmVrc2ZjYWZsd2hmb2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MjY3MTUsImV4cCI6MjEwMjAwMjcxNX0.jcR3DAob9KQBckrZh82qHWy3mbR4UJi30gy1A-at5n4';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/teacher.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeacherPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quranData.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const GOLD = '#F2A900';
const NAVY = '#002147';
const Icons = {
    dashboard: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "3",
                    width: "7",
                    height: "7",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 13,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "14",
                    y: "3",
                    width: "7",
                    height: "7",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 13,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 13,
                    columnNumber: 233
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "14",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 13,
                    columnNumber: 281
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/teacher.js",
            lineNumber: 13,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    book: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 16,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 16,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/teacher.js",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    attendance: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 19,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "8",
                    y: "2",
                    width: "8",
                    height: "4",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 19,
                    columnNumber: 222
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 14l2 2 4-4"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 19,
                    columnNumber: 269
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/teacher.js",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    results: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 22,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 22,
                    columnNumber: 177
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 22,
                    columnNumber: 215
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/teacher.js",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    users: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 25,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 25,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 25,
                    columnNumber: 220
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 25,
                    columnNumber: 258
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/teacher.js",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    check: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "20 6 9 17 4 12"
            }, void 0, false, {
                fileName: "[project]/pages/teacher.js",
                lineNumber: 28,
                columnNumber: 137
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/teacher.js",
            lineNumber: 28,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    logout: (s = 18, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 31,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "16 17 21 12 16 7"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 31,
                    columnNumber: 189
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "9",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 31,
                    columnNumber: 226
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/teacher.js",
            lineNumber: 31,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    menu: (s = 24, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "12",
                    x2: "21",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 34,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 34,
                    columnNumber: 176
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "18",
                    x2: "21",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 34,
                    columnNumber: 212
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/teacher.js",
            lineNumber: 34,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
const Card = ({ children, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16,
            padding: 24,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/pages/teacher.js",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
const Button = ({ children, onClick, variant = 'primary', style, disabled })=>{
    const baseStyle = {
        padding: '10px 18px',
        borderRadius: 12,
        fontSize: '0.82rem',
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        border: 'none',
        opacity: disabled ? 0.5 : 1
    };
    const variants = {
        primary: {
            background: `linear-gradient(135deg, ${GOLD}, #e09800)`,
            color: '#0a0e1a'
        },
        secondary: {
            background: 'rgba(255,255,255,0.06)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)'
        },
        danger: {
            background: 'rgba(239,68,68,0.15)',
            color: '#fca5a5',
            border: '1px solid rgba(239,68,68,0.25)'
        },
        success: {
            background: 'rgba(34,197,94,0.15)',
            color: '#86efac',
            border: '1px solid rgba(34,197,94,0.25)'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: disabled ? undefined : onClick,
        style: {
            ...baseStyle,
            ...variants[variant],
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/pages/teacher.js",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Button;
const Badge = ({ text, color = GOLD })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-block',
            padding: '3px 10px',
            borderRadius: 20,
            fontSize: '0.7rem',
            fontWeight: 600,
            background: `${color}20`,
            color: color,
            textTransform: 'capitalize'
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/pages/teacher.js",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = Badge;
function TeacherPortal() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [classes, setClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedClassId, setSelectedClassId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastMsg, setToastMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Hifz daily entry state map: { [studentId]: { sabaq_surah_start, sabaq_ayah_start, sabaq_ayah_end, sabaq_quality, sabaq_notes, manzil_paras: [], overall_grade } }
    const [hifzEntries, setHifzEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Attendance state map: { [studentId]: 'present' | 'absent' | 'leave' }
    const [attendanceMap, setAttendanceMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Test Results state
    const [testSessions, setTestSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTestId, setSelectedTestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedSubjectId, setSelectedSubjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [testMarksMap, setTestMarksMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeacherPortal.useEffect": ()=>{
            const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (!u || u.role !== 'teacher') {
                router.replace('/login');
                return;
            }
            setUser(u);
            // Load teacher classes
            const init = {
                "TeacherPortal.useEffect.init": async ()=>{
                    const cls = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTeacherClasses"](u.id);
                    setClasses(cls);
                    if (cls.length > 0) {
                        setSelectedClassId(cls[0].id);
                    }
                    const tests = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTestSessions"]();
                    setTestSessions(tests);
                }
            }["TeacherPortal.useEffect.init"];
            init();
        }
    }["TeacherPortal.useEffect"], [
        router
    ]);
    // Load students when selected class changes
    const loadClassStudents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TeacherPortal.useCallback[loadClassStudents]": async ()=>{
            if (!selectedClassId) return;
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id, roll_no, first_name, last_name, photo_url, program_type').eq('class_id', selectedClassId).eq('status', 'active').order('roll_no');
            const list = data || [];
            setStudents(list);
            // Init attendance map with default 'present'
            const attObj = {};
            list.forEach({
                "TeacherPortal.useCallback[loadClassStudents]": (s)=>{
                    attObj[s.id] = 'present';
                }
            }["TeacherPortal.useCallback[loadClassStudents]"]);
            setAttendanceMap(attObj);
            // Init Hifz entries with existing or defaults
            const entries = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getHifzEntriesForClass"](selectedClassId, selectedDate);
            const hObj = {};
            entries.forEach({
                "TeacherPortal.useCallback[loadClassStudents]": (e)=>{
                    hObj[e.student.id] = {
                        sabaq_surah_start: e.daily?.sabaq_surah_start || 1,
                        sabaq_ayah_start: e.daily?.sabaq_ayah_start || 1,
                        sabaq_ayah_end: e.daily?.sabaq_ayah_end || 7,
                        sabaq_quality: e.daily?.sabaq_quality || 'good',
                        sabaq_notes: e.daily?.sabaq_notes || '',
                        manzil_para: e.manzil?.para_number || 1,
                        overall_grade: e.daily?.overall_grade || 'A'
                    };
                }
            }["TeacherPortal.useCallback[loadClassStudents]"]);
            setHifzEntries(hObj);
        }
    }["TeacherPortal.useCallback[loadClassStudents]"], [
        selectedClassId,
        selectedDate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeacherPortal.useEffect": ()=>{
            loadClassStudents();
        }
    }["TeacherPortal.useEffect"], [
        loadClassStudents
    ]);
    const selectedClass = classes.find((c)=>c.id === selectedClassId);
    const isHifzClass = selectedClass?.course?.course_type === 'hifz' || selectedClass?.class_name?.toLowerCase().includes('hifz');
    // Save Hifz Sabaq & Manzil
    const handleSaveHifz = async ()=>{
        setSaving(true);
        const dailyPayload = [];
        const manzilPayload = [];
        students.forEach((st)=>{
            const entry = hifzEntries[st.id];
            if (entry) {
                dailyPayload.push({
                    student_id: st.id,
                    teacher_id: user.id,
                    session_id: selectedClass.session_id || 'e0000000-0000-0000-0000-000000000001',
                    date: selectedDate,
                    sabaq_surah_start: Number(entry.sabaq_surah_start),
                    sabaq_ayah_start: Number(entry.sabaq_ayah_start),
                    sabaq_surah_end: Number(entry.sabaq_surah_start),
                    sabaq_ayah_end: Number(entry.sabaq_ayah_end),
                    sabaq_quality: entry.sabaq_quality,
                    sabaq_notes: entry.sabaq_notes,
                    overall_grade: entry.overall_grade
                });
                if (entry.manzil_para) {
                    manzilPayload.push({
                        student_id: st.id,
                        teacher_id: user.id,
                        session_id: selectedClass.session_id || 'e0000000-0000-0000-0000-000000000001',
                        date: selectedDate,
                        para_number: Number(entry.manzil_para),
                        quality: entry.sabaq_quality
                    });
                }
            }
        });
        await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["saveHifzDailyProgress"](dailyPayload, user.id),
            manzilPayload.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["saveManzilRecords"](manzilPayload, user.id) : Promise.resolve()
        ]);
        setToastMsg('Daily Sabaq & Manzil successfully logged!');
        setSaving(false);
        setTimeout(()=>setToastMsg(''), 3000);
    };
    // Save Attendance
    const handleSaveAttendance = async ()=>{
        setSaving(true);
        const payload = students.map((st)=>({
                student_id: st.id,
                class_subject_id: selectedClass?.subjects?.[0]?.id || selectedClass.id,
                date: selectedDate,
                status: attendanceMap[st.id] || 'present',
                marked_by: user.id
            }));
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["markAttendance"](payload, user.id);
        setToastMsg('Attendance successfully recorded!');
        setSaving(false);
        setTimeout(()=>setToastMsg(''), 3000);
    };
    // Save Test Results
    const handleSaveTestResults = async ()=>{
        if (!selectedTestId || !selectedSubjectId) {
            alert('Please select both a Test Session and Subject.');
            return;
        }
        setSaving(true);
        const payload = students.map((st)=>{
            const marks = Number(testMarksMap[st.id]?.obtained || 0);
            const total = Number(testMarksMap[st.id]?.total || 50);
            const pct = marks / total * 100;
            let grade = 'F';
            if (pct >= 90) grade = 'A+';
            else if (pct >= 80) grade = 'A';
            else if (pct >= 70) grade = 'B';
            else if (pct >= 60) grade = 'C';
            else if (pct >= 50) grade = 'D';
            return {
                test_session_id: selectedTestId,
                student_id: st.id,
                class_subject_id: selectedSubjectId,
                marks_obtained: marks,
                total_marks: total,
                grade,
                remarks: testMarksMap[st.id]?.remarks || '',
                entered_by: user.id
            };
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["submitTestResults"](payload, user.id);
        setToastMsg('Test results successfully submitted & published!');
        setSaving(false);
        setTimeout(()=>setToastMsg(''), 3000);
    };
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Teacher Portal — Al-Faeq Islamic Institute"
                }, void 0, false, {
                    fileName: "[project]/pages/teacher.js",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/teacher.js",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: '100vh',
                    background: '#0a0e1a',
                    fontFamily: "'Inter', sans-serif",
                    color: '#fff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            padding: '16px 28px',
                            background: '#0d111e',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            position: 'sticky',
                            top: 0,
                            zIndex: 100
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/faeq-logo.png",
                                        alt: "",
                                        style: {
                                            width: 34,
                                            height: 34,
                                            borderRadius: 10
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.92rem',
                                                    fontWeight: 800,
                                                    color: '#fff'
                                                },
                                                children: "Al-Faeq Portal"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.68rem',
                                                    color: GOLD,
                                                    fontWeight: 700
                                                },
                                                children: "Teacher & Scholar Workstation"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 292,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/teacher.js",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 16
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'right'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.84rem',
                                                    fontWeight: 700
                                                },
                                                children: [
                                                    user.first_name,
                                                    " ",
                                                    user.last_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.7rem',
                                                    color: 'rgba(255,255,255,0.4)'
                                                },
                                                children: [
                                                    "Faculty ID: ",
                                                    user.employee_id || 'Scholar'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["logout"])();
                                            router.push('/login');
                                        },
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6,
                                            padding: '8px 14px',
                                            background: 'rgba(239,68,68,0.1)',
                                            border: '1px solid rgba(239,68,68,0.2)',
                                            borderRadius: 10,
                                            color: '#fca5a5',
                                            cursor: 'pointer',
                                            fontSize: '0.8rem',
                                            fontWeight: 600
                                        },
                                        children: [
                                            Icons.logout(14, '#fca5a5'),
                                            " Sign Out"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/teacher.js",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/teacher.js",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 6,
                            padding: '12px 28px',
                            background: 'rgba(255,255,255,0.02)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            overflowX: 'auto'
                        },
                        children: [
                            {
                                id: 'dashboard',
                                label: 'Dashboard',
                                icon: Icons.dashboard
                            },
                            {
                                id: 'hifz',
                                label: 'Hifz Sabaq & Manzil',
                                icon: Icons.book
                            },
                            {
                                id: 'attendance',
                                label: 'Daily Attendance',
                                icon: Icons.attendance
                            },
                            {
                                id: 'results',
                                label: 'Test Marks Entry',
                                icon: Icons.results
                            }
                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(t.id),
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '10px 18px',
                                    borderRadius: 12,
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    background: activeTab === t.id ? `${GOLD}20` : 'transparent',
                                    color: activeTab === t.id ? GOLD : 'rgba(255,255,255,0.5)',
                                    whiteSpace: 'nowrap'
                                },
                                children: [
                                    t.icon(16, activeTab === t.id ? GOLD : 'rgba(255,255,255,0.4)'),
                                    t.label
                                ]
                            }, t.id, true, {
                                fileName: "[project]/pages/teacher.js",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/teacher.js",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    toastMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            bottom: 24,
                            right: 24,
                            zIndex: 1000,
                            background: '#22c55e',
                            color: '#0a0e1a',
                            padding: '12px 20px',
                            borderRadius: 12,
                            fontWeight: 700,
                            fontSize: '0.88rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        },
                        children: toastMsg
                    }, void 0, false, {
                        fileName: "[project]/pages/teacher.js",
                        lineNumber: 344,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            padding: '28px',
                            maxWidth: 1200,
                            margin: '0 auto'
                        },
                        children: [
                            activeTab !== 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 16,
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: 14,
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    marginBottom: 24,
                                    flexWrap: 'wrap',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.82rem',
                                                    color: GOLD,
                                                    fontWeight: 700
                                                },
                                                children: "Select Class:"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedClassId,
                                                onChange: (e)=>setSelectedClassId(e.target.value),
                                                style: {
                                                    padding: '8px 12px',
                                                    background: '#111625',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    borderRadius: 8,
                                                    color: '#fff',
                                                    fontSize: '0.85rem',
                                                    outline: 'none'
                                                },
                                                children: classes.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: c.id,
                                                        children: [
                                                            c.class_name,
                                                            " (",
                                                            c.section,
                                                            ") — ",
                                                            c.course?.course_code
                                                        ]
                                                    }, c.id, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 374,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.82rem',
                                                    color: 'rgba(255,255,255,0.5)',
                                                    fontWeight: 600
                                                },
                                                children: "Date:"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: selectedDate,
                                                onChange: (e)=>setSelectedDate(e.target.value),
                                                style: {
                                                    padding: '8px 12px',
                                                    background: '#111625',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    borderRadius: 8,
                                                    color: '#fff',
                                                    fontSize: '0.85rem',
                                                    outline: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/teacher.js",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this),
                            activeTab === 'dashboard' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: '1.4rem',
                                                    fontWeight: 800,
                                                    margin: 0
                                                },
                                                children: [
                                                    "Welcome, ",
                                                    user.first_name,
                                                    "!"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.4)',
                                                    fontSize: '0.84rem',
                                                    marginTop: 4
                                                },
                                                children: "Faculty workstation for Islamic instruction, daily Quranic Sabaq tracking, and student attendance."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 401,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 399,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                            gap: 16,
                                            marginBottom: 28
                                        },
                                        children: classes.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'flex-start'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        style: {
                                                                            fontSize: '1.05rem',
                                                                            fontWeight: 700,
                                                                            margin: '0 0 4px 0'
                                                                        },
                                                                        children: c.class_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 411,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                        text: c.course?.course_code || 'Class',
                                                                        color: c.course?.course_type === 'hifz' ? GOLD : '#3b82f6'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 412,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 410,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '0.78rem',
                                                                    color: 'rgba(255,255,255,0.4)'
                                                                },
                                                                children: [
                                                                    "Section ",
                                                                    c.section
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 414,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 409,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.8rem',
                                                            color: 'rgba(255,255,255,0.5)',
                                                            marginTop: 14
                                                        },
                                                        children: [
                                                            "Role: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: c.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 417,
                                                                columnNumber: 29
                                                            }, this),
                                                            " • Capacity: ",
                                                            c.max_students
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 416,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 8,
                                                            marginTop: 16
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                            onClick: ()=>{
                                                                setSelectedClassId(c.id);
                                                                setActiveTab(c.course?.course_type === 'hifz' ? 'hifz' : 'attendance');
                                                            },
                                                            style: {
                                                                flex: 1,
                                                                padding: '8px'
                                                            },
                                                            children: "Mark Today"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/teacher.js",
                                                            lineNumber: 420,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 419,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, c.id, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 408,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/teacher.js",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this),
                            activeTab === 'hifz' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '1.2rem',
                                                            fontWeight: 800,
                                                            margin: 0
                                                        },
                                                        children: "Hifz Sabaq & Manzil Tracker"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 435,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.8rem',
                                                            color: 'rgba(255,255,255,0.4)',
                                                            marginTop: 2
                                                        },
                                                        children: "Record daily memorization (Surah/Ayah range) and Para revision for each student in your Halqa."
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 436,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSaveHifz,
                                                disabled: saving,
                                                variant: "primary",
                                                children: saving ? 'Saving Entries...' : 'Save All Hifz Entries'
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this),
                                    students.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        style: {
                                            textAlign: 'center',
                                            padding: 40,
                                            color: 'rgba(255,255,255,0.3)'
                                        },
                                        children: "No active students enrolled in this class / halqa."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 14
                                        },
                                        children: students.map((st)=>{
                                            const entry = hifzEntries[st.id] || {
                                                sabaq_surah_start: 1,
                                                sabaq_ayah_start: 1,
                                                sabaq_ayah_end: 7,
                                                sabaq_quality: 'good',
                                                manzil_para: 1,
                                                overall_grade: 'A'
                                            };
                                            const currentSurah = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__["QURAN_SURAHS"].find((s)=>s.number === Number(entry.sabaq_surah_start));
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    background: 'rgba(255,255,255,0.025)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            marginBottom: 14,
                                                            flexWrap: 'wrap',
                                                            gap: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 10
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: 36,
                                                                            height: 36,
                                                                            borderRadius: 10,
                                                                            background: `${GOLD}20`,
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            color: GOLD,
                                                                            fontWeight: 800
                                                                        },
                                                                        children: st.first_name[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 459,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 800,
                                                                                    fontSize: '0.98rem'
                                                                                },
                                                                                children: [
                                                                                    st.first_name,
                                                                                    " ",
                                                                                    st.last_name
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 463,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: '0.75rem',
                                                                                    color: GOLD
                                                                                },
                                                                                children: st.roll_no
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 464,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 462,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 458,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 12
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '0.78rem',
                                                                            color: 'rgba(255,255,255,0.5)'
                                                                        },
                                                                        children: "Overall Grade:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 469,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: entry.overall_grade,
                                                                        onChange: (e)=>setHifzEntries((p)=>({
                                                                                    ...p,
                                                                                    [st.id]: {
                                                                                        ...p[st.id],
                                                                                        overall_grade: e.target.value
                                                                                    }
                                                                                })),
                                                                        style: {
                                                                            padding: '6px 10px',
                                                                            background: '#111625',
                                                                            border: '1px solid rgba(242,169,0,0.4)',
                                                                            borderRadius: 8,
                                                                            color: GOLD,
                                                                            fontWeight: 700,
                                                                            outline: 'none'
                                                                        },
                                                                        children: [
                                                                            'A+',
                                                                            'A',
                                                                            'B',
                                                                            'C',
                                                                            'D',
                                                                            'F'
                                                                        ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: g,
                                                                                children: g
                                                                            }, g, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 478,
                                                                                columnNumber: 75
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 470,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 468,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 457,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                                            gap: 12,
                                                            borderTop: '1px solid rgba(255,255,255,0.06)',
                                                            paddingTop: 14
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            display: 'block',
                                                                            fontSize: '0.72rem',
                                                                            color: 'rgba(255,255,255,0.4)',
                                                                            marginBottom: 4,
                                                                            fontWeight: 600
                                                                        },
                                                                        children: "Sabaq Surah"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 487,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: entry.sabaq_surah_start,
                                                                        onChange: (e)=>setHifzEntries((p)=>({
                                                                                    ...p,
                                                                                    [st.id]: {
                                                                                        ...p[st.id],
                                                                                        sabaq_surah_start: Number(e.target.value)
                                                                                    }
                                                                                })),
                                                                        style: {
                                                                            width: '100%',
                                                                            padding: '8px 10px',
                                                                            background: '#111625',
                                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                                            borderRadius: 8,
                                                                            color: '#fff',
                                                                            fontSize: '0.82rem',
                                                                            outline: 'none'
                                                                        },
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__["QURAN_SURAHS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: s.number,
                                                                                children: [
                                                                                    s.number,
                                                                                    ". ",
                                                                                    s.name_arabic,
                                                                                    " — ",
                                                                                    s.name_english,
                                                                                    " (",
                                                                                    s.ayahs,
                                                                                    " Ayahs)"
                                                                                ]
                                                                            }, s.number, true, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 497,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 488,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 486,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    gap: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            flex: 1
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                style: {
                                                                                    display: 'block',
                                                                                    fontSize: '0.72rem',
                                                                                    color: 'rgba(255,255,255,0.4)',
                                                                                    marginBottom: 4,
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "From Ayah"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 507,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                min: "1",
                                                                                max: currentSurah?.ayahs || 286,
                                                                                value: entry.sabaq_ayah_start,
                                                                                onChange: (e)=>setHifzEntries((p)=>({
                                                                                            ...p,
                                                                                            [st.id]: {
                                                                                                ...p[st.id],
                                                                                                sabaq_ayah_start: e.target.value
                                                                                            }
                                                                                        })),
                                                                                style: {
                                                                                    width: '100%',
                                                                                    padding: '8px 10px',
                                                                                    background: '#111625',
                                                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                                                    borderRadius: 8,
                                                                                    color: '#fff',
                                                                                    fontSize: '0.82rem',
                                                                                    outline: 'none'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 508,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 506,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            flex: 1
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                style: {
                                                                                    display: 'block',
                                                                                    fontSize: '0.72rem',
                                                                                    color: 'rgba(255,255,255,0.4)',
                                                                                    marginBottom: 4,
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "To Ayah"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 521,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                min: "1",
                                                                                max: currentSurah?.ayahs || 286,
                                                                                value: entry.sabaq_ayah_end,
                                                                                onChange: (e)=>setHifzEntries((p)=>({
                                                                                            ...p,
                                                                                            [st.id]: {
                                                                                                ...p[st.id],
                                                                                                sabaq_ayah_end: e.target.value
                                                                                            }
                                                                                        })),
                                                                                style: {
                                                                                    width: '100%',
                                                                                    padding: '8px 10px',
                                                                                    background: '#111625',
                                                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                                                    borderRadius: 8,
                                                                                    color: '#fff',
                                                                                    fontSize: '0.82rem',
                                                                                    outline: 'none'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 522,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 520,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 505,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            display: 'block',
                                                                            fontSize: '0.72rem',
                                                                            color: 'rgba(255,255,255,0.4)',
                                                                            marginBottom: 4,
                                                                            fontWeight: 600
                                                                        },
                                                                        children: "Sabaq Quality"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 538,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: entry.sabaq_quality,
                                                                        onChange: (e)=>setHifzEntries((p)=>({
                                                                                    ...p,
                                                                                    [st.id]: {
                                                                                        ...p[st.id],
                                                                                        sabaq_quality: e.target.value
                                                                                    }
                                                                                })),
                                                                        style: {
                                                                            width: '100%',
                                                                            padding: '8px 10px',
                                                                            background: '#111625',
                                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                                            borderRadius: 8,
                                                                            color: '#fff',
                                                                            fontSize: '0.82rem',
                                                                            outline: 'none'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "excellent",
                                                                                children: "Mumtaz / Excellent (ممتاز)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 547,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "good",
                                                                                children: "Jayyid Jiddan / Good (جيد جداً)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 548,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "average",
                                                                                children: "Jayyid / Average (جيد)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 549,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "needs_improvement",
                                                                                children: "Needs Revision (مقبول / تكرار)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 550,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 539,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 537,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            display: 'block',
                                                                            fontSize: '0.72rem',
                                                                            color: 'rgba(255,255,255,0.4)',
                                                                            marginBottom: 4,
                                                                            fontWeight: 600
                                                                        },
                                                                        children: "Manzil (Para Revision)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 556,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: entry.manzil_para,
                                                                        onChange: (e)=>setHifzEntries((p)=>({
                                                                                    ...p,
                                                                                    [st.id]: {
                                                                                        ...p[st.id],
                                                                                        manzil_para: Number(e.target.value)
                                                                                    }
                                                                                })),
                                                                        style: {
                                                                            width: '100%',
                                                                            padding: '8px 10px',
                                                                            background: '#111625',
                                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                                            borderRadius: 8,
                                                                            color: '#fff',
                                                                            fontSize: '0.82rem',
                                                                            outline: 'none'
                                                                        },
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__["QURAN_PARAS"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: p.number,
                                                                                children: [
                                                                                    "Para ",
                                                                                    p.number,
                                                                                    ": ",
                                                                                    p.name_arabic,
                                                                                    " (",
                                                                                    p.name_english,
                                                                                    ")"
                                                                                ]
                                                                            }, p.number, true, {
                                                                                fileName: "[project]/pages/teacher.js",
                                                                                lineNumber: 566,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 557,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 555,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 484,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: 10
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "Teacher feedback / Makharij & Tajweed notes...",
                                                            value: entry.sabaq_notes || '',
                                                            onChange: (e)=>setHifzEntries((p)=>({
                                                                        ...p,
                                                                        [st.id]: {
                                                                            ...p[st.id],
                                                                            sabaq_notes: e.target.value
                                                                        }
                                                                    })),
                                                            style: {
                                                                width: '100%',
                                                                padding: '8px 12px',
                                                                background: '#111625',
                                                                border: '1px solid rgba(255,255,255,0.06)',
                                                                borderRadius: 8,
                                                                color: '#fff',
                                                                fontSize: '0.8rem',
                                                                outline: 'none'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/teacher.js",
                                                            lineNumber: 576,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 575,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, st.id, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 456,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/teacher.js",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this),
                            activeTab === 'attendance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '1.2rem',
                                                            fontWeight: 800,
                                                            margin: 0
                                                        },
                                                        children: "Class Attendance Register"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 604,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.8rem',
                                                            color: 'rgba(255,255,255,0.4)',
                                                            marginTop: 2
                                                        },
                                                        children: [
                                                            "Mark attendance for ",
                                                            selectedClass?.class_name,
                                                            ". Marking a student absent automatically tracks escalation."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 605,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 603,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                        variant: "secondary",
                                                        onClick: ()=>{
                                                            const obj = {};
                                                            students.forEach((s)=>{
                                                                obj[s.id] = 'present';
                                                            });
                                                            setAttendanceMap(obj);
                                                        },
                                                        children: "Mark All Present"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 610,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                        onClick: handleSaveAttendance,
                                                        disabled: saving,
                                                        children: saving ? 'Saving...' : 'Save Attendance'
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 617,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 609,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 10
                                        },
                                        children: students.map((st)=>{
                                            const currentStatus = attendanceMap[st.id] || 'present';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '14px 20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 34,
                                                                    height: 34,
                                                                    borderRadius: 10,
                                                                    background: 'rgba(255,255,255,0.05)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: '#fff',
                                                                    fontWeight: 700
                                                                },
                                                                children: st.first_name[0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 629,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontWeight: 700,
                                                                            fontSize: '0.92rem'
                                                                        },
                                                                        children: [
                                                                            st.first_name,
                                                                            " ",
                                                                            st.last_name
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 633,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '0.74rem',
                                                                            color: GOLD
                                                                        },
                                                                        children: st.roll_no
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 634,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 632,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 628,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 6
                                                        },
                                                        children: [
                                                            {
                                                                id: 'present',
                                                                label: 'Present',
                                                                color: '#22c55e'
                                                            },
                                                            {
                                                                id: 'absent',
                                                                label: 'Absent',
                                                                color: '#ef4444'
                                                            },
                                                            {
                                                                id: 'leave',
                                                                label: 'Leave',
                                                                color: '#f97316'
                                                            }
                                                        ].map((btn)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setAttendanceMap((p)=>({
                                                                            ...p,
                                                                            [st.id]: btn.id
                                                                        })),
                                                                style: {
                                                                    padding: '8px 14px',
                                                                    borderRadius: 8,
                                                                    border: 'none',
                                                                    cursor: 'pointer',
                                                                    fontSize: '0.78rem',
                                                                    fontWeight: 700,
                                                                    transition: 'all 0.2s',
                                                                    background: currentStatus === btn.id ? btn.color : 'rgba(255,255,255,0.04)',
                                                                    color: currentStatus === btn.id ? '#0a0e1a' : 'rgba(255,255,255,0.5)'
                                                                },
                                                                children: btn.label
                                                            }, btn.id, false, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 645,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 639,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, st.id, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 627,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/teacher.js",
                                lineNumber: 601,
                                columnNumber: 13
                            }, this),
                            activeTab === 'results' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '1.2rem',
                                                            fontWeight: 800,
                                                            margin: 0
                                                        },
                                                        children: "Dars-e-Nizami Test Marks Entry"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 671,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: '0.8rem',
                                                            color: 'rgba(255,255,255,0.4)',
                                                            marginTop: 2
                                                        },
                                                        children: "Record examination / test marks for 15-day, monthly, or terminal Islamic tests."
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 672,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 670,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSaveTestResults,
                                                disabled: saving,
                                                children: saving ? 'Submitting...' : 'Submit & Publish Results'
                                            }, void 0, false, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 676,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 669,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: 16,
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    padding: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: 'block',
                                                            fontSize: '0.78rem',
                                                            color: GOLD,
                                                            fontWeight: 700,
                                                            marginBottom: 6
                                                        },
                                                        children: "Select Test Session:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 684,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedTestId,
                                                        onChange: (e)=>setSelectedTestId(e.target.value),
                                                        style: {
                                                            width: '100%',
                                                            padding: '10px',
                                                            background: '#111625',
                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                            borderRadius: 8,
                                                            color: '#fff',
                                                            fontSize: '0.85rem',
                                                            outline: 'none'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select Test Session..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 690,
                                                                columnNumber: 21
                                                            }, this),
                                                            testSessions.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: t.id,
                                                                    children: [
                                                                        t.name,
                                                                        " (",
                                                                        t.test_type,
                                                                        ")"
                                                                    ]
                                                                }, t.id, true, {
                                                                    fileName: "[project]/pages/teacher.js",
                                                                    lineNumber: 692,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 685,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    padding: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            display: 'block',
                                                            fontSize: '0.78rem',
                                                            color: GOLD,
                                                            fontWeight: 700,
                                                            marginBottom: 6
                                                        },
                                                        children: "Select Subject:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 698,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedSubjectId,
                                                        onChange: (e)=>setSelectedSubjectId(e.target.value),
                                                        style: {
                                                            width: '100%',
                                                            padding: '10px',
                                                            background: '#111625',
                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                            borderRadius: 8,
                                                            color: '#fff',
                                                            fontSize: '0.85rem',
                                                            outline: 'none'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select Subject..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 704,
                                                                columnNumber: 21
                                                            }, this),
                                                            selectedClass?.subjects?.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: s.id,
                                                                    children: [
                                                                        s.subject_name,
                                                                        " (",
                                                                        s.subject_code,
                                                                        ")"
                                                                    ]
                                                                }, s.id, true, {
                                                                    fileName: "[project]/pages/teacher.js",
                                                                    lineNumber: 706,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 699,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 697,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 682,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 10
                                        },
                                        children: students.map((st)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '14px 20px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: '0.92rem'
                                                                },
                                                                children: [
                                                                    st.first_name,
                                                                    " ",
                                                                    st.last_name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 717,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.74rem',
                                                                    color: GOLD
                                                                },
                                                                children: st.roll_no
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 718,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 716,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '0.72rem',
                                                                            color: 'rgba(255,255,255,0.4)',
                                                                            display: 'block',
                                                                            marginBottom: 2
                                                                        },
                                                                        children: "Marks Obtained"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 723,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        placeholder: "e.g. 45",
                                                                        value: testMarksMap[st.id]?.obtained ?? '',
                                                                        onChange: (e)=>setTestMarksMap((p)=>({
                                                                                    ...p,
                                                                                    [st.id]: {
                                                                                        ...p[st.id],
                                                                                        obtained: e.target.value
                                                                                    }
                                                                                })),
                                                                        style: {
                                                                            width: 90,
                                                                            padding: '8px',
                                                                            background: '#111625',
                                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                                            borderRadius: 8,
                                                                            color: '#fff',
                                                                            textAlign: 'center',
                                                                            fontWeight: 700
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 724,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 722,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'rgba(255,255,255,0.3)',
                                                                    marginTop: 16
                                                                },
                                                                children: "/"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 735,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '0.72rem',
                                                                            color: 'rgba(255,255,255,0.4)',
                                                                            display: 'block',
                                                                            marginBottom: 2
                                                                        },
                                                                        children: "Total Marks"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 737,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: testMarksMap[st.id]?.total ?? 50,
                                                                        onChange: (e)=>setTestMarksMap((p)=>({
                                                                                    ...p,
                                                                                    [st.id]: {
                                                                                        ...p[st.id],
                                                                                        total: e.target.value
                                                                                    }
                                                                                })),
                                                                        style: {
                                                                            width: 80,
                                                                            padding: '8px',
                                                                            background: '#111625',
                                                                            border: '1px solid rgba(255,255,255,0.15)',
                                                                            borderRadius: 8,
                                                                            color: '#fff',
                                                                            textAlign: 'center'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/teacher.js",
                                                                        lineNumber: 738,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/teacher.js",
                                                                lineNumber: 736,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/teacher.js",
                                                        lineNumber: 721,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, st.id, true, {
                                                fileName: "[project]/pages/teacher.js",
                                                lineNumber: 715,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/teacher.js",
                                        lineNumber: 713,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/teacher.js",
                                lineNumber: 668,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/teacher.js",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/teacher.js",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/teacher.js",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
_s(TeacherPortal, "zyuedPgb9p6DAZq4c9hfRSPcbpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = TeacherPortal;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Button");
__turbopack_context__.k.register(_c2, "Badge");
__turbopack_context__.k.register(_c3, "TeacherPortal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0ixjd2b._.js.map