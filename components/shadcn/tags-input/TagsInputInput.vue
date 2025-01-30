<script setup lang="ts">
import {
    TagsInputInput,
    type TagsInputInputProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    TagsInputInputProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <TagsInputInput
        v-bind="forwardedProps"
        class="TagsInputInput"
        :class="props.class"
    />
</template>

<style lang="scss" scoped>
.TagsInputInput {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    flex: 1 1 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background-color: transparent;
}
</style>
