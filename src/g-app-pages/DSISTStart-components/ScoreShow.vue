<script setup>
import buttonCancel from '../../g-app-components/button-cancel.vue';

const emit = defineEmits(['close', 'score'])
const props = defineProps({
    player: Object ?? null,
    category: String,
    isPts: Boolean
})

const emitValue = (value) => {
    emit('score', { score: value, id: props.player.id, team: props.player.team })
}
</script>

<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-neutral-600 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-1 z-10 grid items-center">
            <div v-if="player.length != 0" class="md:max-w-lg md:mx-auto bg-neutral-900 rounded-lg text-center text-neutral-200 p-4">
                <h3 class="font-bold uppercase mb-2 border-b pb-2">
                    Select {{ category }}
                    <span class="font-normal lowercase mx-1">for</span>
                    {{ player.name }}
                </h3>
                <div v-if="isPts" class="h-28 grid grid-cols-3 gap-2 mx-2 text-5xl my-4">
                    <div class="text-center grid items-center border border-neutral-700 h-full rounded-xl p-2">
                        <button @click="emitValue(1)"
                            class="h-full rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
                            1
                        </button>
                    </div>
                    <div class="text-center grid items-center border border-neutral-700 h-full rounded-xl p-2">
                        <button @click="emitValue(2)"
                            class="h-full rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
                            2
                        </button>
                    </div>
                    <div class="text-center grid items-center border border-neutral-700 h-full rounded-xl p-2">
                        <button @click="emitValue(3)"
                            class="h-full rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
                            3
                        </button>
                    </div>
                </div>
                <div v-else class="h-28 w-40 grid mx-auto text-5xl my-4">
                    <div class="text-center grid items-center border border-neutral-700 h-full rounded-xl p-2">
                        <button @click="emitValue(1)"
                            class="h-full rounded-lg bg-neutral-800 hover:bg-neutral-700 transition">
                            1
                        </button>
                    </div>
                </div>
                <div class="px-4 pt-2">
                    <buttonCancel @click="$emit('close')">
                        back
                    </buttonCancel>
                </div>

            </div>
        </div>
    </div>
</template>