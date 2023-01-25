<script setup>
    import IconUser from '../components/icons/IconUser.vue';
    import IconForm from '../components/icons/IconForm.vue';
    import IconManage from '../components/icons/IconManage.vue';
    import IconHistory from '../components/icons/IconHistory.vue';
</script>

<template>
    <div class="h-14 bg-neutral-900 text-neutral-200 grid items-center">
        <div class="flex justify-around items-center px-2">
            <div class="grid justify-items-center">
                <IconUser/>
                <small class="font-semibold">Profile</small>
            </div>
            <div class="grid justify-items-center">
                <IconForm/>
                <small class="font-semibold">Form</small>
            </div>
            <div class="grid justify-items-center">
                <IconManage/>
                <small class="font-semibold">G! Manage</small>
            </div>
            <div class="grid justify-items-center">
                <IconHistory/>
                <small class="font-semibold">History</small>
            </div>
        </div>
    </div>
</template>