<script setup>
import headerComponent from '../g-app-components/header.vue';
import footerComponent from '../g-app-components/footer.vue';
import box from '../g-app-components/box.vue';
import buttonSubmit from '../g-app-components/button-submit.vue';
</script>

<template>
    <div class="bg-neutral-700 h-screen md:max-w-lg md:mx-auto">
        <headerComponent class="fixed top-0 w-full" />
        <div class="w-full h-full text-neutral-200 p-2 grid items-center">
            <box class="h-1/2 mb-10">
                <div class="h-full flex items-center justify-center rounded-lg border-2 border-neutral-700">
                    <div class="text-center flex-col w-2/3">
                        <label for="matchId" class="mb-2 uppercase font-medium block">Enter Match ID</label>
                        <input id="matchId" type="text" maxlength="10" placeholder="Ex. T23001" autofocus
                            class="input-text uppercase py-2 placeholder:capitalize text-center w-full border-4 border-neutral-900 drop-shadow-[3px_3px_0_rgb(0,0,0)]">
                        <buttonSubmit class="mt-4">
                            create
                        </buttonSubmit>
                    </div>
                </div>
            </box>
        </div>
        <div class="fixed bottom-0 w-full md:max-w-lg">
            <footerComponent />
        </div>
    </div>



</template>