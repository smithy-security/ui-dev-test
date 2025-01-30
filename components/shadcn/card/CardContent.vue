<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div class="CardContent" :class="props.class">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.CardContent {
    padding: 0 1.5rem 1.5rem;
}
</style>
