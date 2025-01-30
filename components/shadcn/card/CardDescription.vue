<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <p class="CardDescription" :class="props.class">
        <slot />
    </p>
</template>

<style lang="scss" scoped>
.CardDescription {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--muted-foreground);
}
</style>
