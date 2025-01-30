<script setup lang="ts">
import { TabsList, type TabsListProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    TabsListProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <TabsList v-bind="delegatedProps" class="TabsList" :class="props.class">
        <slot />
    </TabsList>
</template>

<style lang="scss" scoped>
.TabsList {
    display: inline-flex;
    padding: 0.25rem;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.375rem;
    height: 2.5rem;
    background-color: var(--muted);
    color: var(--muted-foreground);
}
</style>
