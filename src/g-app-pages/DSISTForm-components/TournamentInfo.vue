<script setup>
import box from '../../g-app-components/box.vue';
import { ref } from 'vue';

const showDetails = ref(true);
</script>

<template>
    <box>
        <div class="absolute right-1 top-1 z-10 text-xs text-neutral-600">
            <button v-if="showDetails" @click="showDetails = false"
                class="border border-neutral-600 px-1 rounded hover:text-neutral-400 hover:border-neutral-400 transition">
                <small>hide</small>
            </button>
            <button v-else @click="showDetails = true"
            class="border border-neutral-600 px-1 rounded hover:text-neutral-400 hover:border-neutral-400 transition">
                <small>show</small>
            </button>
        </div>
        <div class="font-medium text-center bg-neutral-900 py-1">
            <h3 class="uppercase">La liga catbalogan</h3>
            <small v-if="showDetails" class="text-neutral-400">Jan 31, 2023
                <span class="text-base text-neutral-600">|</span>
                Purok 1 Maulong Catbalogan Samar</small>
        </div>
    </box>
</template>