<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div class="DialogHeader" :class="props.class">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.DialogHeader {
    display: flex;
    flex-direction: column;
    row-gap: 0.375rem;
    text-align: center;

    @media (min-width: 640px) {
        text-align: left;
    }
}
</style>
