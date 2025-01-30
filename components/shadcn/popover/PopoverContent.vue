<script lang="ts" setup>
import {
    PopoverContent,
    type PopoverContentEmits,
    type PopoverContentProps,
    PopoverPortal,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(
    defineProps<PopoverContentProps & { class?: HTMLAttributes['class'] }>(),
    {
        align: 'center',
        sideOffset: 4,
        class: '',
    },
);
const emits = defineEmits<PopoverContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <PopoverPortal>
        <PopoverContent
            class="PopoverContent"
            :class="props.class"
            v-bind="{ ...forwarded, ...$attrs }"
        >
            <slot />
        </PopoverContent>
    </PopoverPortal>
</template>

<style lang="scss" scoped>
.PopoverContent {
    z-index: 50;
    padding: 1rem;
    border-radius: 0.375rem;
    border-width: 1px;
    outline-style: none;
    width: 18rem;
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
