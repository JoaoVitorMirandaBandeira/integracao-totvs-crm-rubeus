import { defineProps } from 'vue';
const props = defineProps({
    textButton: String,
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['pause',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("pause") },
    });
    (props.textButton);
    ['pause',];
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
    props: {
        textButton: String,
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        textButton: String,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
