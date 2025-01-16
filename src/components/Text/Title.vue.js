const props = defineProps(['text']); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("font-semibold text-text-gray text-[1.2rem]") },
    });
    (props.text);
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({
        ...{ class: ("w-[100px] border-2 border-light-green") },
    });
    ['font-semibold', 'text-text-gray', 'text-[1.2rem]', 'w-[100px]', 'border-2', 'border-light-green',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: ['text'],
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: ['text'],
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
