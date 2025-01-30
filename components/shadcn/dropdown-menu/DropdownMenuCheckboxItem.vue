<script setup lang="ts">
import { Check } from 'lucide-vue-next';
import {
    DropdownMenuCheckboxItem,
    type DropdownMenuCheckboxItemEmits,
    type DropdownMenuCheckboxItemProps,
    DropdownMenuItemIndicator,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DropdownMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<DropdownMenuCheckboxItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <DropdownMenuCheckboxItem
        v-bind="forwarded"
        class="DropdownMenuCheckboxItem"
        :class="props.class"
    >
        <span>
            <DropdownMenuItemIndicator>
                <Check class="Check" />
            </DropdownMenuItemIndicator>
        </span>
        <slot />
    </DropdownMenuCheckboxItem>
</template>

<style lang="scss" scoped>
.DropdownMenuCheckboxItem {
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

    .Check {
        width: 1rem;
        height: 1rem;
    }
}
</style>
