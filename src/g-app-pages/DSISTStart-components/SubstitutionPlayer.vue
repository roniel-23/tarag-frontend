<script setup>
import IconCancel from '../../components/icons/IconCancel.vue';
import IconPlus from '../../components/icons/IconPlus.vue';

const props = defineProps({
    player: Object,
    status: Number ?? 0
})
const emit = defineEmits(['status'])

const setPlayerStatus = (value) => {
    emit('status', {team: props.player.team, id:props.player.id ,status: value})
}
</script>

<template>
    <button v-if="player.status == status"
    :class="status == 0 ? 'btn-player-bench' : 'btn-player-inplay'">
        <h3 class="uppercase"><span class="font-medium">{{ player.pts }}</span> | PG {{ player.name }}</h3>
        <IconCancel @click="setPlayerStatus(0)" v-if="status == 1" class="h-3" />
        <IconPlus @click="setPlayerStatus(1)" v-else class="h-3" />
    </button>
</template>