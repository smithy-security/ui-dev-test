<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();
</script>

<template>
    <th class="TableHead" :class="props.class">
        <slot />
    </th>
</template>

<style lang="scss" scoped>
.TableHead {
    padding-left: 1rem;
    padding-right: 1rem;
    height: 3rem;
    font-weight: 500;
    text-align: left;
    vertical-align: middle;
    color: var(--muted-foreground);
}
</style>
