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
import buttonSubmit from '../g-app-components/button-submit.vue';
import TeamTimeout from './DSISTStart-components/TeamTimeout.vue';
import { usePlayerStore } from '../stores/playerStore';
import { useGameSetupStore } from '../stores/gameSetupStore';
import { storeToRefs } from "pinia";
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const { players, loading, error } = storeToRefs(usePlayerStore());
const { quarter_time, warm_up_time, team_foul } = storeToRefs(useGameSetupStore());
const router = useRouter()
const playerStore = usePlayerStore();

playerStore.fill();

const scoreTeam_one = ref(0)
const scoreTeam_two = ref(0)
const showScore = ref(false)
const player = ref(null)
const isPts = ref(false)
const showSpecific = ref('')
const showSaveButton = ref(false)
const showTimeout = ref(false)
const lastCategoryClicked = ref(null)
const isUndo = ref(true)
const isRedo = ref(true)
const lastTeam = ref(null)
const lastId = ref(null)
const lastScore = ref(null)
const lastNav = ref(null)
// const quarterTime = ref(1) // mins
// const warmUpTime = ref(0.1)
const sendToTimer = ref(0)
const currentQuarter = ref(0) // 0 for warm up
const quarter = ref(4)
const timerKey = ref(0)
const quarterTimeDisplay_min = ref(Math.floor(quarter_time.value))
const quarterTimeDisplay_sec = ref(quarter_time.value * 60 % 60)
const quarterTimeDisplay = ref(String(quarterTimeDisplay_min.value).padStart(2, '0') + ':' + String(quarterTimeDisplay_sec.value).padStart(2, '0'))

sendToTimer.value = warm_up_time.value

const reRenderTimer = () => {
    timerKey.value += 1;
}

const saveData = () => {
    showSaveButton.value = false
    if (quarter.value == currentQuarter.value) {
        console.log('end game')
        playerStore.players.team_one.score = scoreTeam_one.value
        playerStore.players.team_two.score = scoreTeam_two.value
        if(scoreTeam_one.value > scoreTeam_two.value){
            playerStore.players.winner = playerStore.players.team_one.name
        } else {
            playerStore.players.winner = playerStore.players.team_two.name
        }
        router.push('/dsistresult')
    } else {
        sendToTimer.value = quarter_time.value
        reRenderTimer()
    }
    currentQuarter.value++
}

const displaySaveButton = () => {
    if (quarter.value >= currentQuarter.value) {
        showSaveButton.value = true
    }
}

const showPoints = ($event) => {
    // console.log($event)
    if (currentQuarter.value != 0) {
        showScore.value = true
        player.value = $event.player
        lastCategoryClicked.value = $event.category
        if ($event.category == 'pts') {
            isPts.value = true
        } else {
            isPts.value = false
        }
    }
}

const scorePoints = ($event) => {
    // console.log($event)
    showScore.value = false
    isUndo.value = false
    lastTeam.value = $event.team
    lastId.value = $event.id
    lastScore.value = $event.score
    addScoreToPlayer($event.score, $event.id, $event.team, '+')
    if ($event.team == playerStore.players.team_one.name && lastCategoryClicked.value == 'pts') {
        scoreTeam_one.value = scoreTeam_one.value + $event.score
    } else if ($event.team == playerStore.players.team_two.name && lastCategoryClicked.value == 'pts') {
        scoreTeam_two.value = scoreTeam_two.value + $event.score
    }
}

const addScoreToPlayer = (score, id, team, operation) => {
    if (team == playerStore.players.team_one.name) {
        for (var i = 0; i < playerStore.players.team_one.players.length; i++) {
            if (playerStore.players.team_one.players[i].id == id) {
                var a = 'playerStore.players.team_one.players[i].' + lastCategoryClicked.value.toString()
                eval(a + '=' + a + operation + score.toString())
                // console.log( a + '=' + a +'+'+ score.toString())
            }
        }
    } else {
        for (var i = 0; i < playerStore.players.team_two.players.length; i++) {
            if (playerStore.players.team_two.players[i].id == id) {
                var a = 'playerStore.players.team_two.players[i].' + lastCategoryClicked.value.toString()
                eval(a + '=' + a + operation + score.toString())
            }
        }
    }

}

