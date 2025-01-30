<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div class="CardHeader" :class="props.class">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.CardHeader {
    display: flex;
    padding: 1.5rem;
    align-items: flex-start;
    flex-direction: column;
}
</style>
