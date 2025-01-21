"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    data: function () {
        return {
            students: [],
            searchQuery: ''
        };
    },
    computed: {
        filteredStudents: function () {
            var _this = this;
            return this.students.filter(function (student) {
                var fullName = "".concat(student.firstName, " ").concat(student.lastName).toLowerCase();
                return fullName.includes(_this.searchQuery.toLowerCase()) ||
                    student.email.toLowerCase().includes(_this.searchQuery.toLowerCase()) ||
                    student.studentId.toLowerCase().includes(_this.searchQuery.toLowerCase());
            });
        }
    },
    created: function () {
        return __awaiter(this, void 0, void 0, function () {
            var requestOptions, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        requestOptions = {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer ".concat(localStorage.getItem('authToken')),
                            },
                        };
                        return [4 /*yield*/, fetch('http://localhost:3000/api/students', requestOptions)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.students = data;
                        console.log(this.students);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error fetching students:', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("header") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/students/add"), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ to: ("/students/add"), }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("search-bar") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), width: ("24"), height: ("24"), viewBox: ("0 0 24 24"), fill: ("none"), stroke: ("currentColor"), "stroke-width": ("2"), "stroke-linecap": ("round"), "stroke-linejoin": ("round"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.circle, __VLS_intrinsicElements.circle)({ cx: ("11"), cy: ("11"), r: ("8"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("m21 21-4.3-4.3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.searchQuery)), placeholder: ("Rechercher un étudiant..."), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("student-list") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: ("ul-student") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.filteredStudents)); _i < _a.length; _i++) {
        var student = _a[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ key: ((student.id)) }, { class: ("student-item") }));
        var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6(__assign({ to: (({ name: 'getstudent', params: { id: student.id } })) }, { class: ("student-details") })));
        var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([__assign({ to: (({ name: 'getstudent', params: { id: student.id } })) }, { class: ("student-details") })], __VLS_functionalComponentArgsRest(__VLS_7), false));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("student-name") }));
        (student.firstName);
        (student.lastName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("student-email") }));
        (student.email);
        __VLS_nonNullable(__VLS_11.slots).default;
        var __VLS_11;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("student-id") }));
        (student.studentId);
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['search-bar'];
    __VLS_styleScopedClasses['student-list'];
    __VLS_styleScopedClasses['ul-student'];
    __VLS_styleScopedClasses['student-item'];
    __VLS_styleScopedClasses['student-details'];
    __VLS_styleScopedClasses['student-name'];
    __VLS_styleScopedClasses['student-email'];
    __VLS_styleScopedClasses['student-id'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self;
