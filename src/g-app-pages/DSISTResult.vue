<script setup>
import headerComponent from '../g-app-components/header.vue';
import box from '../g-app-components/box.vue';
import TournamentInfo from './DSISTForm-components/TournamentInfo.vue'
import TeamShow from './DSISTStart-components/TeamShow.vue';
import buttonSubmit from '../g-app-components/button-submit.vue';
import footerComponent from '../g-app-components/footer.vue';
import { usePlayerStore } from '../stores/playerStore';
import { storeToRefs } from "pinia";
import { ref } from 'vue';
const { players } = storeToRefs(usePlayerStore());
const playerStore = usePlayerStore();
const highestScoredWinner = ref(0)
const mvp = ref(null)

if (playerStore.players.winner == playerStore.players.team_one.name) {
    for (var i = 0; i < playerStore.players.team_one.players.length; i++) {
        if (playerStore.players.team_one.players[i].pts > highestScoredWinner.value) {
            highestScoredWinner.value = playerStore.players.team_one.players[i].pts
            mvp.value = playerStore.players.team_one.players[i]
        }
    }
} else {
    for (var i = 0; i < playerStore.players.team_one.players.length; i++) {
        if (playerStore.players.team_two.players[i].pts > highestScoredWinner.value) {
            highestScoredWinner.value = playerStore.players.team_two.players[i].pts
            mvp.value = playerStore.players.team_two.players[i]
        }
    }
}

// console.log('highest score: ' + highestScoredWinner.value)
// console.log('mvp: ' + mvp.value.name)

</script>

<template>
    <div class="bg-neutral-700 h-screen md:max-w-lg md:mx-auto">
        <headerComponent class="top-0 w-full" />
        <div class="w-full text-neutral-200 px-2">
            <TournamentInfo />
            <box class="text-center py-5">
                <div class="mb-2 pb-2">
                    <h3 class="mb-4 uppercase font-semibold text-lg pb-2 border-b border-neutral-400">Final Result</h3>
                    <div class="grid grid-cols-2 gap-5 px-5">
                        <div>
                            <TeamShow :team-name="players.team_one.name">
                                <h3>{{ players.team_one.score }}</h3>
                            </TeamShow>
                        </div>
                        <div>
                            <TeamShow :team-name="players.team_two.name">
                                <h3>{{ players.team_two.score }}</h3>
                            </TeamShow>
                        </div>
                    </div>
                </div>
                <div class="mb-2 pb-2">
                    <h2 class="uppercase text-sm font-semibold pb-2 border-b border-neutral-400">Winning team</h2>
                    <h2 class="uppercase text-4xl font-semibold py-2">{{ players.winner }}</h2>
                </div>
                <div>
                    <h3 class="mt-5 uppercase font-semibold text-sm pb-2 border-b border-neutral-400">MVP of the Game</h3>
                    <div>
                        <h2 class="uppercase text-xl font-semibold py-2 border-neutral-500 border-b mb-2">{{ mvp.name }}
                        </h2>
                        <div class="grid grid-cols-6 text-neutral-400 border-b pb-2 border-neutral-500">
                            <div class="grid border-r border-neutral-600">
                                <p class="text-xl font-semibold">{{ mvp.pts }}</p>
                                <small>PTS</small>
                            </div>
                            <div class="grid border-r border-neutral-600">
                                <p class="text-xl font-semibold">{{ mvp.reb }}</p>
                                <small>REB</small>
                            </div>
                            <div class="grid border-r border-neutral-600">
                                <p class="text-xl font-semibold">{{ mvp.ast }}</p>
                                <small>AST</small>
                            </div>
                            <div class="grid border-r border-neutral-600">
                                <p class="text-xl font-semibold">{{ mvp.blk }}</p>
                                <small>BLK</small>
                            </div>
                            <div class="grid border-r border-neutral-600">
                                <p class="text-xl font-semibold">{{ mvp.stl }}</p>
                                <small>STL</small>
                            </div>
                            <div class="grid">
                                <p class="text-xl font-semibold">{{ mvp.fls }}</p>
                                <small>FLS</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-2">
                    <buttonSubmit class="mt-6">
                        Back to home
                    </buttonSubmit>
                </div>
            </box>
        </div>
        <div class="fixed bottom-0 w-full md:max-w-lg">
            <footerComponent />
        </div>
    </div>
</template>