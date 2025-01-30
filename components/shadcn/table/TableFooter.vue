<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <tfoot class="TableFooter" :class="props.class">
        <slot />
    </tfoot>
</template>

<style lang="scss" scoped>
.TableFooter {
    border-top-width: 1px;
    font-weight: 500;

    > tr:last-child {
        border-bottom: none;
    }
}
</style>
