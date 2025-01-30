<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <span
        role="link"
        aria-disabled="true"
        aria-current="page"
        class="BreadcrumbPage"
        :class="props.class"
    >
        <slot />
    </span>
</template>

<style lang="scss" scoped>
.BreadcrumbPage {
    font-weight: 400;
    color: var(--foreground);
}
</style>
