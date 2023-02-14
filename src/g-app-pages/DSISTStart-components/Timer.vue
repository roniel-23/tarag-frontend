<script setup>
import { watchEffect, onMounted, ref } from "vue";
import { useTimer } from 'vue-timer-hook';
import { useTimerStore } from '../../stores/timerStore';
import { storeToRefs } from "pinia";
const { timeLength, isPause, start } = storeToRefs(useTimerStore());

const props = defineProps({
    time: Number
})

timeLength.value = props.time

const time = new Date();
time.setSeconds(time.getSeconds() + timeLength.value * 60); // 60 = 1 minutes timer
const timer = useTimer(time, false);
const firstStart =ref(false)

onMounted(() => {
    watchEffect(async () => {
        // console.log('running: ' + timer.isRunning.value)
        // console.log('pause: ' + isPaused.value)
        if (timer.isExpired.value) {
            console.log('over')
            start.value = false
        }
        if(start.value == true && firstStart.value == false){
            timer.start()
            firstStart.value = true
        }else if(timer.isRunning.value == true && isPause.value == false) {
            timer.pause()
        }else if(timer.isRunning.value == false && !isPause.value == false && start.value == true) {
            timer.resume()
        }
    })
})

</script>

<template>
    <div class="border-b pb-1">
        <h3 class="uppercase font-medium">warm-up timer</h3>
    </div>
    <div class="w-full p-2">
        <h3 class="text-3xl">
            <span v-if="timer.minutes.value <= 9">0{{ timer.minutes }}</span> 
            <span v-else>{{ timer.minutes }}</span>
            <span>:</span>
            <span v-if="timer.seconds.value <= 9">0{{ timer.seconds }}</span>
            <span v-else>{{ timer.seconds }}</span>
        </h3>
    </div>
</template>