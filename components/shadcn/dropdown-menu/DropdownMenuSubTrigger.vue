<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next';
import {
    DropdownMenuSubTrigger,
    type DropdownMenuSubTriggerProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DropdownMenuSubTriggerProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <DropdownMenuSubTrigger
        v-bind="forwardedProps"
        class="DropdownMenuSubTrigger"
        :class="props.class"
    >
        <slot />
        <ChevronRight class="ChevronRight" />
    </DropdownMenuSubTrigger>
</template>

<style lang="scss" scoped>
.DropdownMenuSubTrigger {
    display: flex;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
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
}
</style>
