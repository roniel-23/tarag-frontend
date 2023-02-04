<script setup>
    import IconTimeout from '../../components/icons/IconTimeout.vue';
    import IconSubstitution from '../../components/icons/IconSubstitution.vue';
    import IconPlay from '../../components/icons/IconPlay.vue';
    import IconUndo from '../../components/icons/IconUndo.vue';
    import IconRedo from '../../components/icons/IconRedo.vue';

    defineEmits(['navClicked'])
</script>

<template>
    <div class="h-14 bg-neutral-900 text-neutral-200 grid items-center">
        <div class="grid grid-cols-5 items-center px-2">
            <button @click="$emit('navClicked', {name: 'timeout'})" class="grid justify-items-center">
                <IconTimeout class="h-6 hover:text-orange-400 hover:scale-110 transition"/>
                <small class="uppercase">Timeout</small>
            </button>
            <button @click="$emit('navClicked', {name: 'substitution'})" class="grid justify-items-center">
                <IconSubstitution class="h-6 hover:text-orange-400 hover:scale-110 transition"/>
                <small class="uppercase">Subs</small>
            </button>
            <button @click="$emit('navClicked', {name: 'play'})" class="grid justify-items-center">
                <IconPlay class="h-6 hover:text-orange-400 hover:scale-110 transition"/>
                <small class="uppercase">Play</small>
            </button>
            <button @click="$emit('navClicked', {name: 'undo'})" class="grid justify-items-center">
                <IconUndo class="h-6 hover:text-orange-400 hover:scale-110 transition"/>
                <small class="uppercase">Undo</small>
            </button>
            <button @click="$emit('navClicked', {name: 'redo'})" class="grid justify-items-center">
                <IconRedo class="h-6 hover:text-orange-400 hover:scale-110 transition"/>
                <small class="uppercase">Redo</small>
            </button>
        </div>
    </div>
</template>