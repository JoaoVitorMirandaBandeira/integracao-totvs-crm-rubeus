import MonacoEditor from 'monaco-editor-vue3';
import { defineProps, ref } from 'vue';
const options = {
    colorDecorators: true,
    lineHeight: 24,
    readOnly: true,
    formatOnType: true,
    tabSize: 4,
    automaticLayout: true,
};
const props = defineProps({
    preview: {
        type: Object,
        default: () => ({
            name: 'Jonny Depp',
            age: 63,
            job: 'Actor',
        }),
    },
});
const value = ref(JSON.stringify(props.preview, null, 4)); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ref: ("editorContainer"),
        ...{ class: ("editor-container") },
    });
    // @ts-ignore navigation for `const editorContainer = ref()`
    /** @type { typeof __VLS_ctx.editorContainer } */ ;
    const __VLS_0 = {}.MonacoEditor;
    /** @type { [typeof __VLS_components.MonacoEditor, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        theme: ("vs-dark"),
        options: ((__VLS_ctx.options)),
        language: ("json"),
        value: ((__VLS_ctx.value)),
    }));
    const __VLS_2 = __VLS_1({
        theme: ("vs-dark"),
        options: ((__VLS_ctx.options)),
        language: ("json"),
        value: ((__VLS_ctx.value)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ['editor-container',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'editorContainer': __VLS_nativeElements['div'],
    };
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
            MonacoEditor: MonacoEditor,
            options: options,
            value: value,
        };
    },
    props: {
        preview: {
            type: Object,
            default: () => ({
                name: 'Jonny Depp',
                age: 63,
                job: 'Actor',
            }),
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        preview: {
            type: Object,
            default: () => ({
                name: 'Jonny Depp',
                age: 63,
                job: 'Actor',
            }),
        },
    },
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
