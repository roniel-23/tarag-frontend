<script setup>
    defineProps({
        player: Object,
    })
    defineEmits(['scoreClicked'])

//     const emitValue = (value) => {
//     emit('scoreClicked', {player: player, category: 'reb'})
// }

</script>

<template>
    <div class="grid grid-cols-12 gap-1 px-1 border-b border-neutral-700 pb-1">
        <div class="grid col-span-4 w-full text-label-xs uppercase">
            PG | 23 {{ player.name }}
        </div>
        <div class="col-span-8 flex gap-1 text-center w-full text-label-xs">
            <button @click="$emit('scoreClicked', {player: player, category: 'pts'})" class="w-full text-center border">
                {{ player.pts }}
            </button>
            <button @click="$emit('scoreClicked', {player: player, category: 'reb'})" class="w-full text-center border">
                {{ player.reb }}
            </button>
            <button @click="$emit('scoreClicked', {player: player, category: 'ast'})" class="w-full text-center border">
                {{ player.ast }}
            </button>
            <button @click="$emit('scoreClicked', {player: player, category: 'blk'})" class="w-full text-center border">
                {{ player.blk }}
            </button>
            <button @click="$emit('scoreClicked', {player: player, category: 'stl'})" class="w-full text-center border">
                {{ player.stl }}
            </button>
            <button @click="$emit('scoreClicked', {player: player, category: 'fls'})" class="w-full text-center border">
                {{ player.fls }}
            </button>
        </div>
    </div>
</template>