<script setup>
import headerComponent from '../g-app-components/header.vue';
import footerComponent from '../g-app-components/footer.vue';
import IconUpload from '../components/icons/IconUpload.vue';
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
                <div class="bg-neutral-900 py-2 rounded-lg mt-2 px-2">
                    <div class="grid grid-cols-3 gap-2">
                        <div class="col-span-2">
                            <label class="text-sm font-medium block mb-1">Name:</label>
                            <input type="text" placeholder="Input team name"
                                class="placeholder:text-sm bg-neutral-600 rounded-full w-full pl-2">
                        </div>
                        <div>
                            <label class="text-sm font-medium block mb-1">Player's Count:</label>
                            <input type="number" placeholder="8"
                                class="placeholder:text-sm bg-neutral-600 rounded-full w-full pl-2">
                        </div>
                    </div>
                </div>
                <div class="bg-neutral-900 py-2 rounded-lg mt-2 px-2">
                    <div class="grid">
                        <div class="text-center">
                            <label class="text-sm font-medium block mb-1">Player ID:</label>
                            <input type="text" placeholder="Input player ID"
                                class="placeholder:text-sm bg-neutral-600 rounded-full pl-2 text-center">
                        </div>
                    </div>
                </div>
                <div class="bg-neutral-900 py-2 rounded-lg mt-2 px-2">
                    <div class="grid">
                        <div class="text-center">
                            <label class="text-sm font-medium block mb-1">PLAYERS</label>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="grid gap-2">
                                    <p class="bg-neutral-600 rounded-full pl-2 text-center">Lebron</p>
                                    <p class="bg-neutral-600 rounded-full pl-2 text-center">Lebron</p>
                                    <p class="bg-neutral-600 rounded-full pl-2 text-center">Lebron</p>
                                    <p class="bg-neutral-600 rounded-full pl-2 text-center">Lebron</p>
                                </div>
                                <div class="grid gap-2">
                                    <p class="bg-neutral-600 rounded-full pl-2 text-center">Team Name</p>
                                    <p class="bg-neutral-600 rounded-full pl-2 text-center">Team Name</p>
                                    <p class="bg-neutral-600 rounded-full pl-2 text-center">Team Name</p>
                                    <p class="bg-neutral-600 rounded-full pl-2 text-center">Team Name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="fixed bottom-0 w-full md:max-w-lg">
            <footerComponent />
        </div>
    </div>



</template>