<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from 'radix-vue';
import { ComboboxItem, useForwardPropsEmits } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ComboboxItemProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<ComboboxItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ComboboxItem v-bind="forwarded" class="ComboboxItem" :class="props.class">
        <slot />
    </ComboboxItem>
</template>

<style lang="scss" scoped>
.ComboboxItem {
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 0.125rem;
    outline-style: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    user-select: none;
    padding: 0.5rem 1rem;
    gap: 1rem;
    text-transform: capitalize;

    &[data-disabled] {
        pointer-events: none;
        opacity: 0.5;
    }

    &[data-highlighted] {
        background-color: var(--accent);
        color: var(--foreground);
        cursor: pointer;
    }
}
</style>
