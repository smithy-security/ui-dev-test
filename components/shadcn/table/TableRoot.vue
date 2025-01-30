<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div class="TableRoot" :class="props.class">
        <table>
            <slot />
        </table>
    </div>
</template>

<style lang="scss" scoped>
.TableRoot {
    overflow: auto;
    position: relative;
    width: 100%;

    &.bordered {
        border-radius: 6px;
        border: 1px solid var(--border);
    }

    table {
        width: 100%;
        font-size: 0.875rem;
        line-height: 1.25rem;
        caption-side: bottom;
    }
}
</style>
