<script setup lang="ts">
import {
    ContextMenuItem,
    type ContextMenuItemEmits,
    type ContextMenuItemProps,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ContextMenuItemProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<ContextMenuItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ContextMenuItem
        v-bind="forwarded"
        class="ContextMenuItem"
        :class="props.class"
    >
        <slot />
    </ContextMenuItem>
</template>

<style lang="scss" scoped>
.ContextMenuItem {
    display: flex;
    position: relative;
    padding: 0.375rem 0.5rem;
    align-items: center;
    border-radius: 0.125rem;
    outline-style: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    cursor: default;
    user-select: none;
}
</style>
