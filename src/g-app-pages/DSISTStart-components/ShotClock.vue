<script setup>
import { watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';
import { useTimerStore } from '../../stores/timerStore';
import { storeToRefs } from "pinia";
const { shotClock, ShotClockPause, currentShotClock } = storeToRefs(useTimerStore());

const time = new Date();
time.setSeconds(time.getSeconds() + shotClock.value); // 60 = 1 minutes timer
const timer = useTimer(time);


onMounted(() => {
    watchEffect(async () => {
        // console.log('running: ' + timer.isRunning.value)
        // console.log('shot clock: ' + ShotClockPause.value)
        if (ShotClockPause.value == true) {
            timer.pause()
        } else if (ShotClockPause.value == false && !timer.isExpired.value) {
            timer.resume()
        }

        if (timer.isExpired.value) {
            console.log('over')
        }

        currentShotClock.value = timer.seconds.value
        console.log(timer.seconds.value)
    })
})

</script>

<template>
    <div class="w-full bg-red-700">
        <p class="text-neutral-200 font-semibold text-xl">
            <span v-if="timer.seconds.value <= 9">0{{ timer.seconds }}</span>
            <span v-else>{{ timer.seconds }}</span>
        </p>
</div>
</template>