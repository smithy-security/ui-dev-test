<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import type { HTMLAttributes, FormHTMLAttributes } from 'vue';
import { Eye, EyeOff } from 'lucide-vue-next';
import { ref } from 'vue';

const showPassword = ref(false);

function setShowPassword() {
    showPassword.value = !showPassword.value;
}

const props = defineProps<{
    defaultValue?: string | number;
    modelValue?: string | number;
    class?: HTMLAttributes['class'];
    id?: HTMLAttributes['id'];
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
    <div class="password-field">
        <input
            :id="props.id"
            v-model="modelValue"
            class="Input"
            :class="props.class"
            :autocomplete="props.autocomplete"
            :type="showPassword ? 'text' : 'password'"
        />
        <button
            type="button"
            class="visibility"
            :title="showPassword ? 'Hide password' : 'Show password'"
            @click="setShowPassword"
        >
            <Eye v-if="showPassword" :size="20" aria-hidden="true" />
            <EyeOff v-if="!showPassword" :size="20" aria-hidden="true" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
.password-field {
    position: relative;

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

    button {
        position: absolute;
        right: 0;
        top: 0;
        width: 30px !important;
        margin: 10px 0 0 0;

        &:hover {
            opacity: 0.6;
        }
    }
}
</style>
