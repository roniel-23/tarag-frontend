<script setup>
import IconCancel from '../components/icons/IconCancel.vue';
</script>

<template>
    <button type="reset"
        class="text-center uppercase py-2 rounded-full shadow shadow-neutral-200 bg-neutral-700 w-full my-2 hover:scale-105">
        <div class="flex items-center gap-2 justify-center">
            <span class="font-bold text-xs">
                <slot>
                    cancel
                </slot>
            </span>
            <span class="text-neutral-200/30 absolute right-2">
                <IconCancel class="h-4"/>
            </span>
        </div>
    </button>
</template>