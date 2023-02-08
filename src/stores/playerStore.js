import { defineStore } from "pinia";

export const usePlayerStore = defineStore('player', {
    state: () => {
        return {
            players: [],
            loading: false,
            error: null

        }
    },

    actions: {
        async fill() {
            this.loading = true
            try {
                this.players = (await import('../data/players.json')).default;
            } catch (e) {
                this.error = e
            } finally {
                this.loading = false
            }
          }
    }
})