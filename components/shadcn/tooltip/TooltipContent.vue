<script lang="ts" setup>
import {
    TooltipContent,
    type TooltipContentEmits,
    type TooltipContentProps,
    TooltipPortal,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(
    defineProps<TooltipContentProps & { class?: HTMLAttributes['class'] }>(),
    {
        sideOffset: 4,
        class: '',
    },
);

const emits = defineEmits<TooltipContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <TooltipPortal>
        <TooltipContent
            class="TooltipContent"
            :class="props.class"
            v-bind="{ ...forwarded, ...$attrs }"
        >
            <slot />
        </TooltipContent>
    </TooltipPortal>
</template>

<style lang="scss" scoped>
.TooltipContent {
    overflow: hidden;
    z-index: 50;
    padding: 0.375rem 0.75rem;
    border-radius: 0.375rem;
    border-width: 1px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
