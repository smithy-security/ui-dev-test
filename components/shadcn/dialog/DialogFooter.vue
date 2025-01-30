<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{ class?: HTMLAttributes['class'] }>();
</script>

<template>
    <div class="DialogFooter" :class="props.class">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.DialogFooter {
    display: flex;
    flex-direction: column-reverse;
    margin-top: auto;

    @media (min-width: 640px) {
        flex-direction: row;
        column-gap: 0.5rem;
        justify-content: flex-end;
    }
}
</style>
