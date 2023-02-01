<template>
    <button class="h-12 grid text-center items-center border border-dashed border-neutral-600 p-1 rounded-full">
        <div class="flex items-center justify-center gap-1 hover:scale-105 transition text-neutral-500 hover:text-neutral-300">
            <p class="uppercase text-xs font-medium">
                <slot> Invite </slot>
            </p>
            <IconPlus class="h-3"/>
        </div>
    </button>
</template>

<script setup>
    import IconPlus from '../../components/icons/IconPlus.vue';
</script>