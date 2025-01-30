<script lang="ts" setup>
import { ChevronRight } from 'lucide-vue-next';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <li class="BreadcrumbSeparator" :class="props.class">
        <slot>
            <ChevronRight />
        </slot>
    </li>
</template>
<style lang="scss" scoped>
svg {
    height: 0.875rem;
    width: 0.875rem;
}
</style>
