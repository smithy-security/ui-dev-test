<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <span class="CommandShortcut" :class="props.class">
        <slot />
    </span>
</template>

<style lang="scss" scoped>
.CommandShortcut {
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1em;
}
</style>
