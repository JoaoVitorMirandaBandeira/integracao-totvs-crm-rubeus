<template>
    <button class="execute min-w-[100px] h-[50px]" @click="props.callback($event)">
        <span v-if="!props.loading">{{ props.textButton }}</span>
        <div class="loader" v-if="props.loading"></div>
    </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    textButton: string,
    callback: (event: MouseEvent) => void,
    loading: boolean,
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

/* HTML: <div class="loader"></div> */
.loader {
  width: 30px;
  padding: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #FFFFFF;
  --_m:
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
</style>
