<script lang="ts" setup>
import { AvatarRoot } from 'radix-vue';
import type { HTMLAttributes } from 'vue';

const props = withDefaults(
    defineProps<{
        class?: HTMLAttributes['class'];
    }>(),
    {
        class: '',
    },
);
</script>

<template>
    <AvatarRoot class="Avatar" :class="props.class">
        <slot />
    </AvatarRoot>
</template>
<style lang="scss">
.Avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 400; /* font-normal */
    color: var(
        --text-foreground
    ); /* assuming text-foreground is a CSS variable */
    user-select: none;
    flex-shrink: 0;
    background-color: var(
        --bg-secondary
    ); /* assuming bg-secondary is a CSS variable */
    overflow: hidden;
    border-radius: 9999px;
    height: 40px;
    width: 40px;
    font-size: 12px;
}
</style>
