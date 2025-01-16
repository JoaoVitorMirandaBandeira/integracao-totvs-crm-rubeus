export default (await import('vue')).defineComponent({
    props: {
        returnAPI: {
            type: Object,
            default: () => ({
                total: 555,
                enviados: 30,
                erros: 1,
                sucesso: 300,
            }),
        },
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("my-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("font-semibold text-text-gray text-[1rem]") },
    });
    (__VLS_ctx.returnAPI.total);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("font-semibold text-text-gray text-[1rem]") },
    });
    (__VLS_ctx.returnAPI.enviados);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("font-semibold text-text-gray text-[1rem]") },
    });
    (__VLS_ctx.returnAPI.erros);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("font-semibold text-text-gray text-[1rem]") },
    });
    (__VLS_ctx.returnAPI.sucesso);
    ['my-4', 'font-semibold', 'text-text-gray', 'text-[1rem]', 'font-semibold', 'text-text-gray', 'text-[1rem]', 'font-semibold', 'text-text-gray', 'text-[1rem]', 'font-semibold', 'text-text-gray', 'text-[1rem]',];
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
let __VLS_self;
