import { defineStore } from "pinia";

export const useTimeoutStore = defineStore('timeout', {
    state: () => {
        return {
            timeoutLenght: 0.1,  // mins
            timeout_teamOne: 5,
            timeout_teamTwo: 5
        }
    }
})