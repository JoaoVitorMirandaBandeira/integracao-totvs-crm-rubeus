<template>
    <Navbar title="Integrador paralelo" class="mb-3" />
    <main class="flex w-[100vw] justify-center">
        <div class="w-[40vw] mr-4 h-[calc(100vh - 50px - 0.75rem)]">
            <section class="bg-white px-[2rem] py-[1rem]">
                <Title text="Retorno da SQL" class="pb-4" />
                <EditorMonaco :preview="preview" />
            </section>
        </div>
        <div class="grid gap-5 h-[calc(100vh - 50px - 0.75rem)]">
            <section class="w-[40vw] bg-white px-[2rem] py-[1rem] h-[100%]">
                <Title text="Credenciais CRM" />
                <form>
                    <Input
                        label="Link CRM"
                        type="text"
                        name="link"
                        id="link"
                        :modelValue="form.link"
                        :required="true"
                        class="w-full h-full"
                    />
                    <div class="column-6">
                        <Input
                            label="Token"
                            type="text"
                            name="token"
                            id="token"
                            :modelValue="form.token"
                            :required="true"
                            class="w-full h-full"
                            @update:modelValue="form.token = $event"
                        />
                        <Input
                            label="Origem"
                            type="text"
                            name="origem"
                            id="origem"
                            :modelValue="form.origem"
                            :required="true"
                            class="w-full h-full"
                            @update:modelValue="form.origem = $event"
                        />
                        <Input
                            label="Ações Rubeus"
                            type="text"
                            name="acao_rubeus"
                            id="acao_rubeus"
                            :modelValue="form.acao_rubeus"
                            :required="true"
                            class="w-full h-full"
                        />
                        <Input
                            label="Tipo evento"
                            type="text"
                            name="tipo_evento"
                            id="tipo_evento"
                            :modelValue="form.tipo_evento"
                            :required="true"
                            class="w-full h-full"
                        />
                    </div>
                </form>
                <div class="mt-4 flex justify-end">
                    <Button bg="009688" textButton="Executar" :callback="sendForm" />
                </div>
            </section>
            <section class="w-[40vw] bg-white px-[2rem] py-[1rem] h-[100%]">
                <Title text="Dashboard" />
                <TextDashboard />
                <div class="box-pause-progress">
                    <Button textButton="Pausar" class="mt-4" bg="ac2a2a" />
                    <Progress
                        :initialValue="0"
                        :finalValue="5454"
                        :progress="1100"
                        class="bar-progress"
                    />
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import EditorMonaco from '@/components/EditorMonaco.vue'
import Input from '@/components/Form/Input.vue'
import Navbar from '@/components/Navbar.vue'
import TextDashboard from '@/components/Text/TextDashboard.vue'
import Title from '@/components/Text/Title.vue'
import { formatContact } from '@/helpers/formatData/formatDataContact'
import { formatEvent } from '@/helpers/formatData/formatDataEvent'
import { removeUndefinedAndEmpty } from '@/helpers/removeUndefinedAndEmpty'
import { useResultSentenceStore } from '@/services/store/sentence'
import { reactive, ref } from 'vue'
import Progress from '@/components/Progress.vue'
import Button from '@/components/Buttons/Button.vue'

const form = reactive({
    link: '',
    token: '',
    origem: '',
    acao_rubeus: '',
    tipo_evento: '',
})

const preview = ref([])
const store = useResultSentenceStore()
preview.value = store.resultSentence.data

const sendForm = (event) => {
    event.preventDefault()
    console.log(store.resultSentence.data)
    for (const object of store.resultSentence.data) {
        console.log(object)
        const jsonContact = removeUndefinedAndEmpty(formatContact(object))
        addTokenAndOrigem(jsonContact)
        const jsonEvent = removeUndefinedAndEmpty(formatEvent(object))
        addTokenAndOrigem(jsonEvent)
        console.log(jsonContact)
        console.log(jsonEvent)
        throw new Error('Erro ao enviar formulário')
    }
}
const addTokenAndOrigem = (object) => {
    object['token'] = form.token
    object['origem'] = form.origem
    return object
}
</script>

<style>
.column-6 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5%;
}

.box-pause-progress {
    display: flex;
    @media (min-width: 1700px) {
        display: block;
    }
}
.bar-progress {
    @media (min-width: 1700px) {
        margin-top: 20px;
    }
}
</style>
