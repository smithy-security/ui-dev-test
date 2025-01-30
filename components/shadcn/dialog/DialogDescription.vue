<script setup lang="ts">
import {
    DialogDescription,
    type DialogDescriptionProps,
    useForwardProps,
} from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DialogDescriptionProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <DialogDescription
        v-bind="forwardedProps"
        class="DialogDescription"
        :class="props.class"
    >
        <slot />
    </DialogDescription>
</template>

<style lang="scss" scoped>
.DialogDescription {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
</style>
