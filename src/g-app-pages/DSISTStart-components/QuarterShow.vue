<script setup>
import { computed } from 'vue';

const props = defineProps({
    quarterName: String,
    isActive: Boolean,
})

const nameClasses = computed(() => props.isActive
    ? 'text-orange-400'
    : ''
);

const timerClasses = computed(() => props.isActive
    ? 'font-semibold'
    : 'text-neutral-500'
);
</script>

<template>
    <div class="grid gap-1 text-center w-full">
        <p :class="nameClasses" class="text-show font-bold">
            {{ quarterName }}
        </p>
        <p :class="timerClasses">
            <slot>
                0
            </slot>
        </p>
    </div>
</template>