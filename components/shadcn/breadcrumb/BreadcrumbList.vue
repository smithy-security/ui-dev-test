<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <ol class="BreadcrumbList" :class="props.class">
        <slot />
    </ol>
</template>

<style lang="scss" scoped>
.BreadcrumbList {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    overflow-wrap: break-word;
    color: var(--muted-foreground);

    @media (min-width: 640px) {
        gap: 0.625rem;
    }
}
</style>
