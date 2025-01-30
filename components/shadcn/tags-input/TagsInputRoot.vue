<script setup lang="ts">
import {
    TagsInputRoot,
    type TagsInputRootEmits,
    type TagsInputRootProps,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    TagsInputRootProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<TagsInputRootEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <TagsInputRoot
        v-bind="forwarded"
        class="TagsInputRoot"
        :class="props.class"
    >
        <slot />
    </TagsInputRoot>
</template>

<style lang="scss" scoped>
.TagsInputRoot {
    display: flex;
    padding: 0.5rem 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
    border-radius: 0.375rem;
    border-width: 1px;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
</style>
