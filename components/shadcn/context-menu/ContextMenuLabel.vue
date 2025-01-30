<script setup lang="ts">
import { ContextMenuLabel, type ContextMenuLabelProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ContextMenuLabelProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ContextMenuLabel
        v-bind="delegatedProps"
        class="ContextMenuLabel"
        :class="props.class"
    >
        <slot />
    </ContextMenuLabel>
</template>

<style lang="scss" scoped>
.ContextMenuLabel {
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
}
</style>
