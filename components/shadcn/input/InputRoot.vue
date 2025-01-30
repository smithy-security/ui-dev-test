<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes, FormHTMLAttributes } from 'vue';

const props = defineProps<{
    defaultValue?: string | number;
    modelValue?: string | number;
    class?: HTMLAttributes['class'];
    autocomplete?: FormHTMLAttributes['autocomplete'];
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
    <input
        v-model="modelValue"
        class="Input"
        :class="props.class"
        :autocomplete="props.autocomplete"
    />
</template>

<style lang="scss" scoped>
.Input {
    display: flex;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    border-width: 1px;
    width: 100%;
    height: 2.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
}
</style>
