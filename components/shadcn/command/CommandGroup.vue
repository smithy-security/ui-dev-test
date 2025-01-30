<script setup lang="ts">
import type { ComboboxGroupProps } from 'radix-vue';
import { ComboboxGroup, ComboboxLabel } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ComboboxGroupProps & {
        class?: HTMLAttributes['class'];
        heading?: string;
    }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ComboboxGroup
        v-bind="delegatedProps"
        class="ComboboxGroup"
        :class="props.class"
    >
        <ComboboxLabel v-if="heading" class="ComboboxLabel">
            {{ heading }}
        </ComboboxLabel>
        <slot />
    </ComboboxGroup>
</template>

<style lang="scss" scoped>
.ComboboxGroup {
    overflow: hidden;
    padding: 0.25rem;
}

.ComboboxLabel {
    padding: 0.375rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    color: var(--muted-foreground);
}
</style>
