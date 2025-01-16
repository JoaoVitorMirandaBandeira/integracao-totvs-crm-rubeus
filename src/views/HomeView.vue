<template>
    <Navbar title="Integrador paralelo" />
    <main class="flex items-center justify-center min-h-[calc(100vh-50px)]">
        <section class="w-[50rem] min-h-[300px] bg-white px-[2rem] py-[1rem] rounded-md">
            <Title text="Credenciais TOTVS" />
            <form>
                <Input
                    label="Link"
                    type="text"
                    name="link"
                    id="link"
                    :modelValue="form.link"
                    :required="true"
                    class="w-full"
                    @update:modelValue="form.link = $event"
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
                        @update:modelValue="form.usuario = $event"
                    />
                    <Input
                        label="Senha"
                        type="text"
                        name="senha"
                        id="senha"
                        :modelValue="form.senha"
                        :required="true"
                        class="w-full"
                        @update:modelValue="form.senha = $event"
                    />
                </div>
            </form>
            <br />
            <Title text="Sentença TOTVS" />
            <form>
                <div class="column-6">
                    <Input
                        label="Código Sentença"
                        type="text"
                        name="codigosentenca"
                        id="codigosentenca"
                        :modelValue="form.codigosentenca"
                        :required="true"
                        class="w-full"
                        @update:modelValue="form.codigosentenca = $event"
                    />
                    <Input
                        label="Sistema"
                        type="text"
                        name="sistema"
                        id="sistema"
                        :modelValue="form.sistema"
                        :required="true"
                        class="w-full"
                        @update:modelValue="form.sistema = $event"
                    />
                </div>
                <div class="column-6">
                    <Input
                        label="codigo da Coligada"
                        type="text"
                        name="codcoligada"
                        id="codcoligada"
                        :modelValue="form.codcoligada"
                        :required="true"
                        class="w-full"
                        @update:modelValue="form.codcoligada = $event"
                    />
                    <Input
                        label="Parâmetros"
                        type="text"
                        name="parametros"
                        id="parametros"
                        :modelValue="form.parametros"
                        :required="true"
                        class="w-full"
                        @update:modelValue="form.parametros = $event"
                    />
                </div>
            </form>
            <div class="mt-4 flex justify-end">
                <Execute textButton="Executar" :callback="fetchSentence" :loading="isLoading" :disabled="disabled"/>
            </div>
        </section>
    </main>
</template>

<script setup>
import Execute from '@/components/Buttons/Execute.vue'
import Input from '@/components/Form/Input.vue'
import Navbar from '@/components/Navbar.vue'
import Title from '@/components/Text/Title.vue'

import { environment } from '@/environments/environments'
import router from '@/router'
import { httpRequest } from '@/services/http/HttpRequest'
import { useResultSentenceStore } from '@/services/store/sentence'
import { reactive, ref } from 'vue'

const form = reactive({
    link: 'http://novoportal.fcmsantacasasp.edu.br:8051',
    usuario: 'rubeus',
    senha: '*a7t3GX5kco3*',
    codcoligada: '0',
    sistema: 'F',
    parametros: 'DIAS=1;',
    codigosentenca: 'RB.GP.IN.004',
})
const isLoading = ref(false)
const disabled = ref(false)

const resultSentenceStore = useResultSentenceStore()

const fetchSentence = async (event) => {
    event.preventDefault()
    isLoading.value = true
    disabled.value = true
    console.log(form)
    const payload = {
        url: form.link,
        user: form.usuario,
        password: form.senha,
        code: form.codigosentenca,
        codColigada: form.codcoligada,
        codSistema: form.sistema,
        parameters: form.parametros,
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }

    const result = await httpRequest(
        `${environment.apiUrl}/rubeus/api/v1/middleware/execute-sql`,
        options,
    )
    resultSentenceStore.addResultSentence(result)
    isLoading.value = false
    disabled.value = false
    router.push({ name: 'crm' })
}
</script>

<style>
.column-6 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5%;
}
</style>
