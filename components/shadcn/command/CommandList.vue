<script lang="ts" setup>
import type { ComboboxContentEmits, ComboboxContentProps } from 'radix-vue';
import { ComboboxContent, useForwardPropsEmits } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = withDefaults(
    defineProps<ComboboxContentProps & { class?: HTMLAttributes['class'] }>(),
    {
        dismissable: false,
        class: '',
    },
);
const emits = defineEmits<ComboboxContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ComboboxContent
        class="ComboboxContent"
        :class="props.class"
        v-bind="forwarded"
    >
        <div role="presentation">
            <slot />
        </div>
    </ComboboxContent>
</template>

<style lang="scss" scoped>
.ComboboxContent {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 300px;
    z-index: 50;
    outline-style: none;
    width: 100%;
    background: white;
}
</style>
