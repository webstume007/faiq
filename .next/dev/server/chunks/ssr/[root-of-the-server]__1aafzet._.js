module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/lib/auth.js [ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const logout = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const getCurrentUser = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
}),
"[project]/lib/db.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quranData.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function logActivity(userId, action, entityType, entityId, oldValue = null, newValue = null, description = '') {
    if (!userId) return;
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('activity_log').insert({
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
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('activity_log').select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('cnic', cnic).eq('password_hash', password).single();
    if (error || !data) return null;
    const { password_hash, ...safeUser } = data;
    return safeUser;
}
async function findUserByCnic(cnic) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('cnic', cnic).single();
    if (error || !data) return null;
    const { password_hash, ...safeUser } = data;
    return safeUser;
}
async function getAllUsers() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, cnic, role, first_name, last_name, email, phone, current_address, permanent_address, date_of_birth, education, avatar_url, is_verified, created_at').order('created_at', {
        ascending: false
    });
    return data || [];
}
async function getUsersByRole(role) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, cnic, role, first_name, last_name, email, phone, is_verified, created_at').eq('role', role).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createUser(userData, actorId = null) {
    const existing = await findUserByCnic(userData.cnic);
    if (existing) return {
        error: 'An account with this CNIC already exists.'
    };
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').insert({
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
    const { data: oldUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', userId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
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
    const { data: oldUser } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', userId).single();
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').delete().eq('id', userId);
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('teachers').select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('teachers').insert({
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
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('teachers').select('*').eq('id', teacherId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('teachers').update(updates).eq('id', teacherId).select().single();
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('teachers').delete().eq('id', teacherId);
    return await deleteUser(teacherId, actorId);
}
async function getAllGuardians() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('guardians').select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('guardians').insert({
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').select('*').order('created_at', {
        ascending: false
    });
    return data || [];
}
async function getActiveSession() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').select('*').eq('is_active', true).order('created_at', {
        ascending: false
    }).limit(1).maybeSingle();
    return data;
}
async function createSession(sessionData, actorId = null) {
    // If new session is set as active, deactivate previous ones
    if (sessionData.is_active) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').update({
            is_active: false
        }).neq('id', '00000000-0000-0000-0000-000000000000');
    }
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').insert({
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
    const { data: sourceCourses } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').select('*').eq('session_id', sourceSessionId);
    const courseIdMap = {};
    if (sourceCourses && sourceCourses.length > 0) {
        for (const sc of sourceCourses){
            const { data: newCourse } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').insert({
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
    const { data: sourceClasses } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select('*').eq('session_id', sourceSessionId);
    if (sourceClasses && sourceClasses.length > 0) {
        for (const sclass of sourceClasses){
            const newCourseId = courseIdMap[sclass.course_id] || sclass.course_id;
            const { data: newClass } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').insert({
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
                const { data: sourceSubjects } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select('*').eq('class_id', sclass.id);
                if (sourceSubjects && sourceSubjects.length > 0) {
                    for (const sub of sourceSubjects){
                        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').insert({
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').update({
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
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').select('*').eq('id', sessionId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').update({
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
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
        const { data: promo, error: promoErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('student_promotions').insert({
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
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').update({
                    session_id: p.to_session_id,
                    class_id: p.to_class_id || p.from_class_id,
                    updated_at: new Date().toISOString()
                }).eq('id', p.student_id);
            } else if (p.promotion_type === 'graduated') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').update({
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
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').select('*');
    if (sessionId) query = query.eq('session_id', sessionId);
    const { data } = await query.order('course_name');
    return data || [];
}
async function createCourse(courseData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').insert(courseData).select().single();
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').select(`*, session:sessions(name, is_active, status)`).order('course_name');
    return data || [];
}
async function getSessionClasses(sessionId) {
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select(`
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').insert(classData).select().single();
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select(`
      *,
      teacher:teachers(
        id, employee_id,
        user:users(first_name, last_name, phone)
      )
    `).eq('class_id', classId).order('subject_name');
    return data || [];
}
async function createSubject(subjectData, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').insert(subjectData).select().single();
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
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').insert(studentData).select().single();
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
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('*').eq('id', studentId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').update({
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
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('*').eq('id', studentId).single();
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').delete().eq('id', studentId);
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').insert(admissionData).select().single();
    if (error) return {
        error: error.message
    };
    return {
        admission: data
    };
}
async function updateAdmission(admissionId, updates, actorId = null) {
    const { data: oldData } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select('*').eq('id', admissionId).single();
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').update({
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
    const { data: app } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select('*').eq('id', applicationId).single();
    if (!app) return {
        error: 'Application not found'
    };
    // 2. Generate roll number
    const prefix = app.course_type === 'hifz' ? 'HFZ' : 'DN';
    const year = new Date().getFullYear();
    const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id', {
        count: 'exact',
        head: true
    });
    const rollNo = `${prefix}-${year}-${String((count || 0) + 1).padStart(3, '0')}`;
    // 3. Create student record
    const { data: student, error: sErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').insert({
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').update({
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
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').select(`
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').select(`
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').select(`
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
    const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').select('id', {
        count: 'exact',
        head: true
    });
    const challanNo = `CHN-${new Date().getFullYear()}-${String((count || 0) + 1).padStart(4, '0')}`;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').insert({
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
    const { data: payment, error: payError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challan_payments').insert({
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').update({
        status: 'pending_verification',
        updated_at: new Date().toISOString()
    }).eq('id', paymentData.challan_id);
    return {
        payment
    };
}
async function verifyChallanPayment(paymentId, challanId, status, verifiedBy, rejectionReason = null) {
    if (paymentId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challan_payments').update({
            status,
            verified_by: verifiedBy,
            verified_at: new Date().toISOString(),
            rejection_reason: rejectionReason
        }).eq('id', paymentId);
    }
    const challanStatus = status === 'approved' ? 'paid' : status === 'compensated' ? 'paid' : 'unpaid';
    const compStatus = status === 'compensated' ? 'compensated' : 'none';
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').update({
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('bank_config').select('*').eq('is_active', true).order('updated_at', {
        ascending: false
    }).limit(1).maybeSingle();
    return data;
}
async function updateBankConfig(bankData, actorId = null) {
    let res;
    if (bankData.id) {
        res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('bank_config').update({
            ...bankData,
            updated_by: actorId,
            updated_at: new Date().toISOString()
        }).eq('id', bankData.id).select().single();
    } else {
        res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('bank_config').insert({
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('hifz_daily_progress').upsert(progressData, {
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('hifz_manzil_records').upsert(manzilData, {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('hifz_daily_progress').select('*').eq('student_id', studentId).order('date', {
            ascending: false
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('hifz_manzil_records').select('*').eq('student_id', studentId).order('date', {
            ascending: false
        })
    ]);
    const dailyRecords = daily.data || [];
    const manzilRecords = manzil.data || [];
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["calculateHifzProgressStats"])(dailyRecords, manzilRecords);
    return {
        dailyRecords,
        manzilRecords,
        stats
    };
}
async function getHifzEntriesForClass(classId, date) {
    const { data: students } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id, roll_no, first_name, last_name, photo_url').eq('class_id', classId).eq('status', 'active').order('roll_no');
    if (!students) return [];
    const studentIds = students.map((s)=>s.id);
    const [daily, manzil] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('hifz_daily_progress').select('*').in('student_id', studentIds).eq('date', date),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('hifz_manzil_records').select('*').in('student_id', studentIds).eq('date', date)
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('test_sessions').insert(testData).select().single();
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
    let query = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('test_sessions').select('*').order('created_at', {
        ascending: false
    });
    if (sessionId) query = query.eq('session_id', sessionId);
    const { data } = await query;
    return data || [];
}
async function submitTestResults(results, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('test_results').upsert(results, {
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('test_results').select(`
      *,
      test_session:test_sessions(name, test_type, start_date, end_date),
      subject:class_subjects(subject_name, subject_code)
    `).eq('student_id', studentId).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function markAttendance(records, actorId = null) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').upsert(records, {
        onConflict: 'student_id,class_subject_id,date'
    }).select();
    if (error) return {
        error: error.message
    };
    // Check for consecutive absences
    for (const r of records){
        if (r.status === 'absent') {
            const { data: history } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').select('status, date').eq('student_id', r.student_id).order('date', {
                ascending: false
            }).limit(5);
            if (history && history.length >= 2) {
                const consecutiveAbsences = history.filter((h)=>h.status === 'absent').length;
                if (consecutiveAbsences >= 2) {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').upsert({
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').select(`
      *,
      subject:class_subjects(subject_name, subject_code)
    `).eq('student_id', studentId).order('date', {
        ascending: false
    });
    return data || [];
}
async function getStudentAttendanceStats(studentId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').select('status').eq('student_id', studentId);
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').update({
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notification_config').select('*').order('event_type');
    return data || [];
}
async function updateNotificationConfig(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notification_config').update({
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notification_log').select(`
      *,
      recipient:users(first_name, last_name, phone)
    `).order('created_at', {
        ascending: false
    }).limit(limit);
    return data || [];
}
async function logNotification(notificationData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('notification_log').insert(notificationData).select().single();
    return {
        log: data,
        error: error?.message
    };
}
async function getAllAnnouncements() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('announcements').select(`
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('announcements').select(`
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
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('announcements').insert(announcementData).select().single();
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
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('announcements').delete().eq('id', id);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('teachers').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('guardians').select('id', {
            count: 'exact',
            head: true
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'pending'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'pending_verification'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('absence_flags').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id', {
            count: 'exact',
            head: true
        }).eq('status', 'active').eq('program_type', 'hifz'),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id', {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id, roll_no, first_name, last_name, program_type').or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},roll_no.ilike.${searchTerm}`).limit(5),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, cnic, first_name, last_name, role').eq('role', 'teacher').or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},cnic.ilike.${searchTerm}`).limit(5),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, cnic, first_name, last_name, role').eq('role', 'guardian').or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},cnic.ilike.${searchTerm}`).limit(5)
    ]);
    return {
        students: students.data || [],
        teachers: teachers.data || [],
        guardians: guardians.data || []
    };
}
async function getTeacherClasses(teacherId) {
    const [inchargeClasses, subjectClasses] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select(`
        *,
        course:session_courses(course_name, course_code, course_type, class_level),
        session:sessions(id, name, is_active)
      `).eq('incharge_teacher_id', teacherId),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select(`
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/quranData.js [ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/supabaseClient.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
/**
 * Supabase Client Configuration
 * Connects to the Al-Faeq Supabase project.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, esm_import, [project]/node_modules/@supabase/supabase-js)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const supabaseUrl = 'https://qndquneksfcaflwhfolb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuZHF1bmVrc2ZjYWZsd2hmb2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY0MjY3MTUsImV4cCI6MjEwMjAwMjcxNX0.jcR3DAob9KQBckrZh82qHWy3mbR4UJi30gy1A-at5n4';
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$29$__["createClient"])(supabaseUrl, supabaseAnonKey);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/users.js [ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([]);
/**
 * Users Data Access (Supabase-backed)
 * Wraps db.js functions for backward compatibility with existing imports.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db.js [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/login.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/users.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
// ============================================================
// SVG ICON LIBRARY (Pure SVG - Clean, Sharp, Reliable)
// ============================================================
const Icons = {
    shield: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/login.js",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    user: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 19,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    idCard: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "5",
                    width: "20",
                    height: "14",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 24,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M2 10h20"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 25,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M6 15h2"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 26,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M10 15h4"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 27,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    lock: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "11",
                    width: "18",
                    height: "11",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 32,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 33,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 31,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    eye: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 38,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 39,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 37,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    eyeOff: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 44,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 45,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M14.12 14.12a3 3 0 1 1-4.24-4.24"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 46,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "1",
                    x2: "23",
                    y2: "23"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 47,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 43,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    mail: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "4",
                    width: "20",
                    height: "16",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 52,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M22 7l-10 7L2 7"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 53,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 51,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    phone: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/login.js",
            lineNumber: 57,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    arrowRight: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 63,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "12 5 19 12 12 19"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 64,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 62,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    alertCircle: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 69,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 70,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "16",
                    x2: "12.01",
                    y2: "16"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 71,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 68,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    checkCircle: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 76,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "22 4 12 14.01 9 11.01"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 77,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 75,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    loader: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            style: {
                animation: 'spin 1s linear infinite',
                display: 'block'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/login.js",
            lineNumber: 81,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    graduationCap: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12 14l9-5-9-5-9 5 9 5z"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 88,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M21 9v6"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 89,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    sparkle: (size = 14, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: color,
            stroke: "none",
            style: {
                display: 'block'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/login.js",
            lineNumber: 93,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    plus: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 99,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 100,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/login.js",
            lineNumber: 98,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
// ============================================================
// CNIC FORMATTER: #####-#######-#
// ============================================================
const formatCNIC = (value)=>{
    const digits = value.replace(/\D/g, '').slice(0, 13);
    if (digits.length <= 5) return digits;
    if (digits.length <= 12) return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12)}`;
};
const isValidCNIC = (cnic)=>/^\d{5}-\d{7}-\d{1}$/.test(cnic);
// ============================================================
// MEMOIZED BACKGROUND PARTICLES (Prevents glitch / re-triggering)
// ============================================================
const ParticleBackground = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["memo"])(()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            pointerEvents: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 350,
                    height: 350,
                    top: '15%',
                    left: '10%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(242,169,0,0.12) 0%, transparent 70%)',
                    filter: 'blur(50px)'
                }
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    width: 450,
                    height: 450,
                    bottom: '10%',
                    right: '10%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,33,71,0.5) 0%, transparent 70%)',
                    filter: 'blur(60px)'
                }
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/login.js",
        lineNumber: 122,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
ParticleBackground.displayName = 'ParticleBackground';
// ============================================================
// REUSABLE INPUT FIELD (Isolated component)
// ============================================================
const InputField = ({ icon, label, type = 'text', value, onChange, placeholder, rightElement, ...rest })=>{
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 18
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                style: styles.label,
                children: label
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 155,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.inputWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        style: {
                            ...styles.inputIcon,
                            color: focused ? '#F2A900' : 'rgba(255,255,255,0.4)'
                        },
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: type,
                        value: value,
                        onChange: onChange,
                        placeholder: placeholder,
                        onFocus: ()=>setFocused(true),
                        onBlur: ()=>setFocused(false),
                        style: {
                            ...styles.input,
                            ...focused ? styles.inputFocus : {},
                            ...rightElement ? {
                                paddingRight: 44
                            } : {}
                        },
                        ...rest
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    rightElement
                ]
            }, void 0, true, {
                fileName: "[project]/pages/login.js",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/login.js",
        lineNumber: 154,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function LoginPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('login'); // 'login' | 'signup'
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        type: '',
        text: ''
    });
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Login fields
    const [cnic, setCnic] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    // Signup fields
    const [signupData, setSignupData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        firstName: '',
        lastName: '',
        cnic: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (user) {
            router.replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPortalPath"])(user.role));
        }
    }, []);
    const handleCnicChange = (e, isSignup = false)=>{
        const formatted = formatCNIC(e.target.value);
        if (isSignup) {
            setSignupData((prev)=>({
                    ...prev,
                    cnic: formatted
                }));
        } else {
            setCnic(formatted);
        }
    };
    const handleLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({
            type: '',
            text: ''
        });
        if (!isValidCNIC(cnic)) {
            setMessage({
                type: 'error',
                text: 'Please enter a valid CNIC (#####-#######-#)'
            });
            setLoading(false);
            return;
        }
        await new Promise((r)=>setTimeout(r, 600));
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["authenticateUser"])(cnic, password);
        if (!user) {
            setMessage({
                type: 'error',
                text: 'Invalid CNIC or password. Please try again.'
            });
            setLoading(false);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["login"])(user);
        setMessage({
            type: 'success',
            text: `Welcome, ${user.first_name}! Redirecting...`
        });
        setTimeout(()=>{
            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPortalPath"])(user.role));
        }, 800);
    };
    const handleSignup = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setMessage({
            type: '',
            text: ''
        });
        const { firstName, lastName, cnic, phone, email, password, confirmPassword } = signupData;
        if (!isValidCNIC(cnic)) {
            setMessage({
                type: 'error',
                text: 'Please enter a valid CNIC (#####-#######-#)'
            });
            setLoading(false);
            return;
        }
        if (password.length < 6) {
            setMessage({
                type: 'error',
                text: 'Password must be at least 6 characters'
            });
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            setMessage({
                type: 'error',
                text: 'Passwords do not match'
            });
            setLoading(false);
            return;
        }
        await new Promise((r)=>setTimeout(r, 600));
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createUser"])({
            firstName,
            lastName,
            cnic,
            phone,
            email,
            password,
            role: 'guardian'
        });
        if (result.error) {
            setMessage({
                type: 'error',
                text: result.error
            });
            setLoading(false);
            return;
        }
        setMessage({
            type: 'success',
            text: 'Account created successfully! Switching to sign in...'
        });
        setLoading(false);
        setTimeout(()=>{
            setMode('login');
            setCnic(cnic);
            setMessage({
                type: '',
                text: ''
            });
        }, 1500);
    };
    const fillTestAccount = (testCnic, testPassword)=>{
        setCnic(testCnic);
        setPassword(testPassword);
        setMode('login');
        setMessage({
            type: '',
            text: ''
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Al-Faeq Education System"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/faeq-logo.png"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/login.js",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.page,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ParticleBackground, {}, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: styles.container,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.logoHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.logoBadge,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: "/faeq-logo.png",
                                            alt: "Al-Faeq Logo",
                                            style: styles.logoImage
                                        }, void 0, false, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        style: styles.title,
                                        children: "Al-Faeq Education System"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: styles.subtitle,
                                        children: "Portal Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.card,
                                children: [
                                    message.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.message(message.type),
                                        children: [
                                            message.type === 'error' ? Icons.alertCircle(18, '#fca5a5') : Icons.checkCircle(18, '#86efac'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: message.text
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    mode === 'login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                        onSubmit: handleLogin,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                icon: Icons.idCard(20, 'currentColor'),
                                                label: "CNIC Number",
                                                value: cnic,
                                                onChange: (e)=>handleCnicChange(e),
                                                placeholder: "12345-1234567-1",
                                                maxLength: 15,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                icon: Icons.lock(20, 'currentColor'),
                                                label: "Password",
                                                type: showPassword ? 'text' : 'password',
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                placeholder: "Enter password",
                                                required: true,
                                                rightElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    style: styles.passwordToggle,
                                                    tabIndex: -1,
                                                    children: showPassword ? Icons.eyeOff(18, 'currentColor') : Icons.eye(18, 'currentColor')
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 373,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                style: styles.submitBtn,
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: [
                                                        Icons.loader(18, '#0a0e1a'),
                                                        "Authenticating..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 390,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: [
                                                        "Sign In",
                                                        Icons.arrowRight(18, '#0a0e1a')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    mode === 'signup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSignup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.inputRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                        icon: Icons.user(18, 'currentColor'),
                                                        label: "First Name",
                                                        value: signupData.firstName,
                                                        onChange: (e)=>setSignupData((p)=>({
                                                                    ...p,
                                                                    firstName: e.target.value
                                                                })),
                                                        placeholder: "First name",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 408,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                        icon: Icons.user(18, 'currentColor'),
                                                        label: "Last Name",
                                                        value: signupData.lastName,
                                                        onChange: (e)=>setSignupData((p)=>({
                                                                    ...p,
                                                                    lastName: e.target.value
                                                                })),
                                                        placeholder: "Last name",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 416,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 407,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                icon: Icons.idCard(18, 'currentColor'),
                                                label: "CNIC Number",
                                                value: signupData.cnic,
                                                onChange: (e)=>handleCnicChange(e, true),
                                                placeholder: "12345-1234567-1",
                                                maxLength: 15,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 426,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                icon: Icons.phone(18, 'currentColor'),
                                                label: "Phone Number",
                                                type: "tel",
                                                value: signupData.phone,
                                                onChange: (e)=>setSignupData((p)=>({
                                                            ...p,
                                                            phone: e.target.value
                                                        })),
                                                placeholder: "03001234567",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                icon: Icons.mail(18, 'currentColor'),
                                                label: "Email Address",
                                                type: "email",
                                                value: signupData.email,
                                                onChange: (e)=>setSignupData((p)=>({
                                                            ...p,
                                                            email: e.target.value
                                                        })),
                                                placeholder: "your@email.com",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                icon: Icons.lock(18, 'currentColor'),
                                                label: "Password",
                                                type: showPassword ? 'text' : 'password',
                                                value: signupData.password,
                                                onChange: (e)=>setSignupData((p)=>({
                                                            ...p,
                                                            password: e.target.value
                                                        })),
                                                placeholder: "Min 6 characters",
                                                required: true,
                                                rightElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    style: styles.passwordToggle,
                                                    tabIndex: -1,
                                                    children: showPassword ? Icons.eyeOff(18, 'currentColor') : Icons.eye(18, 'currentColor')
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 465,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 456,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                                icon: Icons.shield(18, 'currentColor'),
                                                label: "Confirm Password",
                                                type: "password",
                                                value: signupData.confirmPassword,
                                                onChange: (e)=>setSignupData((p)=>({
                                                            ...p,
                                                            confirmPassword: e.target.value
                                                        })),
                                                placeholder: "Re-enter password",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 476,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                style: styles.submitBtn,
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: [
                                                        Icons.loader(18, '#0a0e1a'),
                                                        "Creating Account..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 492,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: [
                                                        "Create Account",
                                                        Icons.arrowRight(18, '#0a0e1a')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 497,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 486,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.toggleSection,
                                        children: mode === 'login' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setMode('signup');
                                                setMessage({
                                                    type: '',
                                                    text: ''
                                                });
                                            },
                                            style: styles.toggleBtn,
                                            children: [
                                                Icons.plus(16, '#F2A900'),
                                                "Create new account"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 509,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setMode('login');
                                                setMessage({
                                                    type: '',
                                                    text: ''
                                                });
                                            },
                                            style: styles.toggleBtn,
                                            children: [
                                                Icons.user(16, '#F2A900'),
                                                "Already have an account? Sign In"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/login.js",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            mode === 'login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.testAccounts,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.testTitle,
                                        children: [
                                            Icons.sparkle(12, '#F2A900'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Quick Demo Login"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.testGrid,
                                        children: [
                                            {
                                                role: 'Admin',
                                                cnic: '35202-1234567-1',
                                                pass: 'admin123',
                                                icon: Icons.shield(14, '#F2A900')
                                            },
                                            {
                                                role: 'Teacher',
                                                cnic: '35202-7654321-2',
                                                pass: 'teacher123',
                                                icon: Icons.graduationCap(14, '#F2A900')
                                            },
                                            {
                                                role: 'Guardian',
                                                cnic: '35202-1111111-3',
                                                pass: 'guardian123',
                                                icon: Icons.user(14, '#F2A900')
                                            }
                                        ].map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                style: styles.testCard,
                                                onClick: ()=>fillTestAccount(acc.cnic, acc.pass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: styles.testRole,
                                                        children: [
                                                            acc.icon,
                                                            acc.role
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 549,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: styles.testCnic,
                                                        children: acc.cnic
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/login.js",
                                                        lineNumber: 553,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, acc.role, true, {
                                                fileName: "[project]/pages/login.js",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.footer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "Al-Faeq Education System © 2026"
                                }, void 0, false, {
                                    fileName: "[project]/pages/login.js",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/login.js",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/login.js",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/login.js",
        lineNumber: 316,
        columnNumber: 5
    }, this);
}
// ============================================================
// STYLES OBJECT (Clean, crisp, slightly rounded corners)
// ============================================================
const styles = {
    page: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '24px 16px',
        position: 'relative',
        background: '#0a0e1a'
    },
    container: {
        width: '100%',
        maxWidth: '430px',
        position: 'relative',
        zIndex: 1
    },
    logoHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '28px',
        textAlign: 'center'
    },
    logoBadge: {
        width: 72,
        height: 72,
        borderRadius: 20,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(242, 169, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        padding: 10
    },
    logoImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    title: {
        fontSize: '1.4rem',
        fontWeight: 800,
        color: '#ffffff',
        letterSpacing: '-0.02em',
        marginBottom: 4
    },
    subtitle: {
        fontSize: '0.85rem',
        color: 'rgba(255,255,255,0.45)',
        fontWeight: 500
    },
    card: {
        background: 'rgba(18, 26, 51, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '32px 28px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
    },
    label: {
        display: 'block',
        fontSize: '0.76rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.6)',
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
    },
    inputWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
    },
    inputIcon: {
        position: 'absolute',
        left: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        pointerEvents: 'none'
    },
    input: {
        width: '100%',
        padding: '13px 14px 13px 44px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 10,
        fontSize: '0.92rem',
        color: '#ffffff',
        outline: 'none',
        boxSizing: 'border-box'
    },
    inputFocus: {
        borderColor: '#F2A900',
        background: 'rgba(255,255,255,0.07)',
        boxShadow: '0 0 0 3px rgba(242, 169, 0, 0.15)'
    },
    passwordToggle: {
        position: 'absolute',
        right: 12,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'rgba(255,255,255,0.4)',
        display: 'flex',
        alignItems: 'center',
        padding: 4,
        borderRadius: 6
    },
    submitBtn: {
        width: '100%',
        padding: '14px 20px',
        background: 'linear-gradient(135deg, #F2A900 0%, #d99600 100%)',
        border: 'none',
        borderRadius: 10,
        fontSize: '0.92rem',
        fontWeight: 700,
        color: '#0a0e1a',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginTop: 8,
        boxShadow: '0 4px 16px rgba(242, 169, 0, 0.25)'
    },
    toggleSection: {
        marginTop: 20,
        paddingTop: 18,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center'
    },
    toggleBtn: {
        background: 'rgba(242, 169, 0, 0.08)',
        border: '1px solid rgba(242, 169, 0, 0.2)',
        borderRadius: 10,
        padding: '11px 20px',
        fontSize: '0.85rem',
        fontWeight: 600,
        color: '#F2A900',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: '100%'
    },
    message: (type)=>({
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 14px',
            borderRadius: 10,
            fontSize: '0.84rem',
            fontWeight: 500,
            marginBottom: 20,
            background: type === 'error' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(34, 197, 94, 0.12)',
            border: `1px solid ${type === 'error' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(34, 197, 94, 0.25)'}`,
            color: type === 'error' ? '#fca5a5' : '#86efac'
        }),
    testAccounts: {
        marginTop: 20,
        padding: '16px 18px',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.05)'
    },
    testTitle: {
        fontSize: '0.74rem',
        fontWeight: 700,
        color: 'rgba(255,255,255,0.4)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 6
    },
    testGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8
    },
    testCard: {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 8,
        padding: '10px 8px',
        textAlign: 'center',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
    },
    testRole: {
        fontSize: '0.78rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.8)',
        display: 'flex',
        alignItems: 'center',
        gap: 4
    },
    testCnic: {
        fontSize: '0.68rem',
        color: 'rgba(242, 169, 0, 0.7)',
        fontFamily: 'monospace'
    },
    inputRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
    },
    footer: {
        textAlign: 'center',
        marginTop: 24,
        fontSize: '0.78rem',
        color: 'rgba(255,255,255,0.25)'
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1aafzet._.js.map