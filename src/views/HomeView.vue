<template>
    <Navbar title="Integrador paralelo" />
    <main class="flex items-center justify-center min-h-[calc(100vh-50px)]">
        <section class="w-[500px] min-h-[300px] bg-white p-[15px] rounded-md">
            <Title text="Credenciais TOTVS"/>
            <form>
                <Input label="Link" type="text" name="link" id="link" :modelValue="form.link" requared="true" class="w-full"/>
            </form>
        </section>
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Title from '@/components/Text/Title.vue'
import Input from '@/components/Form/Input.vue'
import { reactive } from 'vue'

const form = reactive({
    link: ''
})
</script>
