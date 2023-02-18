<script setup>
const props = defineProps({
    teamName: String,
})

</script>

<template>
    <div class="w-full bg-neutral-300 text-neutral-900 p-2 rounded-t-lg">
        <h3 class="text-3xl font-semibold">
            <slot>
                0
            </slot>
        </h3>
    </div>
    <div class="rounded-b-lg border border-neutral-300">
        <h3 class="uppercase font-medium py-1.5">{{ teamName }}</h3>
    </div>
</template>