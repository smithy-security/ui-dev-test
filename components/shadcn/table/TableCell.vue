<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <td class="TableCell" :class="props.class">
        <slot />
    </td>
</template>

<style lang="scss" scoped>
.TableCell {
    padding: 1rem;
    vertical-align: middle;
}
</style>
