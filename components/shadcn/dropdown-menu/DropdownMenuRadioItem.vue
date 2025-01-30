<script setup lang="ts">
import { Circle } from 'lucide-vue-next';
import {
    DropdownMenuItemIndicator,
    DropdownMenuRadioItem,
    type DropdownMenuRadioItemEmits,
    type DropdownMenuRadioItemProps,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }
>();

const emits = defineEmits<DropdownMenuRadioItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <DropdownMenuRadioItem
        v-bind="forwarded"
        class="DropdownMenuRadioItem"
        :class="props.class"
    >
        <span>
            <DropdownMenuItemIndicator>
                <Circle class="Circle" />
            </DropdownMenuItemIndicator>
        </span>
        <slot />
    </DropdownMenuRadioItem>
</template>

<style lang="scss" scoped>
.DropdownMenuRadioItem {
    display: flex;
    position: relative;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-right: 0.5rem;
    padding-left: 2rem;
    align-items: center;
    border-radius: 0.125rem;
    outline-style: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    cursor: default;
    user-select: none;

    > span {
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
