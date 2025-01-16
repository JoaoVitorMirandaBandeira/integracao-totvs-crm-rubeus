const props = defineProps(['title']); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("navbar bg-white w-full flex items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ("/logo.svg"),
        alt: ("Logo Rubeus"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("title font-bold text-[1.25rem]") },
    });
    (props.title);
    ['navbar', 'bg-white', 'w-full', 'flex', 'items-center', 'title', 'font-bold', 'text-[1.25rem]',];
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
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
