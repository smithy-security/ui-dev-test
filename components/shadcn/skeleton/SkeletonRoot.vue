<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

interface SkeletonProps {
    class?: HTMLAttributes['class'];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
    <div class="SkeletonRoot" :class="props.class" />
</template>

<style lang="scss" scoped>
.SkeletonRoot {
    border-radius: 0.375rem;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    background: var(--border);

    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
}
</style>
