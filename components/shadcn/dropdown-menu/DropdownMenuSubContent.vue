<script setup lang="ts">
import {
    DropdownMenuSubContent,
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
    <DropdownMenuSubContent
        v-bind="forwarded"
        class="DropdownMenuSubContent"
        :class="props.class"
    >
        <slot />
    </DropdownMenuSubContent>
</template>

<style lang="scss" scoped>
.DropdownMenuSubContent {
    overflow: hidden;
    z-index: 50;
    padding: 0.25rem;
    border-radius: 0.375rem;
    border-width: 1px;
    box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
