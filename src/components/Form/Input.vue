<template>
    <div class="flex flex-col m-0.5 max-w-72">
        <label :for="props.id" class="text-lg">{{ props.label }}</label>
        <input
            :type="props.type"
            :name="props.name"
            :placeholder="props.placeholder"
            v-model="inputValue"
            @input="input"
            class="h-9 p-1 bg-gray-200 rounded-md"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
const props = defineProps({
    id: String,
    label: String || null,
    name: String,
    type: String,
    placeholder: String || ' ',
    modelValue: String || ' ',
})

const inputValue = ref(props.modelValue)
// Emitindo o evento para atualizar o valor no componente pai
const emits = defineEmits(['update:modelValue'])

const input = () => {
    emits('update:modelValue', inputValue.value)
}
</script>
