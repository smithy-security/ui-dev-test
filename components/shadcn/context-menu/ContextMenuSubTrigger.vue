<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next';
import {
    ContextMenuSubTrigger,
    type ContextMenuSubTriggerProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ContextMenuSubTriggerProps & {
        class?: HTMLAttributes['class'];
    }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <ContextMenuSubTrigger
        v-bind="forwardedProps"
        class="ContextMenuSubTrigger"
        :class="props.class"
    >
        <slot />
        <ChevronRight class="ChevronRight" />
    </ContextMenuSubTrigger>
</template>

<style lang="scss" scoped>
.ContextMenuSubTrigger {
    display: flex;
    padding: 0.375rem 0.5rem;
    align-items: center;
    border-radius: 0.125rem;
    outline-style: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    cursor: default;
    user-select: none;
}

.ChevronRight {
    width: 1rem;
    height: 1rem;
    margin-left: auto;
}
</style>
