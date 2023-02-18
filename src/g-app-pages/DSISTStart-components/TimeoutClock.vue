<script setup>
import { watchEffect, onMounted } from "vue";
import { useTimer } from 'vue-timer-hook';

const props = defineProps({
    time: Number,
    started: Boolean ?? false
})

const emit = defineEmits(['over'])

const time = new Date();
time.setSeconds(time.getSeconds() + props.time * 60); // 60 = 1 minutes timer
const timer = useTimer(time, false);


onMounted(() => {
    watchEffect(async () => {
        if(props.started){
            timer.start()
        }
        if (timer.isExpired.value) {
            console.log('timeout over')
            emit('over')
        }
    })
})

</script>

<template>
    <div class="w-full">
        <h3 class="text-5xl">
            <span v-if="timer.minutes.value <= 9">0{{ timer.minutes }}</span>
            <span v-else>{{ timer.minutes }}</span>
            <span>:</span>
            <span v-if="timer.seconds.value <= 9">0{{ timer.seconds }}</span>
            <span v-else>{{ timer.seconds }}</span>
        </h3>
    </div>
</template>