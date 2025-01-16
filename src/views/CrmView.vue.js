import Execute from '@/components/Buttons/Execute.vue';
import Pause from '@/components/Buttons/Pause.vue';
import EditorMonaco from '@/components/EditorMonaco.vue';
import Input from '@/components/Form/Input.vue';
import Navbar from '@/components/Navbar.vue';
import TextDashboard from '@/components/Text/TextDashboard.vue';
import Title from '@/components/Text/Title.vue';
import { formatContact } from '@/helpers/formatData/formatDataContact';
import { formatEvent } from '@/helpers/formatData/formatDataEvent';
import { removeUndefinedAndEmpty } from '@/helpers/removeUndefinedAndEmpty';
import { useResultSentenceStore } from '@/services/store/sentence';
import { reactive, ref } from 'vue';
const form = reactive({
    link: '',
    token: '',
    origem: '',
    acao_rubeus: '',
    tipo_evento: '',
});
const preview = ref([]);
const store = useResultSentenceStore();
preview.value = store.resultSentence.data;
const sendForm = (event) => {
    event.preventDefault();
    console.log(store.resultSentence.data);
    for (const object of store.resultSentence.data) {
        console.log(object);
        const jsonContact = removeUndefinedAndEmpty(formatContact(object));
        addTokenAndOrigem(jsonContact);
        const jsonEvent = removeUndefinedAndEmpty(formatEvent(object));
        addTokenAndOrigem(jsonEvent);
        console.log(jsonContact);
        console.log(jsonEvent);
        throw new Error('Erro ao enviar formulário');
    }
};
const addTokenAndOrigem = (object) => {
    object['token'] = form.token;
    object['origem'] = form.origem;
    return object;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    // @ts-ignore
    /** @type { [typeof Navbar, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({
        title: ("Integrador paralelo"),
        ...{ class: ("mb-3") },
    }));
    const __VLS_1 = __VLS_0({
        title: ("Integrador paralelo"),
        ...{ class: ("mb-3") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: ("flex w-[100vw] justify-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-[40vw] mr-4 h-[calc(100vh - 50px - 0.75rem)]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("bg-white px-[2rem] py-[1rem] h-full") },
    });
    // @ts-ignore
    /** @type { [typeof Title, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Title, new Title({
        text: ("Retorno da SQL"),
        ...{ class: ("pb-4") },
    }));
    const __VLS_6 = __VLS_5({
        text: ("Retorno da SQL"),
        ...{ class: ("pb-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    // @ts-ignore
    /** @type { [typeof EditorMonaco, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(EditorMonaco, new EditorMonaco({
        preview: ((__VLS_ctx.preview)),
    }));
    const __VLS_11 = __VLS_10({
        preview: ((__VLS_ctx.preview)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid gap-5 h-[calc(100vh - 50px - 0.75rem)]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("w-[40vw] bg-white px-[2rem] py-[1rem]") },
    });
    // @ts-ignore
    /** @type { [typeof Title, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(Title, new Title({
        text: ("Credenciais CRM"),
    }));
    const __VLS_16 = __VLS_15({
        text: ("Credenciais CRM"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({});
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(Input, new Input({
        label: ("Link CRM"),
        type: ("text"),
        name: ("link"),
        id: ("link"),
        modelValue: ((__VLS_ctx.form.link)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_21 = __VLS_20({
        label: ("Link CRM"),
        type: ("text"),
        name: ("link"),
        id: ("link"),
        modelValue: ((__VLS_ctx.form.link)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("column-6") },
    });
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Token"),
        type: ("text"),
        name: ("token"),
        id: ("token"),
        modelValue: ((__VLS_ctx.form.token)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_26 = __VLS_25({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Token"),
        type: ("text"),
        name: ("token"),
        id: ("token"),
        modelValue: ((__VLS_ctx.form.token)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    let __VLS_30;
    const __VLS_31 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.token = $event;
        }
    };
    let __VLS_27;
    let __VLS_28;
    var __VLS_29;
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Origem"),
        type: ("text"),
        name: ("origem"),
        id: ("origem"),
        modelValue: ((__VLS_ctx.form.origem)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_33 = __VLS_32({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Origem"),
        type: ("text"),
        name: ("origem"),
        id: ("origem"),
        modelValue: ((__VLS_ctx.form.origem)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    let __VLS_37;
    const __VLS_38 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.origem = $event;
        }
    };
    let __VLS_34;
    let __VLS_35;
    var __VLS_36;
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(Input, new Input({
        label: ("Ações Rubeus"),
        type: ("text"),
        name: ("acao_rubeus"),
        id: ("acao_rubeus"),
        modelValue: ((__VLS_ctx.form.acao_rubeus)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_40 = __VLS_39({
        label: ("Ações Rubeus"),
        type: ("text"),
        name: ("acao_rubeus"),
        id: ("acao_rubeus"),
        modelValue: ((__VLS_ctx.form.acao_rubeus)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(Input, new Input({
        label: ("Tipo evento"),
        type: ("text"),
        name: ("tipo_evento"),
        id: ("tipo_evento"),
        modelValue: ((__VLS_ctx.form.tipo_evento)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_45 = __VLS_44({
        label: ("Tipo evento"),
        type: ("text"),
        name: ("tipo_evento"),
        id: ("tipo_evento"),
        modelValue: ((__VLS_ctx.form.tipo_evento)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-4 flex justify-end") },
    });
    // @ts-ignore
    /** @type { [typeof Execute, ] } */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(Execute, new Execute({
        textButton: ("Executar"),
        callback: ((__VLS_ctx.sendForm)),
    }));
    const __VLS_50 = __VLS_49({
        textButton: ("Executar"),
        callback: ((__VLS_ctx.sendForm)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("w-[40vw] min-h-[10rem] bg-white px-[2rem] py-[1rem]") },
    });
    // @ts-ignore
    /** @type { [typeof Title, ] } */ ;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(Title, new Title({
        text: ("Dashboard"),
    }));
    const __VLS_55 = __VLS_54({
        text: ("Dashboard"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
    // @ts-ignore
    /** @type { [typeof TextDashboard, ] } */ ;
    // @ts-ignore
    const __VLS_59 = __VLS_asFunctionalComponent(TextDashboard, new TextDashboard({}));
    const __VLS_60 = __VLS_59({}, ...__VLS_functionalComponentArgsRest(__VLS_59));
    // @ts-ignore
    /** @type { [typeof Pause, ] } */ ;
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(Pause, new Pause({
        textButton: ("Pausar"),
        ...{ class: ("mt-4") },
    }));
    const __VLS_65 = __VLS_64({
        textButton: ("Pausar"),
        ...{ class: ("mt-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    ['mb-3', 'flex', 'w-[100vw]', 'justify-center', 'w-[40vw]', 'mr-4', 'h-[calc(100vh', '-', '50px', '-', '0.75rem)]', 'bg-white', 'px-[2rem]', 'py-[1rem]', 'h-full', 'pb-4', 'grid', 'gap-5', 'h-[calc(100vh', '-', '50px', '-', '0.75rem)]', 'w-[40vw]', 'bg-white', 'px-[2rem]', 'py-[1rem]', 'w-full', 'column-6', 'w-full', 'w-full', 'w-full', 'w-full', 'mt-4', 'flex', 'justify-end', 'w-[40vw]', 'min-h-[10rem]', 'bg-white', 'px-[2rem]', 'py-[1rem]', 'mt-4',];
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
            Execute: Execute,
            Pause: Pause,
            EditorMonaco: EditorMonaco,
            Input: Input,
            Navbar: Navbar,
            TextDashboard: TextDashboard,
            Title: Title,
            form: form,
            preview: preview,
            sendForm: sendForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
