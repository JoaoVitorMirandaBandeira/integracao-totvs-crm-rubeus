<template>
    <div class="flex flex-col m-0.5 pt-[15px]">
        <label :for="props.id" class="text-md">
            {{ props.label }}
            <span v-if="props.required" class="text-red-rubeus">*</span>
        </label>
        <input
            :type="props.type"
            :name="props.name"
            :placeholder="props.placeholder"
            v-model="inputValue"
            @input="input"
            class="h-[60px] min-w-[200px] bg-blurred-white rounded-t-[3px] border-b-[3px] border-medium-gray"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'
const props = defineProps<{
    id: string
    label: string | null
    name: string
    type: string
    placeholder?: string
    modelValue: string | number | null
    required: boolean
}>()

const inputValue = ref(props.modelValue)
// Emitindo o evento para atualizar o valor no componente pai
const emits = defineEmits(['update:modelValue'])

const input = () => {
    emits('update:modelValue', inputValue.value)
}

// Watch para atualizar inputValue quando modelValue mudar
watch(
    () => props.modelValue,
    (newValue) => {
        inputValue.value = newValue
    },
)
</script>

<style scoped>
input:focus {
    border-bottom: 3px solid var(--ligth-green);
}
input {
    padding-left: 10px;
}
</style>
