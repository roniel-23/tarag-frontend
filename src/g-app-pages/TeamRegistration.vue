<script setup>
import headerComponent from '../g-app-components/header.vue';
import footerComponent from '../g-app-components/footer.vue';
import IconUpload from '../components/icons/IconUpload.vue';
import buttonSubmit from '../g-app-components/button-submit.vue';
import buttonCancel from '../g-app-components/button-cancel.vue';
import box from '../g-app-components/box.vue';
</script>

<template>
    <div class="bg-neutral-700 h-screen md:max-w-lg md:mx-auto">
        <headerComponent class="top-0" />
        <div class="text-neutral-200 px-4 py-2">
            <div class="uppercase font-medium text-center text-xl bg-neutral-900 py-1 rounded-full">
                Bagong Buhay Tournament
            </div>
            <div class="font-medium text-center bg-neutral-900 py-1 rounded-full mt-2">
                Team Registration Form
            </div>
            <form>
                <div class="bg-neutral-900 py-1 rounded-lg mt-2 flex justify-center">
                    <div
                        class="w-3/4 h-32 border-dotted rounded border-2 border-neutral-600 text-center my-2 bg-neutral-800">
                        <!-- <img src="../../public/ball_cover.png" alt="Logo"
                            class="h-full mx-auto"> -->
                        <div class="grid items-center h-full">
                            <div>
                                <IconUpload class="w-full hover:scale-105 cursor-pointer" />
                                <small class="uppercase text-xs">Upload Team Logo</small>
                            </div>
                        </div>
                    </div>
                </div>
                <box>
                    <div class="grid grid-cols-3 gap-2">
                        <div class="col-span-2">
                            <label class="input-label">Name:</label>
                            <input type="text" placeholder="Input team name" class="input-text w-full">
                        </div>
                        <div>
                            <label class="input-label">Player's Count:</label>
                            <input type="number" placeholder="8" class="input-text w-full">
                        </div>
                    </div>
                </box>
                <box>
                    <div class="grid">
                        <div class="text-center">
                            <label class="input-label">Player ID:</label>
                            <input type="text" placeholder="Input player ID" class="input-text text-center">
                        </div>
                    </div>
                </box>
                <box>
                    <div class="grid">
                        <div class="text-center">
                            <label class="text-sm font-medium block mb-1">PLAYERS</label>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="grid gap-2">
                                    <p class="text-show">Lebron James</p>
                                    <p class="text-show">Lebron</p>
                                    <p class="text-show">Lebron</p>
                                    <p class="text-show">Lebron</p>
                                </div>
                                <div class="grid gap-2">
                                    <p class="text-show">Team Name</p>
                                    <p class="text-show">Team Name</p>
                                    <p class="text-show">Team Name</p>
                                    <p class="text-show">Team Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </box>
                <div class="grid grid-cols-2 gap-4">
                    <buttonSubmit>
                        Submit
                    </buttonSubmit>
                    <buttonCancel>
                        cancel
                    </buttonCancel>
                </div>

            </form>
        </div>
        <div class="fixed bottom-0 w-full md:max-w-lg">
            <footerComponent />
        </div>
    </div>



</template>