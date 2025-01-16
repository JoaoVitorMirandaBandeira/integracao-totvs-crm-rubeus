import Execute from '@/components/Buttons/Execute.vue';
import Input from '@/components/Form/Input.vue';
import Navbar from '@/components/Navbar.vue';
import Title from '@/components/Text/Title.vue';
import { environment } from '@/environments/environments';
import router from '@/router';
import { httpRequest } from '@/services/http/HttpRequest';
import { useResultSentenceStore } from '@/services/store/sentence';
import { reactive, ref } from 'vue';
const form = reactive({
    link: 'http://novoportal.fcmsantacasasp.edu.br:8051',
    usuario: 'rubeus',
    senha: '*a7t3GX5kco3*',
    codcoligada: '0',
    sistema: 'F',
    parametros: 'DIAS=1;',
    codigosentenca: 'RB.GP.IN.004',
});
const isLoading = ref(false);
const disabled = ref(false);
const resultSentenceStore = useResultSentenceStore();
const fetchSentence = async (event) => {
    event.preventDefault();
    isLoading.value = true;
    disabled.value = true;
    console.log(form);
    const payload = {
        url: form.link,
        user: form.usuario,
        password: form.senha,
        code: form.codigosentenca,
        codColigada: form.codcoligada,
        codSistema: form.sistema,
        parameters: form.parametros,
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };
    const result = await httpRequest(`${environment.apiUrl}/rubeus/api/v1/middleware/execute-sql`, options);
    resultSentenceStore.addResultSentence(result);
    isLoading.value = false;
    disabled.value = false;
    router.push({ name: 'crm' });
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
    }));
    const __VLS_1 = __VLS_0({
        title: ("Integrador paralelo"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: ("flex items-center justify-center min-h-[calc(100vh-50px)]") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("w-[50rem] min-h-[300px] bg-white px-[2rem] py-[1rem] rounded-md") },
    });
    // @ts-ignore
    /** @type { [typeof Title, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Title, new Title({
        text: ("Credenciais TOTVS"),
    }));
    const __VLS_6 = __VLS_5({
        text: ("Credenciais TOTVS"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({});
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Link"),
        type: ("text"),
        name: ("link"),
        id: ("link"),
        modelValue: ((__VLS_ctx.form.link)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_11 = __VLS_10({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Link"),
        type: ("text"),
        name: ("link"),
        id: ("link"),
        modelValue: ((__VLS_ctx.form.link)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    let __VLS_15;
    const __VLS_16 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.link = $event;
        }
    };
    let __VLS_12;
    let __VLS_13;
    var __VLS_14;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("column-6") },
    });
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Usuário"),
        type: ("text"),
        name: ("usuario"),
        id: ("usuario"),
        modelValue: ((__VLS_ctx.form.usuario)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_18 = __VLS_17({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Usuário"),
        type: ("text"),
        name: ("usuario"),
        id: ("usuario"),
        modelValue: ((__VLS_ctx.form.usuario)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_22;
    const __VLS_23 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.usuario = $event;
        }
    };
    let __VLS_19;
    let __VLS_20;
    var __VLS_21;
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_24 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Senha"),
        type: ("text"),
        name: ("senha"),
        id: ("senha"),
        modelValue: ((__VLS_ctx.form.senha)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_25 = __VLS_24({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Senha"),
        type: ("text"),
        name: ("senha"),
        id: ("senha"),
        modelValue: ((__VLS_ctx.form.senha)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_24));
    let __VLS_29;
    const __VLS_30 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.senha = $event;
        }
    };
    let __VLS_26;
    let __VLS_27;
    var __VLS_28;
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    // @ts-ignore
    /** @type { [typeof Title, ] } */ ;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(Title, new Title({
        text: ("Sentença TOTVS"),
    }));
    const __VLS_32 = __VLS_31({
        text: ("Sentença TOTVS"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("column-6") },
    });
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Código Sentença"),
        type: ("text"),
        name: ("codigosentenca"),
        id: ("codigosentenca"),
        modelValue: ((__VLS_ctx.form.codigosentenca)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_37 = __VLS_36({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Código Sentença"),
        type: ("text"),
        name: ("codigosentenca"),
        id: ("codigosentenca"),
        modelValue: ((__VLS_ctx.form.codigosentenca)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    let __VLS_41;
    const __VLS_42 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.codigosentenca = $event;
        }
    };
    let __VLS_38;
    let __VLS_39;
    var __VLS_40;
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Sistema"),
        type: ("text"),
        name: ("sistema"),
        id: ("sistema"),
        modelValue: ((__VLS_ctx.form.sistema)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_44 = __VLS_43({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Sistema"),
        type: ("text"),
        name: ("sistema"),
        id: ("sistema"),
        modelValue: ((__VLS_ctx.form.sistema)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    let __VLS_48;
    const __VLS_49 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.sistema = $event;
        }
    };
    let __VLS_45;
    let __VLS_46;
    var __VLS_47;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("column-6") },
    });
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("codigo da Coligada"),
        type: ("text"),
        name: ("codcoligada"),
        id: ("codcoligada"),
        modelValue: ((__VLS_ctx.form.codcoligada)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_51 = __VLS_50({
        ...{ 'onUpdate:modelValue': {} },
        label: ("codigo da Coligada"),
        type: ("text"),
        name: ("codcoligada"),
        id: ("codcoligada"),
        modelValue: ((__VLS_ctx.form.codcoligada)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    let __VLS_55;
    const __VLS_56 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.codcoligada = $event;
        }
    };
    let __VLS_52;
    let __VLS_53;
    var __VLS_54;
    // @ts-ignore
    /** @type { [typeof Input, ] } */ ;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(Input, new Input({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Parâmetros"),
        type: ("text"),
        name: ("parametros"),
        id: ("parametros"),
        modelValue: ((__VLS_ctx.form.parametros)),
        required: ((true)),
        ...{ class: ("w-full") },
    }));
    const __VLS_58 = __VLS_57({
        ...{ 'onUpdate:modelValue': {} },
        label: ("Parâmetros"),
        type: ("text"),
        name: ("parametros"),
        id: ("parametros"),
        modelValue: ((__VLS_ctx.form.parametros)),
        required: ((true)),
        ...{ class: ("w-full") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    let __VLS_62;
    const __VLS_63 = {
        'onUpdate:modelValue': (...[$event]) => {
            __VLS_ctx.form.parametros = $event;
        }
    };
    let __VLS_59;
    let __VLS_60;
    var __VLS_61;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-4 flex justify-end") },
    });
    // @ts-ignore
    /** @type { [typeof Execute, ] } */ ;
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(Execute, new Execute({
        textButton: ("Executar"),
        callback: ((__VLS_ctx.fetchSentence)),
        loading: ((__VLS_ctx.isLoading)),
        disabled: ((__VLS_ctx.disabled)),
    }));
    const __VLS_65 = __VLS_64({
        textButton: ("Executar"),
        callback: ((__VLS_ctx.fetchSentence)),
        loading: ((__VLS_ctx.isLoading)),
        disabled: ((__VLS_ctx.disabled)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    ['flex', 'items-center', 'justify-center', 'min-h-[calc(100vh-50px)]', 'w-[50rem]', 'min-h-[300px]', 'bg-white', 'px-[2rem]', 'py-[1rem]', 'rounded-md', 'w-full', 'column-6', 'w-full', 'w-full', 'column-6', 'w-full', 'w-full', 'column-6', 'w-full', 'w-full', 'mt-4', 'flex', 'justify-end',];
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
            Input: Input,
            Navbar: Navbar,
            Title: Title,
            form: form,
            isLoading: isLoading,
            disabled: disabled,
            fetchSentence: fetchSentence,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
