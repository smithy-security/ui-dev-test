<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <h5 class="AlertTitle" :class="props.class">
        <slot />
    </h5>
</template>

<style lang="scss" scoped>
.AlertTitle {
    margin-bottom: 0.25rem;
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1;
}
</style>
