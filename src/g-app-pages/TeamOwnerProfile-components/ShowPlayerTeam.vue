<script setup>
defineProps({
    player: Object
})
</script>

<template>
    <div class="flex items-center gap-2 border border-neutral-600 p-1 rounded-full">
        <img :src="player.image" alt="image" class="img-profile h-10 w-10">
        <div>
            <h3 class="text-neutral-200 font-medium">{{ player.name }}</h3>
            <p class="text-neutral-500 text-xs">{{ player.position }}</p>
        </div>
    </div>
</template>
