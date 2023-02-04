<script setup>
import box from '../../g-app-components/box.vue';
import IconCancel from '../../components/icons/IconCancel.vue';
import IconPlus from '../../components/icons/IconPlus.vue';
import { ref, computed } from 'vue';
defineProps({
    players: Object,
})

const isActive = ref(true)

const selectedTeam = (item) => {
    if(item == 'TNT'){
        isActive.value = true
    } else { isActive.value = false }
}


</script>

<template>
    <div>
        <box>
            <div class="mb-1 border-neutral-900">
                <div class="grid grid-cols-2 text-center font-semibold">
                    <button @click="selectedTeam('TNT')" 
                    :class="isActive ? 'border border-b-0' : 'bg-neutral-900 text-neutral-600 border-b'" 
                    class="w-full rounded-t-lg py-0.5 border-neutral-600">
                        TNT
                    </button>
                    <button @click="selectedTeam('GSM')" 
                    :class="!isActive ? 'border border-b-0' : 'bg-neutral-900 text-neutral-600 border-b'" 
                    class="w-full rounded-t-lg py-0.5 border-neutral-600">
                        GSM
                    </button>
                </div>

            </div>
            <div class="grid grid-cols-2 gap-2 uppercase text-xs text-center border-b pb-1 mb-1 border-neutral-600">
                <div class="font-medium">
                    inplay
                </div>
                <div class="font-medium">
                    Bench
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 text-sm">
                <div class="font-medium">
                    <button v-for="player in players" :key="player.id" class="btn-player-inplay">
                        <h3 class="uppercase">PG | 23 {{ player.name }}</h3>
                        <IconCancel class="h-3" />
                    </button>
                </div>
                <div class="font-medium">
                    <button v-for="player in players" :key="player.id" class="btn-player-bench">
                        <h3 class="uppercase">PG | 23 {{ player.name }}</h3>
                        <IconPlus class="h-3" />
                    </button>
                </div>
            </div>
        </box>
    </div>
</template>