<script setup lang="ts">
import { X } from 'lucide-vue-next';
import {
    TagsInputItemDelete,
    type TagsInputItemDeleteProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <TagsInputItemDelete
        v-bind="forwardedProps"
        class="TagsInputItemDelete"
        :class="props.class"
    >
        <slot>
            <X class="CloseIcon" />
        </slot>
    </TagsInputItemDelete>
</template>

<style lang="scss" scoped>
.TagsInputItemDelete {
    display: flex;
    margin-right: 0.25rem;
    border-radius: 0.25rem;
    background-color: transparent;

    .CloseIcon {
        width: 1rem;
        height: 1rem;
    }
}
</style>
