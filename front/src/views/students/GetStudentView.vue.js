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
var authToken = localStorage.getItem('authToken');
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    name: 'GetStudentView',
    data: function () {
        return {
            student: null,
        };
    },
    created: function () {
        this.fetchStudentDetails();
    },
    methods: {
        fetchStudentDetails: function () {
            var _this = this;
            var studentId = this.$route.params.id;
            var requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer ".concat(localStorage.getItem('authToken')),
                }
            };
            fetch("http://localhost:3000/api/students/".concat(studentId), requestOptions)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.student = data;
            })
                .catch(function (error) {
                console.error('Error fetching student details:', error);
            });
        },
        formatDate: function (dateString) {
            var date = new Date(dateString);
            var day = String(date.getDate()).padStart(2, '0');
            var month = String(date.getMonth() + 1).padStart(2, '0');
            var year = date.getFullYear();
            return "".concat(day, "/").concat(month, "/").concat(year);
        }
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("header") }));
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/students"), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ to: ("/students"), }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("error-message") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.error);
    }
    else if (__VLS_ctx.isLoading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.student.firstName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.student.lastName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.student.studentId);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.student.email);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.formattedDateOfBirth);
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(__assign({ xmlns: ("http://www.w3.org/2000/svg"), width: ("24"), height: ("24"), viewBox: ("0 0 24 24"), fill: ("none"), stroke: ("currentColor"), "stroke-width": ("2"), "stroke-linecap": ("round"), "stroke-linejoin": ("round") }, { class: ("lucide lucide-download h-5 w-5 mr-2") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.polyline, __VLS_intrinsicElements.polyline)({ points: ("7 10 12 15 17 10"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.line, __VLS_intrinsicElements.line)({ x1: ("12"), x2: ("12"), y1: ("15"), y2: ("3"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['error-message'];
    __VLS_styleScopedClasses['lucide'];
    __VLS_styleScopedClasses['lucide-download'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['mr-2'];
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
