<script lang="ts" setup>
import { Search } from 'lucide-vue-next';
import {
    ComboboxInput,
    type ComboboxInputProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

defineOptions({
    inheritAttrs: false,
});

const props = defineProps<
    ComboboxInputProps & {
        class?: HTMLAttributes['class'];
    }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <div class="CommandInput" cmdk-input-wrapper>
        <Search class="Search" />
        <ComboboxInput
            class="ComboboxInput"
            :class="props.class"
            aria-modal="true"
            v-bind="{ ...forwardedProps, ...$attrs }"
            :auto-focus="true"
        />
    </div>
</template>

<style lang="scss" scoped>
.CommandInput {
    display: flex;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    align-items: center;
    border-bottom-width: 1px;

    .Search {
        margin-right: 0.5rem;
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        opacity: 0.5;
    }
}

.ComboboxInput {
    display: flex;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 0.375rem;
    outline-style: none;
    width: 100%;
    height: 2.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background-color: transparent;
}
</style>
