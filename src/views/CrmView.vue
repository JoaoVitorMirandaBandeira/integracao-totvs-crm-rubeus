<template>
    <Navbar title="Integrador paralelo" class="mb-3" />
    <main class="flex w-[100vw] justify-center">
        <div class="w-[40vw] mr-4 h-[calc(100vh - 50px - 0.75rem)]">
            <section class="bg-white px-[2rem] py-[1rem] h-full">
                <Title text="Retorno da SQL" class="pb-4" />
                <EditorMonaco />
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
                        requared="true"
                        class="w-full"
                    />
                    <div class="column-6">
                        <Input
                            label="Usuário"
                            type="text"
                            name="usuario"
                            id="usuario"
                            :modelValue="form.usuario"
                            requared="true"
                            class="w-full"
                        />
                        <Input
                            label="Senha"
                            type="text"
                            name="senha"
                            id="senha"
                            :modelValue="form.senha"
                            requared="true"
                            class="w-full"
                        />
                        <Input
                            label="Código Sentença"
                            type="text"
                            name="codigosentenca"
                            id="codigosentenca"
                            :modelValue="form.codigosentenca"
                            requared="true"
                            class="w-full"
                        />
                        <Input
                            label="Sistema"
                            type="text"
                            name="sistema"
                            id="sistema"
                            :modelValue="form.sistema"
                            requared="true"
                            class="w-full"
                        />
                    </div>
                </form>
                <div class="mt-4 flex justify-end">
                    <Execute textButton="Executar" />
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
import Navbar from '@/components/Navbar.vue'
import Title from '@/components/Text/Title.vue'
import Input from '@/components/Form/Input.vue'
import Execute from '@/components/Buttons/Execute.vue'
import Pause from '@/components/Buttons/Pause.vue'
import TextDashboard from '@/components/Text/TextDashboard.vue'
import EditorMonaco from '@/components/EditorMonaco.vue'
import { reactive } from 'vue'

const form = reactive({
    linkCrm: '',
    token: '',
    origem: '',
    acaoRubeus: '',
    tipoEvento: '',
})

const store = useStore()
console.log(store.result)
</script>

<style>
.column-6 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5%;
}
</style>
