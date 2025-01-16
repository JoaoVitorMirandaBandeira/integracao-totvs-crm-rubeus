import { defineProps, ref, watch } from 'vue';
const props = defineProps();
const inputValue = ref(props.modelValue);
// Emitindo o evento para atualizar o valor no componente pai
const emits = defineEmits(['update:modelValue']);
const input = () => {
    emits('update:modelValue', inputValue.value);
};
// Watch para atualizar inputValue quando modelValue mudar
watch(() => props.modelValue, (newValue) => {
    inputValue.value = newValue;
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col m-0.5 pt-[15px]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        for: ((props.id)),
        ...{ class: ("text-md") },
    });
    (props.label);
    if (props.required) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-red-rubeus") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        ...{ onInput: (__VLS_ctx.input) },
        type: ((props.type)),
        name: ((props.name)),
        placeholder: ((props.placeholder)),
        ...{ class: ("h-[60px] min-w-[200px] bg-blurred-white rounded-t-[3px] border-b-[3px] border-medium-gray") },
    });
    (__VLS_ctx.inputValue);
    ['flex', 'flex-col', 'm-0.5', 'pt-[15px]', 'text-md', 'text-red-rubeus', 'h-[60px]', 'min-w-[200px]', 'bg-blurred-white', 'rounded-t-[3px]', 'border-b-[3px]', 'border-medium-gray',];
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
            inputValue: inputValue,
            input: input,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
