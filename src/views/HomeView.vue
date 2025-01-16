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
                <Execute textButton="Executar" :callback="fetchSentence" />
            </div>
        </section>
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Title from '@/components/Text/Title.vue'
import Input from '@/components/Form/Input.vue'
import Execute from '@/components/Buttons/Execute.vue'

import { reactive } from 'vue'
import { httpRequest } from '@/services/http/HttpRequest'
import { environment } from '@/environments/environments'
import { useResultSentenceStore } from '@/services/store/sentence'
import router from '@/router'

const form = reactive({
    link: 'http://10.9.30.205:8051/',
    usuario: 'inscricaomatricula',
    senha: 'inscricaomatricula',
    codcoligada: '0',
    sistema: 'S',
    parametros: 'IDPS=;',
    codigosentenca: 'RB.PS.IM.003',
})

const resultSentenceStore = useResultSentenceStore()

const fetchSentence = async (event) => {
    event.preventDefault();
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

    const result = await httpRequest(`${environment.apiUrl}/rubeus/api/v1/middleware/execute-sql`, options)
    resultSentenceStore.addResultSentence(result)
    router.push({ name: 'crm'})
}
</script>

<style>
.column-6 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5%;
}
</style>
