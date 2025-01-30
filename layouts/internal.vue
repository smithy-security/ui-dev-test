<template>
    <div :class="[pageClass]" class="layout-container">
        <MainHeader />
        <div class="full-width-container">
            <div class="content-wrapper">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import MainHeader from '~/components/header/MainHeader.vue';

const route = useRoute();

// Get the route name (if available) and format it for the class
const pageClass = computed(() => {
    return route.name
        ? `page-${route.name.toString().replace(/\./g, '-')}`
        : '';
});
</script>
<style lang="scss" scoped>
.layout-container {
    display: none;
    flex-direction: column;

    @media (min-width: 768px) {
        display: flex;
    }

    .full-width-container {
        padding: 2rem;
        padding-top: 1.5rem;
        flex: 1 1 0;
        width: 100%;
    }

    .content-wrapper {
        max-width: 80rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        --tw-space-y-reverse: 0;
        gap: calc(1.5rem * (1 - var(--tw-space-y-reverse)));
    }
}
</style>
