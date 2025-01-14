<template>
    <div class="flex flex-col m-0.5 pt-[15px]">
        <label :for="props.id" class="text-md">
            {{ props.label }}
            <span v-if="props.requared" class="text-red-rubeus">*</span>
        </label>
        <input
            :type="props.type"
            :name="props.name"
            :placeholder="props.placeholder"
            v-model="inputValue"
            @input="input"
            class="h-[40px] min-w-[200px] bg-blurred-white rounded-t-[3px] border-b-[3px] border-medium-gray"
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
    requared: Boolean || false
})

const inputValue = ref(props.modelValue)
// Emitindo o evento para atualizar o valor no componente pai
const emits = defineEmits(['update:modelValue'])

const input = () => {
    emits('update:modelValue', inputValue.value)
}
</script>

<style scoped>
input:focus{
    border-bottom: 3px solid var(--ligth-green);
    padding-left: 10px;
}
</style>
