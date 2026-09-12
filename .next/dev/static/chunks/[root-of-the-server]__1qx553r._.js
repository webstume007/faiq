(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/admin\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/admin.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/admin.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/admin";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/admin.js [client] (ecmascript)");
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
"[project]/pages/admin.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/db.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quranData$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quranData.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
// ============================================================
// SVG ICONS (Pure vector, zero emojis)
// ============================================================
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
                    fileName: "[project]/pages/admin.js",
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
                    fileName: "[project]/pages/admin.js",
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
                    fileName: "[project]/pages/admin.js",
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
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 13,
                    columnNumber: 281
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 13,
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
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 16,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 16,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 16,
                    columnNumber: 220
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 16,
                    columnNumber: 258
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    teacher: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M12 14l9-5-9-5-9 5 9 5z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 19,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 19,
                    columnNumber: 173
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 9v6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 19,
                    columnNumber: 333
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    calendar: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    y: "4",
                    width: "18",
                    height: "18",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 22,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "2",
                    x2: "16",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 22,
                    columnNumber: 187
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "2",
                    x2: "8",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 22,
                    columnNumber: 224
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "10",
                    x2: "21",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 22,
                    columnNumber: 259
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 22,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    student: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 25,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 25,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    admission: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 28,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "14 2 14 8 20 8"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 28,
                    columnNumber: 208
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "13",
                    x2: "8",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 28,
                    columnNumber: 243
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "17",
                    x2: "8",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 28,
                    columnNumber: 281
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "10 9 9 9 8 9"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 28,
                    columnNumber: 319
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 28,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    challan: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    x: "1",
                    y: "4",
                    width: "22",
                    height: "16",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 31,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "10",
                    x2: "23",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 31,
                    columnNumber: 187
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "14",
                    x2: "6",
                    y2: "14.01"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 31,
                    columnNumber: 225
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "10",
                    y1: "14",
                    x2: "14",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 31,
                    columnNumber: 265
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 31,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    guardian: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 34,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 34,
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
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 37,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "8",
                    y: "2",
                    width: "8",
                    height: "4",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 37,
                    columnNumber: 222
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 14l2 2 4-4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 37,
                    columnNumber: 269
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 37,
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
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 40,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 40,
                    columnNumber: 177
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 40,
                    columnNumber: 215
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 40,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    announcement: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 43,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.73 21a2 2 0 0 1-3.46 0"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 43,
                    columnNumber: 193
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 43,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    search: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 46,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 46,
                    columnNumber: 169
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 46,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    plus: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
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
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 49,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 49,
                    columnNumber: 173
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 49,
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
                fileName: "[project]/pages/admin.js",
                lineNumber: 52,
                columnNumber: 137
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 52,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    x: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 55,
                    columnNumber: 137
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 55,
                    columnNumber: 174
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 55,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    logout: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 58,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "16 17 21 12 16 7"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 58,
                    columnNumber: 189
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "9",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 58,
                    columnNumber: 226
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 58,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    chevronDown: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "6 9 12 15 18 9"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 61,
                columnNumber: 135
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 61,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    edit: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 64,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 64,
                    columnNumber: 208
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 64,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    trash: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "3 6 5 6 21 6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 67,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 67,
                    columnNumber: 171
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 67,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    eye: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 70,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 70,
                    columnNumber: 194
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 70,
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
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 73,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 73,
                    columnNumber: 176
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "18",
                    x2: "21",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 73,
                    columnNumber: 212
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 73,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    activity: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22 12 18 12 15 21 9 3 6 12 2 12"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 76,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 76,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    settings: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 79,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 79,
                    columnNumber: 169
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 79,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    flag: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 82,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "4",
                    y1: "22",
                    x2: "4",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 82,
                    columnNumber: 207
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 82,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    download: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 85,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "7 10 12 15 17 10"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 85,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "15",
                    x2: "12",
                    y2: "3"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 85,
                    columnNumber: 225
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 85,
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
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 88,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 88,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 88,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
const GOLD = '#F2A900';
const NAVY = '#002147';
const NAV_ITEMS = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Icons.dashboard
    },
    {
        id: 'teachers',
        label: 'Teachers',
        icon: Icons.teacher
    },
    {
        id: 'sessions',
        label: 'Sessions & Classes',
        icon: Icons.calendar
    },
    {
        id: 'students',
        label: 'Students',
        icon: Icons.student
    },
    {
        id: 'admissions',
        label: 'Admissions',
        icon: Icons.admission
    },
    {
        id: 'challans',
        label: 'Challans & Fees',
        icon: Icons.challan
    },
    {
        id: 'guardians',
        label: 'Guardians',
        icon: Icons.guardian
    },
    {
        id: 'audit',
        label: 'Audit Trail',
        icon: Icons.activity
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: Icons.settings
    },
    {
        id: 'announcements',
        label: 'Announcements',
        icon: Icons.announcement
    }
];
// ============================================================
// REUSABLE UI ATOMS
// ============================================================
const Card = ({ children, style, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        style: {
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16,
            padding: 24,
            transition: 'all 0.3s ease',
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 113,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
const StatCard = ({ label, value, icon, color, sublabel })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            cursor: 'default'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: `${color}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                },
                children: icon(22, color)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 127,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '1.6rem',
                            fontWeight: 800,
                            color: '#fff',
                            lineHeight: 1
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 136,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.78rem',
                            color: 'rgba(255,255,255,0.5)',
                            marginTop: 4,
                            fontWeight: 600
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 137,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    sublabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.7rem',
                            color: 'rgba(255,255,255,0.3)',
                            marginTop: 2
                        },
                        children: sublabel
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 138,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 135,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 126,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = StatCard;
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
        },
        gold: {
            background: 'rgba(242,169,0,0.15)',
            color: GOLD,
            border: '1px solid rgba(242,169,0,0.3)'
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
        fileName: "[project]/pages/admin.js",
        lineNumber: 166,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Button;
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
        fileName: "[project]/pages/admin.js",
        lineNumber: 171,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Badge;
const InputField = ({ label, value, onChange, type = 'text', placeholder, required, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 14
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 6,
                    fontWeight: 500
                },
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#ef4444'
                        },
                        children: " *"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 185,
                        columnNumber: 158
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 185,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                value: value ?? '',
                onChange: onChange,
                placeholder: placeholder,
                required: required,
                disabled: disabled,
                style: {
                    width: '100%',
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10,
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                }
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 186,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 184,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = InputField;
const SelectField = ({ label, value, onChange, options, required, disabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 14
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 6,
                    fontWeight: 500
                },
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#ef4444'
                        },
                        children: " *"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 210,
                        columnNumber: 158
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 210,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: value ?? '',
                onChange: onChange,
                required: required,
                disabled: disabled,
                style: {
                    width: '100%',
                    padding: '10px 14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10,
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        style: {
                            background: '#1a1f2e'
                        },
                        children: "Select..."
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 227,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: o.value,
                            style: {
                                background: '#1a1f2e'
                            },
                            children: o.label
                        }, o.value, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 229,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 211,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 209,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = SelectField;
const Modal = ({ title, onClose, children, width = 560 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.65)',
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
                maxWidth: width,
                maxHeight: '88vh',
                overflow: 'auto',
                boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 24px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        position: 'sticky',
                        top: 0,
                        background: '#111625',
                        zIndex: 1,
                        borderRadius: '20px 20px 0 0'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                color: '#fff',
                                margin: 0
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 261,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'rgba(255,255,255,0.4)',
                                padding: 4
                            },
                            children: Icons.x(18)
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 262,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 252,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        padding: 24
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 266,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 242,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 236,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = Modal;
const Table = ({ columns, data, actions })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            overflowX: 'auto',
            borderRadius: 14,
            border: '1px solid rgba(255,255,255,0.06)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: {
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.82rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        style: {
                            background: 'rgba(255,255,255,0.03)'
                        },
                        children: [
                            columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    style: {
                                        padding: '12px 16px',
                                        textAlign: 'left',
                                        color: 'rgba(255,255,255,0.5)',
                                        fontWeight: 600,
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        whiteSpace: 'nowrap'
                                    },
                                    children: col.label
                                }, col.key, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                style: {
                                    padding: '12px 16px',
                                    textAlign: 'right',
                                    color: 'rgba(255,255,255,0.5)',
                                    fontWeight: 600,
                                    fontSize: '0.75rem'
                                },
                                children: "Actions"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 279,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 275,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 274,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: columns.length + (actions ? 1 : 0),
                            style: {
                                padding: 40,
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.25)'
                            },
                            children: "No records found"
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 284,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 284,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : data.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            style: {
                                borderTop: '1px solid rgba(255,255,255,0.04)',
                                transition: 'background 0.15s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.02)',
                            onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                            children: [
                                columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: '12px 16px',
                                            color: '#e2e8f0',
                                            whiteSpace: col.nowrap ? 'nowrap' : 'normal'
                                        },
                                        children: col.render ? col.render(row) : row[col.key]
                                    }, col.key, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    style: {
                                        padding: '12px 16px',
                                        textAlign: 'right'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 6,
                                            justifyContent: 'flex-end'
                                        },
                                        children: actions(row)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, row.id || i, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 286,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 282,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 273,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 272,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = Table;
const SectionHeader = ({ title, subtitle, action })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            flexWrap: 'wrap',
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '1.3rem',
                            fontWeight: 800,
                            color: '#fff',
                            margin: 0
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 309,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.82rem',
                            color: 'rgba(255,255,255,0.4)',
                            marginTop: 4
                        },
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 310,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 308,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            action
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 307,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = SectionHeader;
const ActionButton = ({ icon, onClick, title, color = 'rgba(255,255,255,0.4)' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: title,
        style: {
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 8,
            padding: 6,
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color
        },
        children: icon
    }, void 0, false, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 317,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = ActionButton;
// ============================================================
// SECTION 1: DASHBOARD
// ============================================================
function DashboardSection({ user, activeSession }) {
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [flags, setFlags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [resolvingFlag, setResolvingFlag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resolutionNotes, setResolutionNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searching, setSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DashboardSection.useCallback[loadData]": async ()=>{
            const [s, f] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDashboardStats"](activeSession?.id),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveAbsenceFlags"]()
            ]);
            setStats(s);
            setFlags(f);
        }
    }["DashboardSection.useCallback[loadData]"], [
        activeSession
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardSection.useEffect": ()=>{
            loadData();
        }
    }["DashboardSection.useEffect"], [
        loadData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardSection.useEffect": ()=>{
            if (!searchQuery.trim()) {
                setSearchResults(null);
                return;
            }
            const t = setTimeout({
                "DashboardSection.useEffect.t": async ()=>{
                    setSearching(true);
                    const results = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["globalSearch"](searchQuery);
                    setSearchResults(results);
                    setSearching(false);
                }
            }["DashboardSection.useEffect.t"], 400);
            return ({
                "DashboardSection.useEffect": ()=>clearTimeout(t)
            })["DashboardSection.useEffect"];
        }
    }["DashboardSection.useEffect"], [
        searchQuery
    ]);
    const handleResolveFlag = async ()=>{
        if (!resolvingFlag) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["resolveAbsenceFlag"](resolvingFlag.id, user.id, resolutionNotes);
        setResolvingFlag(null);
        setResolutionNotes('');
        loadData();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    marginBottom: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 16,
                            padding: '14px 20px'
                        },
                        children: [
                            Icons.search(20, 'rgba(255,255,255,0.4)'),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                placeholder: "Search students, teachers, guardians by name, CNIC, or roll number...",
                                style: {
                                    flex: 1,
                                    background: 'none',
                                    border: 'none',
                                    outline: 'none',
                                    color: '#fff',
                                    fontSize: '0.92rem'
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this),
                            searching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 18,
                                    height: 18,
                                    border: '2px solid rgba(255,255,255,0.1)',
                                    borderTopColor: GOLD,
                                    borderRadius: '50%',
                                    animation: 'spin 0.8s linear infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 391,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 375,
                        columnNumber: 9
                    }, this),
                    searchResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            marginTop: 8,
                            background: '#151928',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: 14,
                            padding: 16,
                            zIndex: 100,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            maxHeight: 320,
                            overflow: 'auto'
                        },
                        children: [
                            'students',
                            'teachers',
                            'guardians'
                        ].map((cat)=>searchResults[cat]?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.7rem',
                                            fontWeight: 700,
                                            color: GOLD,
                                            textTransform: 'uppercase',
                                            marginBottom: 6,
                                            letterSpacing: '0.1em'
                                        },
                                        children: cat
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 404,
                                        columnNumber: 19
                                    }, this),
                                    searchResults[cat].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '8px 12px',
                                                borderRadius: 8,
                                                cursor: 'pointer',
                                                fontSize: '0.85rem',
                                                color: '#e2e8f0',
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        item.first_name,
                                                        " ",
                                                        item.last_name,
                                                        " ",
                                                        item.roll_no && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: GOLD,
                                                                marginLeft: 8
                                                            },
                                                            children: [
                                                                "(",
                                                                item.roll_no,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/admin.js",
                                                            lineNumber: 407,
                                                            columnNumber: 81
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/admin.js",
                                                    lineNumber: 407,
                                                    columnNumber: 23
                                                }, this),
                                                item.program_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                    text: item.program_type === 'hifz' ? 'Hifz' : 'Dars-e-Nizami',
                                                    color: "#3b82f6"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/admin.js",
                                                    lineNumber: 408,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 406,
                                            columnNumber: 21
                                        }, this))
                                ]
                            }, cat, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 403,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 394,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
                    gap: 16,
                    marginBottom: 28
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Hifz Students",
                        value: stats?.hifzStudents ?? '—',
                        icon: Icons.book,
                        color: GOLD,
                        sublabel: "Quran Memorization"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Dars-e-Nizami",
                        value: stats?.darsStudents ?? '—',
                        icon: Icons.student,
                        color: "#3b82f6",
                        sublabel: "Sanviya & Shahadah"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Total Teachers",
                        value: stats?.totalTeachers ?? '—',
                        icon: Icons.teacher,
                        color: "#10b981"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Pending Admissions",
                        value: stats?.pendingAdmissions ?? '—',
                        icon: Icons.admission,
                        color: "#f97316"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Pending Challans",
                        value: stats?.pendingChallans ?? '—',
                        icon: Icons.challan,
                        color: "#a855f7"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Absence Escalations",
                        value: stats?.activeAbsenceFlags ?? '—',
                        icon: Icons.flag,
                        color: "#ef4444",
                        sublabel: "Requires Office Visit"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            flags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                style: {
                    marginBottom: 28,
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    background: 'rgba(239, 68, 68, 0.05)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            marginBottom: 14
                        },
                        children: [
                            Icons.flag(20, '#ef4444'),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    margin: 0,
                                    fontSize: '1rem',
                                    color: '#fca5a5',
                                    fontWeight: 700
                                },
                                children: "Flagged Students (2+ Consecutive Absences — Visit Office Requested)"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gap: 10
                        },
                        children: flags.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 16px',
                                    background: 'rgba(0,0,0,0.2)',
                                    borderRadius: 10,
                                    flexWrap: 'wrap',
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700,
                                                    color: '#fff'
                                                },
                                                children: [
                                                    f.student?.first_name,
                                                    " ",
                                                    f.student?.last_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 444,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: GOLD,
                                                    marginLeft: 8,
                                                    fontSize: '0.8rem'
                                                },
                                                children: [
                                                    "(",
                                                    f.student?.roll_no,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 445,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.4)',
                                                    marginLeft: 12,
                                                    fontSize: '0.78rem'
                                                },
                                                children: [
                                                    "Class: ",
                                                    f.student?.class?.class_name,
                                                    " • Guardian: ",
                                                    f.student?.guardian?.user?.first_name,
                                                    " (",
                                                    f.student?.guardian?.user?.phone,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                text: `${f.consecutive_absences} Absences`,
                                                color: "#ef4444"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                variant: "success",
                                                onClick: ()=>setResolvingFlag(f),
                                                style: {
                                                    padding: '6px 12px',
                                                    fontSize: '0.75rem'
                                                },
                                                children: "Mark Visited & Clear"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, f.id, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 439,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 430,
                columnNumber: 9
            }, this),
            resolvingFlag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: `Resolve Absence Flag: ${resolvingFlag.student?.first_name}`,
                onClose: ()=>setResolvingFlag(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.85rem',
                            marginBottom: 14
                        },
                        children: [
                            "Guardian ",
                            resolvingFlag.student?.guardian?.user?.first_name,
                            " visited the office regarding ",
                            resolvingFlag.student?.first_name,
                            "'s ",
                            resolvingFlag.consecutive_absences,
                            " consecutive absences. Enter resolution notes to clear the portal banner."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                        label: "Resolution Remarks",
                        value: resolutionNotes,
                        onChange: (e)=>setResolutionNotes(e.target.value),
                        placeholder: "e.g. Guardian visited, student had medical leave, submitted doctor note.",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 468,
                        columnNumber: 11
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
                                onClick: ()=>setResolvingFlag(null),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 470,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "success",
                                onClick: handleResolveFlag,
                                children: "Clear Absence Flag"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 469,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 464,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 372,
        columnNumber: 5
    }, this);
}
_s(DashboardSection, "k5rMCeSSiP+dleRn9Bh059IQq7s=");
_c10 = DashboardSection;
// ============================================================
// SECTION 2: TEACHERS
// ============================================================
function TeachersSection({ user }) {
    _s1();
    const [teachers, setTeachers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTeacher, setEditingTeacher] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        cnic: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        education: '',
        employee_id: '',
        qualification: '',
        specialization: '',
        joining_date: ''
    });
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const loadTeachers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TeachersSection.useCallback[loadTeachers]": async ()=>{
            setLoading(true);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllTeachers"]();
            setTeachers(data);
            setLoading(false);
        }
    }["TeachersSection.useCallback[loadTeachers]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeachersSection.useEffect": ()=>{
            loadTeachers();
        }
    }["TeachersSection.useEffect"], [
        loadTeachers
    ]);
    const handleSave = async ()=>{
        setSaving(true);
        setMsg('');
        if (editingTeacher) {
            // Update existing
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateTeacher"](editingTeacher.id, {
                qualification: formData.qualification,
                specialization: formData.specialization
            }, user.id);
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateUser"](editingTeacher.id, {
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                education: formData.education
            }, user.id);
        } else {
            // Create new
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createTeacher"]({
                cnic: formData.cnic,
                password: formData.password,
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                education: formData.education
            }, {
                employee_id: formData.employee_id,
                qualification: formData.qualification,
                specialization: formData.specialization,
                joining_date: formData.joining_date
            }, user.id);
            if (result.error) {
                setMsg(result.error);
                setSaving(false);
                return;
            }
        }
        setShowModal(false);
        setEditingTeacher(null);
        loadTeachers();
        setSaving(false);
    };
    const openEdit = (t)=>{
        setEditingTeacher(t);
        setFormData({
            cnic: t.user?.cnic || '',
            password: '',
            first_name: t.user?.first_name || '',
            last_name: t.user?.last_name || '',
            email: t.user?.email || '',
            phone: t.user?.phone || '',
            education: t.user?.education || '',
            employee_id: t.employee_id || '',
            qualification: t.qualification || '',
            specialization: t.specialization || '',
            joining_date: t.joining_date || ''
        });
        setShowModal(true);
    };
    const columns = [
        {
            key: 'employee_id',
            label: 'ID',
            nowrap: true
        },
        {
            key: 'name',
            label: 'Name',
            render: (r)=>`${r.user?.first_name || ''} ${r.user?.last_name || ''}`
        },
        {
            key: 'cnic',
            label: 'CNIC',
            render: (r)=>r.user?.cnic,
            nowrap: true
        },
        {
            key: 'phone',
            label: 'Phone',
            render: (r)=>r.user?.phone || '—',
            nowrap: true
        },
        {
            key: 'specialization',
            label: 'Specialization'
        },
        {
            key: 'qualification',
            label: 'Qualification'
        },
        {
            key: 'status',
            label: 'Status',
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    text: r.status,
                    color: r.status === 'active' ? '#22c55e' : '#ef4444'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 558,
                    columnNumber: 54
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "Teachers",
                subtitle: `${teachers.length} registered Islamic scholars & teachers`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: ()=>{
                        setEditingTeacher(null);
                        setFormData({});
                        setShowModal(true);
                    },
                    children: [
                        Icons.plus(16),
                        " Add Teacher"
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 564,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 563,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 566,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: teachers,
                actions: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                            icon: Icons.edit(14),
                            title: "Edit Teacher",
                            color: "#3b82f6",
                            onClick: ()=>openEdit(row)
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 569,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 568,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 567,
                columnNumber: 9
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: editingTeacher ? `Edit Teacher: ${editingTeacher.user?.first_name}` : 'Create Teacher Account',
                onClose: ()=>setShowModal(false),
                width: 600,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "First Name",
                                value: formData.first_name,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            first_name: e.target.value
                                        })),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 577,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Last Name",
                                value: formData.last_name,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            last_name: e.target.value
                                        })),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 578,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "CNIC",
                                value: formData.cnic,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            cnic: e.target.value
                                        })),
                                placeholder: "35202-1234567-1",
                                required: true,
                                disabled: !!editingTeacher
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 579,
                                columnNumber: 13
                            }, this),
                            !editingTeacher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Password",
                                value: formData.password,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            password: e.target.value
                                        })),
                                type: "password",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 580,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Email",
                                value: formData.email,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            email: e.target.value
                                        })),
                                type: "email"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 581,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Phone",
                                value: formData.phone,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            phone: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 582,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Employee ID",
                                value: formData.employee_id,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            employee_id: e.target.value
                                        })),
                                placeholder: "EMP-008",
                                required: true,
                                disabled: !!editingTeacher
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Qualification",
                                value: formData.qualification,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            qualification: e.target.value
                                        })),
                                placeholder: "e.g. Shahadah Aalmiya / Wifaq"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Specialization",
                                value: formData.specialization,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            specialization: e.target.value
                                        })),
                                placeholder: "e.g. Hifz, Fiqh, Hadith, Nahw"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 585,
                                columnNumber: 13
                            }, this),
                            !editingTeacher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Joining Date",
                                value: formData.joining_date,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            joining_date: e.target.value
                                        })),
                                type: "date"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 586,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 576,
                        columnNumber: 11
                    }, this),
                    msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#ef4444',
                            fontSize: '0.82rem',
                            marginBottom: 12
                        },
                        children: msg
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 588,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            justifyContent: 'flex-end',
                            marginTop: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "secondary",
                                onClick: ()=>setShowModal(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 590,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: handleSave,
                                disabled: saving,
                                children: saving ? 'Saving...' : editingTeacher ? 'Update Teacher' : 'Create Teacher'
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 589,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 575,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 562,
        columnNumber: 5
    }, this);
}
_s1(TeachersSection, "xjLn5l44tYirk3JjuCMoo9nUii8=");
_c11 = TeachersSection;
// ============================================================
// SECTION 3: SESSIONS, CLASSES & PROMOTION
// ============================================================
function SessionsSection({ user, activeSession, onSessionChange }) {
    _s2();
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [classes, setClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [expandedSession, setExpandedSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(activeSession?.id || null);
    // Wizard state
    const [showWizard, setShowWizard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wizardStep, setWizardStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [wizardData, setWizardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        start_date: '',
        end_date: '',
        cloneFrom: '',
        hifz_fee: 4000,
        dars_fee: 5000
    });
    // Promotion state
    const [showPromotion, setShowPromotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [promoStudents, setPromoStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [promoSelection, setPromoSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SessionsSection.useCallback[loadData]": async ()=>{
            setLoading(true);
            const [s, cl, co] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllSessions"](),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllClasses"](),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllCourses"]()
            ]);
            setSessions(s);
            setClasses(cl);
            setCourses(co);
            setLoading(false);
        }
    }["SessionsSection.useCallback[loadData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SessionsSection.useEffect": ()=>{
            loadData();
        }
    }["SessionsSection.useEffect"], [
        loadData
    ]);
    const handleCreateSessionWizard = async ()=>{
        if (wizardData.cloneFrom) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cloneSession"](wizardData.cloneFrom, {
                name: wizardData.name,
                start_date: wizardData.start_date,
                end_date: wizardData.end_date,
                is_active: true,
                fee_structure: {
                    hifz_monthly: wizardData.hifz_fee,
                    dars_monthly: wizardData.dars_fee
                }
            }, user.id);
        } else {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSession"]({
                name: wizardData.name,
                start_date: wizardData.start_date,
                end_date: wizardData.end_date,
                is_active: true,
                fee_structure: {
                    hifz_monthly: wizardData.hifz_fee,
                    dars_monthly: wizardData.dars_fee
                }
            }, user.id);
        }
        setShowWizard(false);
        loadData();
        onSessionChange && onSessionChange();
    };
    const openPromotion = async ()=>{
        if (!activeSession) return;
        const studs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPromotionCandidates"](activeSession.id);
        setPromoStudents(studs);
        const initialMap = {};
        studs.forEach((s)=>{
            // Default: Hifz stays in Hifz, Dars progresses
            initialMap[s.id] = {
                action: 'promote',
                hold_back: false
            };
        });
        setPromoSelection(initialMap);
        setShowPromotion(true);
    };
    const handleExecutePromotion = async ()=>{
        // Construct promotion payloads
        const activeNewSession = sessions.find((s)=>s.id !== activeSession.id && s.is_active);
        if (!activeNewSession) {
            alert('Please create and activate the new session before executing student promotions.');
            return;
        }
        const payload = promoStudents.map((st)=>{
            const sel = promoSelection[st.id] || {
                hold_back: false
            };
            const isHifz = st.program_type === 'hifz';
            const promoType = sel.hold_back ? 'held_back' : isHifz ? 'promoted' : 'promoted';
            return {
                student_id: st.id,
                from_session_id: activeSession.id,
                to_session_id: activeNewSession.id,
                from_class_id: st.class_id,
                to_class_id: st.class_id,
                from_class_level: st.class?.course?.class_level || null,
                to_class_level: st.class?.course?.class_level || null,
                promotion_type: promoType,
                notes: isHifz ? 'Cumulative Hifz progress maintained across session' : 'Standard class promotion'
            };
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["promoteStudents"](payload, user.id);
        setShowPromotion(false);
        loadData();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "Sessions & Academic Programs",
                subtitle: `${sessions.length} sessions, ${courses.length} courses, ${classes.length} classes`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variant: "gold",
                            onClick: openPromotion,
                            children: [
                                Icons.activity(16, GOLD),
                                " Promote / Rollover Students"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 714,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            onClick: ()=>{
                                setWizardStep(1);
                                setShowWizard(true);
                            },
                            children: [
                                Icons.plus(16),
                                " New Session Wizard"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 717,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 713,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 709,
                columnNumber: 7
            }, this),
            sessions.map((session)=>{
                const sessionClasses = classes.filter((c)=>c.session_id === session.id || c.session?.name === session.name);
                const sessionCourses = courses.filter((c)=>c.session_id === session.id || c.session?.name === session.name);
                const isExpanded = expandedSession === session.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                    style: {
                        marginBottom: 16,
                        cursor: 'pointer'
                    },
                    onClick: ()=>setExpandedSession(isExpanded ? null : session.id),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
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
                                                width: 42,
                                                height: 42,
                                                borderRadius: 12,
                                                background: session.is_active ? `${GOLD}20` : 'rgba(255,255,255,0.05)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            },
                                            children: Icons.calendar(20, session.is_active ? GOLD : 'rgba(255,255,255,0.4)')
                                        }, void 0, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 734,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 800,
                                                        color: '#fff',
                                                        fontSize: '1.05rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 10
                                                    },
                                                    children: [
                                                        session.name,
                                                        session.is_active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            text: "Active Session",
                                                            color: "#22c55e"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/admin.js",
                                                            lineNumber: 740,
                                                            columnNumber: 43
                                                        }, this),
                                                        session.status === 'archived' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                            text: "Archived (Read-Only)",
                                                            color: "#6b7280"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/admin.js",
                                                            lineNumber: 741,
                                                            columnNumber: 55
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/admin.js",
                                                    lineNumber: 738,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '0.75rem',
                                                        color: 'rgba(255,255,255,0.4)',
                                                        marginTop: 4
                                                    },
                                                    children: [
                                                        session.start_date,
                                                        " — ",
                                                        session.end_date || 'Ongoing'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/admin.js",
                                                    lineNumber: 743,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 737,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '0.8rem',
                                                color: 'rgba(255,255,255,0.4)'
                                            },
                                            children: [
                                                sessionCourses.length,
                                                " programs, ",
                                                sessionClasses.length,
                                                " classes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 749,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: isExpanded ? 'rotate(180deg)' : 'none',
                                                transition: 'transform 0.2s'
                                            },
                                            children: Icons.chevronDown(16, 'rgba(255,255,255,0.4)')
                                        }, void 0, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 752,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 748,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 732,
                            columnNumber: 13
                        }, this),
                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 20,
                                paddingTop: 16,
                                borderTop: '1px solid rgba(255,255,255,0.06)'
                            },
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: GOLD,
                                        textTransform: 'uppercase',
                                        marginBottom: 10,
                                        letterSpacing: '0.08em'
                                    },
                                    children: "Academic Programs in this Session"
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 761,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 8,
                                        flexWrap: 'wrap',
                                        marginBottom: 20
                                    },
                                    children: sessionCourses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            text: `${c.course_code} — ${c.course_name}`,
                                            color: c.course_type === 'hifz' ? GOLD : '#3b82f6'
                                        }, c.id, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 766,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 764,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: GOLD,
                                        textTransform: 'uppercase',
                                        marginBottom: 10,
                                        letterSpacing: '0.08em'
                                    },
                                    children: "Enrolled Classes & Assigned Teachers"
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 771,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                                    columns: [
                                        {
                                            key: 'class_name',
                                            label: 'Class / Halqa'
                                        },
                                        {
                                            key: 'section',
                                            label: 'Section'
                                        },
                                        {
                                            key: 'course',
                                            label: 'Program',
                                            render: (r)=>r.course ? `${r.course.course_code} (${r.course.course_type === 'hifz' ? 'Hifz' : 'Dars-e-Nizami'})` : '—'
                                        },
                                        {
                                            key: 'incharge',
                                            label: 'Incharge Scholar',
                                            render: (r)=>r.incharge?.user ? `${r.incharge.user.first_name} ${r.incharge.user.last_name}` : 'Assigned'
                                        },
                                        {
                                            key: 'max_students',
                                            label: 'Capacity'
                                        }
                                    ],
                                    data: sessionClasses
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 774,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 759,
                            columnNumber: 15
                        }, this)
                    ]
                }, session.id, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 731,
                    columnNumber: 11
                }, this);
            }),
            showWizard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "New Academic Session Wizard",
                onClose: ()=>setShowWizard(false),
                width: 600,
                children: [
                    wizardStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Session Name",
                                value: wizardData.name,
                                onChange: (e)=>setWizardData((p)=>({
                                            ...p,
                                            name: e.target.value
                                        })),
                                placeholder: "e.g. Fall 2027 / 1448-49 Hijri",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 795,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '0 16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                        label: "Start Date",
                                        value: wizardData.start_date,
                                        onChange: (e)=>setWizardData((p)=>({
                                                    ...p,
                                                    start_date: e.target.value
                                                })),
                                        type: "date",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 797,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                        label: "End Date",
                                        value: wizardData.end_date,
                                        onChange: (e)=>setWizardData((p)=>({
                                                    ...p,
                                                    end_date: e.target.value
                                                })),
                                        type: "date",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 798,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 796,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                label: "Clone Structure From Existing Session",
                                value: wizardData.cloneFrom,
                                onChange: (e)=>setWizardData((p)=>({
                                            ...p,
                                            cloneFrom: e.target.value
                                        })),
                                options: sessions.map((s)=>({
                                        value: s.id,
                                        label: `${s.name} (Copies all programs, classes & subjects)`
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 800,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    marginTop: 16
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    onClick: ()=>setWizardStep(2),
                                    children: "Next: Fee Structure →"
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 807,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 806,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 794,
                        columnNumber: 13
                    }, this),
                    wizardStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    color: GOLD,
                                    margin: '0 0 12px 0'
                                },
                                children: "Configure Monthly Tuition Fees"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 814,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '0 16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                        label: "Hifz Ul Quran Fee (Rs.)",
                                        value: wizardData.hifz_fee,
                                        onChange: (e)=>setWizardData((p)=>({
                                                    ...p,
                                                    hifz_fee: e.target.value
                                                })),
                                        type: "number"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 816,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                        label: "Dars-e-Nizami Fee (Rs.)",
                                        value: wizardData.dars_fee,
                                        onChange: (e)=>setWizardData((p)=>({
                                                    ...p,
                                                    dars_fee: e.target.value
                                                })),
                                        type: "number"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 815,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.4)'
                                },
                                children: "Creating this session will automatically activate it and archive the previous session."
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 819,
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
                                        onClick: ()=>setWizardStep(1),
                                        children: "← Back"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 823,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        onClick: handleCreateSessionWizard,
                                        children: "Create & Activate Session"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 824,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 822,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 813,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 792,
                columnNumber: 9
            }, this),
            showPromotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Student Promotion & Session Rollover",
                onClose: ()=>setShowPromotion(false),
                width: 700,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.82rem',
                            color: 'rgba(255,255,255,0.6)',
                            marginBottom: 16
                        },
                        children: 'Review students eligible for session transition. Hifz students preserve cumulative memorization progress, while Dars-e-Nizami students advance to the next class level. Check "Hold Back" to retain specific students.'
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 834,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: 350,
                            overflowY: 'auto',
                            marginBottom: 16
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                            columns: [
                                {
                                    key: 'name',
                                    label: 'Student',
                                    render: (r)=>`${r.first_name} ${r.last_name} (${r.roll_no})`
                                },
                                {
                                    key: 'program',
                                    label: 'Program',
                                    render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                            text: r.program_type === 'hifz' ? 'Hifz' : 'Dars-e-Nizami',
                                            color: r.program_type === 'hifz' ? GOLD : '#3b82f6'
                                        }, void 0, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 841,
                                            columnNumber: 68
                                        }, this)
                                },
                                {
                                    key: 'current_class',
                                    label: 'Current Class',
                                    render: (r)=>r.class?.class_name || '—'
                                },
                                {
                                    key: 'action',
                                    label: 'Action',
                                    render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 6,
                                                fontSize: '0.78rem',
                                                color: '#fff',
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: promoSelection[r.id]?.hold_back || false,
                                                    onChange: (e)=>setPromoSelection((p)=>({
                                                                ...p,
                                                                [r.id]: {
                                                                    ...p[r.id],
                                                                    hold_back: e.target.checked
                                                                }
                                                            })),
                                                    style: {
                                                        accentColor: '#ef4444'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/admin.js",
                                                    lineNumber: 846,
                                                    columnNumber: 23
                                                }, this),
                                                "Hold Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 845,
                                            columnNumber: 21
                                        }, this)
                                }
                            ],
                            data: promoStudents
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 838,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 837,
                        columnNumber: 11
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
                                onClick: ()=>setShowPromotion(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 864,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: handleExecutePromotion,
                                children: "Confirm & Execute Promotion"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 865,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 863,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 833,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 708,
        columnNumber: 5
    }, this);
}
_s2(SessionsSection, "hOh78jnPJoTnXR9N7HWbWxLUPs4=");
_c12 = SessionsSection;
// ============================================================
// SECTION 4: STUDENTS
// ============================================================
function StudentsSection({ user, activeSession }) {
    _s3();
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [classes, setClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterProgram, setFilterProgram] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingStudent, setEditingStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [viewingHifzHistory, setViewingHifzHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hifzData, setHifzData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StudentsSection.useCallback[loadData]": async ()=>{
            setLoading(true);
            const [s, cl] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllStudents"](),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllClasses"]()
            ]);
            setStudents(s);
            setClasses(cl);
            setLoading(false);
        }
    }["StudentsSection.useCallback[loadData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentsSection.useEffect": ()=>{
            loadData();
        }
    }["StudentsSection.useEffect"], [
        loadData
    ]);
    const handleUpdate = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateStudent"](editingStudent.id, editForm, user.id);
        setEditingStudent(null);
        loadData();
    };
    const handleViewHifz = async (student)=>{
        setViewingHifzHistory(student);
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStudentHifzHistory"](student.id);
        setHifzData(data);
    };
    // CSV Export
    const exportCSV = ()=>{
        const headers = [
            'Roll No',
            'First Name',
            'Last Name',
            'Program',
            'Class',
            'Guardian',
            'Guardian Phone',
            'B-Form',
            'Status'
        ];
        const rows = students.map((s)=>[
                s.roll_no,
                s.first_name,
                s.last_name,
                s.program_type,
                s.class?.class_name,
                `${s.guardian?.user?.first_name || ''} ${s.guardian?.user?.last_name || ''}`,
                s.guardian?.user?.phone,
                s.b_form_no,
                s.status
            ]);
        const csvContent = 'data:text/csv;charset=utf-8,' + [
            headers.join(','),
            ...rows.map((e)=>e.join(','))
        ].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `Al_Faeq_Students_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const filtered = filterProgram === 'ALL' ? students : students.filter((s)=>s.program_type === filterProgram);
    const columns = [
        {
            key: 'roll_no',
            label: 'Roll No',
            nowrap: true
        },
        {
            key: 'name',
            label: 'Student Name',
            render: (r)=>`${r.first_name} ${r.last_name}`
        },
        {
            key: 'program',
            label: 'Program',
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    text: r.program_type === 'hifz' ? 'Hifz Ul Quran' : 'Dars-e-Nizami',
                    color: r.program_type === 'hifz' ? GOLD : '#3b82f6'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 934,
                    columnNumber: 56
                }, this)
        },
        {
            key: 'class',
            label: 'Class / Halqa',
            render: (r)=>r.class ? `${r.class.class_name} (${r.class.section})` : '—'
        },
        {
            key: 'guardian',
            label: 'Guardian',
            render: (r)=>r.guardian?.user ? `${r.guardian.user.first_name} ${r.guardian.user.last_name}` : '—'
        },
        {
            key: 'status',
            label: 'Status',
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    text: r.status,
                    color: r.status === 'active' ? '#22c55e' : '#ef4444'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 937,
                    columnNumber: 54
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "Students Roster",
                subtitle: `${filtered.length} students enrolled`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 10
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "secondary",
                        onClick: exportCSV,
                        children: [
                            Icons.download(16),
                            " Export CSV"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 947,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 946,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 942,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8,
                    marginBottom: 20
                },
                children: [
                    {
                        id: 'ALL',
                        label: 'All Students'
                    },
                    {
                        id: 'hifz',
                        label: 'Hifz Ul Quran'
                    },
                    {
                        id: 'dars_nizami',
                        label: 'Dars-e-Nizami'
                    }
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilterProgram(tab.id),
                        style: {
                            padding: '8px 16px',
                            borderRadius: 10,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            background: filterProgram === tab.id ? `${GOLD}22` : 'rgba(255,255,255,0.04)',
                            color: filterProgram === tab.id ? GOLD : 'rgba(255,255,255,0.5)'
                        },
                        children: tab.label
                    }, tab.id, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 961,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 955,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 975,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: filtered,
                actions: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            row.program_type === 'hifz' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.book(14),
                                title: "Hifz Quran Progress",
                                color: GOLD,
                                onClick: ()=>handleViewHifz(row)
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 979,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.edit(14),
                                title: "Edit Student",
                                color: "#3b82f6",
                                onClick: ()=>{
                                    setEditingStudent(row);
                                    setEditForm({
                                        first_name: row.first_name,
                                        last_name: row.last_name,
                                        class_id: row.class_id,
                                        b_form_no: row.b_form_no || '',
                                        blood_group: row.blood_group || '',
                                        status: row.status
                                    });
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 981,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 977,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 976,
                columnNumber: 9
            }, this),
            editingStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: `Edit Student: ${editingStudent.first_name} ${editingStudent.last_name}`,
                onClose: ()=>setEditingStudent(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "First Name",
                                value: editForm.first_name,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            first_name: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1000,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Last Name",
                                value: editForm.last_name,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            last_name: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1001,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "B-Form No",
                                value: editForm.b_form_no,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            b_form_no: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1002,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Blood Group",
                                value: editForm.blood_group,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            blood_group: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1003,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                label: "Assigned Class",
                                value: editForm.class_id,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            class_id: e.target.value
                                        })),
                                options: classes.map((c)=>({
                                        value: c.id,
                                        label: `${c.class_name} (${c.section})`
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1004,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                label: "Status",
                                value: editForm.status,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            status: e.target.value
                                        })),
                                options: [
                                    {
                                        value: 'active',
                                        label: 'Active'
                                    },
                                    {
                                        value: 'inactive',
                                        label: 'Inactive'
                                    },
                                    {
                                        value: 'graduated',
                                        label: 'Graduated'
                                    },
                                    {
                                        value: 'promoted',
                                        label: 'Promoted'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1010,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 999,
                        columnNumber: 11
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
                                onClick: ()=>setEditingStudent(null),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1023,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: handleUpdate,
                                children: "Save Changes"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1024,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1022,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 998,
                columnNumber: 9
            }, this),
            viewingHifzHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: `Hifz Progress: ${viewingHifzHistory.first_name} (${viewingHifzHistory.roll_no})`,
                onClose: ()=>setViewingHifzHistory(null),
                width: 640,
                children: [
                    hifzData?.stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 12,
                            marginBottom: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 16,
                                    background: 'rgba(242,169,0,0.1)',
                                    borderRadius: 12,
                                    border: '1px solid rgba(242,169,0,0.2)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.75rem',
                                            color: GOLD,
                                            fontWeight: 700
                                        },
                                        children: "MEMORIZATION COMPLETION"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1035,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1.4rem',
                                            fontWeight: 800,
                                            color: '#fff',
                                            marginTop: 4
                                        },
                                        children: [
                                            hifzData.stats.completionPercentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1036,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.4)',
                                            marginTop: 2
                                        },
                                        children: [
                                            hifzData.stats.totalAyahsMemorized,
                                            " / 6,236 Ayahs"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1037,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1034,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: 16,
                                    background: 'rgba(59,130,246,0.1)',
                                    borderRadius: 12,
                                    border: '1px solid rgba(59,130,246,0.2)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.75rem',
                                            color: '#3b82f6',
                                            fontWeight: 700
                                        },
                                        children: "MANZIL (PARAS REVISED)"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1040,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '1.4rem',
                                            fontWeight: 800,
                                            color: '#fff',
                                            marginTop: 4
                                        },
                                        children: [
                                            hifzData.stats.revisedParasCount,
                                            " / 30 Paras"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1041,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.4)',
                                            marginTop: 2
                                        },
                                        children: [
                                            hifzData.stats.manzilPercentage,
                                            "% Revision Coverage"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1042,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1039,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1033,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        style: {
                            color: GOLD,
                            margin: '0 0 10px 0'
                        },
                        children: "Recent Daily Sabaq Logs"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1046,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                        columns: [
                            {
                                key: 'date',
                                label: 'Date',
                                nowrap: true
                            },
                            {
                                key: 'sabaq',
                                label: 'Sabaq Range',
                                render: (r)=>`Surah ${r.sabaq_surah_start}:${r.sabaq_ayah_start} - ${r.sabaq_ayah_end}`
                            },
                            {
                                key: 'sabaq_quality',
                                label: 'Quality',
                                render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                        text: r.sabaq_quality,
                                        color: "#22c55e"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1051,
                                        columnNumber: 72
                                    }, this)
                            },
                            {
                                key: 'overall_grade',
                                label: 'Grade',
                                render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 800,
                                            color: GOLD
                                        },
                                        children: r.overall_grade
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1052,
                                        columnNumber: 70
                                    }, this)
                            }
                        ],
                        data: hifzData?.dailyRecords || []
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1047,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1031,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 941,
        columnNumber: 5
    }, this);
}
_s3(StudentsSection, "jmCC/8JvN++7usk23xHc1McTvoc=");
_c13 = StudentsSection;
// ============================================================
// SECTION 5: ADMISSIONS
// ============================================================
function AdmissionsSection({ user, activeSession }) {
    _s4();
    const [admissions, setAdmissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [classes, setClasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedApp, setSelectedApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedClassId, setSelectedClassId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdmissionsSection.useCallback[loadData]": async ()=>{
            setLoading(true);
            const [a, cl] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllAdmissions"](),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllClasses"]()
            ]);
            setAdmissions(a);
            setClasses(cl);
            setLoading(false);
        }
    }["AdmissionsSection.useCallback[loadData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdmissionsSection.useEffect": ()=>{
            loadData();
        }
    }["AdmissionsSection.useEffect"], [
        loadData
    ]);
    const handleApprove = async ()=>{
        if (!selectedClassId) {
            alert('Please assign a class / halqa for this student upon admission approval.');
            return;
        }
        setSaving(true);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["approveAdmissionAndEnroll"](selectedApp.id, selectedClassId, user.id);
        setSelectedApp(null);
        loadData();
        setSaving(false);
    };
    const handleReject = async ()=>{
        setSaving(true);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateAdmission"](selectedApp.id, {
            status: 'rejected'
        }, user.id);
        setSelectedApp(null);
        loadData();
        setSaving(false);
    };
    const columns = [
        {
            key: 'student',
            label: 'Applicant Name',
            render: (r)=>`${r.student_first_name} ${r.student_last_name}`
        },
        {
            key: 'program',
            label: 'Program',
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    text: r.course_type === 'hifz' ? 'Hifz Ul Quran' : r.desired_course || 'Dars-e-Nizami',
                    color: r.course_type === 'hifz' ? GOLD : '#3b82f6'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1108,
                    columnNumber: 56
                }, this)
        },
        {
            key: 'guardian',
            label: 'Guardian',
            render: (r)=>r.guardian?.user ? `${r.guardian.user.first_name} ${r.guardian.user.last_name}` : '—'
        },
        {
            key: 'phone',
            label: 'Contact',
            render: (r)=>r.guardian?.user?.phone || '—',
            nowrap: true
        },
        {
            key: 'status',
            label: 'Status',
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    text: r.status,
                    color: r.status === 'pending' ? '#f97316' : r.status === 'approved' ? '#22c55e' : '#ef4444'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1111,
                    columnNumber: 54
                }, this)
        },
        {
            key: 'created_at',
            label: 'Applied On',
            render: (r)=>new Date(r.created_at).toLocaleDateString(),
            nowrap: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "Admission Applications",
                subtitle: `${admissions.filter((a)=>a.status === 'pending').length} pending admissions`
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1117,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1118,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: admissions,
                actions: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: row.status === 'pending' ? 'primary' : 'secondary',
                        onClick: ()=>{
                            setSelectedApp(row);
                            setSelectedClassId('');
                        },
                        style: {
                            padding: '6px 12px',
                            fontSize: '0.75rem'
                        },
                        children: row.status === 'pending' ? 'Review & Approve' : 'View Details'
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1120,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1119,
                columnNumber: 9
            }, this),
            selectedApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: `Application: ${selectedApp.student_first_name} ${selectedApp.student_last_name}`,
                onClose: ()=>setSelectedApp(null),
                width: 600,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 12,
                            marginBottom: 20
                        },
                        children: [
                            [
                                'Applicant Name',
                                `${selectedApp.student_first_name} ${selectedApp.student_last_name}`
                            ],
                            [
                                'Program Applied',
                                selectedApp.course_type === 'hifz' ? 'Hifz Ul Quran' : selectedApp.desired_course || 'Dars-e-Nizami'
                            ],
                            [
                                'Date of Birth',
                                selectedApp.student_dob || '—'
                            ],
                            [
                                'B-Form No',
                                selectedApp.student_b_form || '—'
                            ],
                            [
                                'Guardian Name',
                                `${selectedApp.guardian?.user?.first_name || ''} ${selectedApp.guardian?.user?.last_name || ''}`
                            ],
                            [
                                'Guardian Phone',
                                selectedApp.guardian?.user?.phone || '—'
                            ],
                            [
                                'Guardian CNIC',
                                selectedApp.guardian?.user?.cnic || '—'
                            ],
                            [
                                'Previous Madrassa / School',
                                selectedApp.previous_school || 'None'
                            ]
                        ].map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.4)',
                                            fontWeight: 700,
                                            textTransform: 'uppercase'
                                        },
                                        children: l
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.88rem',
                                            color: '#fff',
                                            marginTop: 2
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1140,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1129,
                        columnNumber: 11
                    }, this),
                    selectedApp.status === 'pending' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                                label: "Assign Class / Halqa for Enrollment",
                                value: selectedClassId,
                                onChange: (e)=>setSelectedClassId(e.target.value),
                                options: classes.map((c)=>({
                                        value: c.id,
                                        label: `${c.class_name} (${c.section})`
                                    })),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1149,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.4)'
                                },
                                children: "Approving this admission will generate a Student ID/Roll number and automatically issue the initial fee challan."
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1156,
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
                                        variant: "danger",
                                        onClick: handleReject,
                                        disabled: saving,
                                        children: "Reject Application"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        variant: "success",
                                        onClick: handleApprove,
                                        disabled: saving,
                                        children: saving ? 'Approving...' : 'Approve & Issue Challan'
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1161,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1159,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1148,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 12,
                            background: 'rgba(255,255,255,0.04)',
                            borderRadius: 10,
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '0.82rem'
                        },
                        children: [
                            "Status: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: selectedApp.status.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1166,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1165,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1128,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1116,
        columnNumber: 5
    }, this);
}
_s4(AdmissionsSection, "HG/uNHm+RqzyJ/kIWepgnyhUQP8=");
_c14 = AdmissionsSection;
// ============================================================
// SECTION 6: CHALLANS & FEE MANAGEMENT
// ============================================================
function ChallansSection({ user, activeSession }) {
    _s5();
    const [challans, setChallans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [reviewingChallan, setReviewingChallan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createForm, setCreateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        student_id: '',
        title: '',
        amount: 4000,
        due_date: '',
        month: ''
    });
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChallansSection.useCallback[loadData]": async ()=>{
            setLoading(true);
            const [c, s] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllChallans"](),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllStudents"]()
            ]);
            setChallans(c);
            setStudents(s);
            setLoading(false);
        }
    }["ChallansSection.useCallback[loadData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChallansSection.useEffect": ()=>{
            loadData();
        }
    }["ChallansSection.useEffect"], [
        loadData
    ]);
    const handleVerify = async (status)=>{
        if (!reviewingChallan) return;
        const payment = reviewingChallan.payment?.[0];
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["verifyChallanPayment"](payment?.id, reviewingChallan.id, status, user.id);
        setReviewingChallan(null);
        loadData();
    };
    const handleCreateManualChallan = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createChallan"]({
            ...createForm,
            amount: Number(createForm.amount),
            session_id: activeSession?.id,
            created_by: user.id
        }, user.id);
        setShowCreate(false);
        loadData();
    };
    const filtered = challans.filter((c)=>{
        if (tab === 'pending') return c.status === 'pending_verification';
        if (tab === 'compensated') return c.compensation_status === 'compensated';
        if (tab === 'paid') return c.status === 'paid' && c.compensation_status !== 'compensated';
        if (tab === 'unpaid') return c.status === 'unpaid';
        return true;
    });
    const columns = [
        {
            key: 'challan_no',
            label: 'Challan No',
            nowrap: true
        },
        {
            key: 'student',
            label: 'Student',
            render: (r)=>r.student ? `${r.student.first_name} ${r.student.last_name}` : '—'
        },
        {
            key: 'roll',
            label: 'Roll No',
            render: (r)=>r.student?.roll_no,
            nowrap: true
        },
        {
            key: 'title',
            label: 'Fee Title'
        },
        {
            key: 'amount',
            label: 'Amount',
            render: (r)=>`Rs. ${Number(r.amount).toLocaleString()}`,
            nowrap: true
        },
        {
            key: 'due_date',
            label: 'Due Date',
            nowrap: true
        },
        {
            key: 'status',
            label: 'Status',
            render: (r)=>{
                if (r.compensation_status === 'compensated') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    text: "Compensated (Needy)",
                    color: "#a855f7"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1238,
                    columnNumber: 61
                }, this);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    text: r.status?.replace('_', ' '),
                    color: r.status === 'paid' ? '#22c55e' : r.status === 'pending_verification' ? '#f97316' : '#ef4444'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1239,
                    columnNumber: 16
                }, this);
            }
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "Fee Challans & Collection",
                subtitle: `${challans.length} total issued challans`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: ()=>setShowCreate(true),
                    children: [
                        Icons.plus(16),
                        " Create Manual Challan"
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1250,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 6,
                    marginBottom: 20
                },
                children: [
                    {
                        id: 'all',
                        label: 'All Challans'
                    },
                    {
                        id: 'pending',
                        label: `Pending Verification (${challans.filter((c)=>c.status === 'pending_verification').length})`
                    },
                    {
                        id: 'paid',
                        label: 'Paid'
                    },
                    {
                        id: 'compensated',
                        label: 'Compensated / Concession'
                    },
                    {
                        id: 'unpaid',
                        label: 'Unpaid'
                    }
                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab(t.id),
                        style: {
                            padding: '8px 16px',
                            borderRadius: 10,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            background: tab === t.id ? `${GOLD}22` : 'rgba(255,255,255,0.04)',
                            color: tab === t.id ? GOLD : 'rgba(255,255,255,0.5)'
                        },
                        children: t.label
                    }, t.id, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1263,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1255,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1277,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: filtered,
                actions: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        variant: "secondary",
                        onClick: ()=>setReviewingChallan(row),
                        style: {
                            padding: '6px 12px',
                            fontSize: '0.75rem'
                        },
                        children: row.status === 'pending_verification' ? 'Review & Verify' : 'View / Override'
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1279,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1278,
                columnNumber: 9
            }, this),
            reviewingChallan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: `Challan: ${reviewingChallan.challan_no}`,
                onClose: ()=>setReviewingChallan(null),
                width: 600,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 12,
                            marginBottom: 20
                        },
                        children: [
                            [
                                'Student',
                                `${reviewingChallan.student?.first_name || ''} ${reviewingChallan.student?.last_name || ''}`
                            ],
                            [
                                'Roll No',
                                reviewingChallan.student?.roll_no
                            ],
                            [
                                'Amount',
                                `Rs. ${Number(reviewingChallan.amount).toLocaleString()}`
                            ],
                            [
                                'Due Date',
                                reviewingChallan.due_date
                            ],
                            [
                                'Transaction ID (TID)',
                                reviewingChallan.payment?.[0]?.transaction_id || 'Not Submitted'
                            ],
                            [
                                'Payment Channel',
                                reviewingChallan.payment?.[0]?.payment_method?.toUpperCase() || 'Bank Transfer'
                            ],
                            [
                                'Current Status',
                                reviewingChallan.status.toUpperCase()
                            ],
                            [
                                'Concession Status',
                                reviewingChallan.compensation_status.toUpperCase()
                            ]
                        ].map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.4)',
                                            fontWeight: 700,
                                            textTransform: 'uppercase'
                                        },
                                        children: l
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1300,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.88rem',
                                            color: '#fff',
                                            marginTop: 2
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1301,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1299,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            paddingTop: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    color: GOLD,
                                    margin: '0 0 10px 0',
                                    fontSize: '0.85rem'
                                },
                                children: "Admin Approval / Concession Actions:"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 10,
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        variant: "success",
                                        onClick: ()=>handleVerify('approved'),
                                        children: [
                                            Icons.check(16),
                                            " Mark Paid (Approved)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        variant: "gold",
                                        onClick: ()=>handleVerify('compensated'),
                                        children: "Mark Compensated (Needy/Scholarship)"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1312,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        variant: "danger",
                                        onClick: ()=>handleVerify('rejected'),
                                        children: [
                                            Icons.x(16),
                                            " Reject / Mark Unpaid"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1315,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.72rem',
                                    color: 'rgba(255,255,255,0.4)',
                                    marginTop: 8
                                },
                                children: 'Note: Marking as "Compensated" will show up as "Paid" on the Guardian\'s portal while recorded as a concession in admin reports.'
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1306,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1287,
                columnNumber: 9
            }, this),
            showCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Create Manual Fee Challan",
                onClose: ()=>setShowCreate(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectField, {
                        label: "Select Student",
                        value: createForm.student_id,
                        onChange: (e)=>setCreateForm((p)=>({
                                    ...p,
                                    student_id: e.target.value
                                })),
                        options: students.map((s)=>({
                                value: s.id,
                                label: `${s.first_name} ${s.last_name} (${s.roll_no})`
                            })),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1329,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                        label: "Challan Title",
                        value: createForm.title,
                        onChange: (e)=>setCreateForm((p)=>({
                                    ...p,
                                    title: e.target.value
                                })),
                        placeholder: "e.g. Monthly Tuition Fee",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Amount (Rs.)",
                                value: createForm.amount,
                                onChange: (e)=>setCreateForm((p)=>({
                                            ...p,
                                            amount: e.target.value
                                        })),
                                type: "number",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1338,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Due Date",
                                value: createForm.due_date,
                                onChange: (e)=>setCreateForm((p)=>({
                                            ...p,
                                            due_date: e.target.value
                                        })),
                                type: "date",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1339,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1337,
                        columnNumber: 11
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
                                onClick: ()=>setShowCreate(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1342,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: handleCreateManualChallan,
                                children: "Issue Challan"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1343,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1341,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1328,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1245,
        columnNumber: 5
    }, this);
}
_s5(ChallansSection, "idjfrGNa/EnSEfIK7RRiN4xfU84=");
_c15 = ChallansSection;
// ============================================================
// SECTION 7: GUARDIANS
// ============================================================
function GuardiansSection() {
    _s6();
    const [guardians, setGuardians] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GuardiansSection.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllGuardians"]().then({
                "GuardiansSection.useEffect": (data)=>{
                    setGuardians(data);
                    setLoading(false);
                }
            }["GuardiansSection.useEffect"]);
        }
    }["GuardiansSection.useEffect"], []);
    const columns = [
        {
            key: 'name',
            label: 'Guardian Name',
            render: (r)=>r.user ? `${r.user.first_name} ${r.user.last_name}` : '—'
        },
        {
            key: 'cnic',
            label: 'CNIC',
            render: (r)=>r.user?.cnic,
            nowrap: true
        },
        {
            key: 'phone',
            label: 'Phone',
            render: (r)=>r.user?.phone || '—',
            nowrap: true
        },
        {
            key: 'occupation',
            label: 'Occupation'
        },
        {
            key: 'students_count',
            label: 'Enrolled Children',
            render: (r)=>r.students?.length || 0
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "Guardians Roster",
                subtitle: `${guardians.length} registered guardians`
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1375,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1376,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: guardians
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1377,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1374,
        columnNumber: 5
    }, this);
}
_s6(GuardiansSection, "RVEm4B1mGFiqEfS8yUSAj0I+bDY=");
_c16 = GuardiansSection;
// ============================================================
// SECTION 8: ACTIVITY LOG (AUDIT TRAIL)
// ============================================================
function AuditSection() {
    _s7();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuditSection.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActivityLog"](100).then({
                "AuditSection.useEffect": (data)=>{
                    setLogs(data);
                    setLoading(false);
                }
            }["AuditSection.useEffect"]);
        }
    }["AuditSection.useEffect"], []);
    const columns = [
        {
            key: 'timestamp',
            label: 'Time',
            render: (r)=>new Date(r.created_at).toLocaleString(),
            nowrap: true
        },
        {
            key: 'user',
            label: 'Admin / Scholar',
            render: (r)=>r.user ? `${r.user.first_name} (${r.user.role})` : 'System'
        },
        {
            key: 'action',
            label: 'Action',
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                    text: r.action,
                    color: r.action === 'create' ? '#22c55e' : r.action === 'delete' ? '#ef4444' : GOLD
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1400,
                    columnNumber: 54
                }, this)
        },
        {
            key: 'entity',
            label: 'Entity Type',
            render: (r)=>r.entity_type
        },
        {
            key: 'description',
            label: 'Description',
            render: (r)=>r.description || '—'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "System Audit Trail & Activity Logs",
                subtitle: "Permanent record of administrative overrides, modifications, and actions"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1407,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1408,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: logs
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1409,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1406,
        columnNumber: 5
    }, this);
}
_s7(AuditSection, "lYx/TOoNu7KeE6EXJa8Z4htpyYA=");
_c17 = AuditSection;
// ============================================================
// SECTION 9: SETTINGS & CONFIGURATION
// ============================================================
function SettingsSection({ user }) {
    _s8();
    const [bank, setBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        bank_name: '',
        account_title: '',
        account_number: '',
        branch_name: '',
        iban: ''
    });
    const [savingBank, setSavingBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsSection.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveBankConfig"]().then({
                "SettingsSection.useEffect": (b)=>{
                    if (b) setBank(b);
                }
            }["SettingsSection.useEffect"]);
        }
    }["SettingsSection.useEffect"], []);
    const handleSaveBank = async ()=>{
        setSavingBank(true);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateBankConfig"](bank, user.id);
        setMsg('Bank details successfully updated.');
        setSavingBank(false);
        setTimeout(()=>setMsg(''), 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "Institute & System Settings",
                subtitle: "Configure bank accounts, fee details, and system preferences"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                style: {
                    maxWidth: 650,
                    marginBottom: 24
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            color: GOLD,
                            margin: '0 0 16px 0',
                            fontSize: '1.05rem'
                        },
                        children: "Challan Bank Account Configuration"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.5)',
                            marginBottom: 20
                        },
                        children: "These bank details are automatically presented to parents when viewing and paying fee challans via TID."
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Bank Name",
                                value: bank.bank_name,
                                onChange: (e)=>setBank((p)=>({
                                            ...p,
                                            bank_name: e.target.value
                                        })),
                                placeholder: "e.g. Meezan Bank Ltd.",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Account Title",
                                value: bank.account_title,
                                onChange: (e)=>setBank((p)=>({
                                            ...p,
                                            account_title: e.target.value
                                        })),
                                placeholder: "e.g. Al-Faeq Islamic Institute",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Account Number",
                                value: bank.account_number,
                                onChange: (e)=>setBank((p)=>({
                                            ...p,
                                            account_number: e.target.value
                                        })),
                                placeholder: "01020304050607",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                label: "Branch Name",
                                value: bank.branch_name,
                                onChange: (e)=>setBank((p)=>({
                                            ...p,
                                            branch_name: e.target.value
                                        })),
                                placeholder: "Main Branch"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1454,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                        label: "IBAN Number",
                        value: bank.iban,
                        onChange: (e)=>setBank((p)=>({
                                    ...p,
                                    iban: e.target.value
                                })),
                        placeholder: "PK36MEZN0001020304050607"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1456,
                        columnNumber: 9
                    }, this),
                    msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#22c55e',
                            fontSize: '0.82rem',
                            marginBottom: 12
                        },
                        children: msg
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1458,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            onClick: handleSaveBank,
                            disabled: savingBank,
                            children: savingBank ? 'Saving...' : 'Save Bank Details'
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 1461,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1460,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1444,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1440,
        columnNumber: 5
    }, this);
}
_s8(SettingsSection, "XFYFwhD4dBz80trV4s/7TPNeEl8=");
_c18 = SettingsSection;
// ============================================================
// SECTION 10: ANNOUNCEMENTS
// ============================================================
function AnnouncementsSection({ user }) {
    _s9();
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        content: '',
        category: 'General',
        is_pinned: false
    });
    const loadData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnnouncementsSection.useCallback[loadData]": async ()=>{
            setLoading(true);
            const a = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllAnnouncements"]();
            setAnnouncements(a);
            setLoading(false);
        }
    }["AnnouncementsSection.useCallback[loadData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnnouncementsSection.useEffect": ()=>{
            loadData();
        }
    }["AnnouncementsSection.useEffect"], [
        loadData
    ]);
    const handleCreate = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAnnouncement"]({
            ...form,
            created_by: user.id,
            target_roles: [
                'admin',
                'teacher',
                'guardian'
            ]
        }, user.id);
        setShowCreate(false);
        setForm({
            title: '',
            content: '',
            category: 'General',
            is_pinned: false
        });
        loadData();
    };
    const handleDelete = async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteAnnouncement"](id, user.id);
        loadData();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                title: "Announcements & Notices",
                subtitle: "Broadcast updates to guardians and faculty",
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: ()=>setShowCreate(true),
                    children: [
                        Icons.plus(16),
                        " New Notice"
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1507,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gap: 14
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: 40,
                        color: 'rgba(255,255,255,0.3)'
                    },
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1511,
                    columnNumber: 20
                }, this) : announcements.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700,
                                                    color: '#fff',
                                                    fontSize: '0.98rem'
                                                },
                                                children: a.title
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 1516,
                                                columnNumber: 19
                                            }, this),
                                            a.is_pinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                text: "Pinned",
                                                color: GOLD
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 1517,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                                text: a.category,
                                                color: "#3b82f6"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 1518,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1515,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.85rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            lineHeight: 1.5,
                                            margin: 0
                                        },
                                        children: a.content
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1520,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.3)',
                                            marginTop: 8
                                        },
                                        children: [
                                            new Date(a.created_at).toLocaleDateString(),
                                            " • Posted by ",
                                            a.author ? `${a.author.first_name} ${a.author.last_name}` : 'Administration'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1521,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1514,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.trash(14),
                                title: "Delete Notice",
                                color: "#ef4444",
                                onClick: ()=>handleDelete(a.id)
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1525,
                                columnNumber: 15
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1513,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1510,
                columnNumber: 7
            }, this),
            showCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                title: "Publish Announcement",
                onClose: ()=>setShowCreate(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                        label: "Title",
                        value: form.title,
                        onChange: (e)=>setForm((p)=>({
                                    ...p,
                                    title: e.target.value
                                })),
                        placeholder: "e.g. Eid-ul-Fitr Vacation Schedule",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1533,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: 'block',
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    marginBottom: 6,
                                    fontWeight: 500
                                },
                                children: "Content"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1535,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: form.content,
                                onChange: (e)=>setForm((p)=>({
                                            ...p,
                                            content: e.target.value
                                        })),
                                rows: 4,
                                style: {
                                    width: '100%',
                                    padding: '10px 14px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 10,
                                    color: '#fff',
                                    fontSize: '0.85rem',
                                    outline: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1536,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1534,
                        columnNumber: 11
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
                                onClick: ()=>setShowCreate(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1546,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: handleCreate,
                                children: "Publish Notice"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1547,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1545,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1532,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1505,
        columnNumber: 5
    }, this);
}
_s9(AnnouncementsSection, "MS3+CHDhld9aha7YIxDptBEFjws=");
_c19 = AnnouncementsSection;
function AdminPortal() {
    _s10();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Session Context
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeSession, setActiveSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const loadSessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AdminPortal.useCallback[loadSessions]": async ()=>{
            const all = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getAllSessions"]();
            setSessions(all);
            const active = all.find({
                "AdminPortal.useCallback[loadSessions]": (s)=>s.is_active
            }["AdminPortal.useCallback[loadSessions]"]) || all[0];
            setActiveSession(active || null);
        }
    }["AdminPortal.useCallback[loadSessions]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPortal.useEffect": ()=>{
            const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (!u || u.role !== 'admin') {
                router.replace('/login');
                return;
            }
            setUser(u);
            loadSessions();
            const checkMobile = {
                "AdminPortal.useEffect.checkMobile": ()=>setIsMobile(window.innerWidth < 960)
            }["AdminPortal.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "AdminPortal.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["AdminPortal.useEffect"];
        }
    }["AdminPortal.useEffect"], [
        router,
        loadSessions
    ]);
    if (!user) return null;
    const renderSection = ()=>{
        switch(activeSection){
            case 'dashboard':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1595,
                    columnNumber: 32
                }, this);
            case 'teachers':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeachersSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1596,
                    columnNumber: 31
                }, this);
            case 'sessions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SessionsSection, {
                    user: user,
                    activeSession: activeSession,
                    onSessionChange: loadSessions
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1597,
                    columnNumber: 31
                }, this);
            case 'students':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StudentsSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1598,
                    columnNumber: 31
                }, this);
            case 'admissions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdmissionsSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1599,
                    columnNumber: 33
                }, this);
            case 'challans':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChallansSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1600,
                    columnNumber: 31
                }, this);
            case 'guardians':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuardiansSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1601,
                    columnNumber: 32
                }, this);
            case 'audit':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuditSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1602,
                    columnNumber: 28
                }, this);
            case 'settings':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1603,
                    columnNumber: 31
                }, this);
            case 'announcements':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnnouncementsSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1604,
                    columnNumber: 36
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardSection, {
                    user: user,
                    activeSession: activeSession
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1605,
                    columnNumber: 23
                }, this);
        }
    };
    const sidebarContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px 20px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/faeq-logo.png",
                        alt: "Al-Faeq",
                        style: {
                            width: 38,
                            height: 38,
                            borderRadius: 10,
                            objectFit: 'cover'
                        }
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1613,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.92rem',
                                    fontWeight: 800,
                                    color: '#fff',
                                    lineHeight: 1.1
                                },
                                children: "Al-Faeq Institute"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1615,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.68rem',
                                    color: GOLD,
                                    fontWeight: 700,
                                    marginTop: 2
                                },
                                children: "Islamic Education System"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1616,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1614,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '14px 16px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.68rem',
                            color: 'rgba(255,255,255,0.4)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            marginBottom: 6
                        },
                        children: "Active Academic Session"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1622,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: activeSession?.id || '',
                        onChange: (e)=>{
                            const found = sessions.find((s)=>s.id === e.target.value);
                            if (found) setActiveSession(found);
                        },
                        style: {
                            width: '100%',
                            padding: '8px 10px',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(242,169,0,0.3)',
                            borderRadius: 8,
                            color: GOLD,
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            outline: 'none',
                            cursor: 'pointer'
                        },
                        children: sessions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: s.id,
                                style: {
                                    background: '#111625',
                                    color: '#fff'
                                },
                                children: [
                                    s.name,
                                    " ",
                                    s.is_active ? '★ (Active)' : s.status === 'archived' ? '(Archived)' : ''
                                ]
                            }, s.id, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1638,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1625,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1621,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    padding: '12px 10px',
                    flex: 1,
                    overflowY: 'auto'
                },
                children: NAV_ITEMS.map((item)=>{
                    const isActive = activeSection === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setActiveSection(item.id);
                            if (isMobile) setSidebarOpen(false);
                        },
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            width: '100%',
                            padding: '11px 14px',
                            background: isActive ? `${GOLD}15` : 'transparent',
                            border: 'none',
                            borderRadius: 12,
                            cursor: 'pointer',
                            marginBottom: 3,
                            transition: 'all 0.2s ease',
                            color: isActive ? GOLD : 'rgba(255,255,255,0.5)',
                            fontSize: '0.84rem',
                            fontWeight: isActive ? 700 : 500,
                            textAlign: 'left',
                            position: 'relative'
                        },
                        children: [
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: 0,
                                    top: '20%',
                                    bottom: '20%',
                                    width: 3,
                                    borderRadius: 2,
                                    background: GOLD
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1669,
                                columnNumber: 28
                            }, this),
                            item.icon(18, isActive ? GOLD : 'rgba(255,255,255,0.4)'),
                            item.label
                        ]
                    }, item.id, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1650,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1646,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '16px 20px',
                    borderTop: '1px solid rgba(255,255,255,0.06)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.84rem',
                            fontWeight: 700,
                            color: '#fff'
                        },
                        children: [
                            user.first_name,
                            " ",
                            user.last_name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1679,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.72rem',
                            color: GOLD,
                            fontWeight: 600,
                            marginBottom: 12
                        },
                        children: "Administrator"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1680,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["logout"])();
                            router.push('/login');
                        },
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            width: '100%',
                            padding: '9px 12px',
                            background: 'rgba(239,68,68,0.1)',
                            border: '1px solid rgba(239,68,68,0.2)',
                            borderRadius: 10,
                            cursor: 'pointer',
                            color: '#fca5a5',
                            fontSize: '0.8rem',
                            fontWeight: 600
                        },
                        children: [
                            Icons.logout(16, '#fca5a5'),
                            " Sign Out"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1681,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1678,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1610,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    className: "jsx-2629658687dfa25e",
                    children: "Admin Dashboard — Al-Faeq Islamic Education System"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1700,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1699,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    minHeight: '100vh',
                    background: '#0a0e1a',
                    fontFamily: "'Inter', sans-serif"
                },
                className: "jsx-2629658687dfa25e",
                children: [
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: {
                            width: 270,
                            minHeight: '100vh',
                            background: '#0d111e',
                            borderRight: '1px solid rgba(255,255,255,0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            zIndex: 100
                        },
                        className: "jsx-2629658687dfa25e",
                        children: sidebarContent
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1706,
                        columnNumber: 11
                    }, this),
                    isMobile && sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSidebarOpen(false),
                                style: {
                                    position: 'fixed',
                                    inset: 0,
                                    background: 'rgba(0,0,0,0.7)',
                                    backdropFilter: 'blur(4px)',
                                    zIndex: 998
                                },
                                className: "jsx-2629658687dfa25e"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1721,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                style: {
                                    position: 'fixed',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 280,
                                    zIndex: 999,
                                    background: '#0d111e',
                                    borderRight: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                },
                                className: "jsx-2629658687dfa25e",
                                children: sidebarContent
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1722,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1720,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            marginLeft: isMobile ? 0 : 270,
                            minHeight: '100vh'
                        },
                        className: "jsx-2629658687dfa25e",
                        children: [
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '14px 20px',
                                    background: '#0d111e',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: 50
                                },
                                className: "jsx-2629658687dfa25e",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSidebarOpen(true),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: '#fff',
                                            padding: 0
                                        },
                                        className: "jsx-2629658687dfa25e",
                                        children: Icons.menu(24)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1745,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8
                                        },
                                        className: "jsx-2629658687dfa25e",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/faeq-logo.png",
                                                alt: "",
                                                style: {
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: 8
                                                },
                                                className: "jsx-2629658687dfa25e"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 1749,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 800,
                                                    fontSize: '0.92rem',
                                                    color: '#fff'
                                                },
                                                className: "jsx-2629658687dfa25e",
                                                children: "Al-Faeq Admin"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 1750,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1748,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 24
                                        },
                                        className: "jsx-2629658687dfa25e"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1752,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1740,
                                columnNumber: 13
                            }, this),
                            activeSession?.status === 'archived' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(242,169,0,0.15)',
                                    borderBottom: '1px solid rgba(242,169,0,0.3)',
                                    padding: '10px 24px',
                                    color: GOLD,
                                    fontSize: '0.82rem',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                className: "jsx-2629658687dfa25e",
                                children: [
                                    Icons.calendar(16, GOLD),
                                    " You are viewing historical data for archived session ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "jsx-2629658687dfa25e",
                                        children: activeSession.name
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1759,
                                        columnNumber: 95
                                    }, this),
                                    ". Modifications are read-only."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1758,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: isMobile ? '20px 16px' : '32px 40px',
                                    maxWidth: 1280
                                },
                                className: "jsx-2629658687dfa25e",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 22
                                        },
                                        className: "jsx-2629658687dfa25e",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '0.72rem',
                                                color: 'rgba(255,255,255,0.3)',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em'
                                            },
                                            className: "jsx-2629658687dfa25e",
                                            children: [
                                                "Admin Portal / ",
                                                NAV_ITEMS.find((n)=>n.id === activeSection)?.label || 'Dashboard'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 1766,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1765,
                                        columnNumber: 13
                                    }, this),
                                    renderSection()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1763,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1733,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1703,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "2629658687dfa25e",
                children: "@keyframes spin{to{transform:rotate(360deg)}}*{scrollbar-width:thin;scrollbar-color:#ffffff1a transparent;box-sizing:border-box}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:#ffffff1f;border-radius:3px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1698,
        columnNumber: 5
    }, this);
}
_s10(AdminPortal, "yDtI5VIsg9P7rQUOq/EoMnCahcI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c20 = AdminPortal;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "StatCard");
__turbopack_context__.k.register(_c2, "Button");
__turbopack_context__.k.register(_c3, "Badge");
__turbopack_context__.k.register(_c4, "InputField");
__turbopack_context__.k.register(_c5, "SelectField");
__turbopack_context__.k.register(_c6, "Modal");
__turbopack_context__.k.register(_c7, "Table");
__turbopack_context__.k.register(_c8, "SectionHeader");
__turbopack_context__.k.register(_c9, "ActionButton");
__turbopack_context__.k.register(_c10, "DashboardSection");
__turbopack_context__.k.register(_c11, "TeachersSection");
__turbopack_context__.k.register(_c12, "SessionsSection");
__turbopack_context__.k.register(_c13, "StudentsSection");
__turbopack_context__.k.register(_c14, "AdmissionsSection");
__turbopack_context__.k.register(_c15, "ChallansSection");
__turbopack_context__.k.register(_c16, "GuardiansSection");
__turbopack_context__.k.register(_c17, "AuditSection");
__turbopack_context__.k.register(_c18, "SettingsSection");
__turbopack_context__.k.register(_c19, "AnnouncementsSection");
__turbopack_context__.k.register(_c20, "AdminPortal");
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1qx553r._.js.map