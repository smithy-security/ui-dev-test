<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <tr class="TableRow" :class="props.class">
        <slot />
    </tr>
</template>

<style lang="scss" scoped>
.TableRow {
    border-bottom-width: 1px;
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    &:hover {
        background-color: hsl(210 40% 96.1% / 0.5);
    }

    &:last-of-type {
        border-bottom-width: 0;
    }

    &[data-state='selected'] {
        background-color: var(--muted);
    }
}
</style>
<style lang="scss">
.TableRoot thead .TableRow:last-of-type {
    border-bottom-width: 1px;
}
</style>
