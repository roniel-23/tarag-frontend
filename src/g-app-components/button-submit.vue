<script setup>
    import IconSubmit from '../components/icons/IconSubmit.vue';
</script>

<template>
    <button type="submit"
        class="text-center uppercase py-2 rounded-full shadow shadow-neutral-200 bg-orange-500 w-full my-2 hover:scale-105">
        <div class="flex items-center gap-2 justify-center">
            <span class="font-bold text-xs">
                <slot>
                    submit
                </slot>
            </span>
            <span class="text-neutral-200/30 absolute right-2">
                <IconSubmit />
            </span>
        </div>
    </button>
</template>