<script setup>
import headerComponent from '../g-app-components/header.vue';
import box from '../g-app-components/box.vue';
import IconPlus from '../components/icons/IconPlus.vue';
import TournamentInfo from './DSISTForm-components/TournamentInfo.vue';
import TeamShow from './DSISTStart-components/TeamShow.vue';
import QuarterShow from './DSISTStart-components/QuarterShow.vue';
import TableTitle from './DSISTStart-components/TableTitle.vue';
import TablePlayer from './DSISTStart-components/TablePlayer.vue';
import ScoreShow from './DSISTStart-components/ScoreShow.vue';
import { ref, reactive } from 'vue';

const showPoints = ($event) => {
    // console.log($event)
    showScore.value = true
    player.value = $event.player
    if ($event.category == 'pts') {
        isPts.value = true
    } else {
        isPts.value = false
    }
}
const showScore = ref(false)
const player = ref(null)
const isPts = ref(false)

const playerScores = reactive([
    {
        name: 'Jordan',
        id: 1,
        pts: 0,
        reb: 0,
        ast: 0,
        blk: 0,
        stl: 0,
        fls: 0
    },
    {
        name: 'Curry',
        id: 2,
        pts: 0,
        reb: 0,
        ast: 0,
        blk: 0,
        stl: 0,
        fls: 0
    },
])

</script>

<template>
    <div class="bg-neutral-700 h-screen md:max-w-lg md:mx-auto">
        <headerComponent class="top-0 w-full" />
        <div class="w-full text-neutral-200 px-2">
            <TournamentInfo />
            <box>
                <div class="grid grid-cols-12 gap-2">
                    <div class="col-span-3 grid text-center">
                        <TeamShow :team-name="'TNT'">
                            10
                        </TeamShow>
                    </div>
                    <div class="col-span-6 text-center">
                        <div class="border-b pb-1">
                            <h3 class="uppercase font-medium">warm-up timer</h3>
                        </div>
                        <div class="w-full p-2">
                            <h3 class="text-3xl">12:00</h3>
                        </div>
                    </div>
                    <div class="col-span-3 grid text-center">
                        <div class="col-span-3 grid text-center">
                            <TeamShow :team-name="'GSM'">
                                7
                            </TeamShow>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-5 gap-2 mt-2">
                    <QuarterShow :quarter-name="'QRT 1'" :is-active="false" />
                    <QuarterShow :quarter-name="'QRT 2'" :is-active="true">
                        08:30
                    </QuarterShow>
                    <QuarterShow :quarter-name="'QRT 3'" :is-active="false">
                        12:00
                    </QuarterShow>
                    <QuarterShow :quarter-name="'QRT 4'" :is-active="false">
                        12:00
                    </QuarterShow>
                    <div>
                        <button
                            class="w-full flex justify-center py-1 border-dashed border rounded-full border-neutral-600">
                            <IconPlus class="h-4 text-neutral-500 hover:text-neutral-300 transition" />
                        </button>
                    </div>
                </div>
            </box>
            <!-- team 1 -->
            <box>
                <div class="text-center font-semibold border-b pb-0.5 mb-0.5">
                    TNT
                </div>
                <div class="grid gap-1">
                    <TableTitle />
                    <TablePlayer v-for="playerScore in playerScores" :key="playerScore.id" :player="playerScore"
                        @score-clicked="showPoints" />
                </div>
            </box>
            <!-- team 2 -->
            <box>
                <div class="text-center font-semibold border-b pb-0.5 mb-0.5">
                    GSM
                </div>
                <div class="grid gap-1">
                    <TableTitle />
                    <TablePlayer v-for="playerScore in playerScores" :key="playerScore.id" :player="playerScore"
                        @score-clicked="showPoints" />
                </div>
            </box>
        </div>
    </div>
    <ScoreShow v-if="showScore" :is-pts="isPts" :player="player" @close="showScore = false" />


</template>