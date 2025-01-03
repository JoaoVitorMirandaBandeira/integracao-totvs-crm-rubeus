<script setup lang="ts">
import MonacoEditor from 'monaco-editor-vue3'
import { reactive, ref } from 'vue';
const options = reactive({
  colorDecorators: true,
  lineHeight: 24,
  tabSize: 2
})
const test = ref('{"name": "John Doe","age": 30}');
</script>

<template>
  <RouterView/>
  <!-- <MonacoEditor
    theme="vs-dark"
    :options="options"
    language="json"
    :width="800"
    :height="600"
    v-model:value="test"
  /> -->
</template>

<style scoped>
</style>
