<script lang="ts" setup>
import { MoreHorizontal } from 'lucide-vue-next';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <span class="BreadcrumbEllipsis" :class="props.class" role="presentation">
        <slot>
            <MoreHorizontal class="MoreHorizontal" />
        </slot>
        <span class="sr-only">More</span>
    </span>
</template>

<style lang="scss" scoped>
.BreadcrumbEllipsis {
    display: flex;
    justify-content: center;
    align-items: center;
}

.MoreHorizontal {
    width: 1rem;
    height: 1rem;
}
</style>
