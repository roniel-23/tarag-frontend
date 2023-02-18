<script setup>
import buttonCancel from '../../g-app-components/button-cancel.vue';
import buttonSubmit from '../../g-app-components/button-submit.vue';
import { useGameSetupStore } from '../../stores/gameSetupStore';
import { useTimeoutStore } from '../../stores/timeoutStore';
import { storeToRefs } from "pinia";
import { useRouter } from 'vue-router'

const { warm_up_time, quarter_time, team_foul, timeout } = storeToRefs(useGameSetupStore());
const { timeoutLenght } = storeToRefs(useTimeoutStore());

const router = useRouter()

defineEmits(['close'])

const saveToStore = () => {
    timeoutLenght.value = timeout.value
    router.push('/dsiststart')
}

</script>

<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-neutral-600 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-1 z-10 grid items-center">
            <div v-if="timeout" class="md:max-w-lg md:mx-auto bg-neutral-900 rounded-lg text-center text-neutral-200 p-4">
                <div class="font-medium text-center bg-neutral-900 py-2 mb-4 border-b border-neutral-500">
                    <h3 class="uppercase">Game Setup</h3>
                </div>
                <div class="px-2 pb-2">
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            Warm-up Time Length:
                        </div>
                        <div class="flex items-center gap-1">
                            {{ warm_up_time }}
                            <p class="input-label">min</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            Quarter Time Length:
                        </div>
                        <div class="flex items-center gap-1">
                            {{ quarter_time }}
                            <p class="input-label">min</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            Max Team Foul:
                        </div>
                        <div class="flex items-center gap-1">
                            {{ team_foul }}
                            <p class="input-label">foul</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            Timeout Length:
                        </div>
                        <div class="flex items-center gap-1">
                            {{ timeout }}
                            <p class="input-label">min</p>
                        </div>
                    </div>
                </div>               


                <div class="px-4 pt-2 grid grid-cols-2 gap-2">
                    <buttonSubmit @click="saveToStore">
                        TARA G!
                    </buttonSubmit>
                    <buttonCancel @click="$emit('close')">
                        back
                    </buttonCancel>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>