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
"[project]/lib/guardianData.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Guardian Portal Mock Data
 * Provides schedule, attendance, results, and announcements for guardians.
 * Will be replaced with Supabase queries later.
 */ // Shared announcements (Notice Board) for all guardians
__turbopack_context__.s([
    "mockAnnouncements",
    ()=>mockAnnouncements,
    "mockGuardianChildren",
    ()=>mockGuardianChildren
]);
const mockAnnouncements = [
    {
        id: 1,
        title: 'Midterm Examination Schedule Released',
        date: '2026-08-05',
        category: 'Academic',
        content: 'Midterm examinations for Fall 2026 session will commence from August 20th. Detailed date sheet is uploaded on portal.'
    },
    {
        id: 2,
        title: 'Parent-Teacher Conference Announced',
        date: '2026-08-02',
        category: 'Meeting',
        content: 'Quarterly parent-teacher meeting is scheduled for Saturday, August 15th at 10:00 AM in the Auditorium.'
    },
    {
        id: 3,
        title: 'Fee Submission Deadline Extension',
        date: '2026-07-28',
        category: 'Notice',
        content: 'The deadline for 3rd Semester fee voucher submission has been extended to August 12th without late fee.'
    }
];
const mockGuardianChildren = {
    // Guardian: Mohammad Ali (35202-1111111-3)
    '35202-1111111-3': [
        {
            id: 'student_1',
            studentName: 'Zayd Mohammad Ali',
            rollNo: 'BSAI-2024-042',
            classSection: 'BSAI - 3rd Semester (Sec A)',
            guardianName: 'Mohammad Ali',
            guardianCnic: '35202-1111111-3',
            guardianPhone: '03005551234',
            overallAttendance: '92.5%',
            cgpa: '3.75',
            studyProgress: 85,
            schedule: [
                {
                    id: 1,
                    day: 'MON',
                    time: '08:30 AM - 10:00 AM',
                    course: 'Artificial Intelligence',
                    room: 'Lab 03 - CS Dept',
                    teacher: 'Dr. Sarah Ahmed',
                    code: 'CS-301'
                },
                {
                    id: 2,
                    day: 'MON',
                    time: '10:15 AM - 11:45 AM',
                    course: 'Database Systems',
                    room: 'Room 102 - Science Block',
                    teacher: 'Prof. Kamran Raza',
                    code: 'CS-302'
                },
                {
                    id: 3,
                    day: 'TUE',
                    time: '09:00 AM - 10:30 AM',
                    course: 'Data Structures & Algorithms',
                    room: 'Room 204 - CS Dept',
                    teacher: 'Engr. Usman Ali',
                    code: 'CS-303'
                },
                {
                    id: 4,
                    day: 'TUE',
                    time: '11:00 AM - 12:30 PM',
                    course: 'Linear Algebra',
                    room: 'Hall B - Main Building',
                    teacher: 'Dr. Tariq Mahmood',
                    code: 'MT-301'
                },
                {
                    id: 5,
                    day: 'WED',
                    time: '08:30 AM - 10:00 AM',
                    course: 'Machine Learning Lab',
                    room: 'AI Lab 01',
                    teacher: 'Dr. Sarah Ahmed',
                    code: 'CS-304'
                }
            ],
            attendance: {
                stats: {
                    totalClasses: 48,
                    present: 44,
                    absent: 3,
                    leave: 1,
                    percentage: 91.6
                },
                records: [
                    {
                        id: 1,
                        date: '2026-08-06',
                        subject: 'Artificial Intelligence',
                        status: 'Present',
                        time: '08:30 AM'
                    },
                    {
                        id: 2,
                        date: '2026-08-06',
                        subject: 'Database Systems',
                        status: 'Present',
                        time: '10:15 AM'
                    },
                    {
                        id: 3,
                        date: '2026-08-05',
                        subject: 'Data Structures',
                        status: 'Present',
                        time: '09:00 AM'
                    },
                    {
                        id: 4,
                        date: '2026-08-05',
                        subject: 'Linear Algebra',
                        status: 'Absent',
                        time: '11:00 AM'
                    }
                ]
            },
            results: [
                {
                    id: 1,
                    subject: 'Artificial Intelligence',
                    code: 'CS-301',
                    midterm: 23,
                    totalMid: 25,
                    assignment: 14,
                    totalAss: 15,
                    quiz: 9,
                    totalQuiz: 10,
                    grade: 'A'
                },
                {
                    id: 2,
                    subject: 'Database Systems',
                    code: 'CS-302',
                    midterm: 22,
                    totalMid: 25,
                    assignment: 15,
                    totalAss: 15,
                    quiz: 8,
                    totalQuiz: 10,
                    grade: 'A-'
                },
                {
                    id: 3,
                    subject: 'Data Structures',
                    code: 'CS-303',
                    midterm: 20,
                    totalMid: 25,
                    assignment: 13,
                    totalAss: 15,
                    quiz: 9,
                    totalQuiz: 10,
                    grade: 'B+'
                }
            ]
        },
        {
            id: 'student_2',
            studentName: 'Ayesha Mohammad Ali',
            rollNo: 'BSSE-2025-015',
            classSection: 'BSSE - 1st Semester (Sec B)',
            guardianName: 'Mohammad Ali',
            guardianCnic: '35202-1111111-3',
            guardianPhone: '03005551234',
            overallAttendance: '88.0%',
            cgpa: 'N/A',
            studyProgress: 60,
            schedule: [
                {
                    id: 6,
                    day: 'MON',
                    time: '09:00 AM - 10:30 AM',
                    course: 'Introduction to Programming',
                    room: 'Lab 01 - CS Dept',
                    teacher: 'Mr. Ali Khan',
                    code: 'CS-101'
                },
                {
                    id: 7,
                    day: 'WED',
                    time: '11:00 AM - 12:30 PM',
                    course: 'Calculus I',
                    room: 'Room 201 - Math Dept',
                    teacher: 'Dr. Faiza',
                    code: 'MT-101'
                }
            ],
            attendance: {
                stats: {
                    totalClasses: 25,
                    present: 22,
                    absent: 3,
                    leave: 0,
                    percentage: 88.0
                },
                records: [
                    {
                        id: 5,
                        date: '2026-08-06',
                        subject: 'Intro to Programming',
                        status: 'Present',
                        time: '09:00 AM'
                    },
                    {
                        id: 6,
                        date: '2026-08-04',
                        subject: 'Calculus I',
                        status: 'Absent',
                        time: '11:00 AM'
                    }
                ]
            },
            results: [
                {
                    id: 4,
                    subject: 'Intro to Programming',
                    code: 'CS-101',
                    midterm: 18,
                    totalMid: 25,
                    assignment: 12,
                    totalAss: 15,
                    quiz: 7,
                    totalQuiz: 10,
                    grade: 'B'
                }
            ]
        }
    ]
};
}),
"[project]/pages/guardian.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GuardianPortal
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$guardianData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/guardianData.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
// ============================================================
// PURE SVG ICONS (Zero emojis, crisp theme-based rendering)
// ============================================================
const Icons = {
    calendar: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "18",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 13,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "2",
                    x2: "16",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 14,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "2",
                    x2: "8",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 15,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "10",
                    x2: "21",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 16,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    clipboard: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 21,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                    x: "8",
                    y: "2",
                    width: "8",
                    height: "4",
                    rx: "1",
                    ry: "1"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 22,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M9 12h6"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 23,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M9 16h6"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 24,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    chart: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 30,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "14"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 28,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    bell: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 36,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M13.73 21a2 2 0 0 1-3.46 0"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 37,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 35,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    user: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 42,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 43,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 41,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    logOut: (size = 16, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 48,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "16 17 21 12 16 7"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 49,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "9",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 50,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 47,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    clock: (size = 14, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 55,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "12 6 12 12 16 14"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 56,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 54,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    mapPin: (size = 14, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 61,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 62,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 60,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    search: (size = 16, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 67,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 68,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 66,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    check: (size = 14, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                points: "20 6 9 17 4 12"
            }, void 0, false, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 72,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    x: (size = 14, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 78,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 79,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 77,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    minus: (size = 14, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }, void 0, false, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 83,
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
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 89,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 90,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 88,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    home: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 95,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "9 22 9 12 15 12 15 22"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 96,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 94,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    menu: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "12",
                    x2: "21",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 101,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "6",
                    x2: "21",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 102,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "3",
                    y1: "18",
                    x2: "21",
                    y2: "18"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 103,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 100,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    chevronDown: (size = 16, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                points: "6 9 12 15 18 9"
            }, void 0, false, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 107,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    checkDouble: (size = 16, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "18 6 7 17 2 12"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 113,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "22 10 12 20 10 18"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 114,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 112,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    edit: (size = 16, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12 20h9"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 119,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 120,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 118,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    sun: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "5"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 125,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "1",
                    x2: "12",
                    y2: "3"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 126,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "21",
                    x2: "12",
                    y2: "23"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 127,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "4.22",
                    y1: "4.22",
                    x2: "5.64",
                    y2: "5.64"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 128,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "18.36",
                    y1: "18.36",
                    x2: "19.78",
                    y2: "19.78"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 129,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "1",
                    y1: "12",
                    x2: "3",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 130,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "21",
                    y1: "12",
                    x2: "23",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 131,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "4.22",
                    y1: "19.78",
                    x2: "5.64",
                    y2: "18.36"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 132,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("line", {
                    x1: "18.36",
                    y1: "5.64",
                    x2: "19.78",
                    y2: "4.22"
                }, void 0, false, {
                    fileName: "[project]/pages/guardian.js",
                    lineNumber: 133,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 124,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    moon: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: color,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
                display: 'block',
                transition: 'all 0.3s'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            }, void 0, false, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/guardian.js",
            lineNumber: 137,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
function GuardianPortal() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // Theme state
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('dark');
    const [showThemeModal, setShowThemeModal] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Mobile / Desktop View State
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('home');
    const [showSidebar, setShowSidebar] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Data State
    const [childrenList, setChildrenList] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [selectedChildIndex, setSelectedChildIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [showChildSwitcher, setShowChildSwitcher] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Notifications State
    const [showNotifications, setShowNotifications] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([
        {
            id: 1,
            text: 'Zayd was marked Absent for Linear Algebra today.',
            time: '2 hours ago',
            read: false
        },
        {
            id: 2,
            text: 'New announcement: Midterm Examination Schedule Released',
            time: '1 day ago',
            read: false
        },
        {
            id: 3,
            text: 'Ayesha was marked Present for Calculus I',
            time: '2 days ago',
            read: false
        }
    ]);
    const activeNotifications = notifications.filter((n)=>!n.read);
    const unreadCount = activeNotifications.length;
    const markAllAsRead = ()=>{
        setNotifications(notifications.map((n)=>({
                ...n,
                read: true
            })));
    };
    // Profile Edit State
    const [isEditingProfile, setIsEditingProfile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        phone: '',
        address: ''
    });
    // Schedule Filters
    const [selectedDay, setSelectedDay] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('ALL');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        // Theme initialization
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            setShowThemeModal(true);
            setTheme('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!currentUser || currentUser.role !== 'guardian') {
            router.replace('/login');
            return ()=>window.removeEventListener('resize', handleResize);
        }
        setUser(currentUser);
        setProfileData({
            phone: currentUser.phone || '',
            address: currentUser.address || ''
        });
        // Load children data
        const cnic = currentUser.cnic;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$guardianData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockGuardianChildren"][cnic]) {
            setChildrenList(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$guardianData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockGuardianChildren"][cnic]);
        } else {
            setChildrenList([]);
        }
        setActiveTab('home');
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    if (!user || childrenList.length === 0) return null; // Show a loader in a real app
    const currentChild = childrenList[selectedChildIndex];
    // Filtered Schedule
    const filteredSchedule = currentChild.schedule.filter((item)=>{
        const matchesDay = selectedDay === 'ALL' || item.day === selectedDay;
        const matchesSearch = item.course.toLowerCase().includes(searchQuery.toLowerCase()) || item.teacher.toLowerCase().includes(searchQuery.toLowerCase()) || item.room.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesDay && matchesSearch;
    });
    const switchChild = (index)=>{
        setSelectedChildIndex(index);
        setShowChildSwitcher(false);
    };
    const handleTabChange = (tabKey)=>{
        setActiveTab(tabKey);
        setShowSidebar(false); // Close sidebar if navigating
    };
    const handleProfileSave = ()=>{
        setIsEditingProfile(false);
    };
    const toggleTheme = ()=>{
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
    };
    const handleSelectTheme = (selected)=>{
        setTheme(selected);
        localStorage.setItem('theme', selected);
        document.documentElement.setAttribute('data-theme', selected);
        setShowThemeModal(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        className: "jsx-e627a305f2d01399",
                        children: "Guardian Portal - Al-Faeq Education System"
                    }, void 0, false, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/faeq-logo.png",
                        className: "jsx-e627a305f2d01399"
                    }, void 0, false, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: styles.page,
                className: "jsx-e627a305f2d01399",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                        style: styles.globalHeader,
                        className: "jsx-e627a305f2d01399" + " " + "fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: styles.headerContainer,
                            className: "jsx-e627a305f2d01399",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.brandGroup,
                                    className: "jsx-e627a305f2d01399",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: styles.logoBox,
                                            className: "jsx-e627a305f2d01399",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: "/faeq-logo.png",
                                                alt: "Al-Faeq Logo",
                                                style: styles.logoImg,
                                                className: "jsx-e627a305f2d01399"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                            style: styles.brandTitle,
                                            className: "jsx-e627a305f2d01399",
                                            children: "Al-Faeq Education System"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.headerActions,
                                    className: "jsx-e627a305f2d01399",
                                    children: [
                                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: styles.desktopUserGroup,
                                            className: "jsx-e627a305f2d01399",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: styles.desktopUserInfo,
                                                    className: "jsx-e627a305f2d01399",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: styles.desktopUserName,
                                                            className: "jsx-e627a305f2d01399",
                                                            children: [
                                                                user.firstName,
                                                                " ",
                                                                user.lastName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: styles.desktopUserRole,
                                                            className: "jsx-e627a305f2d01399",
                                                            children: "• Guardian"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: styles.headerDivider,
                                                    className: "jsx-e627a305f2d01399"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this),
                                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: toggleTheme,
                                            style: styles.iconBtn,
                                            title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: theme === 'dark' ? Icons.sun(20, 'var(--accent-primary)') : Icons.moon(20, 'var(--accent-primary)')
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'relative'
                                            },
                                            className: "jsx-e627a305f2d01399",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    style: styles.iconBtn,
                                                    onClick: ()=>setShowNotifications(!showNotifications),
                                                    className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                    children: [
                                                        Icons.bell(20, 'var(--accent-primary)'),
                                                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: styles.badge,
                                                            className: "jsx-e627a305f2d01399" + " " + "pulse-anim",
                                                            children: unreadCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 321,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 314,
                                                    columnNumber: 17
                                                }, this),
                                                showNotifications && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: 'fixed',
                                                                top: 0,
                                                                left: 0,
                                                                right: 0,
                                                                bottom: 0,
                                                                zIndex: 50,
                                                                background: 'transparent'
                                                            },
                                                            onClick: ()=>setShowNotifications(false),
                                                            className: "jsx-e627a305f2d01399"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 327,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.notifDropdown,
                                                                zIndex: 60
                                                            },
                                                            className: "jsx-e627a305f2d01399" + " " + "slide-down",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    style: styles.notifHeader,
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                                            style: {
                                                                                margin: 0,
                                                                                fontSize: '0.9rem',
                                                                                color: 'var(--text-primary)',
                                                                                fontWeight: 600
                                                                            },
                                                                            className: "jsx-e627a305f2d01399",
                                                                            children: "Notifications"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 341,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                            onClick: markAllAsRead,
                                                                            style: styles.markReadBtn,
                                                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                                            children: [
                                                                                Icons.checkDouble(14, '#86efac'),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        marginLeft: 4
                                                                                    },
                                                                                    className: "jsx-e627a305f2d01399",
                                                                                    children: "Mark as read"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/guardian.js",
                                                                                    lineNumber: 344,
                                                                                    columnNumber: 64
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 343,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 340,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    style: styles.notifList,
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: activeNotifications.length > 0 ? activeNotifications.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            style: styles.notifItem,
                                                                            className: "jsx-e627a305f2d01399",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                    style: {
                                                                                        margin: '0 0 6px 0',
                                                                                        fontSize: '0.85rem',
                                                                                        color: 'var(--text-primary)',
                                                                                        lineHeight: 1.4
                                                                                    },
                                                                                    className: "jsx-e627a305f2d01399",
                                                                                    children: n.text
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/guardian.js",
                                                                                    lineNumber: 352,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: '0.65rem',
                                                                                        color: 'var(--text-tertiary)'
                                                                                    },
                                                                                    className: "jsx-e627a305f2d01399",
                                                                                    children: n.time
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/pages/guardian.js",
                                                                                    lineNumber: 353,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, n.id, true, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 351,
                                                                            columnNumber: 29
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            padding: '20px',
                                                                            textAlign: 'center',
                                                                            color: 'var(--text-tertiary)',
                                                                            fontSize: '0.85rem'
                                                                        },
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: "No new notifications."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 357,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 348,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 339,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 326,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["logout"])();
                                                router.push('/login');
                                            },
                                            style: styles.signOutBtnHeader,
                                            title: "Sign Out",
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: Icons.logOut(18, '#fca5a5')
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 369,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/guardian.js",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: styles.subHeader,
                        className: "jsx-e627a305f2d01399" + " " + "fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: styles.subHeaderContainer,
                            className: "jsx-e627a305f2d01399",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: styles.portalTag,
                                className: "jsx-e627a305f2d01399",
                                children: [
                                    user.firstName,
                                    " ",
                                    user.lastName,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--accent-sub-text)'
                                        },
                                        className: "jsx-e627a305f2d01399",
                                        children: "• Guardian"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 388,
                                        columnNumber: 79
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/guardian.js",
                            lineNumber: 387,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 386,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: styles.mainContainer,
                        className: "jsx-e627a305f2d01399",
                        children: [
                            (!isMobile || activeTab === 'home') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    ...styles.childCard,
                                    zIndex: showChildSwitcher ? 50 : 2
                                },
                                className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.childCardInner,
                                        className: "jsx-e627a305f2d01399",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.childAvatar,
                                                className: "jsx-e627a305f2d01399",
                                                children: Icons.user(24, 'var(--accent-primary)')
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.childInfo,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                        style: styles.childName,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: currentChild.studentName
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.childDetails,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.metaBadge,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: currentChild.rollNo
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 408,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.metaText,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: currentChild.classSection
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 409,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 407,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.childActionsGroup,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.childAttendance,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.attLabel,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: "Attendance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 415,
                                                                columnNumber: 22
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.attValue,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: currentChild.overallAttendance
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 416,
                                                                columnNumber: 22
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 414,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        style: styles.inlineSwitchBtn,
                                                        onClick: ()=>setShowChildSwitcher(!showChildSwitcher),
                                                        className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                transform: showChildSwitcher ? 'rotate(180deg)' : 'rotate(0deg)',
                                                                transition: 'transform 0.3s ease'
                                                            },
                                                            className: "jsx-e627a305f2d01399",
                                                            children: Icons.chevronDown(18, 'var(--accent-primary)')
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this),
                                    showChildSwitcher && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'fixed',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    zIndex: 40,
                                                    background: 'transparent'
                                                },
                                                onClick: ()=>setShowChildSwitcher(false),
                                                className: "jsx-e627a305f2d01399"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 435,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...styles.switcherDropdown,
                                                    zIndex: 50
                                                },
                                                className: "jsx-e627a305f2d01399" + " " + "slide-down",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                        style: styles.switcherTitle,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: "Select Child"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 448,
                                                        columnNumber: 21
                                                    }, this),
                                                    childrenList.map((child, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>switchChild(idx),
                                                            style: styles.switcherItem(idx === selectedChildIndex),
                                                            className: "jsx-e627a305f2d01399" + " " + "hover-scale",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    style: styles.switcherAvatar,
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: Icons.user(16, idx === selectedChildIndex ? 'var(--page-bg)' : 'var(--accent-primary)')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 456,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        textAlign: 'left'
                                                                    },
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            style: styles.switcherName(idx === selectedChildIndex),
                                                                            className: "jsx-e627a305f2d01399",
                                                                            children: child.studentName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 458,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            style: styles.switcherClass(idx === selectedChildIndex),
                                                                            className: "jsx-e627a305f2d01399",
                                                                            children: child.classSection
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 459,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 457,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, child.id, true, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 450,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        style: styles.addnewBtn,
                                                        className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                        children: [
                                                            Icons.plus(14, 'var(--accent-primary)'),
                                                            " Add New Child"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 463,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 434,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this),
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                style: styles.desktopTabs,
                                className: "jsx-e627a305f2d01399" + " " + "fade-in",
                                children: [
                                    {
                                        key: 'home',
                                        label: 'Home',
                                        icon: Icons.home
                                    },
                                    {
                                        key: 'schedule',
                                        label: 'Class Schedule',
                                        icon: Icons.calendar
                                    },
                                    {
                                        key: 'attendance',
                                        label: 'Attendance',
                                        icon: Icons.clipboard
                                    },
                                    {
                                        key: 'results',
                                        label: 'Academic Results',
                                        icon: Icons.chart
                                    },
                                    {
                                        key: 'announcements',
                                        label: 'Announcements',
                                        icon: Icons.bell
                                    },
                                    {
                                        key: 'profile',
                                        label: 'My Profile',
                                        icon: Icons.user
                                    }
                                ].map((tab)=>{
                                    const active = activeTab === tab.key;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTabChange(tab.key),
                                        style: styles.tabBtn(active),
                                        className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                        children: [
                                            tab.icon(18, active ? 'var(--page-bg)' : 'var(--text-secondary)'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-e627a305f2d01399",
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 494,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, tab.key, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 487,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            activeTab === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: isMobile ? {} : styles.desktopHomeGrid,
                                className: "jsx-e627a305f2d01399" + " " + "tab-anim fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.homeSection,
                                        className: "jsx-e627a305f2d01399",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.sectionHeader,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        style: styles.sectionTitle,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: "Notice Board"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 512,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleTabChange('announcements'),
                                                        style: styles.viewAllBtn,
                                                        className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "jsx-e627a305f2d01399",
                                                                children: "View All"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 514,
                                                                columnNumber: 21
                                                            }, this),
                                                            " ",
                                                            Icons.calendar(12, 'var(--accent-primary)')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 513,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.noticeList,
                                                className: "jsx-e627a305f2d01399",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$guardianData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockAnnouncements"].slice(0, 3).map((ann)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.noticeCard,
                                                        className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.noticeDate,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: ann.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 520,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                                style: styles.noticeTitle,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: ann.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 521,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, ann.id, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 519,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 24
                                        },
                                        className: "jsx-e627a305f2d01399",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.homeSection,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.sectionHeader,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                style: styles.sectionTitle,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: "Attendance Statistics"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 533,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleTabChange('attendance'),
                                                                style: styles.viewAllBtn,
                                                                className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: "Details"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 535,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 534,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 532,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.statsGrid,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: styles.statMiniCard,
                                                                className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: styles.statMiniLabel,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: "Present"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 540,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            ...styles.statMiniVal,
                                                                            color: '#22c55e'
                                                                        },
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: currentChild.attendance.stats.present
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 541,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 539,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    ...styles.statMiniCard,
                                                                    animationDelay: '0.1s'
                                                                },
                                                                className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: styles.statMiniLabel,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: "Absent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 544,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            ...styles.statMiniVal,
                                                                            color: '#ef4444'
                                                                        },
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: currentChild.attendance.stats.absent
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 545,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 543,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    ...styles.statMiniCard,
                                                                    animationDelay: '0.2s'
                                                                },
                                                                className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: styles.statMiniLabel,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: "Leave"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 548,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            ...styles.statMiniVal,
                                                                            color: '#eab308'
                                                                        },
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: currentChild.attendance.stats.leave
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 549,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 547,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 538,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.homeSection,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            ...styles.sectionTitle,
                                                            marginBottom: 12
                                                        },
                                                        className: "jsx-e627a305f2d01399",
                                                        children: "Study Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 556,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.progressCard,
                                                        className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: styles.progressHeader,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: styles.progressLabel,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: "Overall Performance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 559,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: styles.progressPercent,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: [
                                                                            currentChild.studyProgress,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 560,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 558,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: styles.progressBarBg,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        ...styles.progressBarFill,
                                                                        width: `${currentChild.studyProgress}%`
                                                                    },
                                                                    className: "jsx-e627a305f2d01399"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 563,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 562,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 557,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this),
                            activeTab === 'schedule' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-e627a305f2d01399" + " " + "tab-anim fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.controlsRow,
                                        className: "jsx-e627a305f2d01399",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.daySelector,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    'ALL',
                                                    'MON',
                                                    'TUE',
                                                    'WED',
                                                    'THU',
                                                    'FRI',
                                                    'SAT'
                                                ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedDay(day),
                                                        style: styles.dayBtn(selectedDay === day),
                                                        className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                        children: day
                                                    }, day, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 577,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.searchBox,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: styles.searchIcon,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: Icons.search(16, 'var(--text-tertiary)')
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 591,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        placeholder: "Search subject, teacher...",
                                                        style: styles.searchInput,
                                                        className: "jsx-e627a305f2d01399"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 592,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 590,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 576,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.cardsGrid,
                                        className: "jsx-e627a305f2d01399",
                                        children: filteredSchedule.length > 0 ? filteredSchedule.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...styles.scheduleCard,
                                                    animationDelay: `${idx * 0.05}s`
                                                },
                                                className: "jsx-e627a305f2d01399" + " " + "slide-up hover-scale",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.scheduleHeader,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.dayTag,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: item.day
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 607,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.codeTag,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: item.code
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 608,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 606,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        style: styles.courseTitle,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: item.course
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 610,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.scheduleDetailRow,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.detailIcon,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: Icons.clock(14, 'var(--accent-primary)')
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 613,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.detailText,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: item.time
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 614,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 612,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.scheduleDetailRow,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.detailIcon,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: Icons.mapPin(14, 'var(--text-secondary)')
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 618,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.detailText,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: item.room
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 619,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 617,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.scheduleDetailRow,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.detailIcon,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: Icons.user(14, 'var(--text-secondary)')
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 623,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.detailText,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: item.teacher
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 624,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 622,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 605,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: styles.emptyState,
                                            className: "jsx-e627a305f2d01399",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'var(--text-tertiary)',
                                                    fontSize: '0.9rem'
                                                },
                                                className: "jsx-e627a305f2d01399",
                                                children: "No classes scheduled for the selected filter."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 630,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 629,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 602,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 575,
                                columnNumber: 13
                            }, this),
                            activeTab === 'attendance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-e627a305f2d01399" + " " + "tab-anim fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.summaryRow,
                                        className: "jsx-e627a305f2d01399",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.summaryCard,
                                                className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryLabel,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 642,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryNum,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: currentChild.attendance.stats.totalClasses
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 643,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 641,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...styles.summaryCard,
                                                    animationDelay: '0.1s'
                                                },
                                                className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryLabel,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: "Present"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 646,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...styles.summaryNum,
                                                            color: '#22c55e'
                                                        },
                                                        className: "jsx-e627a305f2d01399",
                                                        children: currentChild.attendance.stats.present
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 647,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 645,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...styles.summaryCard,
                                                    animationDelay: '0.2s'
                                                },
                                                className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryLabel,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: "Absent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 650,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...styles.summaryNum,
                                                            color: '#ef4444'
                                                        },
                                                        className: "jsx-e627a305f2d01399",
                                                        children: currentChild.attendance.stats.absent
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 651,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...styles.summaryCard,
                                                    animationDelay: '0.3s'
                                                },
                                                className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: styles.summaryLabel,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: "Leave"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 654,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            ...styles.summaryNum,
                                                            color: '#eab308'
                                                        },
                                                        className: "jsx-e627a305f2d01399",
                                                        children: currentChild.attendance.stats.leave
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 655,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 653,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 640,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.panelCard,
                                        style: {
                                            animationDelay: '0.4s'
                                        },
                                        className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                style: styles.panelTitle,
                                                className: "jsx-e627a305f2d01399",
                                                children: "Daily Attendance Log"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 660,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.tableResponsive,
                                                className: "jsx-e627a305f2d01399",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                                                    style: styles.table,
                                                    className: "jsx-e627a305f2d01399",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                                            className: "jsx-e627a305f2d01399",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                                className: "jsx-e627a305f2d01399",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                        style: styles.th,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: "Date"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 665,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                        style: styles.th,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: "Subject"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 666,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                        style: styles.th,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: "Status"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 667,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 664,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 663,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                                                            className: "jsx-e627a305f2d01399",
                                                            children: currentChild.attendance.records.map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                                    style: styles.tr,
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                            style: styles.td,
                                                                            className: "jsx-e627a305f2d01399",
                                                                            children: rec.date
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 673,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                            style: styles.tdBold,
                                                                            className: "jsx-e627a305f2d01399",
                                                                            children: rec.subject
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 674,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                            style: styles.td,
                                                                            className: "jsx-e627a305f2d01399",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                style: styles.statusTag(rec.status),
                                                                                className: "jsx-e627a305f2d01399",
                                                                                children: [
                                                                                    rec.status === 'Present' && Icons.check(12, '#22c55e'),
                                                                                    rec.status === 'Absent' && Icons.x(12, '#ef4444'),
                                                                                    rec.status === 'Leave' && Icons.minus(12, '#eab308'),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                        className: "jsx-e627a305f2d01399",
                                                                                        children: rec.status
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/pages/guardian.js",
                                                                                        lineNumber: 680,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/pages/guardian.js",
                                                                                lineNumber: 676,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 675,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, rec.id, true, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 672,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 670,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 662,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 661,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 639,
                                columnNumber: 13
                            }, this),
                            activeTab === 'results' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-e627a305f2d01399" + " " + "tab-anim fade-in",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.panelCard,
                                    className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            style: styles.panelTitle,
                                            className: "jsx-e627a305f2d01399",
                                            children: "Semester Performance Overview"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: styles.tableResponsive,
                                            className: "jsx-e627a305f2d01399",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                                                style: styles.table,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                                        className: "jsx-e627a305f2d01399",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                            className: "jsx-e627a305f2d01399",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                    style: styles.th,
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: "Subject"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 701,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                    style: styles.th,
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: "Midterm (25)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 702,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                    style: styles.th,
                                                                    className: "jsx-e627a305f2d01399",
                                                                    children: "Grade"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/guardian.js",
                                                                    lineNumber: 703,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 700,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 699,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                                                        className: "jsx-e627a305f2d01399",
                                                        children: currentChild.results.map((res)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                                style: styles.tr,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                        style: styles.tdBold,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: [
                                                                            res.subject,
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {
                                                                                className: "jsx-e627a305f2d01399"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/guardian.js",
                                                                                lineNumber: 709,
                                                                                columnNumber: 67
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                style: styles.tdCode,
                                                                                className: "jsx-e627a305f2d01399",
                                                                                children: res.code
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/pages/guardian.js",
                                                                                lineNumber: 709,
                                                                                columnNumber: 72
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 709,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                        style: styles.td,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: [
                                                                            res.midterm,
                                                                            " / ",
                                                                            res.totalMid
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 710,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                        style: styles.td,
                                                                        className: "jsx-e627a305f2d01399",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            style: styles.gradeTag,
                                                                            className: "jsx-e627a305f2d01399",
                                                                            children: res.grade
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/guardian.js",
                                                                            lineNumber: 712,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/guardian.js",
                                                                        lineNumber: 711,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, res.id, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 708,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 706,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 698,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 697,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 695,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 694,
                                columnNumber: 13
                            }, this),
                            activeTab === 'announcements' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-e627a305f2d01399" + " " + "tab-anim fade-in",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 16
                                    },
                                    className: "jsx-e627a305f2d01399",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$guardianData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockAnnouncements"].map((ann, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...styles.announcementCard,
                                                animationDelay: `${idx * 0.1}s`
                                            },
                                            className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: styles.annHeader,
                                                    className: "jsx-e627a305f2d01399",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: styles.catBadge,
                                                            className: "jsx-e627a305f2d01399",
                                                            children: ann.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 730,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: styles.dateText,
                                                            className: "jsx-e627a305f2d01399",
                                                            children: ann.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/guardian.js",
                                                            lineNumber: 731,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 729,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    style: styles.annTitle,
                                                    className: "jsx-e627a305f2d01399",
                                                    children: ann.title
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 733,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    style: styles.annBody,
                                                    className: "jsx-e627a305f2d01399",
                                                    children: ann.content
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 734,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, ann.id, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 728,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 726,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 725,
                                columnNumber: 13
                            }, this),
                            activeTab === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-e627a305f2d01399" + " " + "tab-anim fade-in",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.profileGrid,
                                    className: "jsx-e627a305f2d01399",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: styles.panelCard,
                                        className: "jsx-e627a305f2d01399" + " " + "slide-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: 20
                                                },
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            ...styles.panelTitle,
                                                            margin: 0
                                                        },
                                                        className: "jsx-e627a305f2d01399",
                                                        children: "Guardian Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 747,
                                                        columnNumber: 21
                                                    }, this),
                                                    !isEditingProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsEditingProfile(true),
                                                        style: styles.editBtn,
                                                        className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                        children: [
                                                            Icons.edit(14, 'var(--accent-primary)'),
                                                            " Edit"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 749,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: handleProfileSave,
                                                        style: {
                                                            ...styles.editBtn,
                                                            background: '#22c55e',
                                                            color: '#0a0e1a',
                                                            borderColor: '#22c55e'
                                                        },
                                                        className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                                        children: [
                                                            Icons.check(14, '#0a0e1a'),
                                                            " Save"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 757,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 746,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: styles.profileList,
                                                className: "jsx-e627a305f2d01399",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.profileItem,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.profileLabel,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: "Full Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 769,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.profileVal,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: [
                                                                    user.firstName,
                                                                    " ",
                                                                    user.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 770,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 768,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.profileItem,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.profileLabel,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: "CNIC Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 773,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.profileVal,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: user.cnic
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 774,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 772,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.profileItem,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.profileLabel,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: "Phone Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 777,
                                                                columnNumber: 23
                                                            }, this),
                                                            isEditingProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                style: styles.editInput,
                                                                value: profileData.phone,
                                                                onChange: (e)=>setProfileData({
                                                                        ...profileData,
                                                                        phone: e.target.value
                                                                    }),
                                                                className: "jsx-e627a305f2d01399"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 779,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.profileVal,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: profileData.phone || 'N/A'
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 786,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 776,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: styles.profileItem,
                                                        className: "jsx-e627a305f2d01399",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.profileLabel,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: "Current Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 790,
                                                                columnNumber: 23
                                                            }, this),
                                                            isEditingProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                style: styles.editInput,
                                                                value: profileData.address,
                                                                onChange: (e)=>setProfileData({
                                                                        ...profileData,
                                                                        address: e.target.value
                                                                    }),
                                                                className: "jsx-e627a305f2d01399"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 792,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: styles.profileVal,
                                                                className: "jsx-e627a305f2d01399",
                                                                children: profileData.address || 'N/A'
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/guardian.js",
                                                                lineNumber: 799,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/guardian.js",
                                                        lineNumber: 789,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 767,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 745,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 744,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 743,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                style: styles.mobileNav,
                                className: "jsx-e627a305f2d01399" + " " + "slide-up-nav",
                                children: [
                                    [
                                        {
                                            key: 'home',
                                            label: 'Home',
                                            icon: Icons.home
                                        },
                                        {
                                            key: 'attendance',
                                            label: 'Attend',
                                            icon: Icons.clipboard
                                        },
                                        {
                                            key: 'schedule',
                                            label: 'Schedule',
                                            icon: Icons.calendar
                                        }
                                    ].map((tab)=>{
                                        const active = activeTab === tab.key;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabChange(tab.key),
                                            style: styles.mobileTabBtn(active),
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                tab.icon(20, active ? 'var(--accent-primary)' : 'var(--text-tertiary)'),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: styles.mobileTabLabel(active),
                                                    className: "jsx-e627a305f2d01399",
                                                    children: tab.label
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 829,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, tab.key, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 822,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowSidebar(!showSidebar),
                                        style: styles.mobileTabBtn(showSidebar),
                                        className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                        children: [
                                            Icons.menu(20, showSidebar ? 'var(--accent-primary)' : 'var(--text-tertiary)'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: styles.mobileTabLabel(showSidebar),
                                                className: "jsx-e627a305f2d01399",
                                                children: "More"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/guardian.js",
                                                lineNumber: 841,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 835,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 814,
                                columnNumber: 13
                            }, this),
                            showSidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: styles.sidebarOverlay,
                                onClick: ()=>setShowSidebar(false),
                                className: "jsx-e627a305f2d01399" + " " + "fade-in-fast",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.sidebarMenu,
                                    onClick: (e)=>e.stopPropagation(),
                                    className: "jsx-e627a305f2d01399" + " " + "slide-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: styles.sidebarHeader,
                                            className: "jsx-e627a305f2d01399",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        margin: 0,
                                                        fontSize: '1rem',
                                                        color: 'var(--text-primary)'
                                                    },
                                                    className: "jsx-e627a305f2d01399",
                                                    children: "More Options"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 850,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowSidebar(false),
                                                    style: {
                                                        background: 'none',
                                                        border: 'none',
                                                        color: 'var(--text-primary)',
                                                        cursor: 'pointer'
                                                    },
                                                    className: "jsx-e627a305f2d01399",
                                                    children: Icons.x(20)
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 851,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 849,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabChange('home'),
                                            style: styles.sidebarLink,
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                Icons.home(18, 'var(--text-secondary)'),
                                                " Home"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 854,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabChange('attendance'),
                                            style: styles.sidebarLink,
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                Icons.clipboard(18, 'var(--text-secondary)'),
                                                " Attendance"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 857,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabChange('schedule'),
                                            style: styles.sidebarLink,
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                Icons.calendar(18, 'var(--text-secondary)'),
                                                " Schedule"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 860,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabChange('results'),
                                            style: styles.sidebarLink,
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                Icons.chart(18, 'var(--text-secondary)'),
                                                " Results"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 863,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabChange('announcements'),
                                            style: styles.sidebarLink,
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                Icons.bell(18, 'var(--text-secondary)'),
                                                " Announcements"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 866,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleTabChange('profile'),
                                            style: styles.sidebarLink,
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                Icons.user(18, 'var(--text-secondary)'),
                                                " My Profile"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 869,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: 1,
                                                background: 'var(--divider)',
                                                margin: '10px 0'
                                            },
                                            className: "jsx-e627a305f2d01399"
                                        }, void 0, false, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 873,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: toggleTheme,
                                            style: styles.sidebarLink,
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                theme === 'dark' ? Icons.sun(18, 'var(--accent-primary)') : Icons.moon(18, 'var(--accent-primary)'),
                                                " Switch Theme (",
                                                theme === 'dark' ? 'Light' : 'Dark',
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 876,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["logout"])();
                                                router.push('/login');
                                            },
                                            style: {
                                                ...styles.sidebarLink,
                                                color: '#fca5a5'
                                            },
                                            className: "jsx-e627a305f2d01399" + " " + "hover-bright",
                                            children: [
                                                Icons.logOut(18, '#fca5a5'),
                                                " Sign Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 880,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 848,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/guardian.js",
                                lineNumber: 847,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 813,
                        columnNumber: 11
                    }, this),
                    showThemeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: styles.themeModalOverlay,
                        className: "jsx-e627a305f2d01399",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: styles.themeModalCard,
                            className: "jsx-e627a305f2d01399" + " " + "slide-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.logoBoxModal,
                                    className: "jsx-e627a305f2d01399",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: "/faeq-logo.png",
                                        alt: "Al-Faeq Logo",
                                        style: {
                                            width: 48,
                                            height: 48,
                                            objectFit: 'contain'
                                        },
                                        className: "jsx-e627a305f2d01399"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/guardian.js",
                                        lineNumber: 898,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 897,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    style: styles.themeModalTitle,
                                    className: "jsx-e627a305f2d01399",
                                    children: "Welcome to Al-Faeq"
                                }, void 0, false, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 900,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: styles.themeModalText,
                                    className: "jsx-e627a305f2d01399",
                                    children: "Please select your preferred theme preference. You can easily switch this later from the header or menu."
                                }, void 0, false, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 901,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: styles.themeModalOptions,
                                    className: "jsx-e627a305f2d01399",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSelectTheme('dark'),
                                            style: styles.themeOptionBtn('dark'),
                                            className: "jsx-e627a305f2d01399" + " " + "hover-scale",
                                            children: [
                                                Icons.moon(24, '#F2A900'),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 700,
                                                        display: 'block',
                                                        marginTop: 8
                                                    },
                                                    className: "jsx-e627a305f2d01399",
                                                    children: "Dark Theme"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 910,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '0.7rem',
                                                        opacity: 0.6
                                                    },
                                                    className: "jsx-e627a305f2d01399",
                                                    children: "(Default)"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 911,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSelectTheme('light'),
                                            style: styles.themeOptionBtn('light'),
                                            className: "jsx-e627a305f2d01399" + " " + "hover-scale",
                                            children: [
                                                Icons.sun(24, '#c28200'),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 700,
                                                        display: 'block',
                                                        marginTop: 8
                                                    },
                                                    className: "jsx-e627a305f2d01399",
                                                    children: "Light Theme"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 919,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '0.7rem',
                                                        opacity: 0.6
                                                    },
                                                    className: "jsx-e627a305f2d01399",
                                                    children: "(Clean UI)"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/guardian.js",
                                                    lineNumber: 920,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/guardian.js",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/guardian.js",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/guardian.js",
                            lineNumber: 896,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/guardian.js",
                        lineNumber: 895,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/guardian.js",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "e627a305f2d01399",
                children: ":root{--page-bg:#0a0e1a;--text-primary:#fff;--text-secondary:#fff9;--text-tertiary:#fff6;--card-bg:#121a3399;--card-bg-gradient:linear-gradient(135deg, #121a33cc 0%, #182342cc 100%);--card-border:#ffffff1a;--card-border-light:#ffffff14;--card-border-extra-light:#ffffff0a;--sub-header-bg:#f2a9001a;--sub-header-border:#f2a90033;--header-bg:#0a0e1a;--header-text:#fff;--tab-bg:#ffffff08;--tab-border:#ffffff0f;--input-bg:#ffffff0a;--input-border:#ffffff1a;--dropdown-bg:#121a33f2;--dropdown-shadow:#0009;--overlay-bg:#0009;--attendance-badge-bg:#0000004d;--divider:#ffffff1a;--theme-btn-bg:#ffffff0d;--theme-btn-border:#ffffff1a;--modal-bg:#121a33;--accent-primary:#f2a900;--accent-hover:#d99600;--accent-bg:#f2a9001f;--accent-border:#f2a90066;--accent-sub-text:#f2a900cc;--accent-gradient:linear-gradient(135deg, #f2a900 0%, #d99600 100%);--accent-gradient-horizontal:linear-gradient(90deg, #f2a900, #d99600);--accent-avatar-bg:#f2a90026;--accent-avatar-border:#f2a90066}[data-theme=light]{--page-bg:#f4f6fa;--text-primary:#1a202c;--text-secondary:#000000b8;--text-tertiary:#00000080;--card-bg:#fff;--card-bg-gradient:linear-gradient(135deg, #fff 0%, #f7fafc 100%);--card-border:#00000014;--card-border-light:#0000000f;--card-border-extra-light:#00000008;--sub-header-bg:#c282000d;--sub-header-border:#c2820026;--header-bg:#fff;--header-text:#1a202c;--tab-bg:#00000008;--tab-border:#0000000f;--input-bg:#00000005;--input-border:#00000014;--dropdown-bg:#fff;--dropdown-shadow:#0000001a;--overlay-bg:#0006;--attendance-badge-bg:#0000000a;--divider:#00000014;--theme-btn-bg:#00000008;--theme-btn-border:#00000014;--modal-bg:#fff;--accent-primary:#c28200;--accent-hover:#a66f00;--accent-bg:#c282001a;--accent-border:#c2820059;--accent-sub-text:#a66f00;--accent-gradient:linear-gradient(135deg, #c28200 0%, #a66f00 100%);--accent-gradient-horizontal:linear-gradient(90deg, #c28200, #a66f00);--accent-avatar-bg:#c282001a;--accent-avatar-border:#c282004d}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDown{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes slideLeft{0%{transform:translate(100%)}to{transform:translate(0)}}@keyframes slideUpNav{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes pulseAlert{0%{transform:scale(1)}50%{transform:scale(1.15);box-shadow:0 0 10px #ef444480}to{transform:scale(1)}}.fade-in{opacity:0;animation:.4s ease-out forwards fadeIn}.fade-in-fast{opacity:0;animation:.2s ease-out forwards fadeIn}.slide-up{opacity:0;animation:.4s ease-out forwards slideUp;transform:translateY(20px)}.slide-down{opacity:0;animation:.3s ease-out forwards slideDown;transform:translateY(-10px)}.slide-left{animation:.3s ease-out forwards slideLeft;transform:translate(100%)}.slide-up-nav{animation:.4s ease-out forwards slideUpNav;transform:translateY(100%)}.pulse-anim{animation:2s ease-in-out infinite pulseAlert}.hover-scale{transition:transform .2s,box-shadow .2s}.hover-scale:hover{transform:translateY(-2px);box-shadow:0 8px 25px var(--dropdown-shadow)!important}.hover-bright{transition:all .2s}.hover-bright:hover{filter:brightness(1.2)}.hover-bright:active{filter:brightness(.9);transform:scale(.97)}.tab-anim>div{animation-fill-mode:both}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/guardian.js",
        lineNumber: 267,
        columnNumber: 5
    }, this);
}
// ============================================================
// STYLES
// ============================================================
const styles = {
    page: {
        minHeight: '100vh',
        background: 'var(--page-bg)',
        color: 'var(--text-primary)',
        fontFamily: "'Inter', sans-serif",
        paddingBottom: 80,
        overflowX: 'hidden'
    },
    /* Global Header */ globalHeader: {
        background: 'var(--header-bg)',
        borderBottom: '1px solid var(--card-border-light)',
        position: 'sticky',
        top: 0,
        zIndex: 100
    },
    headerContainer: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    brandGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
    },
    logoBox: {
        width: 38,
        height: 38,
        borderRadius: 10,
        background: 'var(--theme-btn-bg)',
        border: '1px solid rgba(242, 169, 0, 0.3)',
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    },
    brandTitle: {
        fontSize: '1.05rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        margin: 0,
        letterSpacing: '-0.02em'
    },
    headerActions: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
    },
    desktopUserGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
    },
    desktopUserInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    desktopUserName: {
        fontSize: '0.85rem',
        fontWeight: 700,
        color: 'var(--text-primary)'
    },
    desktopUserRole: {
        fontSize: '0.7rem',
        color: 'var(--accent-sub-text)',
        fontWeight: 600
    },
    headerDivider: {
        width: 1,
        height: 24,
        background: 'var(--divider)'
    },
    signOutBtnHeader: {
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.2)',
        borderRadius: 8,
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#fca5a5'
    },
    iconBtn: {
        background: 'var(--theme-btn-bg)',
        border: '1px solid var(--theme-btn-border)',
        borderRadius: 50,
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.2s'
    },
    badge: {
        position: 'absolute',
        top: -2,
        right: -2,
        background: '#ef4444',
        color: '#fff',
        fontSize: '0.65rem',
        fontWeight: 700,
        width: 18,
        height: 18,
        borderRadius: 9,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid var(--page-bg)'
    },
    /* Notification Dropdown */ notifDropdown: {
        position: 'absolute',
        top: 'calc(100% + 12px)',
        right: 0,
        width: 320,
        background: 'var(--dropdown-bg)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--card-border)',
        borderRadius: 16,
        boxShadow: '0 15px 40px var(--dropdown-shadow)',
        zIndex: 60,
        overflow: 'hidden'
    },
    notifHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 16px',
        borderBottom: '1px solid var(--card-border-light)',
        background: 'var(--tab-bg)'
    },
    markReadBtn: {
        background: 'none',
        border: 'none',
        color: '#22c55e',
        fontSize: '0.75rem',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    },
    notifList: {
        maxHeight: 300,
        overflowY: 'auto'
    },
    notifItem: {
        padding: '14px 16px',
        borderBottom: '1px solid var(--card-border-extra-light)',
        background: 'var(--accent-bg)',
        borderLeft: '3px solid var(--accent-primary)',
        transition: 'background 0.2s'
    },
    /* Sub Header (Mobile Only, Left-aligned text) */ subHeader: {
        background: 'var(--sub-header-bg)',
        borderBottom: '1px solid var(--sub-header-border)'
    },
    subHeaderContainer: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    portalTag: {
        fontSize: '0.75rem',
        color: 'var(--text-primary)',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    },
    mainContainer: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '20px'
    },
    /* Child Selector Card */ childCard: {
        background: 'var(--card-bg-gradient)',
        border: '1px solid var(--card-border)',
        borderRadius: 16,
        marginBottom: 24,
        position: 'relative',
        boxShadow: '0 8px 20px var(--dropdown-shadow)'
    },
    childCardInner: {
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
    },
    childAvatar: {
        width: 48,
        height: 48,
        borderRadius: 12,
        background: 'var(--accent-avatar-bg)',
        border: '1px solid var(--accent-avatar-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    childInfo: {
        flex: 1,
        minWidth: 150
    },
    childName: {
        fontSize: '1.1rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        margin: '0 0 4px 0'
    },
    childDetails: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
    },
    childActionsGroup: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginLeft: 'auto'
    },
    childAttendance: {
        background: 'var(--attendance-badge-bg)',
        padding: '8px 12px',
        borderRadius: 10,
        border: '1px solid var(--card-border-light)',
        textAlign: 'center'
    },
    attLabel: {
        display: 'block',
        fontSize: '0.65rem',
        color: 'var(--text-secondary)',
        textTransform: 'uppercase'
    },
    attValue: {
        fontSize: '1rem',
        fontWeight: 800,
        color: '#22c55e'
    },
    inlineSwitchBtn: {
        width: 36,
        height: 36,
        borderRadius: 10,
        background: 'var(--accent-bg)',
        border: '1px solid var(--accent-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    },
    switcherDropdown: {
        position: 'absolute',
        top: 'calc(100% + 8px)',
        right: 20,
        background: 'var(--dropdown-bg)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--card-border)',
        borderRadius: 12,
        width: 250,
        boxShadow: '0 15px 40px var(--dropdown-shadow)',
        padding: 8
    },
    switcherTitle: {
        fontSize: '0.75rem',
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        padding: '8px 12px',
        margin: 0
    },
    switcherItem: (active)=>({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            width: '100%',
            background: active ? 'var(--accent-bg)' : 'transparent',
            border: active ? '1px solid var(--accent-border)' : '1px solid transparent',
            padding: '10px 12px',
            borderRadius: 8,
            cursor: 'pointer',
            marginBottom: 4,
            transition: 'all 0.2s'
        }),
    switcherAvatar: {
        background: 'var(--theme-btn-bg)',
        padding: 6,
        borderRadius: 8
    },
    switcherName: (active)=>({
            fontSize: '0.85rem',
            fontWeight: 600,
            color: active ? 'var(--accent-primary)' : 'var(--text-primary)'
        }),
    switcherClass: (active)=>({
            fontSize: '0.7rem',
            color: active ? 'var(--accent-sub-text)' : 'var(--text-tertiary)'
        }),
    addnewBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        padding: '10px',
        background: 'var(--tab-bg)',
        border: '1px dashed var(--input-border)',
        borderRadius: 8,
        color: 'var(--accent-primary)',
        fontSize: '0.8rem',
        fontWeight: 600,
        cursor: 'pointer',
        marginTop: 8
    },
    /* Desktop Tabs */ desktopTabs: {
        display: 'flex',
        gap: 8,
        background: 'var(--tab-bg)',
        padding: 6,
        borderRadius: 14,
        border: '1px solid var(--tab-border)',
        marginBottom: 24,
        overflowX: 'auto'
    },
    tabBtn: (active)=>({
            flex: 1,
            padding: '12px 16px',
            border: 'none',
            borderRadius: 10,
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            whiteSpace: 'nowrap',
            background: active ? 'var(--accent-gradient)' : 'transparent',
            color: active ? 'var(--page-bg)' : 'var(--text-secondary)',
            transition: 'all 0.2s ease'
        }),
    /* Home Layout */ desktopHomeGrid: {
        display: 'grid',
        gridTemplateColumns: '1.8fr 1.2fr',
        gap: 24
    },
    /* Home Section (Mobile & Desktop) */ homeSection: {
        marginBottom: 24
    },
    sectionHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    sectionTitle: {
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        margin: 0
    },
    viewAllBtn: {
        background: 'none',
        border: 'none',
        color: 'var(--accent-primary)',
        fontSize: '0.75rem',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 4
    },
    noticeList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    noticeCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border-light)',
        borderRadius: 12,
        padding: '14px',
        borderLeft: '4px solid var(--accent-primary)'
    },
    noticeDate: {
        display: 'block',
        fontSize: '0.7rem',
        color: 'var(--text-tertiary)',
        marginBottom: 4
    },
    noticeTitle: {
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        margin: 0
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 10
    },
    statMiniCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border-light)',
        borderRadius: 12,
        padding: '12px',
        textAlign: 'center'
    },
    statMiniLabel: {
        display: 'block',
        fontSize: '0.7rem',
        color: 'var(--text-secondary)',
        marginBottom: 4
    },
    statMiniVal: {
        fontSize: '1.2rem',
        fontWeight: 800,
        color: 'var(--text-primary)'
    },
    progressCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border-light)',
        borderRadius: 12,
        padding: '16px'
    },
    progressHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    progressLabel: {
        fontSize: '0.85rem',
        color: 'var(--text-primary)'
    },
    progressPercent: {
        fontSize: '0.85rem',
        fontWeight: 700,
        color: 'var(--accent-primary)'
    },
    progressBarBg: {
        height: 8,
        background: 'var(--card-border-light)',
        borderRadius: 4,
        overflow: 'hidden'
    },
    progressBarFill: {
        height: '100%',
        background: 'var(--accent-gradient-horizontal)',
        borderRadius: 4,
        transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    /* Common UI Elements */ metaBadge: {
        fontSize: '0.75rem',
        fontWeight: 700,
        color: 'var(--accent-primary)',
        background: 'var(--accent-bg)',
        padding: '3px 10px',
        borderRadius: 6,
        fontFamily: 'monospace'
    },
    metaText: {
        fontSize: '0.82rem',
        color: 'var(--text-secondary)'
    },
    /* Schedule specific */ controlsRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 20
    },
    daySelector: {
        display: 'flex',
        gap: 6,
        background: 'var(--input-bg)',
        padding: 4,
        borderRadius: 10,
        border: '1px solid var(--tab-border)'
    },
    dayBtn: (active)=>({
            padding: '8px 14px',
            border: 'none',
            borderRadius: 8,
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            background: active ? 'var(--accent-primary)' : 'transparent',
            color: active ? 'var(--page-bg)' : 'var(--text-secondary)',
            transition: 'all 0.2s'
        }),
    searchBox: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        minWidth: 200
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        pointerEvents: 'none'
    },
    searchInput: {
        width: '100%',
        padding: '10px 12px 10px 38px',
        background: 'var(--input-bg)',
        border: '1px solid var(--input-border)',
        borderRadius: 10,
        color: 'var(--text-primary)',
        fontSize: '0.85rem',
        outline: 'none',
        transition: 'all 0.3s'
    },
    cardsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16
    },
    scheduleCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border-light)',
        borderRadius: 14,
        padding: 20
    },
    scheduleHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    dayTag: {
        fontSize: '0.72rem',
        fontWeight: 800,
        color: 'var(--page-bg)',
        background: 'var(--accent-primary)',
        padding: '2px 8px',
        borderRadius: 6
    },
    codeTag: {
        fontSize: '0.72rem',
        fontWeight: 600,
        color: 'var(--text-tertiary)',
        fontFamily: 'monospace'
    },
    courseTitle: {
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        margin: '0 0 14px 0'
    },
    scheduleDetailRow: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8
    },
    detailIcon: {
        display: 'flex',
        alignItems: 'center'
    },
    detailText: {
        fontSize: '0.84rem',
        color: 'var(--text-secondary)'
    },
    /* Tables & Panels */ summaryRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12,
        marginBottom: 20
    },
    summaryCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border-light)',
        borderRadius: 12,
        padding: '16px 10px',
        textAlign: 'center'
    },
    summaryLabel: {
        display: 'block',
        fontSize: '0.7rem',
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        marginBottom: 6
    },
    summaryNum: {
        fontSize: '1.2rem',
        fontWeight: 800,
        color: 'var(--text-primary)'
    },
    panelCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border-light)',
        borderRadius: 14,
        padding: 20
    },
    panelTitle: {
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        margin: '0 0 16px 0'
    },
    tableResponsive: {
        overflowX: 'auto'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left'
    },
    th: {
        padding: '12px',
        fontSize: '0.75rem',
        fontWeight: 700,
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        borderBottom: '1px solid var(--card-border-light)'
    },
    tr: {
        borderBottom: '1px solid var(--card-border-extra-light)',
        transition: 'background 0.2s'
    },
    td: {
        padding: '12px',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
    },
    tdBold: {
        padding: '12px',
        fontSize: '0.88rem',
        fontWeight: 700,
        color: 'var(--text-primary)'
    },
    tdCode: {
        fontSize: '0.75rem',
        color: 'var(--accent-primary)',
        fontFamily: 'monospace'
    },
    statusTag: (status)=>({
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '4px 10px',
            borderRadius: 6,
            fontSize: '0.78rem',
            fontWeight: 700,
            background: status === 'Present' ? 'rgba(34, 197, 94, 0.12)' : status === 'Absent' ? 'rgba(239, 68, 68, 0.12)' : 'rgba(234, 179, 8, 0.12)',
            color: status === 'Present' ? '#22c55e' : status === 'Absent' ? '#ef4444' : '#eab308'
        }),
    gradeTag: {
        fontSize: '0.85rem',
        fontWeight: 800,
        color: 'var(--page-bg)',
        background: 'var(--accent-primary)',
        padding: '4px 12px',
        borderRadius: 6,
        display: 'inline-block'
    },
    /* Announcements */ announcementCard: {
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border-light)',
        borderRadius: 14,
        padding: 20
    },
    annHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    catBadge: {
        fontSize: '0.72rem',
        fontWeight: 700,
        color: 'var(--accent-primary)',
        background: 'var(--accent-bg)',
        padding: '3px 10px',
        borderRadius: 6
    },
    dateText: {
        fontSize: '0.78rem',
        color: 'var(--text-tertiary)'
    },
    annTitle: {
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--text-primary)',
        margin: '0 0 8px 0'
    },
    annBody: {
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
        margin: 0
    },
    /* Profile */ profileGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 20
    },
    profileList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
    },
    profileItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottom: '1px solid var(--card-border-extra-light)'
    },
    profileLabel: {
        fontSize: '0.82rem',
        color: 'var(--text-tertiary)',
        flexShrink: 0
    },
    profileVal: {
        fontSize: '0.85rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        textAlign: 'right'
    },
    editBtn: {
        background: 'var(--tab-bg)',
        border: '1px solid var(--input-border)',
        color: 'var(--text-primary)',
        padding: '6px 12px',
        borderRadius: 8,
        fontSize: '0.75rem',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 6
    },
    editInput: {
        background: 'var(--attendance-badge-bg)',
        border: '1px solid var(--accent-border)',
        color: 'var(--text-primary)',
        padding: '6px 10px',
        borderRadius: 6,
        fontSize: '0.85rem',
        textAlign: 'right',
        outline: 'none',
        width: '100%',
        maxWidth: 200
    },
    emptyState: {
        gridColumn: '1 / -1',
        textAlign: 'center',
        padding: 40,
        background: 'var(--tab-bg)',
        borderRadius: 14
    },
    /* Mobile Bottom Navigation Bar */ mobileNav: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--header-bg)',
        borderTop: '1px solid var(--card-border-light)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 4px'
    },
    mobileTabBtn: (active)=>({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            flex: 1
        }),
    mobileTabLabel: (active)=>({
            fontSize: '0.65rem',
            fontWeight: 600,
            color: active ? 'var(--accent-primary)' : 'var(--text-tertiary)',
            transition: 'color 0.2s'
        }),
    /* Mobile Sidebar / More Menu */ sidebarOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 60,
        background: 'var(--overlay-bg)',
        backdropFilter: 'blur(4px)',
        zIndex: 90,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    sidebarMenu: {
        background: 'var(--dropdown-bg)',
        width: 250,
        height: '100%',
        borderLeft: '1px solid var(--card-border)',
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
    },
    sidebarHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        borderBottom: '1px solid var(--card-border-light)',
        paddingBottom: 10
    },
    sidebarLink: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: 'none',
        border: 'none',
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        fontWeight: 600,
        padding: '12px 10px',
        cursor: 'pointer',
        borderRadius: 8,
        textAlign: 'left',
        transition: 'all 0.2s'
    },
    /* Theme Selection Modal */ themeModalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    themeModalCard: {
        background: 'var(--modal-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: 24,
        padding: 32,
        maxWidth: 440,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
    },
    logoBoxModal: {
        width: 64,
        height: 64,
        borderRadius: 16,
        background: 'rgba(242, 169, 0, 0.1)',
        border: '1px solid rgba(242, 169, 0, 0.3)',
        margin: '0 auto 20px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    themeModalTitle: {
        fontSize: '1.4rem',
        fontWeight: 800,
        color: 'var(--text-primary)',
        margin: '0 0 10px 0'
    },
    themeModalText: {
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
        margin: '0 0 24px 0'
    },
    themeModalOptions: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
    },
    themeOptionBtn: (optTheme)=>({
            background: 'var(--tab-bg)',
            border: '1px solid var(--tab-border)',
            borderRadius: 16,
            padding: '24px 16px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'all 0.2s'
        })
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1y7qh57._.js.map