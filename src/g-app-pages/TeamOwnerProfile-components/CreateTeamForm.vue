<script setup>
import IconPlus from '../../components/icons/IconPlus.vue';
import IconTrash from '../../components/icons/IconTrash.vue';
import buttonSubmit from '../../g-app-components/button-submit.vue';
import buttonCancel from '../../g-app-components/button-cancel.vue';
const emits = defineEmits(['close'])
const players = [
    {
        ID: "B2312"
    },
    {
        ID: "B2313"
    }
]


</script>

<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-neutral-600 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-1 z-10 grid items-center">
            <div class="md:max-w-lg md:mx-auto bg-neutral-900 rounded-lg text-center text-neutral-200 p-4">
                <h3 class="font-bold uppercase mb-2 border-b pb-2">Create Team</h3>
                <form class="grid text-start gap-2">
                    <div class="grid">
                        <label for="name" class="input-label">Name</label>
                        <input id="name" type="text" placeholder="Input Team Name"
                            class="input-text font-medium w-full">
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="grid">
                            <label for="playersCount" class="input-label">No. of Players</label>
                            <input id="playersCount" type="number" placeholder="Example 10"
                                class="input-text w-full">
                        </div>
                        <div class="grid">
                            <label for="idPrefix" class="input-label">ID Prefix</label>
                            <input id="idPrefix" type="text" placeholder="Example KUTSA" maxlength="5"
                                class="input-text w-full uppercase placeholder:capitalize">
                        </div>
                    </div>
                    <div>
                        <h3 class="input-label border-b border-neutral-600 pb-2 mb-2">Players</h3>
                        <div v-for="(player, index) in players" :key="index" class="mt-2">
                            <div class="flex gap-1 items-center">
                                <input type="text" v-model="player.ID"
                                    class="input-text uppercase w-full placeholder:capitalize"
                                    placeholder="Input Player ID Ex. B2312">
                                <button v-if="players.length == index+1" class="text-neutral-300 hover:text-neutral-100 transition">
                                    <IconPlus class="w-5 mx-1" />
                                </button>
                                <button v-else class="text-red-500/50 hover:text-red-500/80 transition">
                                    <IconTrash class="w-5 mx-1"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 mt-2 pt-2 border-t">
                        <buttonSubmit/>
                        <buttonCancel @click="$emit('close')"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>