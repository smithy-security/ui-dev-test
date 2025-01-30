<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <h3 class="CardTitle" :class="props.class">
        <slot />
    </h3>
</template>

<style lang="scss" scoped>
.CardTitle {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.25;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    width: 100%;
}
</style>
