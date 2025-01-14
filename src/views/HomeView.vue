<template>
    <Navbar title="Integrador paralelo" />
    <main class="flex items-center justify-center min-h-[calc(100vh-50px)]">
        <section class="w-[50rem] min-h-[300px] bg-white px-[2rem] py-[1rem] rounded-md">
            <Title text="Credenciais TOTVS"/>
            <form>
                <Input label="Link" type="text" name="link" id="link" :modelValue="form.link" requared="true" class="w-full"/>
                <div class="column-6">
                    <Input label="Usuário" type="text" name="usuario" id="usuario" :modelValue="form.usuario" requared="true" class="w-full"/>
                    <Input label="Senha" type="text" name="senha" id="senha" :modelValue="form.senha" requared="true" class="w-full"/>
                </div>
            </form>
            <br/>
            <Title text="Sentença TOTVS"/>
            <form>
                <div class="column-6">
                    <Input label="Código Sentença" type="text" name="codigosentenca" id="codigosentenca" :modelValue="form.codigosentenca" requared="true" class="w-full"/>
                    <Input label="Sistema" type="text" name="sistema" id="sistema" :modelValue="form.sistema" requared="true" class="w-full"/>
                </div>
                <div class="column-6">
                    <Input label="codigo da Coligada" type="text" name="codcoligada" id="codcoligada" :modelValue="form.codcoligada" requared="true" class="w-full"/>
                    <Input label="Parâmetros" type="text" name="parametros" id="parametros" :modelValue="form.parametros" requared="true" class="w-full"/>
                </div>
            </form>
            <div class="mt-4 flex justify-end">
                <Execute textButton="Executar"/>
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

const form = reactive({
    link: '',
    usuario: '',
    senha: '',
    codcoligada: '',
    sistema: '',
    parametros: '',
    codigosentenca: '',
})
</script>

<style>
    .column-6 {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5%;
    }
</style>
