<script setup lang="ts">
import {
    ContextMenuContent,
    type ContextMenuContentEmits,
    type ContextMenuContentProps,
    ContextMenuPortal,
    useForwardPropsEmits,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ContextMenuContentProps & { class?: HTMLAttributes['class'] }
>();
const emits = defineEmits<ContextMenuContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <ContextMenuPortal>
        <ContextMenuContent
            v-bind="forwarded"
            class="ContextMenuContent"
            :class="props.class"
        >
            <slot />
        </ContextMenuContent>
    </ContextMenuPortal>
</template>

<style lang="scss" scoped>
.ContextMenuContent {
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