const undo = () => {
    if (isUndo.value == false) {
        isRedo.value = false
        isUndo.value = true
        addScoreToPlayer(lastScore.value, lastId.value, lastTeam.value, '-')
        if (lastCategoryClicked.value == 'pts') {
            if (lastTeam.value == playerStore.players.team_one.name) {
                scoreTeam_one.value = scoreTeam_one.value - lastScore.value
            } else {
                scoreTeam_two.value = scoreTeam_two.value - lastScore.value
            }
        }
    }
}

const redo = () => {
    if (isRedo.value == false) {
        isRedo.value = true
        isUndo.value = false
        addScoreToPlayer(lastScore.value, lastId.value, lastTeam.value, '+')
        if (lastCategoryClicked.value == 'pts') {
            if (lastTeam.value == playerStore.players.team_one.name) {
                scoreTeam_one.value = scoreTeam_one.value + lastScore.value
            } else {
                scoreTeam_two.value = scoreTeam_two.value + lastScore.value
            }
        }
    }
}

const getNavAction = ($event) => {
    // console.log($event.name)
    showSpecific.value = $event.name
    if (lastNav.value == 'substitution' || lastNav.value == 'timeout') { } else {
        if ($event.name == 'undo') {
            undo()
        } else if ($event.name == 'redo') {
            redo()
        }
    }
    if(showSpecific.value == 'timeout' && currentQuarter.value > 0){
        showTimeout.value = true
    }
    lastNav.value = $event.name
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
                        <Timer :time="sendToTimer" :quarter="currentQuarter" :key="timerKey" @status="displaySaveButton" />
                    </div>
                    <div class="col-span-3 grid text-center">
                        <TeamShow :team-name="players.team_two.name">
                            <h3>{{ scoreTeam_two }}</h3>
                        </TeamShow>
                    </div>
                </div>
                <div class="grid grid-cols-5 gap-2 mt-2">
                    <QuarterShow :quarter-name="'QRT 1'" :is-active="currentQuarter == 1 ? true : false">
                        <p v-if="currentQuarter <= 1">--</p>
                        <p v-else>{{ quarterTimeDisplay }}</p>
                    </QuarterShow>
                    <QuarterShow :quarter-name="'QRT 2'" :is-active="currentQuarter == 2 ? true : false">
                        <p v-if="currentQuarter <= 2">--</p>
                        <p v-else>{{ quarterTimeDisplay }}</p>
                    </QuarterShow>
                    <QuarterShow :quarter-name="'QRT 3'" :is-active="currentQuarter == 3 ? true : false">
                        <p v-if="currentQuarter <= 3">--</p>
                        <p v-else>{{ quarterTimeDisplay }}</p>
                    </QuarterShow>
                    <QuarterShow :quarter-name="'QRT 4'" :is-active="currentQuarter == 4 ? true : false">
                        <p v-if="currentQuarter <= 4">--</p>
                        <p v-else>{{ quarterTimeDisplay }}</p>
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
            <buttonSubmit v-if="showSaveButton" @click="saveData" class="mt-2">
                <p v-if="quarter == currentQuarter" class="font-medium">Save game</p>
                <p v-else class="font-medium">Proceed to next quarter</p>
            </buttonSubmit>

        </div>
        <div class="fixed bottom-0 w-full md:max-w-lg">
            <DSISTNavigation @nav-clicked="getNavAction" :key="timerKey" />
        </div>

    </div>
    <TeamTimeout v-if="showTimeout" :team_one="players.team_one.name" :team_two="players.team_two.name" @close="showTimeout = false"/>
    <ScoreShow v-if="showScore" :is-pts="isPts" :player="player" :category="lastCategoryClicked" @score="scorePoints"
    @close="showScore = false" />
</template>