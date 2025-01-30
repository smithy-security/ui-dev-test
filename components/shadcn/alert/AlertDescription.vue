<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <div class="AlertDescription" :class="props.class">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.AlertDescription {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
</style>
