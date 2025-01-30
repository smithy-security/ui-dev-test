<script lang="ts" setup>
import { ErrorMessage } from 'vee-validate';
import { toValue } from 'vue';

import { useFormField } from './useFormField';

const { name, formMessageId } = useFormField();
</script>

<template>
    <ErrorMessage
        :id="formMessageId"
        as="p"
        :name="toValue(name)"
        class="ErrorMessage"
    />
</template>

<style lang="scss" scoped>
.ErrorMessage {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
}
</style>
