<script lang="ts" setup>
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue';
import { ComboboxRoot, useForwardPropsEmits } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = withDefaults(
    defineProps<ComboboxRootProps & { class?: HTMLAttributes['class'] }>(),
    {
        open: true,
        modelValue: '',
        class: '',
    },
);

const emits = defineEmits<ComboboxRootEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ComboboxRoot class="ComboboxRoot" :class="props.class" v-bind="forwarded">
        <slot />
    </ComboboxRoot>
</template>

<style lang="scss">
.ComboboxRoot {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    border-radius: 0.375rem;
    width: 100%;
    height: 100%;
    border: 1px solid #c5c8cf;
    color: var(--popover-foreground);
    background-color: var(--popover);
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
</style>
