<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <span class="DropdownMenuShortcut" :class="props.class">
        <slot />
    </span>
</template>

<style lang="scss" scoped>
.DropdownMenuShortcut {
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1em;
    opacity: 0.6;
}
</style>
