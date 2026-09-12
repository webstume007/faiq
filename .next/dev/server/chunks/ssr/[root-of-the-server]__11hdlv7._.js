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
"[project]/lib/db.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "authenticateUser",
    ()=>authenticateUser,
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
    "createUser",
    ()=>createUser,
    "deleteAnnouncement",
    ()=>deleteAnnouncement,
    "deleteUser",
    ()=>deleteUser,
    "findUserByCnic",
    ()=>findUserByCnic,
    "getActiveSession",
    ()=>getActiveSession,
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
    "getClassAttendance",
    ()=>getClassAttendance,
    "getClassSubjects",
    ()=>getClassSubjects,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getPendingAdmissions",
    ()=>getPendingAdmissions,
    "getPendingChallans",
    ()=>getPendingChallans,
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
    "getStudentResults",
    ()=>getStudentResults,
    "getStudentsByClass",
    ()=>getStudentsByClass,
    "getStudentsByGuardian",
    ()=>getStudentsByGuardian,
    "getTeacherClasses",
    ()=>getTeacherClasses,
    "getUsersByRole",
    ()=>getUsersByRole,
    "globalSearch",
    ()=>globalSearch,
    "markAttendance",
    ()=>markAttendance,
    "submitChallanPayment",
    ()=>submitChallanPayment,
    "updateAdmission",
    ()=>updateAdmission,
    "updateAnnouncement",
    ()=>updateAnnouncement,
    "updateSession",
    ()=>updateSession,
    "updateStudent",
    ()=>updateStudent,
    "updateTeacher",
    ()=>updateTeacher,
    "updateUser",
    ()=>updateUser,
    "upsertResult",
    ()=>upsertResult,
    "verifyChallanPayment",
    ()=>verifyChallanPayment
]);
/**
 * Database Access Layer
 * Centralized data access functions for all Supabase tables.
 * Replaces all mock data with real database queries.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
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
async function createUser(userData) {
    // Check CNIC uniqueness
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
    return {
        user: safeUser
    };
}
async function updateUser(userId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', userId).select().single();
    if (error) return {
        error: error.message
    };
    const { password_hash, ...safeUser } = data;
    return {
        user: safeUser
    };
}
async function deleteUser(userId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').delete().eq('id', userId);
    return error ? {
        error: error.message
    } : {
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
async function createTeacher(userData, teacherData) {
    const result = await createUser({
        ...userData,
        role: 'teacher',
        is_verified: true
    });
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
    return {
        teacher: data,
        user: result.user
    };
}
async function updateTeacher(teacherId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('teachers').update(updates).eq('id', teacherId).select().single();
    if (error) return {
        error: error.message
    };
    return {
        teacher: data
    };
}
async function getAllGuardians() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('guardians').select(`
      *,
      user:users(id, cnic, first_name, last_name, email, phone, current_address, permanent_address, education, avatar_url, is_verified, created_at)
    `).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createGuardian(userData, guardianData) {
    const result = await createUser({
        ...userData,
        role: 'guardian'
    });
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
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').select('*').eq('is_active', true).single();
    return data;
}
async function createSession(sessionData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').insert(sessionData).select().single();
    if (error) return {
        error: error.message
    };
    return {
        session: data
    };
}
async function updateSession(sessionId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sessions').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', sessionId).select().single();
    if (error) return {
        error: error.message
    };
    return {
        session: data
    };
}
async function getSessionCourses(sessionId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').select('*').eq('session_id', sessionId).order('course_name');
    return data || [];
}
async function createCourse(courseData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').insert(courseData).select().single();
    if (error) return {
        error: error.message
    };
    return {
        course: data
    };
}
async function getAllCourses() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_courses').select(`*, session:sessions(name)`).order('course_name');
    return data || [];
}
async function getSessionClasses(sessionId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select(`
      *,
      course:session_courses(course_name, course_code),
      incharge:teachers(
        id, employee_id, qualification,
        user:users(first_name, last_name)
      )
    `).eq('session_id', sessionId).order('class_name');
    return data || [];
}
async function getAllClasses() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').select(`
      *,
      course:session_courses(course_name, course_code),
      session:sessions(name),
      incharge:teachers(
        id, employee_id,
        user:users(first_name, last_name)
      )
    `).order('class_name');
    return data || [];
}
async function createClass(classData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('session_classes').insert(classData).select().single();
    if (error) return {
        error: error.message
    };
    return {
        class: data
    };
}
async function getClassSubjects(classId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select(`
      *,
      teacher:teachers(
        id, employee_id,
        user:users(first_name, last_name)
      )
    `).eq('class_id', classId).order('subject_name');
    return data || [];
}
async function createSubject(subjectData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').insert(subjectData).select().single();
    if (error) return {
        error: error.message
    };
    return {
        subject: data
    };
}
async function getAllStudents() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
      *,
      guardian:guardians(
        id, occupation, relation_to_student,
        user:users(first_name, last_name, cnic, phone, email)
      ),
      class:session_classes(
        class_name, section, semester,
        course:session_courses(course_name, course_code),
        session:sessions(name)
      )
    `).order('enrolled_at', {
        ascending: false
    });
    return data || [];
}
async function getStudentsByGuardian(guardianId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
      *,
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(course_name, course_code),
        session:sessions(name)
      )
    `).eq('guardian_id', guardianId).eq('status', 'active').order('first_name');
    return data || [];
}
async function getStudentById(studentId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select(`
      *,
      guardian:guardians(
        id, occupation, relation_to_student,
        user:users(first_name, last_name, cnic, phone, email)
      ),
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(course_name, course_code),
        session:sessions(name)
      )
    `).eq('id', studentId).single();
    return data;
}
async function createStudent(studentData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').insert(studentData).select().single();
    if (error) return {
        error: error.message
    };
    return {
        student: data
    };
}
async function updateStudent(studentId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', studentId).select().single();
    if (error) return {
        error: error.message
    };
    return {
        student: data
    };
}
async function getAllAdmissions() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select(`
      *,
      guardian:guardians(
        id, occupation,
        user:users(first_name, last_name, cnic, phone, email)
      ),
      session:sessions(name)
    `).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function getPendingAdmissions() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').select(`
      *,
      guardian:guardians(
        id, occupation,
        user:users(first_name, last_name, cnic, phone, email)
      ),
      session:sessions(name)
    `).eq('status', 'pending').order('created_at', {
        ascending: false
    });
    return data || [];
}
async function updateAdmission(admissionId, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('admission_applications').update({
        ...updates,
        reviewed_at: new Date().toISOString()
    }).eq('id', admissionId).select().single();
    if (error) return {
        error: error.message
    };
    return {
        admission: data
    };
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
async function getAllChallans() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').select(`
      *,
      student:students(first_name, last_name, roll_no,
        class:session_classes(class_name, section)
      ),
      payment:challan_payments(*)
    `).order('created_at', {
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
    return data || [];
}
async function getPendingChallans() {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').select(`
      *,
      student:students(first_name, last_name, roll_no,
        class:session_classes(class_name, section)
      ),
      payment:challan_payments(*)
    `).eq('status', 'pending_verification').order('created_at', {
        ascending: false
    });
    return data || [];
}
async function createChallan(challanData) {
    // Generate challan number
    const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').select('id', {
        count: 'exact',
        head: true
    });
    const challanNo = `CHN-${new Date().getFullYear()}-${String((count || 0) + 1).padStart(4, '0')}`;
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').insert({
        ...challanData,
        challan_no: challanNo
    }).select().single();
    if (error) return {
        error: error.message
    };
    return {
        challan: data
    };
}
async function submitChallanPayment(paymentData) {
    // Insert payment record
    const { data: payment, error: payError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challan_payments').insert(paymentData).select().single();
    if (payError) return {
        error: payError.message
    };
    // Update challan status
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').update({
        status: 'pending_verification',
        updated_at: new Date().toISOString()
    }).eq('id', paymentData.challan_id);
    return {
        payment
    };
}
async function verifyChallanPayment(paymentId, challanId, status, verifiedBy, rejectionReason) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challan_payments').update({
        status,
        verified_by: verifiedBy,
        verified_at: new Date().toISOString(),
        rejection_reason: rejectionReason || null
    }).eq('id', paymentId).select().single();
    if (error) return {
        error: error.message
    };
    // Update challan status
    const challanStatus = status === 'approved' ? 'paid' : 'unpaid';
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('challans').update({
        status: challanStatus,
        updated_at: new Date().toISOString()
    }).eq('id', challanId);
    return {
        payment: data
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
async function getClassAttendance(classSubjectId, date) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').select(`
      *,
      student:students(id, first_name, last_name, roll_no)
    `).eq('class_subject_id', classSubjectId).eq('date', date).order('student_id');
    return data || [];
}
async function markAttendance(records) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('attendance_records').upsert(records, {
        onConflict: 'student_id,class_subject_id,date'
    }).select();
    if (error) return {
        error: error.message
    };
    return {
        records: data
    };
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
async function getStudentResults(studentId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('results').select(`
      *,
      subject:class_subjects(subject_name, subject_code)
    `).eq('student_id', studentId).order('created_at', {
        ascending: false
    });
    return data || [];
}
async function upsertResult(resultData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('results').upsert(resultData, {
        onConflict: 'student_id,class_subject_id,exam_type'
    }).select().single();
    if (error) return {
        error: error.message
    };
    return {
        result: data
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
async function createAnnouncement(announcementData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('announcements').insert(announcementData).select().single();
    if (error) return {
        error: error.message
    };
    return {
        announcement: data
    };
}
async function updateAnnouncement(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('announcements').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', id).select().single();
    if (error) return {
        error: error.message
    };
    return {
        announcement: data
    };
}
async function deleteAnnouncement(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('announcements').delete().eq('id', id);
    return error ? {
        error: error.message
    } : {
        success: true
    };
}
async function getDashboardStats() {
    const [students, teachers, guardians, pendingAdmissions, pendingChallans, announcements] = await Promise.all([
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
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('announcements').select('id', {
            count: 'exact',
            head: true
        })
    ]);
    return {
        totalStudents: students.count || 0,
        totalTeachers: teachers.count || 0,
        totalGuardians: guardians.count || 0,
        pendingAdmissions: pendingAdmissions.count || 0,
        pendingChallans: pendingChallans.count || 0,
        totalAnnouncements: announcements.count || 0
    };
}
async function globalSearch(query) {
    const searchTerm = `%${query}%`;
    const [students, teachers, guardians] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id, roll_no, first_name, last_name').or(`first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},roll_no.ilike.${searchTerm}`).limit(5),
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
    const { data: subjectClasses } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('class_subjects').select(`
      *,
      class:session_classes(
        id, class_name, section, semester,
        course:session_courses(course_name, course_code),
        session:sessions(name, is_active)
      )
    `).eq('teacher_id', teacherId);
    return subjectClasses || [];
}
async function getStudentsByClass(classId) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from('students').select('id, roll_no, first_name, last_name, photo_url, status').eq('class_id', classId).eq('status', 'active').order('roll_no');
    return data || [];
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
"[project]/pages/admin.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>AdminPortal
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    dashboard: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "3",
                    width: "7",
                    height: "7",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 12,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "14",
                    y: "3",
                    width: "7",
                    height: "7",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 12,
                    columnNumber: 185
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 12,
                    columnNumber: 233
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "14",
                    y: "14",
                    width: "7",
                    height: "7",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 12,
                    columnNumber: 281
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    users: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 15,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 15,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 15,
                    columnNumber: 220
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 15,
                    columnNumber: 258
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    teacher: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12 14l9-5-9-5-9 5 9 5z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 18,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 18,
                    columnNumber: 173
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M21 9v6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 18,
                    columnNumber: 333
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 18,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    calendar: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "18",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 21,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "2",
                    x2: "16",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 21,
                    columnNumber: 187
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "2",
                    x2: "8",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 21,
                    columnNumber: 224
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "10",
                    x2: "21",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 21,
                    columnNumber: 259
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    student: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 24,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 24,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 24,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    admission: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 27,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "14 2 14 8 20 8"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 27,
                    columnNumber: 208
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "13",
                    x2: "8",
                    y2: "13"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 27,
                    columnNumber: 243
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "17",
                    x2: "8",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 27,
                    columnNumber: 281
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "10 9 9 9 8 9"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 27,
                    columnNumber: 319
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 27,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    challan: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "1",
                    y: "4",
                    width: "22",
                    height: "16",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 30,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "10",
                    x2: "23",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 30,
                    columnNumber: 187
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "14",
                    x2: "6",
                    y2: "14.01"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 30,
                    columnNumber: 225
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "10",
                    y1: "14",
                    x2: "14",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 30,
                    columnNumber: 265
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 30,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    guardian: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 33,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 33,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    attendance: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 36,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "8",
                    y: "2",
                    width: "8",
                    height: "4",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 36,
                    columnNumber: 222
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M9 14l2 2 4-4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 36,
                    columnNumber: 269
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 36,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    results: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 39,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 39,
                    columnNumber: 177
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 39,
                    columnNumber: 215
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 39,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    announcement: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 42,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M13.73 21a2 2 0 0 1-3.46 0"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 42,
                    columnNumber: 193
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 42,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    search: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 45,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 45,
                    columnNumber: 169
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 45,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    plus: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 48,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 48,
                    columnNumber: 173
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 48,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    check: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                points: "20 6 9 17 4 12"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 51,
                columnNumber: 137
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 51,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    x: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 54,
                    columnNumber: 137
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 54,
                    columnNumber: 174
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 54,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    logout: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 57,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "16 17 21 12 16 7"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 57,
                    columnNumber: 189
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "9",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 57,
                    columnNumber: 226
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 57,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    chevronDown: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                points: "6 9 12 15 18 9"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 60,
                columnNumber: 135
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    edit: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 63,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 63,
                    columnNumber: 208
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 63,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    trash: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "3 6 5 6 21 6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 66,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 66,
                    columnNumber: 171
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 66,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    eye: (s = 16, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 69,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 69,
                    columnNumber: 194
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 69,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    menu: (s = 24, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "12",
                    x2: "21",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 72,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 72,
                    columnNumber: 176
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "18",
                    x2: "21",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 72,
                    columnNumber: 212
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 72,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    arrowLeft: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "19",
                    y1: "12",
                    x2: "5",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 75,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "12 19 5 12 12 5"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 75,
                    columnNumber: 176
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 75,
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
        label: 'Challans',
        icon: Icons.challan
    },
    {
        id: 'guardians',
        label: 'Guardians',
        icon: Icons.guardian
    },
    {
        id: 'announcements',
        label: 'Announcements',
        icon: Icons.announcement
    }
];
// ============================================================
// REUSABLE COMPONENTS
// ============================================================
const Card = ({ children, style, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
        lineNumber: 98,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const StatCard = ({ label, value, icon, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Card, {
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            cursor: 'default'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: `${color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                },
                children: icon(22, color)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 112,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '1.6rem',
                            fontWeight: 800,
                            color: '#fff',
                            lineHeight: 1
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 121,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.78rem',
                            color: 'rgba(255,255,255,0.4)',
                            marginTop: 4,
                            fontWeight: 500
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 122,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 120,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 111,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Button = ({ children, onClick, variant = 'primary', style, disabled })=>{
    const baseStyle = {
        padding: '10px 20px',
        borderRadius: 12,
        fontSize: '0.82rem',
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
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
            border: '1px solid rgba(239,68,68,0.2)'
        },
        success: {
            background: 'rgba(34,197,94,0.15)',
            color: '#86efac',
            border: '1px solid rgba(34,197,94,0.2)'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
        onClick: disabled ? undefined : onClick,
        style: {
            ...baseStyle,
            ...variants[variant],
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 148,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Badge = ({ text, color = GOLD })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
        lineNumber: 153,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const InputField = ({ label, value, onChange, type = 'text', placeholder, required })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 14
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 6,
                    fontWeight: 500
                },
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#ef4444'
                        },
                        children: " *"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 167,
                        columnNumber: 158
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 167,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                type: type,
                value: value,
                onChange: onChange,
                placeholder: placeholder,
                required: required,
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
                lineNumber: 168,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 166,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SelectField = ({ label, value, onChange, options, required })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 14
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                style: {
                    display: 'block',
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 6,
                    fontWeight: 500
                },
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#ef4444'
                        },
                        children: " *"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 191,
                        columnNumber: 158
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 191,
                columnNumber: 15
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                value: value,
                onChange: onChange,
                required: required,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                        value: "",
                        style: {
                            background: '#1a1f2e'
                        },
                        children: "Select..."
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 207,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: o.value,
                            style: {
                                background: '#1a1f2e'
                            },
                            children: o.label
                        }, o.value, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 209,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 192,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 190,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Modal = ({ title, onClose, children, width = 520 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease',
            padding: 20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                background: '#13172a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                width: '100%',
                maxWidth: width,
                maxHeight: '85vh',
                overflow: 'auto',
                animation: 'scaleIn 0.25s ease'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 24px',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                        position: 'sticky',
                        top: 0,
                        background: '#13172a',
                        zIndex: 1,
                        borderRadius: '20px 20px 0 0'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            style: {
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                color: '#fff'
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 242,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
                            lineNumber: 243,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 233,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        padding: 24
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 247,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 223,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 216,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const Table = ({ columns, data, actions })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            overflowX: 'auto',
            borderRadius: 14,
            border: '1px solid rgba(255,255,255,0.06)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
            style: {
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.82rem'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                        style: {
                            background: 'rgba(255,255,255,0.03)'
                        },
                        children: [
                            columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
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
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
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
                                lineNumber: 260,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 256,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 255,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                    children: data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                            colSpan: columns.length + (actions ? 1 : 0),
                            style: {
                                padding: 40,
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.25)'
                            },
                            children: "No records found"
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 265,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 265,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : data.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                            style: {
                                borderTop: '1px solid rgba(255,255,255,0.04)',
                                transition: 'background 0.15s'
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.02)',
                            onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                            children: [
                                columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: '12px 16px',
                                            color: '#e2e8f0',
                                            whiteSpace: col.nowrap ? 'nowrap' : 'normal'
                                        },
                                        children: col.render ? col.render(row) : row[col.key]
                                    }, col.key, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                actions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                    style: {
                                        padding: '12px 16px',
                                        textAlign: 'right'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 6,
                                            justifyContent: 'flex-end'
                                        },
                                        children: actions(row)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, row.id || i, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 267,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 263,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 254,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 253,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const SectionHeader = ({ title, subtitle, action })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            flexWrap: 'wrap',
            gap: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '1.3rem',
                            fontWeight: 800,
                            color: '#fff',
                            margin: 0
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 290,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.82rem',
                            color: 'rgba(255,255,255,0.4)',
                            marginTop: 4
                        },
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 291,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 289,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            action
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 288,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ActionButton = ({ icon, onClick, title, color = 'rgba(255,255,255,0.4)' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
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
        lineNumber: 298,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// ============================================================
// SECTION: DASHBOARD
// ============================================================
function DashboardSection() {
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [searching, setSearching] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getDashboardStats"]().then(setStats);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!searchQuery.trim()) {
            setSearchResults(null);
            return;
        }
        const t = setTimeout(async ()=>{
            setSearching(true);
            const results = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["globalSearch"](searchQuery);
            setSearchResults(results);
            setSearching(false);
        }, 400);
        return ()=>clearTimeout(t);
    }, [
        searchQuery
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                            Icons.search(20, 'rgba(255,255,255,0.3)'),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
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
                                lineNumber: 345,
                                columnNumber: 11
                            }, this),
                            searching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                lineNumber: 354,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    searchResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            marginTop: 8,
                            background: '#1a1f2e',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 14,
                            padding: 16,
                            zIndex: 100,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                            maxHeight: 320,
                            overflow: 'auto'
                        },
                        children: [
                            [
                                'students',
                                'teachers',
                                'guardians'
                            ].map((cat)=>searchResults[cat]?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                            lineNumber: 367,
                                            columnNumber: 19
                                        }, this),
                                        searchResults[cat].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '8px 12px',
                                                    borderRadius: 8,
                                                    cursor: 'pointer',
                                                    fontSize: '0.85rem',
                                                    color: '#e2e8f0',
                                                    transition: 'background 0.15s'
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255,255,255,0.05)',
                                                onMouseLeave: (e)=>e.currentTarget.style.background = 'transparent',
                                                children: [
                                                    item.first_name,
                                                    " ",
                                                    item.last_name,
                                                    " ",
                                                    item.roll_no && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(255,255,255,0.3)',
                                                            marginLeft: 8
                                                        },
                                                        children: item.roll_no
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/admin.js",
                                                        lineNumber: 370,
                                                        columnNumber: 75
                                                    }, this),
                                                    " ",
                                                    item.cnic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(255,255,255,0.25)',
                                                            marginLeft: 8
                                                        },
                                                        children: item.cnic
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/admin.js",
                                                        lineNumber: 370,
                                                        columnNumber: 176
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 369,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, cat, true, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 366,
                                    columnNumber: 17
                                }, this)),
                            searchResults.students?.length === 0 && searchResults.teachers?.length === 0 && searchResults.guardians?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    color: 'rgba(255,255,255,0.3)',
                                    padding: 20,
                                    fontSize: '0.85rem'
                                },
                                children: "No results found"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 377,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 357,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 337,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 16,
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                        label: "Total Students",
                        value: stats?.totalStudents ?? '—',
                        icon: Icons.student,
                        color: "#3b82f6"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 385,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                        label: "Total Teachers",
                        value: stats?.totalTeachers ?? '—',
                        icon: Icons.teacher,
                        color: GOLD
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                        label: "Total Guardians",
                        value: stats?.totalGuardians ?? '—',
                        icon: Icons.guardian,
                        color: "#8b5cf6"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                        label: "Pending Admissions",
                        value: stats?.pendingAdmissions ?? '—',
                        icon: Icons.admission,
                        color: "#f97316"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                        label: "Pending Challans",
                        value: stats?.pendingChallans ?? '—',
                        icon: Icons.challan,
                        color: "#ef4444"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                        label: "Announcements",
                        value: stats?.totalAnnouncements ?? '—',
                        icon: Icons.announcement,
                        color: "#22c55e"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 335,
        columnNumber: 5
    }, this);
}
// ============================================================
// SECTION: TEACHERS
// ============================================================
function TeachersSection() {
    const [teachers, setTeachers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
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
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const loadTeachers = async ()=>{
        setLoading(true);
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllTeachers"]();
        setTeachers(data);
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        loadTeachers();
    }, []);
    const handleCreate = async ()=>{
        setSaving(true);
        setMsg('');
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createTeacher"]({
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
        });
        if (result.error) {
            setMsg(result.error);
            setSaving(false);
            return;
        }
        setShowModal(false);
        setFormData({
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
        loadTeachers();
        setSaving(false);
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
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Badge, {
                    text: r.status,
                    color: r.status === 'active' ? '#22c55e' : '#ef4444'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 435,
                    columnNumber: 52
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionHeader, {
                title: "Teachers",
                subtitle: `${teachers.length} registered teachers`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                    onClick: ()=>setShowModal(true),
                    children: [
                        Icons.plus(16),
                        " Create Teacher Account"
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 443,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: teachers,
                actions: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.eye(14),
                                title: "View",
                                color: GOLD
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 446,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.edit(14),
                                title: "Edit",
                                color: "#3b82f6"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 444,
                columnNumber: 9
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                title: "Create Teacher Account",
                onClose: ()=>setShowModal(false),
                width: 600,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "First Name",
                                value: formData.first_name,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            first_name: e.target.value
                                        })),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 454,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Last Name",
                                value: formData.last_name,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            last_name: e.target.value
                                        })),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "CNIC",
                                value: formData.cnic,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            cnic: e.target.value
                                        })),
                                placeholder: "35202-1234567-1",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
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
                                lineNumber: 457,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Email",
                                value: formData.email,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            email: e.target.value
                                        })),
                                type: "email"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Phone",
                                value: formData.phone,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            phone: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Employee ID",
                                value: formData.employee_id,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            employee_id: e.target.value
                                        })),
                                placeholder: "EMP-008",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Qualification",
                                value: formData.qualification,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            qualification: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Specialization",
                                value: formData.specialization,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            specialization: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Joining Date",
                                value: formData.joining_date,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            joining_date: e.target.value
                                        })),
                                type: "date"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Education",
                                value: formData.education,
                                onChange: (e)=>setFormData((p)=>({
                                            ...p,
                                            education: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 464,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 453,
                        columnNumber: 11
                    }, this),
                    msg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            color: '#ef4444',
                            fontSize: '0.82rem',
                            marginBottom: 12
                        },
                        children: msg
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 466,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            justifyContent: 'flex-end',
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                variant: "secondary",
                                onClick: ()=>setShowModal(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 468,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                onClick: handleCreate,
                                disabled: saving,
                                children: saving ? 'Creating...' : 'Create Teacher'
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 469,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 467,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 452,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 439,
        columnNumber: 5
    }, this);
}
// ============================================================
// SECTION: SESSIONS & CLASSES
// ============================================================
function SessionsSection() {
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [classes, setClasses] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [expandedSession, setExpandedSession] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showCreateSession, setShowCreateSession] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [sessionForm, setSessionForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: '',
        start_date: '',
        end_date: '',
        fee_structure: '{}'
    });
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const load = async ()=>{
        setLoading(true);
        const [s, cl, co] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllSessions"](),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllClasses"](),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllCourses"]()
        ]);
        setSessions(s);
        setClasses(cl);
        setCourses(co);
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        load();
    }, []);
    const handleCreateSession = async ()=>{
        setSaving(true);
        let feeStruct = {};
        try {
            feeStruct = JSON.parse(sessionForm.fee_structure);
        } catch  {}
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createSession"]({
            name: sessionForm.name,
            start_date: sessionForm.start_date,
            end_date: sessionForm.end_date,
            fee_structure: feeStruct
        });
        setShowCreateSession(false);
        setSessionForm({
            name: '',
            start_date: '',
            end_date: '',
            fee_structure: '{}'
        });
        load();
        setSaving(false);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center',
            padding: 40,
            color: 'rgba(255,255,255,0.3)'
        },
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 510,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionHeader, {
                title: "Sessions & Classes",
                subtitle: `${sessions.length} sessions, ${classes.length} classes, ${courses.length} courses`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                    onClick: ()=>setShowCreateSession(true),
                    children: [
                        Icons.plus(16),
                        " New Session"
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 515,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 514,
                columnNumber: 7
            }, this),
            sessions.map((session)=>{
                const sessionClasses = classes.filter((c)=>c.session?.name === session.name);
                const sessionCourses = courses.filter((c)=>c.session?.name === session.name);
                const isExpanded = expandedSession === session.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Card, {
                    style: {
                        marginBottom: 16,
                        cursor: 'pointer'
                    },
                    onClick: ()=>setExpandedSession(isExpanded ? null : session.id),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 40,
                                                height: 40,
                                                borderRadius: 12,
                                                background: `${GOLD}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            },
                                            children: Icons.calendar(20, GOLD)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 700,
                                                        color: '#fff',
                                                        fontSize: '1rem'
                                                    },
                                                    children: session.name
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/admin.js",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '0.75rem',
                                                        color: 'rgba(255,255,255,0.4)'
                                                    },
                                                    children: [
                                                        session.start_date,
                                                        " — ",
                                                        session.end_date || 'Ongoing',
                                                        "  ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Badge, {
                                                            text: session.is_active ? 'Active' : 'Inactive',
                                                            color: session.is_active ? '#22c55e' : '#6b7280'
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/admin.js",
                                                            lineNumber: 533,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/admin.js",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 529,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 525,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '0.78rem',
                                                color: 'rgba(255,255,255,0.3)'
                                            },
                                            children: [
                                                sessionCourses.length,
                                                " courses, ",
                                                sessionClasses.length,
                                                " classes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: isExpanded ? 'rotate(180deg)' : 'none',
                                                transition: 'transform 0.2s'
                                            },
                                            children: Icons.chevronDown(16, 'rgba(255,255,255,0.3)')
                                        }, void 0, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 537,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 524,
                            columnNumber: 13
                        }, this),
                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 20,
                                paddingTop: 16,
                                borderTop: '1px solid rgba(255,255,255,0.06)'
                            },
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                session.fee_structure && typeof session.fee_structure === 'object' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '0.75rem',
                                                fontWeight: 700,
                                                color: GOLD,
                                                textTransform: 'uppercase',
                                                marginBottom: 8,
                                                letterSpacing: '0.1em'
                                            },
                                            children: "Fee Structure"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 546,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: 12,
                                                flexWrap: 'wrap'
                                            },
                                            children: Object.entries(session.fee_structure).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '6px 12px',
                                                        background: 'rgba(255,255,255,0.04)',
                                                        borderRadius: 8,
                                                        fontSize: '0.78rem'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: 'rgba(255,255,255,0.5)',
                                                                textTransform: 'capitalize'
                                                            },
                                                            children: [
                                                                k.replace('_', ' '),
                                                                ": "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/admin.js",
                                                            lineNumber: 550,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: '#fff',
                                                                fontWeight: 600
                                                            },
                                                            children: [
                                                                "Rs. ",
                                                                Number(v).toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/admin.js",
                                                            lineNumber: 551,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, k, true, {
                                                    fileName: "[project]/pages/admin.js",
                                                    lineNumber: 549,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 547,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 545,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: GOLD,
                                        textTransform: 'uppercase',
                                        marginBottom: 8,
                                        letterSpacing: '0.1em'
                                    },
                                    children: "Courses"
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 557,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 8,
                                        flexWrap: 'wrap',
                                        marginBottom: 16
                                    },
                                    children: sessionCourses.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Badge, {
                                            text: `${c.course_code} — ${c.course_name}`,
                                            color: "#3b82f6"
                                        }, c.id, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 559,
                                            columnNumber: 44
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 558,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        color: GOLD,
                                        textTransform: 'uppercase',
                                        marginBottom: 8,
                                        letterSpacing: '0.1em'
                                    },
                                    children: "Classes"
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 561,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Table, {
                                    columns: [
                                        {
                                            key: 'class_name',
                                            label: 'Class'
                                        },
                                        {
                                            key: 'section',
                                            label: 'Section'
                                        },
                                        {
                                            key: 'semester',
                                            label: 'Semester'
                                        },
                                        {
                                            key: 'course',
                                            label: 'Course',
                                            render: (r)=>r.course?.course_code
                                        },
                                        {
                                            key: 'incharge',
                                            label: 'Incharge Teacher',
                                            render: (r)=>r.incharge?.user ? `${r.incharge.user.first_name} ${r.incharge.user.last_name}` : 'Not Assigned'
                                        },
                                        {
                                            key: 'max_students',
                                            label: 'Max Students'
                                        }
                                    ],
                                    data: sessionClasses
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 562,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 543,
                            columnNumber: 15
                        }, this)
                    ]
                }, session.id, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 523,
                    columnNumber: 11
                }, this);
            }),
            showCreateSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                title: "Create New Session",
                onClose: ()=>setShowCreateSession(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                        label: "Session Name",
                        value: sessionForm.name,
                        onChange: (e)=>setSessionForm((p)=>({
                                    ...p,
                                    name: e.target.value
                                })),
                        placeholder: "e.g. Spring 2027",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Start Date",
                                value: sessionForm.start_date,
                                onChange: (e)=>setSessionForm((p)=>({
                                            ...p,
                                            start_date: e.target.value
                                        })),
                                type: "date",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 583,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "End Date",
                                value: sessionForm.end_date,
                                onChange: (e)=>setSessionForm((p)=>({
                                            ...p,
                                            end_date: e.target.value
                                        })),
                                type: "date"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 582,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                        label: "Fee Structure (JSON)",
                        value: sessionForm.fee_structure,
                        onChange: (e)=>setSessionForm((p)=>({
                                    ...p,
                                    fee_structure: e.target.value
                                })),
                        placeholder: '{"tuition": 45000, "lab_fee": 5000}'
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 586,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            justifyContent: 'flex-end',
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                variant: "secondary",
                                onClick: ()=>setShowCreateSession(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 588,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                onClick: handleCreateSession,
                                disabled: saving,
                                children: saving ? 'Creating...' : 'Create Session'
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 589,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 587,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 580,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 513,
        columnNumber: 5
    }, this);
}
// ============================================================
// SECTION: STUDENTS
// ============================================================
function StudentsSection() {
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [editingStudent, setEditingStudent] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const load = async ()=>{
        setLoading(true);
        setStudents(await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllStudents"]());
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        load();
    }, []);
    const handleUpdate = async ()=>{
        setSaving(true);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["updateStudent"](editingStudent.id, editForm);
        setEditingStudent(null);
        load();
        setSaving(false);
    };
    const columns = [
        {
            key: 'roll_no',
            label: 'Roll No',
            nowrap: true
        },
        {
            key: 'name',
            label: 'Name',
            render: (r)=>`${r.first_name} ${r.last_name}`
        },
        {
            key: 'class',
            label: 'Class',
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
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Badge, {
                    text: r.status,
                    color: r.status === 'active' ? '#22c55e' : '#ef4444'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 628,
                    columnNumber: 52
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionHeader, {
                title: "Students",
                subtitle: `${students.length} enrolled students`
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 634,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: students,
                actions: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                            icon: Icons.edit(14),
                            title: "Edit",
                            color: "#3b82f6",
                            onClick: ()=>{
                                setEditingStudent(row);
                                setEditForm({
                                    first_name: row.first_name,
                                    last_name: row.last_name,
                                    blood_group: row.blood_group || '',
                                    b_form_no: row.b_form_no || '',
                                    status: row.status
                                });
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 637,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 636,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 635,
                columnNumber: 9
            }, this),
            editingStudent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                title: `Edit Student: ${editingStudent.first_name} ${editingStudent.last_name}`,
                onClose: ()=>setEditingStudent(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "First Name",
                                value: editForm.first_name,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            first_name: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Last Name",
                                value: editForm.last_name,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            last_name: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 648,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "B-Form No",
                                value: editForm.b_form_no,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            b_form_no: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Blood Group",
                                value: editForm.blood_group,
                                onChange: (e)=>setEditForm((p)=>({
                                            ...p,
                                            blood_group: e.target.value
                                        }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 650,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SelectField, {
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
                                        value: 'expelled',
                                        label: 'Expelled'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 651,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 646,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            justifyContent: 'flex-end',
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                variant: "secondary",
                                onClick: ()=>setEditingStudent(null),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 659,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                onClick: handleUpdate,
                                disabled: saving,
                                children: saving ? 'Saving...' : 'Save Changes'
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 660,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 658,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 645,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 632,
        columnNumber: 5
    }, this);
}
// ============================================================
// SECTION: ADMISSIONS
// ============================================================
function AdmissionsSection() {
    const [admissions, setAdmissions] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [selectedApp, setSelectedApp] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [adminNotes, setAdminNotes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const load = async ()=>{
        setLoading(true);
        setAdmissions(await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllAdmissions"]());
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        load();
    }, []);
    const handleAction = async (status)=>{
        setSaving(true);
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["updateAdmission"](selectedApp.id, {
            status,
            admin_notes: adminNotes,
            reviewed_by: user?.id
        });
        setSelectedApp(null);
        setAdminNotes('');
        load();
        setSaving(false);
    };
    const columns = [
        {
            key: 'student',
            label: 'Student Name',
            render: (r)=>`${r.student_first_name} ${r.student_last_name}`
        },
        {
            key: 'guardian',
            label: 'Guardian',
            render: (r)=>r.guardian?.user ? `${r.guardian.user.first_name} ${r.guardian.user.last_name}` : '—'
        },
        {
            key: 'desired_course',
            label: 'Course'
        },
        {
            key: 'session',
            label: 'Session',
            render: (r)=>r.session?.name || '—'
        },
        {
            key: 'previous_school',
            label: 'Previous School'
        },
        {
            key: 'status',
            label: 'Status',
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Badge, {
                    text: r.status,
                    color: r.status === 'pending' ? '#f97316' : r.status === 'approved' ? '#22c55e' : '#ef4444'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 702,
                    columnNumber: 52
                }, this)
        },
        {
            key: 'created_at',
            label: 'Applied',
            render: (r)=>new Date(r.created_at).toLocaleDateString(),
            nowrap: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionHeader, {
                title: "Admission Applications",
                subtitle: `${admissions.filter((a)=>a.status === 'pending').length} pending applications`
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 708,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 709,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: admissions,
                actions: (row)=>row.status === 'pending' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.check(14),
                                title: "Approve",
                                color: "#22c55e",
                                onClick: ()=>{
                                    setSelectedApp(row);
                                    setAdminNotes('');
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 712,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.x(14),
                                title: "Reject",
                                color: "#ef4444",
                                onClick: ()=>{
                                    setSelectedApp(row);
                                    setAdminNotes('');
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 713,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 711,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                        icon: Icons.eye(14),
                        title: "View",
                        color: GOLD,
                        onClick: ()=>setSelectedApp(row)
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 716,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 710,
                columnNumber: 9
            }, this),
            selectedApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                title: `Application: ${selectedApp.student_first_name} ${selectedApp.student_last_name}`,
                onClose: ()=>setSelectedApp(null),
                width: 560,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 12,
                            marginBottom: 16
                        },
                        children: [
                            [
                                'Student Name',
                                `${selectedApp.student_first_name} ${selectedApp.student_last_name}`
                            ],
                            [
                                'Gender',
                                selectedApp.student_gender
                            ],
                            [
                                'DOB',
                                selectedApp.student_dob
                            ],
                            [
                                'B-Form',
                                selectedApp.student_b_form || '—'
                            ],
                            [
                                'Course',
                                selectedApp.desired_course
                            ],
                            [
                                'Previous School',
                                selectedApp.previous_school || '—'
                            ],
                            [
                                'Previous Grade',
                                selectedApp.previous_grade || '—'
                            ],
                            [
                                'Guardian',
                                selectedApp.guardian?.user ? `${selectedApp.guardian.user.first_name} ${selectedApp.guardian.user.last_name}` : '—'
                            ],
                            [
                                'Guardian CNIC',
                                selectedApp.guardian?.user?.cnic || '—'
                            ],
                            [
                                'Guardian Phone',
                                selectedApp.guardian?.user?.phone || '—'
                            ]
                        ].map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.4)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase'
                                        },
                                        children: l
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 735,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.88rem',
                                            color: '#fff',
                                            marginTop: 2
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 736,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 734,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 721,
                        columnNumber: 11
                    }, this),
                    selectedApp.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 14
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'block',
                                            fontSize: '0.78rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            marginBottom: 6,
                                            fontWeight: 500
                                        },
                                        children: "Admin Notes"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 743,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                        value: adminNotes,
                                        onChange: (e)=>setAdminNotes(e.target.value),
                                        rows: 3,
                                        placeholder: "Add notes about this application...",
                                        style: {
                                            width: '100%',
                                            padding: '10px 14px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: 10,
                                            color: '#fff',
                                            fontSize: '0.85rem',
                                            outline: 'none',
                                            resize: 'vertical',
                                            fontFamily: 'inherit'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 744,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 742,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 12,
                                    justifyContent: 'flex-end'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                        variant: "danger",
                                        onClick: ()=>handleAction('rejected'),
                                        disabled: saving,
                                        children: "Reject"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 749,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                        variant: "success",
                                        onClick: ()=>handleAction('approved'),
                                        disabled: saving,
                                        children: "Approve"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 750,
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
                        lineNumber: 741,
                        columnNumber: 13
                    }, this),
                    selectedApp.status !== 'pending' && selectedApp.admin_notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 12,
                            background: 'rgba(255,255,255,0.04)',
                            borderRadius: 10,
                            fontSize: '0.82rem',
                            color: 'rgba(255,255,255,0.6)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "Admin Notes:"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 756,
                                columnNumber: 15
                            }, this),
                            " ",
                            selectedApp.admin_notes
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 755,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 720,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 707,
        columnNumber: 5
    }, this);
}
// ============================================================
// SECTION: CHALLANS
// ============================================================
function ChallansSection() {
    const [challans, setChallans] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [pendingPayments, setPendingPayments] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('all');
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        student_id: '',
        title: '',
        amount: '',
        due_date: '',
        month: '',
        description: ''
    });
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [reviewingPayment, setReviewingPayment] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const load = async ()=>{
        setLoading(true);
        const [all, pending, studs] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllChallans"](),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPendingChallans"](),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllStudents"]()
        ]);
        setChallans(all);
        setPendingPayments(pending);
        setStudents(studs);
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        load();
    }, []);
    const handleCreate = async ()=>{
        setSaving(true);
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createChallan"]({
            ...form,
            amount: parseFloat(form.amount),
            created_by: user?.id
        });
        setShowCreate(false);
        setForm({
            student_id: '',
            title: '',
            amount: '',
            due_date: '',
            month: '',
            description: ''
        });
        load();
        setSaving(false);
    };
    const handleVerify = async (status)=>{
        setSaving(true);
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        const payment = reviewingPayment.payment?.[0];
        if (payment) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["verifyChallanPayment"](payment.id, reviewingPayment.id, status, user?.id);
        }
        setReviewingPayment(null);
        load();
        setSaving(false);
    };
    const challanColumns = [
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
            render: (r)=>r.student?.roll_no || '—',
            nowrap: true
        },
        {
            key: 'title',
            label: 'Title'
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
            render: (r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Badge, {
                    text: r.status?.replace('_', ' '),
                    color: r.status === 'paid' ? '#22c55e' : r.status === 'pending_verification' ? '#f97316' : r.status === 'overdue' ? '#ef4444' : '#6b7280'
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 817,
                    columnNumber: 52
                }, this)
        }
    ];
    const displayData = tab === 'pending' ? pendingPayments : challans;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionHeader, {
                title: "Challans",
                subtitle: `${pendingPayments.length} pending verification`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                    onClick: ()=>setShowCreate(true),
                    children: [
                        Icons.plus(16),
                        " New Challan"
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 827,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 826,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 4,
                    marginBottom: 20,
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 12,
                    padding: 4,
                    width: 'fit-content'
                },
                children: [
                    {
                        id: 'all',
                        label: 'All Challans'
                    },
                    {
                        id: 'pending',
                        label: `Pending Approvals (${pendingPayments.length})`
                    }
                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab(t.id),
                        style: {
                            padding: '8px 18px',
                            borderRadius: 10,
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            transition: 'all 0.2s',
                            background: tab === t.id ? `${GOLD}20` : 'transparent',
                            color: tab === t.id ? GOLD : 'rgba(255,255,255,0.4)'
                        },
                        children: t.label
                    }, t.id, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 833,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 841,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Table, {
                columns: challanColumns,
                data: displayData,
                actions: (row)=>{
                    if (row.status === 'pending_verification' && row.payment?.[0]) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                            variant: "primary",
                            onClick: ()=>setReviewingPayment(row),
                            style: {
                                padding: '6px 14px',
                                fontSize: '0.75rem'
                            },
                            children: "Review"
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 845,
                            columnNumber: 15
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                        icon: Icons.eye(14),
                        title: "View",
                        color: GOLD
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 848,
                        columnNumber: 18
                    }, this);
                }
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 842,
                columnNumber: 9
            }, this),
            showCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                title: "Create New Challan",
                onClose: ()=>setShowCreate(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SelectField, {
                        label: "Student",
                        value: form.student_id,
                        onChange: (e)=>setForm((p)=>({
                                    ...p,
                                    student_id: e.target.value
                                })),
                        required: true,
                        options: students.map((s)=>({
                                value: s.id,
                                label: `${s.first_name} ${s.last_name} (${s.roll_no})`
                            }))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 855,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                        label: "Title",
                        value: form.title,
                        onChange: (e)=>setForm((p)=>({
                                    ...p,
                                    title: e.target.value
                                })),
                        placeholder: "e.g. Tuition Fee - September 2026",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 857,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Amount (Rs.)",
                                value: form.amount,
                                onChange: (e)=>setForm((p)=>({
                                            ...p,
                                            amount: e.target.value
                                        })),
                                type: "number",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 859,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                                label: "Due Date",
                                value: form.due_date,
                                onChange: (e)=>setForm((p)=>({
                                            ...p,
                                            due_date: e.target.value
                                        })),
                                type: "date",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 860,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 858,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                        label: "Month",
                        value: form.month,
                        onChange: (e)=>setForm((p)=>({
                                    ...p,
                                    month: e.target.value
                                })),
                        placeholder: "e.g. September 2026"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 862,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                        label: "Description",
                        value: form.description,
                        onChange: (e)=>setForm((p)=>({
                                    ...p,
                                    description: e.target.value
                                })),
                        placeholder: "Additional details..."
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 863,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            justifyContent: 'flex-end',
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                variant: "secondary",
                                onClick: ()=>setShowCreate(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 865,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                onClick: handleCreate,
                                disabled: saving,
                                children: saving ? 'Creating...' : 'Create Challan'
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 866,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 864,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 854,
                columnNumber: 9
            }, this),
            reviewingPayment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                title: `Review Payment: ${reviewingPayment.challan_no}`,
                onClose: ()=>setReviewingPayment(null),
                width: 560,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 12,
                            marginBottom: 20
                        },
                        children: [
                            [
                                'Student',
                                reviewingPayment.student ? `${reviewingPayment.student.first_name} ${reviewingPayment.student.last_name}` : '—'
                            ],
                            [
                                'Roll No',
                                reviewingPayment.student?.roll_no || '—'
                            ],
                            [
                                'Amount',
                                `Rs. ${Number(reviewingPayment.amount).toLocaleString()}`
                            ],
                            [
                                'Due Date',
                                reviewingPayment.due_date
                            ],
                            [
                                'Payment Method',
                                reviewingPayment.payment?.[0]?.payment_method?.toUpperCase()
                            ],
                            [
                                'Transaction ID',
                                reviewingPayment.payment?.[0]?.transaction_id
                            ],
                            [
                                'Amount Paid',
                                reviewingPayment.payment?.[0]?.amount_paid ? `Rs. ${Number(reviewingPayment.payment[0].amount_paid).toLocaleString()}` : '—'
                            ],
                            [
                                'Submitted At',
                                reviewingPayment.payment?.[0]?.submitted_at ? new Date(reviewingPayment.payment[0].submitted_at).toLocaleString() : '—'
                            ]
                        ].map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.4)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase'
                                        },
                                        children: l
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 886,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.88rem',
                                            color: '#fff',
                                            marginTop: 2
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 887,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 885,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 874,
                        columnNumber: 11
                    }, this),
                    reviewingPayment.payment?.[0]?.screenshot_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    color: GOLD,
                                    marginBottom: 8
                                },
                                children: "Payment Screenshot"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 893,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.04)',
                                    borderRadius: 12,
                                    padding: 16,
                                    textAlign: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    src: reviewingPayment.payment[0].screenshot_url,
                                    alt: "Payment proof",
                                    style: {
                                        maxWidth: '100%',
                                        maxHeight: 300,
                                        borderRadius: 8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 895,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 894,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 892,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            justifyContent: 'flex-end'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                variant: "danger",
                                onClick: ()=>handleVerify('rejected'),
                                disabled: saving,
                                children: "Reject Payment"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 900,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                variant: "success",
                                onClick: ()=>handleVerify('approved'),
                                disabled: saving,
                                children: "Approve Payment"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 901,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 899,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 873,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 825,
        columnNumber: 5
    }, this);
}
// ============================================================
// SECTION: GUARDIANS
// ============================================================
function GuardiansSection() {
    const [guardians, setGuardians] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllGuardians"]().then((data)=>{
            setGuardians(data);
            setLoading(false);
        });
    }, []);
    const columns = [
        {
            key: 'name',
            label: 'Name',
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
            render: (r)=>r.user?.phone,
            nowrap: true
        },
        {
            key: 'email',
            label: 'Email',
            render: (r)=>r.user?.email || '—'
        },
        {
            key: 'occupation',
            label: 'Occupation'
        },
        {
            key: 'relation_to_student',
            label: 'Relation'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionHeader, {
                title: "Guardians",
                subtitle: `${guardians.length} registered guardians`
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 929,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: 40,
                    color: 'rgba(255,255,255,0.3)'
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 930,
                columnNumber: 18
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Table, {
                columns: columns,
                data: guardians,
                actions: (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.eye(14),
                                title: "View",
                                color: GOLD
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 933,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                                icon: Icons.edit(14),
                                title: "Edit",
                                color: "#3b82f6"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 934,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 932,
                        columnNumber: 11
                    }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 931,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 928,
        columnNumber: 5
    }, this);
}
// ============================================================
// SECTION: ANNOUNCEMENTS
// ============================================================
function AnnouncementsSection() {
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [showCreate, setShowCreate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        title: '',
        content: '',
        category: 'General',
        is_pinned: false
    });
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const load = async ()=>{
        setLoading(true);
        setAnnouncements(await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllAnnouncements"]());
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        load();
    }, []);
    const handleCreate = async ()=>{
        setSaving(true);
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createAnnouncement"]({
            ...form,
            created_by: user?.id,
            target_roles: [
                'admin',
                'teacher',
                'guardian'
            ]
        });
        setShowCreate(false);
        setForm({
            title: '',
            content: '',
            category: 'General',
            is_pinned: false
        });
        load();
        setSaving(false);
    };
    const handleDelete = async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["deleteAnnouncement"](id);
        load();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SectionHeader, {
                title: "Announcements",
                subtitle: `${announcements.length} announcements`,
                action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                    onClick: ()=>setShowCreate(true),
                    children: [
                        Icons.plus(16),
                        " New Announcement"
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 978,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 977,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gap: 12
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: 40,
                        color: 'rgba(255,255,255,0.3)'
                    },
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 982,
                    columnNumber: 20
                }, this) : announcements.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        padding: 40,
                        color: 'rgba(255,255,255,0.25)'
                    },
                    children: "No announcements yet"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 983,
                    columnNumber: 40
                }, this) : announcements.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Card, {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700,
                                                    color: '#fff',
                                                    fontSize: '0.95rem'
                                                },
                                                children: a.title
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 988,
                                                columnNumber: 19
                                            }, this),
                                            a.is_pinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Badge, {
                                                text: "Pinned",
                                                color: GOLD
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 989,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Badge, {
                                                text: a.category,
                                                color: "#3b82f6"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 990,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 987,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '0.82rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            lineHeight: 1.5,
                                            margin: 0
                                        },
                                        children: a.content
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 992,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.25)',
                                            marginTop: 6
                                        },
                                        children: [
                                            new Date(a.created_at).toLocaleDateString(),
                                            " • ",
                                            a.author ? `${a.author.first_name} ${a.author.last_name}` : 'System'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 993,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 986,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ActionButton, {
                                    icon: Icons.trash(14),
                                    title: "Delete",
                                    color: "#ef4444",
                                    onClick: ()=>handleDelete(a.id)
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 998,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 997,
                                columnNumber: 15
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 985,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 981,
                columnNumber: 7
            }, this),
            showCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Modal, {
                title: "Create Announcement",
                onClose: ()=>setShowCreate(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputField, {
                        label: "Title",
                        value: form.title,
                        onChange: (e)=>setForm((p)=>({
                                    ...p,
                                    title: e.target.value
                                })),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1007,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                style: {
                                    display: 'block',
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    marginBottom: 6,
                                    fontWeight: 500
                                },
                                children: [
                                    "Content ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#ef4444'
                                        },
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1009,
                                        columnNumber: 144
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1009,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
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
                                    outline: 'none',
                                    resize: 'vertical',
                                    fontFamily: 'inherit'
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1010,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1008,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SelectField, {
                                label: "Category",
                                value: form.category,
                                onChange: (e)=>setForm((p)=>({
                                            ...p,
                                            category: e.target.value
                                        })),
                                options: [
                                    'General',
                                    'Academic',
                                    'Meeting',
                                    'Notice',
                                    'Event',
                                    'Urgent'
                                ].map((c)=>({
                                        value: c,
                                        label: c
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1015,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 14,
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    paddingBottom: 14
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        cursor: 'pointer',
                                        fontSize: '0.85rem',
                                        color: '#fff'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.is_pinned,
                                            onChange: (e)=>setForm((p)=>({
                                                        ...p,
                                                        is_pinned: e.target.checked
                                                    })),
                                            style: {
                                                accentColor: GOLD
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 1019,
                                            columnNumber: 17
                                        }, this),
                                        "Pin this announcement"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 1018,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1017,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1014,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            justifyContent: 'flex-end',
                            marginTop: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                variant: "secondary",
                                onClick: ()=>setShowCreate(false),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1025,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Button, {
                                onClick: handleCreate,
                                disabled: saving,
                                children: saving ? 'Creating...' : 'Create Announcement'
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1026,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1024,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1006,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 976,
        columnNumber: 5
    }, this);
}
function AdminPortal() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('dashboard');
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!u || u.role !== 'admin') {
            router.replace('/login');
            return;
        }
        setUser(u);
        const checkMobile = ()=>setIsMobile(window.innerWidth < 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    if (!user) return null;
    const renderSection = ()=>{
        switch(activeSection){
            case 'dashboard':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DashboardSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1061,
                    columnNumber: 32
                }, this);
            case 'teachers':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TeachersSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1062,
                    columnNumber: 31
                }, this);
            case 'sessions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SessionsSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1063,
                    columnNumber: 31
                }, this);
            case 'students':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StudentsSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1064,
                    columnNumber: 31
                }, this);
            case 'admissions':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AdmissionsSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1065,
                    columnNumber: 33
                }, this);
            case 'challans':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChallansSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1066,
                    columnNumber: 31
                }, this);
            case 'guardians':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(GuardiansSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1067,
                    columnNumber: 32
                }, this);
            case 'announcements':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AnnouncementsSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1068,
                    columnNumber: 36
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DashboardSection, {}, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 1069,
                    columnNumber: 23
                }, this);
        }
    };
    const handleNavClick = (id)=>{
        setActiveSection(id);
        if (isMobile) setSidebarOpen(false);
    };
    // Sidebar content (shared desktop/mobile)
    const sidebarContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: '24px 20px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                        src: "/faeq-logo.png",
                        alt: "Al-Faeq",
                        style: {
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            objectFit: 'cover'
                        }
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1083,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.88rem',
                                    fontWeight: 800,
                                    color: '#fff',
                                    lineHeight: 1
                                },
                                children: "Al-Faeq"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1085,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.65rem',
                                    color: GOLD,
                                    fontWeight: 600,
                                    marginTop: 2
                                },
                                children: "Admin Panel"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1086,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1084,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1082,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                style: {
                    padding: '12px 10px',
                    flex: 1
                },
                children: NAV_ITEMS.map((item)=>{
                    const isActive = activeSection === item.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleNavClick(item.id),
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            width: '100%',
                            padding: '11px 14px',
                            background: isActive ? `${GOLD}12` : 'transparent',
                            border: 'none',
                            borderRadius: 12,
                            cursor: 'pointer',
                            marginBottom: 2,
                            transition: 'all 0.2s ease',
                            color: isActive ? GOLD : 'rgba(255,255,255,0.45)',
                            fontSize: '0.84rem',
                            fontWeight: isActive ? 700 : 500,
                            textAlign: 'left',
                            position: 'relative'
                        },
                        children: [
                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                lineNumber: 1111,
                                columnNumber: 28
                            }, this),
                            item.icon(18, isActive ? GOLD : 'rgba(255,255,255,0.35)'),
                            item.label
                        ]
                    }, item.id, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1095,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1091,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: '16px 20px',
                    borderTop: '1px solid rgba(255,255,255,0.06)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            color: '#fff',
                            marginBottom: 4
                        },
                        children: [
                            user.first_name,
                            " ",
                            user.last_name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.7rem',
                            color: 'rgba(255,255,255,0.3)',
                            marginBottom: 12
                        },
                        children: user.email
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["logout"])();
                            router.push('/login');
                        },
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            width: '100%',
                            padding: '10px 14px',
                            background: 'rgba(239,68,68,0.08)',
                            border: '1px solid rgba(239,68,68,0.15)',
                            borderRadius: 12,
                            cursor: 'pointer',
                            color: '#fca5a5',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            transition: 'all 0.2s'
                        },
                        children: [
                            Icons.logout(16, '#fca5a5'),
                            " Sign Out"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1080,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        className: "jsx-24ec56fd7a216f19",
                        children: "Admin Panel — Al-Faeq Education System"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Al-Faeq Education System Admin Panel - Manage teachers, students, sessions, admissions, and challans",
                        className: "jsx-24ec56fd7a216f19"
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    minHeight: '100vh',
                    background: '#0a0e1a',
                    fontFamily: "'Inter', sans-serif"
                },
                className: "jsx-24ec56fd7a216f19",
                children: [
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                        style: {
                            width: 260,
                            minHeight: '100vh',
                            background: 'rgba(255,255,255,0.02)',
                            borderRight: '1px solid rgba(255,255,255,0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            zIndex: 100
                        },
                        className: "jsx-24ec56fd7a216f19",
                        children: sidebarContent
                    }, void 0, false, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1146,
                        columnNumber: 11
                    }, this),
                    isMobile && sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSidebarOpen(false),
                                style: {
                                    position: 'fixed',
                                    inset: 0,
                                    background: 'rgba(0,0,0,0.6)',
                                    backdropFilter: 'blur(4px)',
                                    zIndex: 998
                                },
                                className: "jsx-24ec56fd7a216f19"
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                                style: {
                                    position: 'fixed',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 280,
                                    zIndex: 999,
                                    background: '#0f1322',
                                    borderRight: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    animation: 'slideInRight 0.25s ease'
                                },
                                className: "jsx-24ec56fd7a216f19",
                                children: sidebarContent
                            }, void 0, false, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            marginLeft: isMobile ? 0 : 260,
                            minHeight: '100vh'
                        },
                        className: "jsx-24ec56fd7a216f19",
                        children: [
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '14px 20px',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                                    position: 'sticky',
                                    top: 0,
                                    zIndex: 50,
                                    backdropFilter: 'blur(12px)'
                                },
                                className: "jsx-24ec56fd7a216f19",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSidebarOpen(true),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: '#fff',
                                            padding: 0
                                        },
                                        className: "jsx-24ec56fd7a216f19",
                                        children: Icons.menu(24)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8
                                        },
                                        className: "jsx-24ec56fd7a216f19",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: "/faeq-logo.png",
                                                alt: "",
                                                style: {
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: 8
                                                },
                                                className: "jsx-24ec56fd7a216f19"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 1195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: '0.92rem',
                                                    color: '#fff'
                                                },
                                                className: "jsx-24ec56fd7a216f19",
                                                children: "Admin Panel"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/admin.js",
                                                lineNumber: 1196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 24
                                        },
                                        className: "jsx-24ec56fd7a216f19"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1198,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: isMobile ? '20px 16px' : '32px 40px',
                                    maxWidth: 1200
                                },
                                className: "jsx-24ec56fd7a216f19",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 24
                                        },
                                        className: "jsx-24ec56fd7a216f19",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '0.72rem',
                                                color: 'rgba(255,255,255,0.25)',
                                                fontWeight: 500,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em'
                                            },
                                            className: "jsx-24ec56fd7a216f19",
                                            children: [
                                                "Admin Panel / ",
                                                NAV_ITEMS.find((n)=>n.id === activeSection)?.label || 'Dashboard'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/admin.js",
                                            lineNumber: 1206,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/admin.js",
                                        lineNumber: 1205,
                                        columnNumber: 13
                                    }, this),
                                    renderSection()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/admin.js",
                                lineNumber: 1203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/admin.js",
                        lineNumber: 1176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 1143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "24ec56fd7a216f19",
                children: "@keyframes slideInRight{0%{opacity:0;transform:translate(-100%)}to{opacity:1;transform:translate(0)}}.jsx-24ec56fd7a216f19{scrollbar-width:thin;scrollbar-color:#ffffff1a transparent}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:#ffffff1a;border-radius:3px}select.jsx-24ec56fd7a216f19 option.jsx-24ec56fd7a216f19{color:#fff;background:#1a1f2e}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 1137,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11hdlv7._.js.map