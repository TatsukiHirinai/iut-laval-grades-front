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
var vue_router_1 = require("vue-router");
var _a = await Promise.resolve().then(function () { return require('vue'); }), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    var __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ to: ("/"), }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    var __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/students"), }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{ to: ("/students"), }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    var __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/connection"), }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{ to: ("/connection"), }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_nonNullable(__VLS_17.slots).default;
    var __VLS_17;
    var __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    var __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/courses"), }));
    var __VLS_20 = __VLS_19.apply(void 0, __spreadArray([{ to: ("/courses"), }], __VLS_functionalComponentArgsRest(__VLS_19), false));
    __VLS_nonNullable(__VLS_23.slots).default;
    var __VLS_23;
    var __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, ] } */
    // @ts-ignore
    var __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    var __VLS_26 = __VLS_25.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_25), false));
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
            RouterLink: vue_router_1.RouterLink,
            RouterView: vue_router_1.RouterView,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
