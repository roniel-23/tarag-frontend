<script setup>
import { useTimerStore } from '../../stores/timerStore';
import { storeToRefs } from "pinia";
import IconTimeout from '../../components/icons/IconTimeout.vue';
import IconSubstitution from '../../components/icons/IconSubstitution.vue';
import IconPlay from '../../components/icons/IconPlay.vue';
import IconPause from '../../components/icons/IconPause.vue';
import IconUndo from '../../components/icons/IconUndo.vue';
import IconRedo from '../../components/icons/IconRedo.vue';
import iconRepeat from '../../components/icons/IconRepeat.vue';
import ShotClockOptionShow from './ShotClockOptionShow.vue';
import { ref } from 'vue';

const emit = defineEmits(['navClicked'])
const startSignal = ref(false)
const isHome = ref(true)
const page = ref('play')
const showShotClockOption = ref(false)

const { isPause, start, ShotClockPause, ShotClockReset } = storeToRefs(useTimerStore());

const toggleTimer = () => {
    // console.log('home:' + isHome.value)
    if (isHome.value) {
        if (startSignal.value == false) {
            start.value = true
            startSignal.value = true
            ShotClockPause.value = false
        } else {
            isPause.value = !isPause.value
            ShotClockPause.value = !isPause.value
        }
    }
    emitValue('play')
}

const toggleShotClock = () => {
    // console.log('home:' + isHome.value)
    if (isHome.value && isPause.value) {
        ShotClockPause.value = !ShotClockPause.value
    }
    emitValue('shot')
}

const shotClockOption = () => {
    // ShotClockReset.value = true
    if (start.value) {
        showShotClockOption.value = true
        emitValue('reset')
    }
}

const emitValue = (name) => {
    page.value = name
    if (name == 'play' || name == 'undo' || name == 'redo' || name == 'shot' || name == 'reset') {
        isHome.value = true
    } else {
        isHome.value = false
        if (startSignal.value) {
            isPause.value = false
            ShotClockPause.value = true
        }
    }
    emit('navClicked', { name: name })
}
</script>

<template>
    <div class="h-14 bg-neutral-900 text-neutral-200 grid items-center text-xs">
        <div class="grid grid-cols-7 items-center px-2">
            <button @click="emitValue('timeout')" class="grid justify-items-center">
                <IconTimeout :class="page == 'timeout' ? 'text-orange-400' : ''"
                    class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                <small class="uppercase">Timeout</small>
            </button>
            <button @click="emitValue('substitution')" class="grid justify-items-center">
                <IconSubstitution :class="page == 'substitution' ? 'text-orange-400' : ''"
                    class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                <small class="uppercase">Subs</small>
            </button>
            <button @click="emitValue('undo')" class="grid justify-items-center">
                <IconUndo :class="page == 'undo' ? 'text-orange-400' : ''"
                    class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                <small class="uppercase">Undo</small>
            </button>
            <button @click="toggleTimer">
                <span v-if="!start" class="grid justify-items-center">
                    <IconPlay :class="page == 'play' ? 'text-orange-400' : ''"
                        class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                    <small class="uppercase">play</small>
                </span>
                <span v-else-if="isPause" class="grid justify-items-center">
                    <IconPause :class="page == 'play' ? 'text-orange-400' : ''"
                        class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                    <small class="uppercase">pause</small>
                </span>
                <span v-else-if="!isPause" class="grid justify-items-center">
                    <IconPlay :class="page == 'play' ? 'text-orange-400' : ''"
                        class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                    <small class="uppercase">play</small>
                </span>
            </button>
            <button @click="emitValue('redo')" class="grid justify-items-center">
                <IconRedo :class="page == 'redo' ? 'text-orange-400' : ''"
                    class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                <small class="uppercase">Redo</small>
            </button>
            <button @click="toggleShotClock" class="grid justify-items-center">
                <span v-if="ShotClockPause || !start" class="grid justify-items-center">
                    <IconPlay :class="page == 'shot' ? 'text-orange-400' : ''"
                        class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                    <small class="uppercase">clock</small>
                </span>
                <span v-else-if="!ShotClockPause" class="grid justify-items-center">
                    <IconPause :class="page == 'shot' ? 'text-orange-400' : ''"
                        class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                    <small class="uppercase">clock</small>
                </span>

            </button>
            <button @click="shotClockOption" class="grid justify-items-center">
                <iconRepeat :class="page == 'reset' ? 'text-orange-400' : ''"
                    class="h-6 hover:text-orange-400 hover:scale-110 transition" />
                <small class="uppercase">OPTION</small>
            </button>
        </div>
        <ShotClockOptionShow v-if="showShotClockOption" @close="showShotClockOption = false" />
</div>
</template>