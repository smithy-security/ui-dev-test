<script setup lang="ts">
import {
    DropdownMenuSeparator,
    type DropdownMenuSeparatorProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DropdownMenuSeparatorProps & {
        class?: HTMLAttributes['class'];
    }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <DropdownMenuSeparator
        v-bind="delegatedProps"
        class="DropdownMenuSeparator"
        :class="props.class"
    />
</template>

<style lang="scss" scoped>
.DropdownMenuSeparator {
    margin: 0.25rem -0.25rem;
    height: 1px;
    background-color: var(--muted);
}
</style>
