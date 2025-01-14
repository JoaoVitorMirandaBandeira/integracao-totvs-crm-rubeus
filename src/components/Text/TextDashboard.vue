<template>
    <div class="my-4">
        <p class="font-semibold text-text-gray text-[1rem]">Total de objetos: {{ returnAPI.total}}</p>
        <p class="font-semibold text-text-gray text-[1rem]">Total enviado: {{ returnAPI.enviados}}</p>
        <p class="font-semibold text-text-gray text-[1rem]">Erros: {{ returnAPI.erros}}</p>
        <p class="font-semibold text-text-gray text-[1rem]">Sucesso: {{ returnAPI.sucesso}}</p>
    </div>
</template>
<script >
export default {
    props: {
        returnAPI:{
            type: Object,
            default: ()=>({
                total: 555,
                enviados: 30,
                erros: 1,
                sucesso: 300
            })
        }
    }
}
</script>

<style scoped>
</style>
