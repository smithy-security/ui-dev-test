<script setup lang="ts">
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    TabsTriggerProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <TabsTrigger
        v-bind="forwardedProps"
        class="TabsTrigger"
        :class="props.class"
    >
        <slot />
    </TabsTrigger>
</template>

<style lang="scss">
.TabsTrigger {
    display: inline-flex;
    padding: 0.375rem 0.75rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.125rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    white-space: nowrap;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

button[data-state='active'] {
    --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background-color: var(--background);
    color: var(--foreground);
}
</style>
