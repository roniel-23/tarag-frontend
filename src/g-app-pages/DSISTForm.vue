<script setup>
import headerComponent from '../g-app-components/header.vue';
import footerComponent from '../g-app-components/footer.vue';
import box from '../g-app-components/box.vue';
import buttonCancel from '../g-app-components/button-cancel.vue';
import buttonSubmit from '../g-app-components/button-submit.vue';
import TournamentInfo from './DSISTForm-components/TournamentInfo.vue';
</script>

<template>
    <div class="bg-neutral-700 h-screen md:max-w-lg md:mx-auto">
        <headerComponent class="top-0 w-full" />
        <div class="w-full text-neutral-200 px-2">
            <TournamentInfo/>
            <box>
                <div class="font-medium text-center bg-neutral-900 py-2 mb-4 border-b border-neutral-500">
                    <h3 class="uppercase">Game Setup</h3>
                </div>
                <div class="px-2 pb-2">
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            <label for="warmUpTime" class="input-label">Warm-up Time Length:</label>
                        </div>
                        <div class="flex items-center gap-1">
                            <input id="warmUpTime" type="number" placeholder="10"
                                class="input-text w-full text-center pl-0">
                            <p class="input-label">min</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            <label for="quarterTime" class="input-label">Quarter Time Length:</label>
                        </div>
                        <div class="flex items-center gap-1">
                            <input id="quarterTime" type="number" placeholder="10"
                                class="input-text w-full text-center pl-0">
                            <p class="input-label">min</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            <label for="teamFoul" class="input-label">Max Team Foul:</label>
                        </div>
                        <div class="flex items-center gap-1">
                            <input id="teamFoul" type="number" placeholder="10"
                                class="input-text w-full text-center pl-0">
                            <p class="input-label">foul</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            <label for="runningTime" class="input-label">Running Time:</label>
                        </div>
                        <div class="flex items-center gap-1">
                            <input id="runningTime" type="number" placeholder="10"
                                class="input-text w-full text-center pl-0">
                            <p class="input-label">min</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 items-center mt-2 pb-2 border-b border-neutral-600">
                        <div class="col-span-2">
                            <label for="timeOut" class="input-label">Timeout Length:</label>
                        </div>
                        <div class="flex items-center gap-1">
                            <input id="timeOut" type="number" placeholder="10"
                                class="input-text w-full text-center pl-0">
                            <p class="input-label">min</p>
                        </div>
                    </div>
                    <div class="flex gap-2 mt-4">
                        <buttonSubmit>
                            save
                        </buttonSubmit>
                        <buttonCancel>
                            back
                        </buttonCancel>
                    </div>
                </div>
            </box>
        </div>

        <div class="fixed bottom-0 w-full md:max-w-lg">
            <footerComponent />
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