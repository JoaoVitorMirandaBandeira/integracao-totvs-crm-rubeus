import { defineProps } from 'vue';
import Loading from '../Loading.vue';
const props = defineProps(); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['execute',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                props.callback($event);
            } },
        ...{ class: ("execute min-w-[100px] h-[50px]") },
        disabled: ((props.disabled)),
    });
    if (!props.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (props.textButton);
    }
    if (props.loading) {
        // @ts-ignore
        /** @type { [typeof Loading, ] } */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(Loading, new Loading({}));
        const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    ['execute', 'min-w-[100px]', 'h-[50px]',];
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
            Loading: Loading,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
