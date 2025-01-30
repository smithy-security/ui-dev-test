<script lang="ts" setup>
import { AvatarImage, type AvatarImageProps } from 'radix-vue';

const props = defineProps<AvatarImageProps>();
</script>

<template>
    <AvatarImage class="AvatarImage" v-bind="props" />
</template>

<style lang="scss" scoped>
.AvatarImage {
    object-fit: contain;
    width: 100%;
    height: 100%;
}
</style>
