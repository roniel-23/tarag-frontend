<script setup>
import box from '../../g-app-components/box.vue';
import SubstitutionPlayer from './SubstitutionPlayer.vue';
import { ref } from 'vue';
import { usePlayerStore } from '../../stores/playerStore';
import { storeToRefs } from "pinia";

const { players, loading } = storeToRefs(usePlayerStore());

const playerStore = usePlayerStore();

const isActive = ref(true)

const setPlayerStatus = ($event) => {
    if ($event.team == playerStore.players.team_one.name) {
        for (var i = 0; i < playerStore.players.team_one.players.length; i++) {
            if (playerStore.players.team_one.players[i].id == $event.id) {
                playerStore.players.team_one.players[i].status = $event.status
            }
        }
    } else {
        for (var i = 0; i < playerStore.players.team_two.players.length; i++) {
            if (playerStore.players.team_two.players[i].id == $event.id) {
                playerStore.players.team_two.players[i].status = $event.status
            }
        }
    }

}
</script>

<template>
    <div v-if="!loading">
        <box>
            <div class="mb-1 border-neutral-900">
                <div class="grid grid-cols-2 text-center font-semibold">
                    <button @click="isActive = true"
                        :class="isActive ? 'border border-b-0' : 'bg-neutral-900 text-neutral-600 border-b'"
                        class="w-full rounded-t-lg py-0.5 border-neutral-600">
                        {{ players.team_one.name }}
                    </button>
                    <button @click="isActive = false"
                        :class="!isActive ? 'border border-b-0' : 'bg-neutral-900 text-neutral-600 border-b'"
                        class="w-full rounded-t-lg py-0.5 border-neutral-600">
                        {{ players.team_two.name }}
                    </button>
                </div>

            </div>
            <div class="grid grid-cols-2 gap-2 uppercase text-xs text-center border-b pb-1 mb-1 border-neutral-600">
                <div class="font-medium">
                    inplay
                </div>
                <div class="font-medium">
                    Bench
                </div>
            </div>
            <div v-if="isActive" class="grid grid-cols-2 gap-2 text-sm">
                <div class="font-medium">
                    <div v-for="player in players.team_one.players" :key="player.id">
                        <SubstitutionPlayer @status="setPlayerStatus" :player="player" :status="1" />
                    </div>
                </div>
                <div class="font-medium">
                    <div v-for="player in players.team_one.players" :key="player.id">
                        <SubstitutionPlayer @status="setPlayerStatus" :player="player" :status="0" />
                    </div>
                </div>
            </div>

            <div v-else class="grid grid-cols-2 gap-2 text-sm">
                <div class="font-medium">
                    <div v-for="player in players.team_two.players" :key="player.id">
                        <SubstitutionPlayer @status="setPlayerStatus" :player="player" :status="1" />
                    </div>
                </div>
                <div class="font-medium">
                    <div v-for="player in players.team_two.players" :key="player.id">
                        <SubstitutionPlayer @status="setPlayerStatus" :player="player" :status="0" />
                    </div>
                </div>
            </div>
        </box>
    </div>
</template>