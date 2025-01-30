<script setup lang="ts">
import { Check } from 'lucide-vue-next';
import {
    ContextMenuCheckboxItem,
    type ContextMenuCheckboxItemEmits,
    type ContextMenuCheckboxItemProps,
    ContextMenuItemIndicator,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ContextMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<ContextMenuCheckboxItemEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ContextMenuCheckboxItem
        v-bind="forwarded"
        class="ContextMenuCheckboxItem"
        :class="props.class"
    >
        <span>
            <ContextMenuItemIndicator>
                <Check class="Check" />
            </ContextMenuItemIndicator>
        </span>
        <slot />
    </ContextMenuCheckboxItem>
</template>

<style lang="scss" scoped>
.ContextMenuCheckboxItem {
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
