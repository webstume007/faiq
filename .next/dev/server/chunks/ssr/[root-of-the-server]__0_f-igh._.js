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
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.js [ssr] (ecmascript)");
;
;
;
;
;
const GOLD = '#F2A900';
const NAVY = '#002147';
const Icons = {
    book: (s = 24, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
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
                    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 11,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 11,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.js",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    graduation: (s = 24, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
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
                    fileName: "[project]/pages/index.js",
                    lineNumber: 14,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 14,
                    columnNumber: 173
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M21 9v6"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 14,
                    columnNumber: 333
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.js",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    users: (s = 24, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
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
                    fileName: "[project]/pages/index.js",
                    lineNumber: 17,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 17,
                    columnNumber: 191
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M23 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 17,
                    columnNumber: 220
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 17,
                    columnNumber: 258
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.js",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    shield: (s = 24, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
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
                fileName: "[project]/pages/index.js",
                lineNumber: 20,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/index.js",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    heart: (s = 24, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 23,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/index.js",
            lineNumber: 23,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    arrowRight: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
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
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 26,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "12 5 19 12 12 19"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 26,
                    columnNumber: 173
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.js",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    checkCircle: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
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
                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 29,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "22 4 12 14.01 9 11.01"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 29,
                    columnNumber: 184
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.js",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    phone: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: s,
            height: s,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: c,
            strokeWidth: "1.75",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 32,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/index.js",
            lineNumber: 32,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    mail: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
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
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 35,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polyline", {
                    points: "22 6 12 13 2 6"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 35,
                    columnNumber: 225
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.js",
            lineNumber: 35,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    mapPin: (s = 20, c = 'currentColor')=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
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
                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 38,
                    columnNumber: 138
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "10",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 38,
                    columnNumber: 196
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.js",
            lineNumber: 38,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
const PROGRAMS = [
    {
        code: 'HIFZ',
        name: 'Hifz Ul Quran (حفظ القرآن الكريم)',
        duration: '2 - 3 Years',
        icon: Icons.book,
        color: GOLD,
        desc: 'Complete Quran memorization with daily Sabaq, Sabqi, and 30-Para Manzil revision system. Verified Makharij & Tajweed under certified Qaris.'
    },
    {
        code: 'DARS-E-NIZAMI',
        name: 'Dars-e-Nizami (درس نظامی)',
        duration: '4 Academic Levels',
        icon: Icons.graduation,
        color: '#3b82f6',
        desc: 'Comprehensive Islamic scholarship curriculum: Pre 9th (Sanviya Aamah), 9th (Sanviya Khasa), 10th (Shahadah Aaliya), and 11th (Shahadah Aalmiya / Dora-e-Hadith).'
    }
];
const SCHOLARS = [
    {
        name: 'Mufti Ahmed Khan',
        role: 'Head of Fiqh & Hadith',
        qual: 'Shahadah Aalmiya, Wifaq-ul-Madaris',
        spec: 'Islamic Jurisprudence (Fiqh)'
    },
    {
        name: 'Qari Usman Ali',
        role: 'Head of Hifz Ul Quran',
        qual: 'Hafiz & Qari, Sanad in Hafs',
        spec: 'Tajweed & Quranic Memorization'
    },
    {
        name: 'Maulana Tariq Mahmood',
        role: 'Senior Scholar',
        qual: 'Shahadah Aaliya',
        spec: 'Ilm us-Sarf & Nahw'
    },
    {
        name: 'Maulana Kamran Raza',
        role: 'Senior Lecturer',
        qual: 'Shahadah Aalmiya',
        spec: 'Tafseer & Usul-ul-Fiqh'
    }
];
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (user) {
            router.replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getPortalPath"])(user.role));
            return;
        }
        const handleScroll = ()=>setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, [
        router
    ]);
    const scrollToSection = (id)=>{
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Al-Faeq Islamic Institute — Excellence in Islamic Education"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Al-Faeq Education System offers Hifz Ul Quran with daily Sabaq/Manzil tracking and Dars-e-Nizami scholarship programs."
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: '#0a0e1a',
                    color: '#fff',
                    fontFamily: "'Inter', sans-serif",
                    minHeight: '100vh'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 1000,
                            background: scrolled ? 'rgba(10, 14, 26, 0.95)' : 'transparent',
                            backdropFilter: scrolled ? 'blur(12px)' : 'none',
                            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
                            padding: '16px 36px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.3s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: "/faeq-logo.png",
                                        alt: "Al-Faeq Logo",
                                        style: {
                                            width: 40,
                                            height: 40,
                                            borderRadius: 12,
                                            objectFit: 'cover'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '1.05rem',
                                                    fontWeight: 800,
                                                    letterSpacing: '-0.02em',
                                                    color: '#fff'
                                                },
                                                children: "Al-Faeq Institute"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.68rem',
                                                    color: GOLD,
                                                    fontWeight: 700,
                                                    letterSpacing: '0.08em'
                                                },
                                                children: "ISLAMIC EDUCATION SYSTEM"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('programs'),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: 'rgba(255,255,255,0.7)',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        },
                                        children: "Programs"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('scholars'),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: 'rgba(255,255,255,0.7)',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        },
                                        children: "Faculty"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection('about'),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: 'rgba(255,255,255,0.7)',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        },
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/login'),
                                        style: {
                                            background: `linear-gradient(135deg, ${GOLD}, #e09800)`,
                                            color: '#0a0e1a',
                                            padding: '10px 22px',
                                            borderRadius: 12,
                                            border: 'none',
                                            fontWeight: 700,
                                            fontSize: '0.85rem',
                                            cursor: 'pointer'
                                        },
                                        children: "Sign In to Portal →"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        style: {
                            minHeight: '90vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '140px 24px 80px',
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    width: 600,
                                    height: 600,
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(242,169,0,0.12) 0%, transparent 70%)',
                                    top: '10%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    pointerEvents: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: 880,
                                    position: 'relative',
                                    zIndex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            padding: '6px 16px',
                                            borderRadius: 20,
                                            background: 'rgba(242,169,0,0.1)',
                                            border: '1px solid rgba(242,169,0,0.3)',
                                            color: GOLD,
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            marginBottom: 24
                                        },
                                        children: [
                                            Icons.book(16, GOLD),
                                            " Admissions Open • Fall 2026 Session"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: '3.2rem',
                                            fontWeight: 900,
                                            lineHeight: 1.15,
                                            margin: '0 0 20px 0',
                                            letterSpacing: '-0.03em',
                                            background: 'linear-gradient(180deg, #ffffff 40%, rgba(255,255,255,0.7) 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        },
                                        children: [
                                            "Sacred Knowledge.",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 156,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: GOLD,
                                                    WebkitTextFillColor: GOLD
                                                },
                                                children: "Modern Islamic Pedagogy."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '1.1rem',
                                            color: 'rgba(255,255,255,0.6)',
                                            lineHeight: 1.6,
                                            maxWidth: 640,
                                            margin: '0 auto 36px'
                                        },
                                        children: "Al-Faeq delivers authentic Quranic memorization with daily Surah & Ayah-level tracking, alongside the classical Dars-e-Nizami curriculum with real-time guardian visibility."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 16,
                                            justifyContent: 'center',
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push('/login'),
                                                style: {
                                                    background: `linear-gradient(135deg, ${GOLD}, #e09800)`,
                                                    color: '#0a0e1a',
                                                    padding: '14px 32px',
                                                    borderRadius: 14,
                                                    border: 'none',
                                                    fontWeight: 800,
                                                    fontSize: '0.95rem',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 10,
                                                    boxShadow: '0 10px 30px rgba(242,169,0,0.3)'
                                                },
                                                children: [
                                                    "Access Portal ",
                                                    Icons.arrowRight(18, '#0a0e1a')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollToSection('programs'),
                                                style: {
                                                    background: 'rgba(255,255,255,0.06)',
                                                    color: '#fff',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                    padding: '14px 28px',
                                                    borderRadius: 14,
                                                    fontWeight: 700,
                                                    fontSize: '0.95rem',
                                                    cursor: 'pointer'
                                                },
                                                children: "Explore Academic Programs"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        id: "programs",
                        style: {
                            padding: '80px 24px',
                            maxWidth: 1140,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginBottom: 48
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            color: GOLD,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        },
                                        children: "ACADEMIC DISCIPLINES"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '2.2rem',
                                            fontWeight: 800,
                                            margin: '8px 0 0 0'
                                        },
                                        children: "Our Core Islamic Programs"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                                    gap: 24
                                },
                                children: PROGRAMS.map((prog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: 20,
                                            padding: 32,
                                            transition: 'all 0.3s ease'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 52,
                                                    height: 52,
                                                    borderRadius: 16,
                                                    background: `${prog.color}20`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginBottom: 20
                                                },
                                                children: prog.icon(28, prog.color)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.78rem',
                                                    color: prog.color,
                                                    fontWeight: 700
                                                },
                                                children: prog.duration
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.3rem',
                                                    fontWeight: 800,
                                                    margin: '6px 0 12px 0'
                                                },
                                                children: prog.name
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.6)',
                                                    fontSize: '0.88rem',
                                                    lineHeight: 1.6,
                                                    margin: '0 0 20px 0'
                                                },
                                                children: prog.desc
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderTop: '1px solid rgba(255,255,255,0.06)',
                                                    paddingTop: 16
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>router.push('/login'),
                                                    style: {
                                                        background: 'none',
                                                        border: 'none',
                                                        color: prog.color,
                                                        fontWeight: 700,
                                                        fontSize: '0.85rem',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 6,
                                                        padding: 0
                                                    },
                                                    children: [
                                                        "Apply for Admission ",
                                                        Icons.arrowRight(16, prog.color)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pages/index.js",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, prog.code, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        id: "scholars",
                        style: {
                            padding: '80px 24px',
                            maxWidth: 1140,
                            margin: '0 auto',
                            borderTop: '1px solid rgba(255,255,255,0.06)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginBottom: 48
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            color: GOLD,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        },
                                        children: "DISTINGUISHED FACULTY"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: '2.2rem',
                                            fontWeight: 800,
                                            margin: '8px 0 0 0'
                                        },
                                        children: "Scholars & Instructors"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                    gap: 20
                                },
                                children: SCHOLARS.map((sc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: 16,
                                            padding: 24
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 44,
                                                    height: 44,
                                                    borderRadius: 12,
                                                    background: 'rgba(255,255,255,0.05)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: GOLD,
                                                    fontWeight: 800,
                                                    marginBottom: 14
                                                },
                                                children: sc.name.split(' ')[1]?.[0] || 'S'
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '1.05rem',
                                                    fontWeight: 700,
                                                    margin: '0 0 4px 0'
                                                },
                                                children: sc.name
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.78rem',
                                                    color: GOLD,
                                                    fontWeight: 600
                                                },
                                                children: sc.role
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.75rem',
                                                    color: 'rgba(255,255,255,0.4)',
                                                    marginTop: 8
                                                },
                                                children: sc.qual
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.72rem',
                                                    color: 'rgba(255,255,255,0.5)',
                                                    marginTop: 4
                                                },
                                                children: [
                                                    "Specialization: ",
                                                    sc.spec
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                        style: {
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                            padding: '40px 24px',
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 10,
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        src: "/faeq-logo.png",
                                        alt: "",
                                        style: {
                                            width: 28,
                                            height: 28,
                                            borderRadius: 8
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 800,
                                            fontSize: '0.95rem'
                                        },
                                        children: "Al-Faeq Islamic Institute"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(255,255,255,0.3)',
                                    fontSize: '0.78rem',
                                    margin: 0
                                },
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Al-Faeq Islamic Education System. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_f-igh._.js.map