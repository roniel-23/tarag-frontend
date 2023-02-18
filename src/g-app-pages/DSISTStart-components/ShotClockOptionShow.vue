<script setup>
import buttonCancel from '../../g-app-components/button-cancel.vue';
import { useTimerStore } from '../../stores/timerStore';
import { storeToRefs } from "pinia";

const { shotClock, currentShotClock, ShotClockReset, ShotClockAutoStart } = storeToRefs(useTimerStore());

const saveShotClockValue = (value, auto) => {
    if(value == 1){
        shotClock.value = currentShotClock.value
    } else {
        shotClock.value = value
    }
    ShotClockReset.value = true
    ShotClockAutoStart.value = auto
    emit('close')
    console.log(shotClock.value)
}

const emit = defineEmits(['close'])

</script>

<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-neutral-600 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-1 z-10 grid items-center">
            <div class="md:max-w-lg md:mx-auto bg-neutral-900 rounded-lg text-center text-neutral-200 p-4">
                <h3 class="font-bold uppercase mb-2 border-b pb-2">
                    Options for shot clock
                </h3>
                <div class="h-40 grid grid-cols-2 gap-2 mx-2 text-xl my-4">
                    <div class="text-center grid items-center border border-neutral-700 h-full rounded-xl p-2">
                        <button @click="saveShotClockValue(1, true)"
                            class="h-full rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
                            RETAIN
                        </button>
                    </div>
                    <div class="text-center grid items-center border border-neutral-700 h-full rounded-xl p-2">
                        <button @click="saveShotClockValue(14, true)"
                            class="h-full rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
                            14 sec
                        </button>
                    </div>
                    <div class="text-center grid items-center border border-neutral-700 h-full rounded-xl p-2">
                        <button @click="saveShotClockValue(24, true)"
                            class="h-full rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
                            <p>24 sec</p>
                            <p><small class="text-xs text-neutral-500">(pause time)</small></p>
                        </button>
                    </div>
                    <div class="text-center grid items-center border border-neutral-700 h-full rounded-xl p-2">
                        <button @click="saveShotClockValue(24, false)"
                            class="h-full rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
                            <p>24 sec</p>
                            <p><small class="text-xs text-neutral-500">(start time)</small></p>
                        </button>
                    </div>
                </div>
                <div class="px-4 pt-2">
                    <buttonCancel @click="$emit('close')">
                        back
                    </buttonCancel>
                </div>

            </div>
        </div>
    </div>
</template>