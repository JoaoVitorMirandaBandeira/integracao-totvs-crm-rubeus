<template>
    <button class="execute min-w-[100px] h-[50px]" @click="props.callback($event)" :disabled="props.disabled">
        <span v-if="!props.loading">{{ props.textButton }}</span>
        <Loading v-if="props.loading" />
    </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Loading from '../Loading.vue'
const props = defineProps<{
    textButton: string
    callback: (event: MouseEvent) => void
    loading: boolean,
    disabled: boolean
}>()
</script>
<style scoped>
.execute {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #009688;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.execute:hover {
    background-color: #018577;
}
</style>
