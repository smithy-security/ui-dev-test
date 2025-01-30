<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div class="CardFooter" :class="props.class">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.CardFooter {
    display: flex;
    padding: 1.5rem;
    padding-top: 0;
    align-items: center;
}
</style>
