<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div :class="props.class" class="Badge">
        <slot />
    </div>
</template>
<style lang="scss" scoped>
.Badge {
    display: inline-flex;
    align-items: center;
    border-radius: 0.25rem;
    border-width: 1px;
    border-color: transparent;
    padding: 0.125rem 0.625rem;
    font-size: 0.75rem;
    font-weight: 600;
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    transition:
        color 0.2s,
        background-color 0.2s,
        border-color 0.2s,
        fill 0.2s,
        stroke 0.2s;
    outline: none;

    &:hover {
        background-color: rgba(var(--secondary), 0.8);
    }

    :deep(.button) {
        padding: 0;
        height: auto;
    }
}
</style>
