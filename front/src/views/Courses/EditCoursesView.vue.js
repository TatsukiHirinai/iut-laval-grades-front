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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var courses = (0, vue_1.ref)([]);
var status = (0, vue_1.ref)('');
var code = (0, vue_1.ref)('');
var nom = (0, vue_1.ref)('');
var credit = (0, vue_1.ref)('');
var description = (0, vue_1.ref)('');
var router = (0, vue_router_1.useRouter)();
var route = (0, vue_router_1.useRoute)();
var courseId = route.params.id;
function ModifyCourses(code, nom, credit, description) {
    return __awaiter(this, void 0, void 0, function () {
        var requestOptions, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestOptions = {
                        method: 'PUT',
                        headers: {
                            'Authorization': "Bearer ".concat(localStorage.getItem('authToken')),
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ code: code, name: nom, credits: credit, description: description })
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/courses/' + courseId, requestOptions)];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        status.value = 'There was a problem please try again';
                        throw new Error('Network response was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    status.value = 'The course has been added successfully';
                    router.push('/courses');
                    return [2 /*return*/, data];
                case 4:
                    error_1 = _a.sent();
                    status.value = 'There was a problem please try again';
                    return [2 /*return*/, null];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function cancel() {
    router.push('/courses');
}
function fetchCourses(courseId) {
    return __awaiter(this, void 0, void 0, function () {
        var requestOptions, response, data, course, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestOptions = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer ".concat(localStorage.getItem('authToken')),
                        },
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/courses', requestOptions)];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    courses.value = data;
                    course = courses.value.find(function (course) { return course.id == courseId; });
                    if (course) {
                        // Update form fields with course data
                        code.value = course.code;
                        nom.value = course.name;
                        credit.value = course.credits;
                        description.value = course.description;
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error('There was a problem with the fetch operation:', error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
(0, vue_1.onMounted)(function () {
    fetchCourses(courseId);
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_fnComponent = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({});
;
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_localComponents = __assign(__assign(__assign({}, {}), {}), __VLS_ctx);
    var __VLS_components;
    var __VLS_localDirectives = __assign(__assign({}, {}), __VLS_ctx);
    var __VLS_directives;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.submitForm) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.code)), placeholder: ("code du cours"), type: ("text"), minlength: ("2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.nom)), placeholder: ("nom du cours"), type: ("text"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), min: ("1"), max: ("60"), placeholder: ("Enter a number between 1 and 100"), });
    (__VLS_ctx.credit);
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.description)), placeholder: ("description"), type: ("text"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.status);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.ModifyCourses(__VLS_ctx.code, __VLS_ctx.nom, __VLS_ctx.credit, __VLS_ctx.description);
        } }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.cancel();
        } }));
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
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            status: status,
            code: code,
            nom: nom,
            credit: credit,
            description: description,
            ModifyCourses: ModifyCourses,
            cancel: cancel,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
