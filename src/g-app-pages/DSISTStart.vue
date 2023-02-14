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
import TeamSubstitution from './DSISTStart-components/TeamSubstitution.vue';
import DSISTNavigation from './DSISTStart-components/DSISTNavigation.vue';
import Timer from './DSISTStart-components/Timer.vue';
import { usePlayerStore } from '../stores/playerStore';
import { storeToRefs } from "pinia";
import { ref } from 'vue';

const { players, loading, error } = storeToRefs(usePlayerStore());

const playerStore = usePlayerStore();
playerStore.fill();

const showPoints = ($event) => {
    // console.log($event)
    showScore.value = true
    player.value = $event.player
    lastCategoryClicked.value = $event.category
    if ($event.category == 'pts') {
        isPts.value = true  
    } else {
        isPts.value = false
    }
}

const scorePoints = ($event) => {
    // console.log($event)
    showScore.value = false
    addScoreToPlayer($event.score, $event.id, $event.team)
    if ($event.team == playerStore.players.team_one.name && lastCategoryClicked.value == 'pts') {
        scoreTeam_one.value = scoreTeam_one.value + $event.score
    } else if ($event.team == playerStore.players.team_two.name && lastCategoryClicked.value == 'pts') {
        scoreTeam_two.value = scoreTeam_two.value + $event.score
    }
}

const addScoreToPlayer = (score, id, team) => {
    if (team == playerStore.players.team_one.name) {
        for (var i = 0; i < playerStore.players.team_one.players.length; i++) {
            if (playerStore.players.team_one.players[i].id == id) {
                var a = 'playerStore.players.team_one.players[i].' + lastCategoryClicked.value.toString()
                eval( a + '=' + a +'+'+ score.toString())
                // console.log( a + '=' + a +'+'+ score.toString())
            }
        }
    } else {
        for (var i = 0; i < playerStore.players.team_two.players.length; i++) {
            if (playerStore.players.team_two.players[i].id == id) {
                var a = 'playerStore.players.team_two.players[i].' + lastCategoryClicked.value.toString()
                eval( a + '=' + a +'+'+ score.toString())
            }
        }
    }

}

const scoreTeam_one = ref(0)
const scoreTeam_two = ref(0)
const showScore = ref(false)
const player = ref(null)
const isPts = ref(false)
const showSpecific = ref('')
const lastCategoryClicked = ref(null)
const quarterTime = ref(0.5) // mins

const getNavAction = ($event) => {
    // console.log($event)
    showSpecific.value = $event.name

}
</script>

<template>
    <div class="bg-neutral-700 h-screen md:max-w-lg md:mx-auto">
        <headerComponent class="top-0 w-full" />
        <div class="w-full text-neutral-200 px-2">
            <TournamentInfo />
            <box v-if="!loading">
                <div class="grid grid-cols-12 gap-2">
                    <div class="col-span-3 grid text-center">
                        <TeamShow :team-name="players.team_one.name">
                            <h3>{{ scoreTeam_one }}</h3>
                        </TeamShow>
                    </div>
                    <div class="col-span-6 text-center">
                        <Timer :time="quarterTime" />
                    </div>
                    <div class="col-span-3 grid text-center">
                        <TeamShow :team-name="players.team_two.name">
                            <h3>{{ scoreTeam_two }}</h3>
                        </TeamShow>
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
            <div v-if="showSpecific == 'substitution'">
                <TeamSubstitution />
            </div>
            <div v-if="showSpecific == 'timeout'">
                timeout
            </div>
            <div v-else v-if="players.length != 0">
                <!-- team 1 -->
                <box>
                    <div class="text-center font-semibold border-b pb-0.5 mb-0.5">
                        TNT
                    </div>
                    <div class="grid gap-1">
                        <TableTitle />
                        <TablePlayer v-for="player in players.team_one.players" :key="player.id" :player="player"
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
                        <TablePlayer v-for="player in players.team_two.players" :key="player.id" :player="player"
                            @score-clicked="showPoints" />
                    </div>
                </box>
            </div>

        </div>
        <div class="fixed bottom-0 w-full md:max-w-lg">
            <DSISTNavigation @nav-clicked="getNavAction" />
        </div>

    </div>
    <ScoreShow v-if="showScore" :is-pts="isPts" :player="player" :category="lastCategoryClicked" @score="scorePoints" @close="showScore = false" />


</template>