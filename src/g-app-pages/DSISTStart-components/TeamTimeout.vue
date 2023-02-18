<script setup>
import { ref } from 'vue';
import box from '../../g-app-components/box.vue';
import ButtonSubmit from '../../g-app-components/button-submit.vue';
import buttonCancel from '../../g-app-components/button-cancel.vue';
import TimeoutClock from './TimeoutClock.vue';
import { useTimeoutStore } from '../../stores/timeoutStore';
import { storeToRefs } from "pinia";

const { timeoutLenght, timeout_teamOne, timeout_teamTwo } = storeToRefs(useTimeoutStore())

const currentTeamTimeout = ref('')
const showStartButton = ref(true)
const showErrorMessage = ref(false)
const startTimer = ref(false)
const showOverMesage = ref(false)

const props = defineProps({
    team_one: String,
    team_two: String
})

defineEmits(['close'])

const setTeamTimeout = (value) => {
    currentTeamTimeout.value = value
    showErrorMessage.value = false
}

const timeoutOver = () => {
    showOverMesage.value = true
}

const startTimeoutTimer = () => {
    if (currentTeamTimeout.value == props.team_one) {
        timeout_teamOne.value--
        showStartButton.value = false
        startTimer.value = true
    } else if (currentTeamTimeout.value == props.team_two) {
        timeout_teamTwo.value--
        showStartButton.value = false
        startTimer.value = true
    } else {
        startTimer.value = false
        showErrorMessage.value = true
        console.log('nothing selected')
    }
}

</script>

<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-neutral-600 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-1 z-10 grid items-center">
            <box class="text-neutral-200">
                <div class="text-center">
                    <div class="flex justify-center gap-2 items-baseline border-b pb-1 border-neutral-400">
                        <small class="uppercase text-sm font-medium text-neutral-400">Time out team:</small>
                        <h2 class="font-medium text-lg">{{ currentTeamTimeout }}</h2>
                    </div>

                    <TimeoutClock :time="timeoutLenght" :started="startTimer" @over="timeoutOver" class="py-5" />
                    <p v-if="showOverMesage" class="uppercase font-medium bg-red-600 py-2">Time out Ended!</p>
                    <div class="my-4 text-neutral-400">
                        <h2 class="border border-b-0 rounded-t-lg border-neutral-500 uppercase text-xs font-medium py-1">
                            Remaining
                            Timeout</h2>
                        <div class="grid grid-cols-2 uppercase font-semibold">
                            <button @click="setTeamTimeout(team_one)" :disabled="!showStartButton"
                                class="border border-neutral-500 flex justify-between items-center px-5 border-r-0 rounded-bl-lg hover:text-neutral-200 transition">
                                <h2>{{ team_one }}</h2>
                                <h2 class="text-2xl">{{ timeout_teamOne }}</h2>
                            </button>
                            <button @click="setTeamTimeout(team_two)" :disabled="!showStartButton"
                                class="border border-neutral-500 flex justify-between items-center px-5 rounded-br-lg hover:text-neutral-200 transition">
                                <h2>{{ team_two }}</h2>
                                <h2 class="text-2xl">{{ timeout_teamTwo }}</h2>
                            </button>
                        </div>
                    </div>
                    <div v-if="showStartButton" class="flex gap-2">
                        <ButtonSubmit @click="startTimeoutTimer">
                            Start Timer
                        </ButtonSubmit>
                        <buttonCancel @click="$emit('close')">
                            Back
                        </buttonCancel>
                    </div>
                    <div v-if="showOverMesage">
                        <buttonCancel @click="$emit('close')">
                            Close
                        </buttonCancel>
                    </div>

                    <p v-if="showErrorMessage">
                        <small class="italic text-xs text-red-600">* please select a team for timeout!</small>
                    </p>
                </div>

            </box>
        </div>
</div>
</template>