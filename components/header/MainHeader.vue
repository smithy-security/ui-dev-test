<template>
    <header>
        <Logo />
    </header>
</template>
<script>
import { defineComponent } from 'vue';
import Logo from '~/components/header/Logo.vue';

export default defineComponent({
    components: {
        Logo,
    },
});
</script>
<style lang="scss" scoped>
header {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid var(--border);
}

.MainNav {
    margin: 0 1.5rem;
}

:deep(.UserNavAvatar) {
    margin-left: auto;
}
</style>
