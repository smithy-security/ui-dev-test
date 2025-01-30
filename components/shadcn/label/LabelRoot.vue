<script setup lang="ts">
import { Label, type LabelProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});
</script>

<template>
    <Label v-bind="delegatedProps" class="Label" :class="props.class">
        <slot />
    </Label>
</template>

<style lang="scss" scoped>
.Label {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
    color: var(--muted-foreground);
}
</style>
