<script setup lang="ts">
import { DialogTitle, type DialogTitleProps, useForwardProps } from 'radix-vue';
import { type HTMLAttributes, computed } from 'vue';

const props = defineProps<
    DialogTitleProps & { class?: HTMLAttributes['class'] }
>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <DialogTitle
        v-bind="forwardedProps"
        class="DialogTitle"
        :class="props.class"
    >
        <slot />
    </DialogTitle>
</template>

<style lang="scss" scoped>
.DialogTitle {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1;
}
</style>
