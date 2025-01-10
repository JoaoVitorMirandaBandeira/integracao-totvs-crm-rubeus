<template>
    <div class="navbar bg-white w-full flex items-center">
        <img src="/logo.svg" alt="Logo Rubeus" />
        <p class="title font-bold text-[1.25rem]">{{ props.title }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>

<style scoped>
.navbar {
    height: 50px;
    padding: 9px 20px;
}
.title {
    padding-left: 10px;
    color: var(--text-gray);
}
img {
    width: 32px;
    height: 32px;
}
</style>
