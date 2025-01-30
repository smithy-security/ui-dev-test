<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <tbody class="TableBody" :class="props.class">
        <slot />
    </tbody>
</template>

<style lang="scss" scoped>
.TableBody {
    tr:last-child {
        border: none;
    }
}
</style>
