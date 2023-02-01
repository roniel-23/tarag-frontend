<template>
    <div class="flex text-neutral-200 gap-2 overflow-x-auto p-2 no-scrollbar">
        <button class="btn-menu">Info</button>
        <button class="btn-menu">Stats</button>
        <button class="btn-menu">Timeline</button>
        <button class="btn-menu">Reels</button>
        <button class="btn-menu-active">Team</button>
    </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>