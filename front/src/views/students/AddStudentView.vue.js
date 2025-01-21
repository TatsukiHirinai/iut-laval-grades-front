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
var vue_1 = require("vue");
var vue_toastification_1 = require("vue-toastification");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var firstName = (0, vue_1.ref)('');
var lastName = (0, vue_1.ref)('');
var dateOfBirth = (0, vue_1.ref)('');
var email = (0, vue_1.ref)('');
var studentId = (0, vue_1.ref)('');
var toast = (0, vue_toastification_1.useToast)();
function createStudent() {
    return __awaiter(this, void 0, void 0, function () {
        var student, requestOptions, response, errorData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    student = {
                        firstName: firstName.value,
                        lastName: lastName.value,
                        email: email.value,
                        dateOfBirth: dateOfBirth.value,
                        studentId: studentId.value,
                    };
                    requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': "Bearer ".concat(localStorage.getItem('authToken')),
                        },
                        body: JSON.stringify(student),
                    };
                    return [4 /*yield*/, fetch('http://localhost:3000/api/students', requestOptions)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 2];
                    toast.success('Étudiant ajouté avec succès!');
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, response.json()];
                case 3:
                    errorData = _a.sent();
                    toast.error("Erreur: ".concat(errorData.error));
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    toast.error('Erreur lors de l\'ajout de l\'étudiant.');
                    console.error('Error adding student:', error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-wrapper") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("header") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.createStudent) }, { class: ("form") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ for: ("firstName") }, { class: ("label") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ name: ("firstName"), required: (true) }, { class: ("input") }));
    (__VLS_ctx.firstName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ for: ("lastName") }, { class: ("label") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ id: ("lastName"), name: ("lastName"), required: (true) }, { class: ("input") }));
    (__VLS_ctx.lastName);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ for: ("email") }, { class: ("label") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ id: ("email"), name: ("email"), type: ("email"), required: (true) }, { class: ("input") }));
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ for: ("dateOfBirth") }, { class: ("label") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ id: ("dateOfBirth"), name: ("dateOfBirth"), type: ("date"), required: (true) }, { class: ("input") }));
    (__VLS_ctx.dateOfBirth);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ for: ("studentId") }, { class: ("label") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ id: ("studentId"), name: ("studentId"), required: (true) }, { class: ("input") }));
    (__VLS_ctx.studentId);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-actions") }));
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/students"), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ to: ("/students"), }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ type: ("button") }, { class: ("button cancel") }));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ type: ("submit") }, { class: ("button add") }));
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['form-wrapper'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['form-actions'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['cancel'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['add'];
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
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            email: email,
            studentId: studentId,
            createStudent: createStudent,
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
