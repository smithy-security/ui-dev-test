<script setup lang="ts">
import {
    TagsInputItemText,
    type TagsInputItemTextProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    TagsInputItemTextProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <TagsInputItemText
        v-bind="forwardedProps"
        class="TagsInputItemText"
        :class="props.class"
    />
</template>

<style lang="scss" scoped>
.TagsInputItemText {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background-color: transparent;
}
</style>
