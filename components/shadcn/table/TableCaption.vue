<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <caption class="TableCaption" :class="props.class">
        <slot />
    </caption>
</template>

<style lang="scss" scoped>
.TableCaption {
    margin-top: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--muted-foreground);
}
</style>
