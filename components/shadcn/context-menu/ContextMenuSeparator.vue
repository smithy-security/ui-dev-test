<script setup lang="ts">
import {
    ContextMenuSeparator,
    type ContextMenuSeparatorProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    ContextMenuSeparatorProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <ContextMenuSeparator
        v-bind="delegatedProps"
        class="ContextMenuSeparator"
        :class="props.class"
    />
</template>

<style lang="scss" scoped>
.ContextMenuSeparator {
    margin: 0.25rem -0.25rem;
    height: 1px;
}
</style>
