<script setup lang="ts">
import {
    DropdownMenuTrigger,
    type DropdownMenuTriggerProps,
    useForwardProps,
} from 'radix-vue';

const props = defineProps<DropdownMenuTriggerProps>();

const forwardedProps = useForwardProps(props);
</script>

<template>
    <DropdownMenuTrigger class="DropdownMenuTrigger" v-bind="forwardedProps">
        <slot />
    </DropdownMenuTrigger>
</template>

<style lang="scss" scoped>
.DropdownMenuTrigger {
    outline-style: none;
}
</style>
