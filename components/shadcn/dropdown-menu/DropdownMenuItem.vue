<script setup lang="ts">
import {
    DropdownMenuItem,
    type DropdownMenuItemProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DropdownMenuItemProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <DropdownMenuItem
        v-bind="forwardedProps"
        class="DropdownMenuItem"
        :class="props.class"
    >
        <slot />
    </DropdownMenuItem>
</template>

<style lang="scss" scoped>
.DropdownMenuItem {
    display: flex;
    position: relative;
    padding: 0.375rem 0.5rem;
    align-items: center;
    border-radius: 0.125rem;
    outline-style: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    cursor: pointer;
    user-select: none;

    &[data-highlighted] {
        background-color: var(--accent);
        color: var(--foreground);
        cursor: pointer;
    }
}
</style>
