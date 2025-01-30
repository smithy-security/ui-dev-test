<script setup lang="ts">
import {
    TagsInputItem,
    type TagsInputItemProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    TagsInputItemProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <TagsInputItem
        v-bind="forwardedProps"
        class="TagsInputItem"
        :class="props.class"
    >
        <slot />
    </TagsInputItem>
</template>

<style lang="scss" scoped>
.TagsInputItem {
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    height: 1.5rem;
}
</style>
