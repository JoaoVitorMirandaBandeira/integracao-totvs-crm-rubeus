import { defineStore } from "pinia";
import { ref } from "vue";

export const useResultSentenceStore = defineStore('resultSentence', () => {
    const resultSentence = ref<string>('')

    const addResultSentence = (sentence: string) => {
        resultSentence.value = sentence
    }

    return {
        resultSentence,
        addResultSentence,
    }
})
