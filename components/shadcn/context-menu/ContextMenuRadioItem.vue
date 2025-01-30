<script setup lang="ts">
import { Circle } from 'lucide-vue-next';
import {
    ContextMenuItemIndicator,
    ContextMenuRadioItem,
    type ContextMenuRadioItemEmits,
    type ContextMenuRadioItemProps,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ContextMenuRadioItemProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<ContextMenuRadioItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ContextMenuRadioItem
        v-bind="forwarded"
        class="ContextMenuRadioItem"
        :class="props.class"
    >
        <span>
            <ContextMenuItemIndicator>
                <Circle class="Circle" />
            </ContextMenuItemIndicator>
        </span>
        <slot />
    </ContextMenuRadioItem>
</template>

<style lang="scss" scoped>
.ContextMenuRadioItem {
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

    span {
        display: flex;
        position: absolute;
        left: 0.5rem;
        justify-content: center;
        align-items: center;
        width: 0.875rem;
        height: 0.875rem;
    }

    .Circle {
        width: 0.5rem;
        height: 0.5rem;
        fill: currentColor;
    }
}
</style>
