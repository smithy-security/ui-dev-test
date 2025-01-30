<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';

import { useFormField } from './useFormField';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();

const { formDescriptionId } = useFormField();
</script>

<template>
    <p :id="formDescriptionId" class="FormDescription" :class="props.class">
        <slot />
    </p>
</template>

<style lang="scss" scoped>
.FormDescription {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--muted-foreground);
    margin-bottom: 0;
    margin-top: 0.5rem;
}
</style>
