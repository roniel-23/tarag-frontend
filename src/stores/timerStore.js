import { defineStore } from "pinia";

export const useTimerStore = defineStore('timer', {
    state: () => {
        return {
            timeLength: 0.5,
            isPause: true,
            start: false
        }
    }
})