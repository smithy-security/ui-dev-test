<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <li class="BreadcrumbItem" :class="props.class">
        <slot />
    </li>
</template>

<style lang="scss" scoped>
.BreadcrumbItem {
    display: inline-flex;
    gap: 0.375rem;
    align-items: center;
    text-transform: capitalize;
}
</style>
