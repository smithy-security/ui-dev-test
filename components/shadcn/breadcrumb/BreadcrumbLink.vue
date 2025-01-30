<script lang="ts" setup>
import { Primitive, type PrimitiveProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

const props = withDefaults(
    defineProps<PrimitiveProps & { class?: HTMLAttributes['class'] }>(),
    {
        as: 'a',
        class: '',
    },
);
</script>

<template>
    <Primitive
        :as="as"
        :as-child="asChild"
        class="BreadcrumbLink"
        :class="props.class"
    >
        <slot />
    </Primitive>
</template>

<style lang="scss" scoped>
.BreadcrumbLink {
    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>
