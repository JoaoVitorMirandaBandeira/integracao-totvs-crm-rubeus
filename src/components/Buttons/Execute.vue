<template>
    <button class="execute">
      {{ props.textButton }}
    </button>
  </template>

  <script  setup lang="ts">

    import { defineProps } from 'vue'
    const props = defineProps({
        textButton: String
    })

  </script>
  <style scoped>
  .execute {
    background-color: #009688;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
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
