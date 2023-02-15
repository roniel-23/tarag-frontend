import { defineStore } from "pinia";

export const useQuartersStore = defineStore('quarters', {
    state: () => {
        return {
            quarter_1: [],
            quarter_2: [],
            quarter_3: [],
            quarter_4: [],
            ot_1: [],
            ot_2:[]
        }
    }
})