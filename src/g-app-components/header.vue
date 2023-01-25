<script setup>
    import IconWallet from '../components/icons/IconWallet.vue';
    import IconMenu from '../components/icons/IconMenu.vue';
    import IconSwitch from '../components/icons/IconSwitch.vue';
</script>

<template>
    <div class="h-14 bg-black text-neutral-200 grid items-center">
        <div class="flex justify-between items-center px-2">
            <div class="flex gap-2 items-center">
                <img class="h-10"
                src="../../public/tarag_logo.png" alt="TaraG!">
                <IconSwitch class="text-orange-400"/>
            </div>
            <div class="flex gap-2 items-center">
                <IconWallet/>
                <div class="bg-gray-700 rounded-lg py-1.5 px-0.5">
                    <IconMenu class="text-orange-400"/>
                </div>
                
            </div>
        </div>
    </div>
</template>