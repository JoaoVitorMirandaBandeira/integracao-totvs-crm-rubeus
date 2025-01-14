<template>
    <div ref="editorContainer" class="editor-container">
            <MonacoEditor
            theme="vs-dark"
            :options="options"
            language="json"
            v-model:value="value"
            />
    </div>
</template>
<script setup lang="ts">
import MonacoEditor from 'monaco-editor-vue3';
import { reactive, defineProps, ref } from 'vue'
const options = reactive({
    colorDecorators: true,
    lineHeight: 24,
    tabSize: 2,
    automaticLayout: true
})
const props = defineProps({
    preview:{
        type:Object,
        default: ()=>({
                name: "Jonny Depp",
                age: 63,
                job: "Actor"
            })
        }})
const value = ref(JSON.stringify(props.preview, null, 4))
</script>
<style>
.editor-container {
  width: 100%;
  height: calc(100vh - 150px - 0.75rem);
  display: flex;
  position: relative;
}
</style>
