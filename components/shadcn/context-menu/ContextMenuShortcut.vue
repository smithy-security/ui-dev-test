<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <span class="ContextMenuShortcut" :class="props.class">
        <slot />
    </span>
</template>

<style lang="scss" scoped>
.ContextMenuShortcut {
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1em;
}
</style>
