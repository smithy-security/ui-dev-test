<script lang="ts" setup>
import {
    DropdownMenuContent,
    type DropdownMenuContentEmits,
    type DropdownMenuContentProps,
    DropdownMenuPortal,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = withDefaults(
    defineProps<
        DropdownMenuContentProps & { class?: HTMLAttributes['class'] }
    >(),
    {
        sideOffset: 4,
        class: '',
    },
);
const emits = defineEmits<DropdownMenuContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <DropdownMenuPortal>
        <DropdownMenuContent
            class="DropdownMenuContent"
            :class="props.class"
            v-bind="forwarded"
        >
            <slot />
        </DropdownMenuContent>
    </DropdownMenuPortal>
</template>

<style lang="scss" scoped>
:deep() .DropdownMenuContent {
    overflow: hidden;
    z-index: 50;
    padding: 0.25rem;
    border-radius: 0.375rem;
    border-width: 1px;
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    color: var(--popover-foreground);
    background-color: var(--popover);
    min-width: 8rem;
}
</style>
