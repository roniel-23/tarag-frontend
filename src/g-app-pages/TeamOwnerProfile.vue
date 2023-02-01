<script setup>
import { ref, reactive } from 'vue'
import headerComponent from '../g-app-components/header.vue';
import footerComponent from '../g-app-components/footer.vue';
import IconVerified from '../components/icons/IconVerified.vue';
import navProfileComponent from '../g-app-components/nav-profile.vue';
import box from '../g-app-components/box.vue';
import IconShare from '../components/icons/IconShare.vue';
import IconEdit from '../components/icons/IconEdit.vue';
import ShowPlayerTeam from './TeamOwnerProfile-components/ShowPlayerTeam.vue';
import InvitePlayerTeam from './TeamOwnerProfile-components/InvitePlayerTeam.vue';
import CreateTeamForm from './TeamOwnerProfile-components/CreateTeamForm.vue';
import IconPlus from '../components/icons/IconPlus.vue';
import IconCancel from '../components/icons/IconCancel.vue';

let showCreateTeam = ref(false);
let showAddPlayer = ref(false);

const players = reactive(
    [{
        name: 'Stephen',
        position: 'Small Forward',
        image: 'man.jpg'
    },
    {
        name: 'Jordan',
        position: 'Power Forward',
        image: 'man.jpg'
    }]
)

</script>

<template>
    <div class="bg-neutral-700 h-screen md:max-w-lg md:mx-auto">
        <headerComponent class="top-0" />
        <div class="w-full h-40 p-3">
            <img src="bg.jpg" alt="cover" class="w-full h-40 object-cover absolute top-0 left-0">
            <div class="w-full h-40 absolute top-0 left-0 z-index-1 bg-gradient-to-r from-neutral-900"></div>
            <div class="flex gap-4 items-center text-center">
                <img src="man.jpg" alt="image" class="img-profile">
                <div class="grid text-start text-neutral-200">
                    <h3 class="text-lg font-semibold uppercase">Lebron James</h3>
                    <h3 class="text-neutral-300 text-xs flex items-center gap-1">ID
                        <span class="font-medium text-neutral-200 text-base mr-1">#B2331</span>
                        <span>
                            <IconVerified class="text-green-500 w-4" />
                        </span>
                    </h3>
                    <h3 class="text-neutral-300 text-xs">EXP
                        <span class="font-medium text-neutral-200 text-base">0</span>
                    </h3>
                    <h3 class="font-semibold">G!TO</h3>
                </div>
            </div>
            <div class="flex justify-between mt-2">
                <button class="text-label-xs">Edit Profile</button>
                <button class="text-label-xs">Change Cover</button>
            </div>
        </div>
        <navProfileComponent />
        <div class="px-2 text-neutral-200">
            <!----------------------- NOTICE ------------------------->
            <!-- add or remove '!' in players to toggle create team -->
            <!-- <box v-if="!players"> -->
            <box v-if="!players">
                <button @click="showCreateTeam = true"
                    class="w-full h-20 grid text-center items-center border border-dashed border-neutral-500 rounded-lg hover:font-medium transition">
                    <h3 class="uppercase">Create my Team</h3>
                </button>
                <p class="mt-2 text-end text-xs italic text-neutral-500">
                    <small>Create team to join Tournament!</small>
                </p>
            </box>
            <box v-else>
                <div class="flex justify-between items-center border-b pb-2 border-neutral-500">
                    <button class="flex items-center gap-1 justify-start">
                        <IconShare class="h-4 text-neutral-500 hover:text-neutral-300" />
                        <small class="text-neutral-700">Share</small>
                    </button>
                    <div class="grid text-center">
                        <h2 class="text-center uppercase font-medium text-base">my amazing team</h2>
                        <div>
                            <small class="text-neutral-400">2/10 | KUTSA2023</small>
                        </div>
                    </div>
                    <button @click="showCreateTeam = true" class="flex items-center gap-1 justify-end">
                        <small class="text-neutral-700">Edit</small>
                        <IconEdit class="h-4 text-neutral-500 hover:text-neutral-300" />
                    </button>
                </div>
                <div v-if="showAddPlayer" class="flex gap-1 items-center mt-2">
                    <input type="text" placeholder="Input Player ID"
                        class="input-text w-full text-center uppercase placeholder:capitalize">
                    <button>
                        <IconPlus class="h-6"/>
                    </button>
                    <button @click="showAddPlayer = false">
                        <IconCancel class="h-6"/>
                    </button>
                    
                </div>

                <div class="grid grid-cols-2 gap-1 mt-2">
                    <ShowPlayerTeam v-for="(player, index) in players" :key="index" :player="player" />
                    <InvitePlayerTeam @click="showAddPlayer = true">
                        Add
                    </InvitePlayerTeam>
                </div>
            </box>
        </div>
        <CreateTeamForm v-show="showCreateTeam" @close="showCreateTeam = false" />
        <div class="fixed bottom-0 w-full md:max-w-lg">
            <footerComponent />
        </div>
    </div>
</template>
