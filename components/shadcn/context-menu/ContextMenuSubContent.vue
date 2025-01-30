<script setup lang="ts">
import {
    ContextMenuSubContent,
    type DropdownMenuSubContentEmits,
    type DropdownMenuSubContentProps,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DropdownMenuSubContentProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<DropdownMenuSubContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ContextMenuSubContent
        v-bind="forwarded"
        class="ContextMenuSubContent"
        :class="props.class"
    >
        <slot />
    </ContextMenuSubContent>
</template>

<style lang="scss" scoped>
.ContextMenuSubContent {
    overflow: hidden;
    z-index: 50;
    padding: 0.25rem;
    border-radius: 0.375rem;
    border-width: 1px;
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
