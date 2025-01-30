<template>
    <NuxtLink class="SmithyLogo" to="/">
        <h1>Open CRE Explorer</h1>
    </NuxtLink>
</template>
<script>
import NuxtLink from '#app/components/nuxt-link';

export default defineComponent({
    components: {
        NuxtLink,
    },
});
</script>
<style lang="scss" scoped>
.SmithyLogo {
    padding-left: 1rem;
    padding-right: 1.5rem;
    font-weight: 700;
}
</style>
