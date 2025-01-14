<template>
    <div>
        <p class="font-semibold text-text-gray text-[1.2rem]">{{ props.text}}</p>
        <hr class="w-[100px] border-2 border-light-green ">
    </div>
</template>
<script setup lang="ts">

const props = defineProps(['text'])
</script>
