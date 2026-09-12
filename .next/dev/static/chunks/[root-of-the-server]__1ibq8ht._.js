(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/guardian\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/guardian.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/guardian.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/guardian";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/guardian.js [client] (ecmascript)");
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
"[project]/lib/guardianData.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChildData",
    ()=>getChildData
]);
/**
 * Guardian Portal Data (Supabase-backed)
 * Centralizes data assembly for each enrolled child.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quranData.js [client] (ecmascript)");
;
;
;
async function getChildData(studentId) {
    if (!studentId) return null;
    // 1. Get student with class & course info
    const { data: student } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
      *,
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(id, course_name, course_code, course_type, class_level)
      ),
      guardian:guardians(
        id,
        user:users(first_name, last_name, cnic, phone, email, current_address)
      )
    `).eq('id', studentId).single();
    if (!student) return null;
    // 2. Fetch subjects, attendance, results, hifz progress, and flags in parallel
    const [subjectsRes, attendanceRes, testResultsRes, hifzDailyRes, hifzManzilRes, absenceFlagRes] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select(`
        *,
        teacher:teachers(
          user:users(first_name, last_name, phone)
        )
      `).eq('class_id', student.class?.id || '00000000-0000-0000-0000-000000000000'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').select(`
        *,
        subject:class_subjects(subject_name, subject_code)
      `).eq('student_id', studentId).order('date', {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('test_results').select(`
        *,
        test_session:test_sessions(name, test_type, start_date, end_date),
        subject:class_subjects(subject_name, subject_code)
      `).eq('student_id', studentId).order('created_at', {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('hifz_daily_progress').select('*').eq('student_id', studentId).order('date', {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('hifz_manzil_records').select('*').eq('student_id', studentId).order('date', {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').select('*').eq('student_id', studentId).eq('status', 'active').order('created_at', {
            ascending: false
        }).limit(1).maybeSingle()
    ]);
    const subjects = subjectsRes.data || [];
    const attendanceRecords = attendanceRes.data || [];
    const testResults = testResultsRes.data || [];
    const hifzDaily = hifzDailyRes.data || [];
    const hifzManzil = hifzManzilRes.data || [];
    const activeAbsenceFlag = absenceFlagRes.data || null;
    // Compute attendance stats
    const total = attendanceRecords.length;
    const present = attendanceRecords.filter((r)=>r.status === 'present').length;
    const absent = attendanceRecords.filter((r)=>r.status === 'absent').length;
    const leave = attendanceRecords.filter((r)=>r.status === 'leave').length;
    const attendancePercentage = total > 0 ? parseFloat((present / total * 100).toFixed(1)) : 0;
    // Compute Hifz Stats
    const isHifz = student.program_type === 'hifz' || student.class?.course?.course_type === 'hifz';
    const hifzStats = isHifz ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__["calculateHifzProgressStats"])(hifzDaily, hifzManzil) : null;
    return {
        ...student,
        studentName: `${student.first_name} ${student.last_name}`,
        rollNo: student.roll_no,
        programType: isHifz ? 'hifz' : 'dars_nizami',
        classSection: student.class ? `${student.class.class_name} (Sec ${student.class.section})` : 'Not Assigned',
        guardianName: student.guardian?.user ? `${student.guardian.user.first_name} ${student.guardian.user.last_name}` : '',
        guardianCnic: student.guardian?.user?.cnic || '',
        guardianPhone: student.guardian?.user?.phone || '',
        guardianAddress: student.guardian?.user?.current_address || '',
        overallAttendance: total > 0 ? `${attendancePercentage}%` : 'N/A',
        studyProgress: isHifz ? hifzStats?.completionPercentage || 0 : total > 0 ? Math.round(present / total * 100) : 0,
        activeAbsenceFlag,
        schedule: subjects.map((s, i)=>({
                id: s.id || i + 1,
                course: s.subject_name,
                code: s.subject_code,
                creditHours: s.credit_hours,
                teacher: s.teacher?.user ? `${s.teacher.user.first_name} ${s.teacher.user.last_name}` : 'Assigned',
                teacherPhone: s.teacher?.user?.phone || ''
            })),
        attendance: {
            stats: {
                totalClasses: total,
                present,
                absent,
                leave,
                percentage: attendancePercentage
            },
            records: attendanceRecords.map((r, i)=>({
                    id: r.id || i + 1,
                    date: r.date,
                    subject: r.subject?.subject_name || (isHifz ? 'Hifz Halqa' : 'Class Session'),
                    status: r.status.charAt(0).toUpperCase() + r.status.slice(1)
                }))
        },
        results: testResults.map((r, i)=>({
                id: r.id || i + 1,
                testName: r.test_session?.name || 'Academic Assessment',
                testType: r.test_session?.test_type || 'regular',
                subject: r.subject?.subject_name || r.subject_name || 'Islamic Studies',
                code: r.subject?.subject_code || '',
                marksObtained: r.marks_obtained,
                totalMarks: r.total_marks,
                grade: r.grade || 'A',
                remarks: r.remarks || ''
            })),
        hifz: {
            stats: hifzStats,
            dailyRecords: hifzDaily,
            manzilRecords: hifzManzil,
            todaySabaq: hifzDaily.length > 0 ? hifzDaily[0] : null
        }
    };
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
"[project]/pages/guardian.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GuardianPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$guardianData$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/guardianData.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quranData.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const GOLD = '#F2A900';
const NAVY = '#002147';
const Icons = {
    home: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 14,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "9 22 9 12 15 12 15 22"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 14,
                    columnNumber: 206
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    book: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 17,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 17,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    calendar: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "18",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 20,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "2",
                    x2: "16",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 20,
                    columnNumber: 197
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "2",
                    x2: "8",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 20,
                    columnNumber: 234
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "10",
                    x2: "21",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 20,
                    columnNumber: 269
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    attendance: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 23,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "8",
                    y: "2",
                    width: "8",
                    height: "4",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 23,
                    columnNumber: 232
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 14l2 2 4-4"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 23,
                    columnNumber: 279
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    results: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
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
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 26,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 26,
                    columnNumber: 187
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 26,
                    columnNumber: 225
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    challan: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "4",
                    width: "22",
                    height: "16",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 29,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "10",
                    x2: "23",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 29,
                    columnNumber: 197
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "14",
                    x2: "6",
                    y2: "14.01"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 29,
                    columnNumber: 235
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "10",
                    y1: "14",
                    x2: "14",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 29,
                    columnNumber: 275
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    admission: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 32,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "14 2 14 8 20 8"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 32,
                    columnNumber: 218
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "13",
                    x2: "8",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 32,
                    columnNumber: 253
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "17",
                    x2: "8",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 32,
                    columnNumber: 291
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 32,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    bell: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 35,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.73 21a2 2 0 0 1-3.46 0"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 35,
                    columnNumber: 203
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 35,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    user: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 38,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 38,
                    columnNumber: 201
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 38,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    logOut: (size = 16, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 41,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "16 17 21 12 16 7"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 41,
                    columnNumber: 199
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "9",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 41,
                    columnNumber: 236
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 41,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    plus: (size = 16, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 44,
                    columnNumber: 145
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 44,
                    columnNumber: 183
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 44,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    check: (size = 16, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "20 6 9 17 4 12"
            }, void 0, false, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 47,
                columnNumber: 147
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    flag: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 50,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "4",
                    y1: "22",
                    x2: "4",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 50,
                    columnNumber: 217
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 50,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
const Card = ({ children, style, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        style: {
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16,
            padding: 20,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/pages/guardian.js",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
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
        fileName: "[project]/pages/guardian.js",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Badge;
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
        success: {
            background: 'rgba(34,197,94,0.15)',
            color: '#86efac',
            border: '1px solid rgba(34,197,94,0.25)'
        },
        danger: {
            background: 'rgba(239,68,68,0.15)',
            color: '#fca5a5',
            border: '1px solid rgba(239,68,68,0.25)'
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
        fileName: "[project]/pages/guardian.js",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Button;
function GuardianPortal() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [childrenList, setChildrenList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedChildIndex, setSelectedChildIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showChildSwitcher, setShowChildSwitcher] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('home');
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bankConfig, setBankConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeSession, setActiveSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Challan Payment state
    const [challans, setChallans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [payingChallan, setPayingChallan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tidInput, setTidInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submittingPayment, setSubmittingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastMsg, setToastMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Admission Application state
    const [showAdmissionModal, setShowAdmissionModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [admissionForm, setAdmissionForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        student_first_name: '',
        student_last_name: '',
        student_dob: '',
        student_gender: 'male',
        student_b_form: '',
        course_type: 'hifz',
        desired_course: 'Hifz Ul Quran',
        previous_school: ''
    });
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GuardianPortal.useCallback[loadData]": async (currentUser)=>{
            const students = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentsByGuardian"])(currentUser.id);
            if (students && students.length > 0) {
                const childDataList = [];
                for (const student of students){
                    const childInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$guardianData$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getChildData"])(student.id);
                    if (childInfo) childDataList.push(childInfo);
                }
                setChildrenList(childDataList);
            } else {
                setChildrenList([]);
            }
            const [anns, bank, sess] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAnnouncementsByRole"])('guardian'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveBankConfig"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveSession"])()
            ]);
            setAnnouncements(anns || []);
            setBankConfig(bank);
            setActiveSession(sess);
        }
    }["GuardianPortal.useCallback[loadData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GuardianPortal.useEffect": ()=>{
            const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (!currentUser || currentUser.role !== 'guardian') {
                router.replace('/login');
                return;
            }
            setUser(currentUser);
            loadData(currentUser);
        }
    }["GuardianPortal.useEffect"], [
        router,
        loadData
    ]);
    const currentChild = childrenList[selectedChildIndex] || null;
    // Load challans for active child
    const loadChallans = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GuardianPortal.useCallback[loadChallans]": async ()=>{
            if (!currentChild) return;
            const { data } = await db.supabase.from('challans').select('*, payment:challan_payments(*)').eq('student_id', currentChild.id).order('due_date', {
                ascending: false
            });
            // Mask compensated status as paid
            const mapped = (data || []).map({
                "GuardianPortal.useCallback[loadChallans].mapped": (c)=>({
                        ...c,
                        status: c.compensation_status === 'compensated' ? 'paid' : c.status
                    })
            }["GuardianPortal.useCallback[loadChallans].mapped"]);
            setChallans(mapped);
        }
    }["GuardianPortal.useCallback[loadChallans]"], [
        currentChild
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GuardianPortal.useEffect": ()=>{
            if (activeTab === 'challans') {
                loadChallans();
            }
        }
    }["GuardianPortal.useEffect"], [
        activeTab,
        loadChallans
    ]);
    const handlePayChallan = async ()=>{
        if (!tidInput.trim()) {
            alert('Please enter your Bank Transaction ID (TID).');
            return;
        }
        setSubmittingPayment(true);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["submitChallanPayment"])({
            challan_id: payingChallan.id,
            payment_method: 'bank',
            transaction_id: tidInput.trim(),
            amount_paid: payingChallan.amount
        });
        setPayingChallan(null);
        setTidInput('');
        setToastMsg('Payment submitted! Administration will verify shortly.');
        loadChallans();
        setSubmittingPayment(false);
        setTimeout(()=>setToastMsg(''), 3500);
    };
    const handleApplyAdmission = async ()=>{
        if (!admissionForm.student_first_name || !admissionForm.student_last_name) {
            alert('Please enter your child\'s name.');
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAdmission"])({
            guardian_id: user.id,
            session_id: activeSession?.id || 'e0000000-0000-0000-0000-000000000001',
            student_first_name: admissionForm.student_first_name,
            student_last_name: admissionForm.student_last_name,
            student_dob: admissionForm.student_dob || null,
            student_gender: admissionForm.student_gender,
            student_b_form: admissionForm.student_b_form,
            course_type: admissionForm.course_type,
            desired_course: admissionForm.desired_course,
            previous_school: admissionForm.previous_school,
            status: 'pending'
        });
        setShowAdmissionModal(false);
        setToastMsg('Admission application submitted to Administration!');
        setTimeout(()=>setToastMsg(''), 3500);
    };
    if (!user) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Parent Portal — Al-Faeq Islamic Education System"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 236,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 235,
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
                            padding: '16px 24px',
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
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.92rem',
                                                    fontWeight: 800
                                                },
                                                children: "Al-Faeq Education"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.68rem',
                                                    color: GOLD,
                                                    fontWeight: 700
                                                },
                                                children: "Parent / Guardian Portal"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: 'right'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.82rem',
                                                    fontWeight: 700
                                                },
                                                children: [
                                                    user.first_name,
                                                    " ",
                                                    user.last_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.68rem',
                                                    color: 'rgba(255,255,255,0.4)'
                                                },
                                                children: [
                                                    "CNIC: ",
                                                    user.cnic
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 254,
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
                                            padding: '7px 12px',
                                            background: 'rgba(239,68,68,0.1)',
                                            border: '1px solid rgba(239,68,68,0.2)',
                                            borderRadius: 8,
                                            color: '#fca5a5',
                                            cursor: 'pointer',
                                            fontSize: '0.78rem',
                                            fontWeight: 600
                                        },
                                        children: [
                                            Icons.logOut(14, '#fca5a5'),
                                            " Sign Out"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 4,
                            padding: '10px 24px',
                            background: 'rgba(255,255,255,0.02)',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            overflowX: 'auto'
                        },
                        children: [
                            {
                                id: 'home',
                                label: 'Home Overview',
                                icon: Icons.home
                            },
                            ...currentChild?.programType === 'hifz' ? [
                                {
                                    id: 'hifz',
                                    label: 'Hifz Sabaq & Manzil',
                                    icon: Icons.book
                                }
                            ] : [],
                            ...currentChild?.programType !== 'hifz' ? [
                                {
                                    id: 'results',
                                    label: 'Test Results',
                                    icon: Icons.results
                                }
                            ] : [],
                            {
                                id: 'attendance',
                                label: 'Attendance',
                                icon: Icons.attendance
                            },
                            {
                                id: 'challans',
                                label: 'Fee Challans',
                                icon: Icons.challan
                            },
                            {
                                id: 'schedule',
                                label: 'Classes & Scholars',
                                icon: Icons.calendar
                            }
                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(t.id),
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '8px 16px',
                                    borderRadius: 10,
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
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 272,
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
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            padding: '24px',
                            maxWidth: 1100,
                            margin: '0 auto'
                        },
                        children: [
                            currentChild?.activeAbsenceFlag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.08))',
                                    border: '2px solid rgba(239,68,68,0.5)',
                                    borderRadius: 16,
                                    padding: '16px 20px',
                                    marginBottom: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 44,
                                            height: 44,
                                            borderRadius: 12,
                                            background: '#ef4444',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        },
                                        children: Icons.flag(24, '#fff')
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.98rem',
                                                    fontWeight: 800,
                                                    color: '#fca5a5'
                                                },
                                                children: [
                                                    "Urgent Notice: ",
                                                    currentChild.studentName,
                                                    " has ",
                                                    currentChild.activeAbsenceFlag.consecutive_absences,
                                                    " Consecutive Absences"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 325,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.82rem',
                                                    color: '#e2e8f0',
                                                    marginTop: 3
                                                },
                                                children: "Please visit the Al-Faeq administration office as soon as possible regarding your child's continuous absence."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this),
                            childrenList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                style: {
                                    marginBottom: 20,
                                    border: '1px solid rgba(242,169,0,0.3)',
                                    background: 'linear-gradient(135deg, rgba(242,169,0,0.06), rgba(0,33,71,0.2))'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 14
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: 14,
                                                        background: `${GOLD}25`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: GOLD,
                                                        fontSize: '1.2rem',
                                                        fontWeight: 900
                                                    },
                                                    children: currentChild?.studentName?.[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 10
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '1.15rem',
                                                                        fontWeight: 800
                                                                    },
                                                                    children: currentChild?.studentName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 345,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                    text: currentChild?.programType === 'hifz' ? 'Hifz Ul Quran' : 'Dars-e-Nizami',
                                                                    color: currentChild?.programType === 'hifz' ? GOLD : '#3b82f6'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 346,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 344,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '0.78rem',
                                                                color: 'rgba(255,255,255,0.5)',
                                                                marginTop: 2
                                                            },
                                                            children: [
                                                                "Roll No: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    style: {
                                                                        color: GOLD
                                                                    },
                                                                    children: currentChild?.rollNo
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 349,
                                                                    columnNumber: 32
                                                                }, this),
                                                                " • Class: ",
                                                                currentChild?.classSection
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 348,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 10,
                                                alignItems: 'center'
                                            },
                                            children: [
                                                childrenList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: selectedChildIndex,
                                                    onChange: (e)=>setSelectedChildIndex(Number(e.target.value)),
                                                    style: {
                                                        padding: '8px 12px',
                                                        background: '#111625',
                                                        border: '1px solid rgba(242,169,0,0.4)',
                                                        borderRadius: 10,
                                                        color: GOLD,
                                                        fontWeight: 700,
                                                        fontSize: '0.82rem',
                                                        outline: 'none'
                                                    },
                                                    children: childrenList.map((ch, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: idx,
                                                            children: [
                                                                "Switch to: ",
                                                                ch.studentName,
                                                                " (",
                                                                ch.programType === 'hifz' ? 'Hifz' : 'Dars',
                                                                ")"
                                                            ]
                                                        }, ch.id, true, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 366,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 357,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    variant: "secondary",
                                                    onClick: ()=>setShowAdmissionModal(true),
                                                    style: {
                                                        padding: '8px 14px',
                                                        fontSize: '0.78rem'
                                                    },
                                                    children: [
                                                        Icons.plus(14),
                                                        " Enroll Another Child"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 372,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                            gap: 14,
                                            marginBottom: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: 'rgba(255,255,255,0.4)',
                                                            fontWeight: 700
                                                        },
                                                        children: "OVERALL ATTENDANCE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 386,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '1.6rem',
                                                            fontWeight: 900,
                                                            color: '#22c55e',
                                                            marginTop: 4
                                                        },
                                                        children: currentChild?.overallAttendance || '100%'
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.72rem',
                                                            color: 'rgba(255,255,255,0.3)',
                                                            marginTop: 2
                                                        },
                                                        children: [
                                                            currentChild?.attendance?.stats?.present || 0,
                                                            " Days Present / ",
                                                            currentChild?.attendance?.stats?.totalClasses || 0,
                                                            " Total"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this),
                                            currentChild?.programType === 'hifz' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: GOLD,
                                                            fontWeight: 700
                                                        },
                                                        children: "HIFZ MEMORIZATION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 397,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '1.6rem',
                                                            fontWeight: 900,
                                                            color: '#fff',
                                                            marginTop: 4
                                                        },
                                                        children: [
                                                            currentChild?.hifz?.stats?.completionPercentage || 0,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 398,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.72rem',
                                                            color: 'rgba(255,255,255,0.4)',
                                                            marginTop: 2
                                                        },
                                                        children: [
                                                            currentChild?.hifz?.stats?.totalAyahsMemorized || 0,
                                                            " / 6,236 Ayahs"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 396,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            color: '#3b82f6',
                                                            fontWeight: 700
                                                        },
                                                        children: "DARS-E-NIZAMI CLASS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 407,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '1.2rem',
                                                            fontWeight: 800,
                                                            color: '#fff',
                                                            marginTop: 6
                                                        },
                                                        children: currentChild?.class?.class_name || 'Sanviya Aamah'
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 408,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: '0.72rem',
                                                            color: 'rgba(255,255,255,0.4)',
                                                            marginTop: 2
                                                        },
                                                        children: [
                                                            currentChild?.schedule?.length || 4,
                                                            " Islamic Subjects"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this),
                                    currentChild?.programType === 'hifz' && currentChild?.hifz?.todaySabaq && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        style: {
                                            marginBottom: 24,
                                            border: '1px solid rgba(242,169,0,0.3)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 8
                                                        },
                                                        children: [
                                                            Icons.book(20, GOLD),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    margin: 0,
                                                                    fontSize: '1.05rem',
                                                                    color: GOLD,
                                                                    fontWeight: 800
                                                                },
                                                                children: "Latest Sabaq & Memorization"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 424,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 422,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                        text: currentChild.hifz.todaySabaq.sabaq_quality,
                                                        color: "#22c55e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 426,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '1.1rem',
                                                    fontWeight: 700,
                                                    color: '#fff',
                                                    marginBottom: 8
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__["formatAyahRange"])(currentChild.hifz.todaySabaq.sabaq_surah_start, currentChild.hifz.todaySabaq.sabaq_ayah_start, currentChild.hifz.todaySabaq.sabaq_surah_end, currentChild.hifz.todaySabaq.sabaq_ayah_end)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 428,
                                                columnNumber: 19
                                            }, this),
                                            currentChild.hifz.todaySabaq.sabaq_notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.82rem',
                                                    color: 'rgba(255,255,255,0.6)',
                                                    background: 'rgba(255,255,255,0.03)',
                                                    padding: '10px 14px',
                                                    borderRadius: 8
                                                },
                                                children: [
                                                    "Teacher Note: ",
                                                    currentChild.hifz.todaySabaq.sabaq_notes
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 432,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8,
                                                    marginBottom: 14
                                                },
                                                children: [
                                                    Icons.bell(18, GOLD),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            margin: 0,
                                                            fontSize: '1rem',
                                                            color: '#fff',
                                                            fontWeight: 800
                                                        },
                                                        children: "Madrassa Notice Board"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 443,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gap: 10
                                                },
                                                children: announcements.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: '12px 16px',
                                                            background: 'rgba(255,255,255,0.02)',
                                                            borderRadius: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: '0.9rem',
                                                                    color: GOLD
                                                                },
                                                                children: a.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 448,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: '0.82rem',
                                                                    color: 'rgba(255,255,255,0.6)',
                                                                    margin: '4px 0 0 0',
                                                                    lineHeight: 1.4
                                                                },
                                                                children: a.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 449,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, a.id, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this),
                            activeTab === 'hifz' && currentChild?.programType === 'hifz' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.3rem',
                                            fontWeight: 800,
                                            margin: '0 0 16px 0',
                                            color: GOLD
                                        },
                                        children: "Hifz Ul Quran Daily Progress & History"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        style: {
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '0.95rem',
                                                    fontWeight: 700,
                                                    margin: '0 0 12px 0'
                                                },
                                                children: "30 Paras (Juz) Manzil Revision Coverage"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 466,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                                                    gap: 6
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__["QURAN_PARAS"].map((p)=>{
                                                    const isRevised = currentChild.hifz?.stats?.revisedParas?.includes(p.number);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: '8px 4px',
                                                            textAlign: 'center',
                                                            borderRadius: 8,
                                                            background: isRevised ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.03)',
                                                            border: isRevised ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.08)',
                                                            color: isRevised ? '#86efac' : 'rgba(255,255,255,0.4)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.7rem',
                                                                    fontWeight: 700
                                                                },
                                                                children: [
                                                                    "Para ",
                                                                    p.number
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 480,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.75rem',
                                                                    fontWeight: 800
                                                                },
                                                                children: p.name_arabic
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 481,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, p.number, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 471,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 465,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '0.95rem',
                                                    fontWeight: 700,
                                                    margin: '0 0 14px 0'
                                                },
                                                children: "Daily Sabaq Log History"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 490,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gap: 10
                                                },
                                                children: (currentChild.hifz?.dailyRecords || []).map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            padding: '10px 14px',
                                                            background: 'rgba(255,255,255,0.02)',
                                                            borderRadius: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontWeight: 700,
                                                                            fontSize: '0.9rem'
                                                                        },
                                                                        children: [
                                                                            "Surah ",
                                                                            r.sabaq_surah_start,
                                                                            ", Ayah ",
                                                                            r.sabaq_ayah_start,
                                                                            " to ",
                                                                            r.sabaq_ayah_end
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 495,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '0.72rem',
                                                                            color: 'rgba(255,255,255,0.4)'
                                                                        },
                                                                        children: [
                                                                            "Date: ",
                                                                            r.date
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 498,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 494,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 8
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                        text: r.sabaq_quality,
                                                                        color: "#22c55e"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 501,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: 900,
                                                                            color: GOLD
                                                                        },
                                                                        children: r.overall_grade
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 502,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 500,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, r.id, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 493,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 491,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 489,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            activeTab === 'results' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.3rem',
                                            fontWeight: 800,
                                            margin: '0 0 16px 0',
                                            color: '#3b82f6'
                                        },
                                        children: "Academic & Examination Test Results"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 514,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 12
                                        },
                                        children: (currentChild?.results || []).map((res)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: '1rem',
                                                                    color: '#fff'
                                                                },
                                                                children: res.subject
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 522,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.78rem',
                                                                    color: 'rgba(255,255,255,0.4)',
                                                                    marginTop: 2
                                                                },
                                                                children: [
                                                                    res.testName,
                                                                    " • ",
                                                                    res.remarks
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 523,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 521,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'right'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '1.2rem',
                                                                    fontWeight: 900,
                                                                    color: GOLD
                                                                },
                                                                children: [
                                                                    res.marksObtained,
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'rgba(255,255,255,0.4)'
                                                                        },
                                                                        children: [
                                                                            "/ ",
                                                                            res.totalMarks
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 529,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 528,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                text: `Grade ${res.grade}`,
                                                                color: "#22c55e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 531,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 527,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, res.id, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 520,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 518,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 513,
                                columnNumber: 13
                            }, this),
                            activeTab === 'attendance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.3rem',
                                            fontWeight: 800,
                                            margin: '0 0 16px 0'
                                        },
                                        children: "Daily Attendance Log"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 542,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 8
                                        },
                                        children: (currentChild?.attendance?.records || []).map((att)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '12px 18px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: '0.88rem'
                                                                },
                                                                children: att.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 547,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.75rem',
                                                                    color: 'rgba(255,255,255,0.4)'
                                                                },
                                                                children: att.subject
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 548,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 546,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                        text: att.status,
                                                        color: att.status.toLowerCase() === 'present' ? '#22c55e' : '#ef4444'
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 550,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, att.id, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 545,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 543,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            activeTab === 'challans' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.3rem',
                                            fontWeight: 800,
                                            margin: '0 0 16px 0'
                                        },
                                        children: "Fee Challans & Online Payment"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 560,
                                        columnNumber: 15
                                    }, this),
                                    bankConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                        style: {
                                            marginBottom: 20,
                                            border: '1px solid rgba(242,169,0,0.3)',
                                            background: 'rgba(242,169,0,0.05)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.75rem',
                                                    color: GOLD,
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase',
                                                    marginBottom: 8
                                                },
                                                children: "Institute Bank Account for Fee Deposit:"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 565,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.7rem',
                                                                    color: 'rgba(255,255,255,0.4)'
                                                                },
                                                                children: "Bank Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 570,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700
                                                                },
                                                                children: bankConfig.bank_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 571,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 569,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.7rem',
                                                                    color: 'rgba(255,255,255,0.4)'
                                                                },
                                                                children: "Account Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 574,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700
                                                                },
                                                                children: bankConfig.account_title
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 575,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 573,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.7rem',
                                                                    color: 'rgba(255,255,255,0.4)'
                                                                },
                                                                children: "Account Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 578,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 800,
                                                                    color: GOLD
                                                                },
                                                                children: bankConfig.account_number
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 579,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 577,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.7rem',
                                                                    color: 'rgba(255,255,255,0.4)'
                                                                },
                                                                children: "IBAN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 582,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: '0.8rem'
                                                                },
                                                                children: bankConfig.iban || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 583,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 581,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 568,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 564,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 12
                                        },
                                        children: challans.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 800,
                                                                    fontSize: '1rem',
                                                                    color: '#fff'
                                                                },
                                                                children: ch.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 593,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.78rem',
                                                                    color: 'rgba(255,255,255,0.4)',
                                                                    marginTop: 2
                                                                },
                                                                children: [
                                                                    "Challan No: ",
                                                                    ch.challan_no,
                                                                    " • Due: ",
                                                                    ch.due_date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 594,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '1.2rem',
                                                                    fontWeight: 900,
                                                                    color: GOLD,
                                                                    marginTop: 4
                                                                },
                                                                children: [
                                                                    "Rs. ",
                                                                    Number(ch.amount).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 597,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 592,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                                text: ch.status === 'paid' ? 'Paid' : ch.status === 'pending_verification' ? 'Pending Verification' : 'Unpaid',
                                                                color: ch.status === 'paid' ? '#22c55e' : ch.status === 'pending_verification' ? '#f97316' : '#ef4444'
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 603,
                                                                columnNumber: 23
                                                            }, this),
                                                            ch.status === 'unpaid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                                onClick: ()=>setPayingChallan(ch),
                                                                style: {
                                                                    padding: '8px 16px'
                                                                },
                                                                children: "I Have Paid →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 608,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 602,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, ch.id, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 591,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 589,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 559,
                                columnNumber: 13
                            }, this),
                            activeTab === 'schedule' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '1.3rem',
                                            fontWeight: 800,
                                            margin: '0 0 16px 0'
                                        },
                                        children: "Enrolled Classes & Assigned Faculty"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 622,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 12
                                        },
                                        children: (currentChild?.schedule || []).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: '1rem'
                                                                },
                                                                children: s.course
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 627,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: '0.78rem',
                                                                    color: 'rgba(255,255,255,0.4)',
                                                                    marginTop: 2
                                                                },
                                                                children: [
                                                                    "Code: ",
                                                                    s.code,
                                                                    " • Scholar: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        style: {
                                                                            color: GOLD
                                                                        },
                                                                        children: s.teacher
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 629,
                                                                        columnNumber: 56
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 628,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 626,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                        text: "Enrolled",
                                                        color: "#22c55e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 632,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, s.id, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 625,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 623,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 621,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    payingChallan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            inset: 0,
                            zIndex: 1000,
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#111625',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 20,
                                width: '100%',
                                maxWidth: 500,
                                padding: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        margin: '0 0 12px 0',
                                        fontSize: '1.1rem',
                                        color: GOLD
                                    },
                                    children: "Submit Fee Payment"
                                }, void 0, false, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 647,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '0.82rem',
                                        color: 'rgba(255,255,255,0.6)',
                                        lineHeight: 1.5,
                                        marginBottom: 16
                                    },
                                    children: [
                                        "Please transfer ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                "Rs. ",
                                                Number(payingChallan.amount).toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 649,
                                            columnNumber: 33
                                        }, this),
                                        " to the institute bank account and enter the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Transaction ID (TID)"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 649,
                                            columnNumber: 146
                                        }, this),
                                        " below:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 648,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                fontSize: '0.78rem',
                                                color: 'rgba(255,255,255,0.5)',
                                                marginBottom: 6
                                            },
                                            children: "Bank Transaction ID (TID) *"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 653,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. TRX-98234123",
                                            value: tidInput,
                                            onChange: (e)=>setTidInput(e.target.value),
                                            style: {
                                                width: '100%',
                                                padding: '10px 14px',
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(242,169,0,0.3)',
                                                borderRadius: 10,
                                                color: '#fff',
                                                fontSize: '0.9rem',
                                                outline: 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 654,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 652,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 12,
                                        justifyContent: 'flex-end'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            variant: "secondary",
                                            onClick: ()=>setPayingChallan(null),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            onClick: handlePayChallan,
                                            disabled: submittingPayment,
                                            children: submittingPayment ? 'Submitting...' : 'Confirm I Have Paid'
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/guardian.js",
                            lineNumber: 646,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 642,
                        columnNumber: 11
                    }, this),
                    showAdmissionModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            inset: 0,
                            zIndex: 1000,
                            background: 'rgba(0,0,0,0.75)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#111625',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 20,
                                width: '100%',
                                maxWidth: 560,
                                padding: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        margin: '0 0 8px 0',
                                        fontSize: '1.15rem',
                                        color: GOLD
                                    },
                                    children: "Apply for Student Admission"
                                }, void 0, false, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 683,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '0.8rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        marginBottom: 16
                                    },
                                    children: "Fill out the applicant details for admission into Hifz Ul Quran or Dars-e-Nizami."
                                }, void 0, false, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '0 14px',
                                        marginBottom: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '0.75rem',
                                                        color: 'rgba(255,255,255,0.5)',
                                                        marginBottom: 4
                                                    },
                                                    children: "First Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 690,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: admissionForm.student_first_name,
                                                    onChange: (e)=>setAdmissionForm((p)=>({
                                                                ...p,
                                                                student_first_name: e.target.value
                                                            })),
                                                    style: {
                                                        width: '100%',
                                                        padding: '9px 12px',
                                                        background: 'rgba(255,255,255,0.04)',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        borderRadius: 8,
                                                        color: '#fff'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 691,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 689,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '0.75rem',
                                                        color: 'rgba(255,255,255,0.5)',
                                                        marginBottom: 4
                                                    },
                                                    children: "Last Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: admissionForm.student_last_name,
                                                    onChange: (e)=>setAdmissionForm((p)=>({
                                                                ...p,
                                                                student_last_name: e.target.value
                                                            })),
                                                    style: {
                                                        width: '100%',
                                                        padding: '9px 12px',
                                                        background: 'rgba(255,255,255,0.04)',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        borderRadius: 8,
                                                        color: '#fff'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 700,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 698,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 688,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '0 14px',
                                        marginBottom: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '0.75rem',
                                                        color: 'rgba(255,255,255,0.5)',
                                                        marginBottom: 4
                                                    },
                                                    children: "Program *"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 711,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: admissionForm.course_type,
                                                    onChange: (e)=>setAdmissionForm((p)=>({
                                                                ...p,
                                                                course_type: e.target.value,
                                                                desired_course: e.target.value === 'hifz' ? 'Hifz Ul Quran' : 'Pre 9th / Sanviya Aamah'
                                                            })),
                                                    style: {
                                                        width: '100%',
                                                        padding: '9px 12px',
                                                        background: '#111625',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        borderRadius: 8,
                                                        color: '#fff'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "hifz",
                                                            children: "Hifz Ul Quran"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 721,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "dars_nizami",
                                                            children: "Dars-e-Nizami"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 722,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 712,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 710,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: {
                                                        display: 'block',
                                                        fontSize: '0.75rem',
                                                        color: 'rgba(255,255,255,0.5)',
                                                        marginBottom: 4
                                                    },
                                                    children: "Specific Class Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 726,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: admissionForm.desired_course,
                                                    onChange: (e)=>setAdmissionForm((p)=>({
                                                                ...p,
                                                                desired_course: e.target.value
                                                            })),
                                                    style: {
                                                        width: '100%',
                                                        padding: '9px 12px',
                                                        background: '#111625',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        borderRadius: 8,
                                                        color: '#fff'
                                                    },
                                                    children: admissionForm.course_type === 'hifz' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Hifz Ul Quran",
                                                        children: "Hifz Ul Quran (حفظ القرآن)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 733,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Pre 9th / Sanviya Aamah",
                                                                children: "Pre 9th / Sanviya Aamah (سنویہ عامہ)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 736,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "9th / Sanviya Khasa",
                                                                children: "9th / Sanviya Khasa (سنویہ خاصہ)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 737,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "10th / Shahadah Aaliya",
                                                                children: "10th / Shahadah Aaliya (شہادہ عالیہ)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 738,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "11th / Shahadah Aalmiya",
                                                                children: "11th / Shahadah Aalmiya (شہادہ عالمیہ)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 739,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 735,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 727,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 725,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 709,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 12,
                                        justifyContent: 'flex-end',
                                        marginTop: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            variant: "secondary",
                                            onClick: ()=>setShowAdmissionModal(false),
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 747,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            onClick: handleApplyAdmission,
                                            children: "Submit Application"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 748,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 746,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/guardian.js",
                            lineNumber: 682,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 678,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/guardian.js",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
_s(GuardianPortal, "uCMZd8KxoLJtHS0UqR/izkc9+50=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c3 = GuardianPortal;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Badge");
__turbopack_context__.k.register(_c2, "Button");
__turbopack_context__.k.register(_c3, "GuardianPortal");
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1ibq8ht._.js.map