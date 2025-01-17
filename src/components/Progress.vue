<template>
    <div class="progress-container">
        <p class="font-semibold text-text-gray">Progresso</p>
        <div class="progress-container-bar">
            <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
            <div class="progress-info">
                <span>{{ progressPercentage }}%</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    initialValue: {
        type: Number,
        default: 0,
    },
    finalValue: {
        type: Number,
        required: true,
    },
    progress: {
        type: Number,
        required: true,
    },
})
const progressPercentage = computed(() => {
    const range = props.finalValue - props.initialValue
    if (range === 0) return 0
    return Math.round(((props.progress - props.initialValue) / range) * 100)
})
</script>

<style>
.progress-container {
    width: 100%;
    position: relative;
    margin-left: 5px;
}
.progress-container-bar {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    height: 3vh;
}
.progress-bar {
    height: 100%;
    background-color: #009688;
    transition: width 0.3s ease-in-out;
}
.progress-info {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #000;
    font-weight: bold;
}
</style>
