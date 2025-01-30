<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div class="CardRoot" :class="props.class">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.CardRoot {
    border-radius: 0.5rem;
    border-width: 1px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    background-color: var(--card);

    &:hover {
        box-shadow: var(--box-shadow);
    }
}
</style>
