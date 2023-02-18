import { defineStore } from "pinia";

export const useGameSetupStore = defineStore('gameSetup', {
    state: () => {
        return {
            warm_up_time: 0.1,
            quarter_time: 0.1,
            team_foul: 1,
            timeout: 1
        }
    }
})