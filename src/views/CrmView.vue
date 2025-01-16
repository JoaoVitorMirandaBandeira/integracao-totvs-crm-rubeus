<template>
    <Navbar title="Integrador paralelo" class="mb-3" />
    <main class="flex w-[100vw] justify-center">
        <div class="w-[40vw] mr-4 h-[calc(100vh - 50px - 0.75rem)]">
            <section class="bg-white px-[2rem] py-[1rem] h-full">
                <Title text="Retorno da SQL" class="pb-4" />
                <EditorMonaco :preview="preview" />
            </section>
        </div>
        <div class="grid gap-5 h-[calc(100vh - 50px - 0.75rem)]">
            <section class="w-[40vw] bg-white px-[2rem] py-[1rem]">
                <Title text="Credenciais CRM" />
                <form>
                    <Input
                        label="Link"
                        type="text"
                        name="link"
                        id="link"
                        :modelValue="form.link"
                        :required="true"
                        class="w-full"
                    />
                    <div class="column-6">
                        <Input
                            label="Usuário"
                            type="text"
                            name="usuario"
                            id="usuario"
                            :modelValue="form.usuario"
                            :required="true"
                            class="w-full"
                        />
                        <Input
                            label="Senha"
                            type="text"
                            name="senha"
                            id="senha"
                            :modelValue="form.senha"
                            :required="true"
                            class="w-full"
                        />
                        <Input
                            label="Código Sentença"
                            type="text"
                            name="codigosentenca"
                            id="codigosentenca"
                            :modelValue="form.codigosentenca"
                            :required="true"
                            class="w-full"
                        />
                        <Input
                            label="Sistema"
                            type="text"
                            name="sistema"
                            id="sistema"
                            :modelValue="form.sistema"
                            :required="true"
                            class="w-full"
                        />
                    </div>
                </form>
                <div class="mt-4 flex justify-end">
                    <Execute textButton="Executar" :callback="executeCallback" />
                </div>
            </section>
            <section class="w-[40vw] min-h-[10rem] bg-white px-[2rem] py-[1rem]">
                <Title text="Dashboard" />
                <TextDashboard />
                <Pause textButton="Pausar" class="mt-4" />
            </section>
        </div>
    </main>
</template>

<script setup>
import Execute from '@/components/Buttons/Execute.vue'
import Pause from '@/components/Buttons/Pause.vue'
import EditorMonaco from '@/components/EditorMonaco.vue'
import Input from '@/components/Form/Input.vue'
import Navbar from '@/components/Navbar.vue'
import TextDashboard from '@/components/Text/TextDashboard.vue'
import Title from '@/components/Text/Title.vue'
import { useResultSentenceStore } from '@/services/store/sentence'
import { reactive, ref } from 'vue'

const form = reactive({
    link: '',
    usuario: '',
    senha: '',
    codigosentenca: '',
    sistema: '',
})
const preview = ref([])
const store = useResultSentenceStore()
preview.value = store.resultSentence.data


const executeCallback = () => {
    // Defina a lógica da função de callback aqui
    console.log('Executar callback')
}
</script>

<style>
.column-6 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5%;
}
</style>
