(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/login\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/login.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/login.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/login";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/login.js [client] (ecmascript)");
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
"[project]/lib/users.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateUser",
    ()=>authenticateUser,
    "createUser",
    ()=>createUser,
    "findUserByCnic",
    ()=>findUserByCnic,
    "getAllUsers",
    ()=>getAllUsers,
    "getUsersByRole",
    ()=>getUsersByRole
]);
/**
 * Local Users Data Store
 * Simulates a database with pre-seeded accounts for testing.
 * Will be replaced with Supabase later.
 */ // Pre-seeded users for testing
let users = [
    {
        id: '1',
        cnic: '35202-1234567-1',
        password: 'admin123',
        role: 'admin',
        firstName: 'System',
        lastName: 'Admin',
        email: 'admin@school.com',
        phone: '03001234567',
        currentAddress: 'Admin Office, School Campus',
        permanentAddress: 'Admin Office, School Campus',
        dateOfBirth: '1985-01-15',
        education: 'MBA',
        isVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: '2',
        cnic: '35202-7654321-2',
        password: 'teacher123',
        role: 'teacher',
        firstName: 'Ahmed',
        lastName: 'Khan',
        email: 'ahmed.khan@school.com',
        phone: '03009876543',
        currentAddress: '123 Main Street, City',
        permanentAddress: '456 Village Road, Town',
        dateOfBirth: '1990-06-20',
        education: 'MSc Computer Science',
        isVerified: true,
        createdAt: new Date().toISOString()
    },
    {
        id: '3',
        cnic: '35202-1111111-3',
        password: 'guardian123',
        role: 'guardian',
        firstName: 'Mohammad',
        lastName: 'Ali',
        email: 'ali@email.com',
        phone: '03005551234',
        currentAddress: '789 Street, City',
        permanentAddress: '789 Street, City',
        dateOfBirth: '1980-03-10',
        education: '',
        isVerified: true,
        createdAt: new Date().toISOString()
    }
];
const authenticateUser = (cnic, password)=>{
    const user = users.find((u)=>u.cnic === cnic && u.password === password);
    if (!user) return null;
    // Return user without password
    const { password: _, ...safeUser } = user;
    return safeUser;
};
const findUserByCnic = (cnic)=>{
    const user = users.find((u)=>u.cnic === cnic);
    if (!user) return null;
    const { password: _, ...safeUser } = user;
    return safeUser;
};
const getUsersByRole = (role)=>{
    return users.filter((u)=>u.role === role).map(({ password: _, ...u })=>u);
};
const createUser = (userData)=>{
    // Check if CNIC already exists
    if (users.find((u)=>u.cnic === userData.cnic)) {
        return {
            error: 'An account with this CNIC already exists.'
        };
    }
    const newUser = {
        id: String(Date.now()),
        ...userData,
        isVerified: false,
        createdAt: new Date().toISOString()
    };
    users.push(newUser);
    const { password: _, ...safeUser } = newUser;
    return {
        user: safeUser
    };
};
const getAllUsers = ()=>{
    return users.map(({ password: _, ...u })=>u);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/login.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/users.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
// ============================================================
// SVG ICON LIBRARY (Pure SVG - Clean, Sharp, Reliable)
// ============================================================
const Icons = {
    shield: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    user: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
    idCard: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 10h20"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 25,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 15h2"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 26,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    lock: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    eye: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 38,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
    eyeOff: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 44,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 45,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.12 14.12a3 3 0 1 1-4.24-4.24"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 46,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
    mail: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    phone: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    arrowRight: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 63,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
    alertCircle: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 69,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 70,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
    checkCircle: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 76,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
    loader: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    graduationCap: (size = 20, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 14l9-5-9-5-9 5 9 5z"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 87,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 88,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    sparkle: (size = 14, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            viewBox: "0 0 24 24",
            fill: color,
            stroke: "none",
            style: {
                display: 'block'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    plus: (size = 18, color = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 99,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
const ParticleBackground = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["memo"])(()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            pointerEvents: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = ParticleBackground;
ParticleBackground.displayName = 'ParticleBackground';
// ============================================================
// REUSABLE INPUT FIELD (Isolated component)
// ============================================================
const InputField = ({ icon, label, type = 'text', value, onChange, placeholder, rightElement, ...rest })=>{
    _s();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 18
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: styles.label,
                children: label
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 155,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.inputWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
_s(InputField, "rwqZf9cBjrH2zIMw/NeLpi+hjZQ=");
_c1 = InputField;
function LoginPage() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('login'); // 'login' | 'signup'
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        type: '',
        text: ''
    });
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Login fields
    const [cnic, setCnic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Signup fields
    const [signupData, setSignupData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: '',
        lastName: '',
        cnic: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPage.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getCurrentUser"])();
            if (user) {
                router.replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getPortalPath"])(user.role));
            }
        }
    }["LoginPage.useEffect"], []);
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
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__["authenticateUser"])(cnic, password);
        if (!user) {
            setMessage({
                type: 'error',
                text: 'Invalid CNIC or password. Please try again.'
            });
            setLoading(false);
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["login"])(user);
        setMessage({
            type: 'success',
            text: `Welcome, ${user.firstName}! Redirecting...`
        });
        setTimeout(()=>{
            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getPortalPath"])(user.role));
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
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$users$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createUser"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Al-Faeq Education System"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.page,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleBackground, {}, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.container,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.logoHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.logoBadge,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: styles.title,
                                        children: "Al-Faeq Education System"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/login.js",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.card,
                                children: [
                                    message.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.message(message.type),
                                        children: [
                                            message.type === 'error' ? Icons.alertCircle(18, '#fca5a5') : Icons.checkCircle(18, '#86efac'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    mode === 'login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleLogin,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                                icon: Icons.lock(20, 'currentColor'),
                                                label: "Password",
                                                type: showPassword ? 'text' : 'password',
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                placeholder: "Enter password",
                                                required: true,
                                                rightElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                style: styles.submitBtn,
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        Icons.loader(18, '#0a0e1a'),
                                                        "Authenticating..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 390,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                    mode === 'signup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSignup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: styles.inputRow,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
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
                                                rightElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                style: styles.submitBtn,
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        Icons.loader(18, '#0a0e1a'),
                                                        "Creating Account..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/login.js",
                                                    lineNumber: 492,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.toggleSection,
                                        children: mode === 'login' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            mode === 'login' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.testAccounts,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.testTitle,
                                        children: [
                                            Icons.sparkle(12, '#F2A900'),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        ].map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                style: styles.testCard,
                                                onClick: ()=>fillTestAccount(acc.cnic, acc.pass),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.footer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s1(LoginPage, "QkoJnsq6zZKlXBH/2j3ySH74SWo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = LoginPage;
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
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ParticleBackground");
__turbopack_context__.k.register(_c1, "InputField");
__turbopack_context__.k.register(_c2, "LoginPage");
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

//# sourceMappingURL=%5Broot-of-the-server%5D__07zejtn._.js.map