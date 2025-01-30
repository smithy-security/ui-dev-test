<script setup lang="ts">
import {
    DropdownMenuLabel,
    type DropdownMenuLabelProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DropdownMenuLabelProps & {
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
    <DropdownMenuLabel
        v-bind="forwardedProps"
        class="DropdownMenuLabel"
        :class="props.class"
    >
        <slot />
    </DropdownMenuLabel>
</template>

<style lang="scss" scoped>
.DropdownMenuLabel {
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
}
</style>
