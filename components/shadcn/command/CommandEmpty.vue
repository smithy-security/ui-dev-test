<script setup lang="ts">
import type { ComboboxEmptyProps } from 'radix-vue';
import { ComboboxEmpty } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ComboboxEmptyProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ComboboxEmpty
        v-bind="delegatedProps"
        class="ComboboxEmpty"
        :class="props.class"
    >
        <slot />
    </ComboboxEmpty>
</template>

<style lang="scss" scoped>
.ComboboxEmpty {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
}
</style>
