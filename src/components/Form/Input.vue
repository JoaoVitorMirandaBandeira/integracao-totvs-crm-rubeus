<template>
  <div>
    <label :for="props.id">{{ props.label}}</label>
    <input :type="props.id" :name="props.name" :placeholder="props.placeholder"/>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  id: String,
  label: String || null,
  name: String,
  type: String,
  placeholder: String || ' '
})
</script>
