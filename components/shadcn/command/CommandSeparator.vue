<script setup lang="ts">
import type { ComboboxSeparatorProps } from 'radix-vue';
import { ComboboxSeparator } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ComboboxSeparatorProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ComboboxSeparator
        v-bind="delegatedProps"
        class="ComboboxSeparator"
        :class="props.class"
    >
        <slot />
    </ComboboxSeparator>
</template>

<style lang="scss" scoped>
.ComboboxSeparator {
    margin-left: -0.25rem;
    margin-right: -0.25rem;
    height: 1px;
}
</style>
