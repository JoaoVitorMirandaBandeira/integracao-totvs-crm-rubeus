import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useResultSentenceStore = defineStore('resultSentence', () => {
    const resultSentence = ref('');
    const addResultSentence = (sentence) => {
        resultSentence.value = sentence;
    };
    return {
        resultSentence,
        addResultSentence,
    };
});
