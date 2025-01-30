<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
    defaultValue?: string | number;
    modelValue?: string | number;
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
});
</script>

<template>
    <textarea v-model="modelValue" class="Textarea" :class="props.class" />
</template>

<style lang="scss" scoped>
.Textarea {
    display: flex;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    border-width: 1px;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
</style>
