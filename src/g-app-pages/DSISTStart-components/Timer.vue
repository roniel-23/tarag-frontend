<script setup>
import { watchEffect, onMounted, ref } from "vue";
import { useTimer } from 'vue-timer-hook';
import { useTimerStore } from '../../stores/timerStore';
import { storeToRefs } from "pinia";
import ShotClock from "./ShotClock.vue";
const { timeLength, isPause, start, shotClock, currentShotClock, ShotClockReset, ShotClockPause, ShotClockAutoStart } = storeToRefs(useTimerStore());

const props = defineProps({
    time: Number,
    quarter: Number
})

const emit = defineEmits(['status'])

const title = ref('')
const shotClockKey = ref(0)
const showShotClock = ref(true)

const reRenderShotClock = (value, isPause) => {
    ShotClockReset.value = false
    ShotClockPause.value = isPause
    shotClock.value = value
    // console.log('pause: ' + ShotClockPause.value)
    shotClockKey.value += 1;
}

switch(props.quarter){
    case 0:
        title.value = 'Warm up'
        break
    case 1:
        title.value = 'Quarter 1'
        break
    case 2:
        title.value = 'Quarter 2'
        break
    case 3:
        title.value = 'Quarter 3'
        break
    case 4:
        title.value = 'Quarter 4'
        break
    case 5:
        title.value = 'Overtime'
        break
    case 6:
        title.value = 'Overtime'
        break
}

timeLength.value = props.time
const firstStart =ref(false)

const time = new Date();
time.setSeconds(time.getSeconds() + timeLength.value * 60); // 60 = 1 minutes timer
const timer = useTimer(time, false);

onMounted(() => {
    reRenderShotClock(24, false)
    watchEffect(async () => {
        // console.log('running: ' + timer.isRunning.value)
        // console.log('pause: ' + isPause.value)
        // console.log('start: ' + start.value)
        // console.log('first: ' + firstStart.value)
        if(start.value == true && firstStart.value == false){
            timer.start()
            firstStart.value = true
        }else if(timer.isRunning.value == true && isPause.value == false) {
            timer.pause()
        }else if(timer.isRunning.value == false && isPause.value == true && start.value == true && !timer.isExpired.value) {
            timer.resume()
        }

        if(timer.isExpired.value) {
            console.log('over')
            emit('status')
            start.value = false
        }

        if(ShotClockReset.value == true){
            ShotClockReset.value = false
            reRenderShotClock(shotClock.value, ShotClockAutoStart.value)
        }

        if(timer.minutes.value == 0 && currentShotClock.value >= timer.seconds.value){
            showShotClock.value = false
        }
    })
})

</script>

<template>
    <div class="border-b pb-1">
        <h3 class="uppercase font-bold text-xs">{{ title }}</h3>
    </div>
    <div class="w-full mb-1">
        <h3 class="text-3xl">
            <span v-if="timer.minutes.value <= 9">0{{ timer.minutes }}</span> 
            <span v-else>{{ timer.minutes }}</span>
            <span>:</span>
            <span v-if="timer.seconds.value <= 9">0{{ timer.seconds }}</span>
            <span v-else>{{ timer.seconds }}</span>
        </h3>
    </div>
    <ShotClock v-if="start && showShotClock && quarter > 0" :key="shotClockKey"/>
</template>