<template>
    <div class="Content404">
        <div>
            <h1>Page not found</h1>
            <p>This page could not be found.</p>
            <NuxtLink to="/">Go to Homepage</NuxtLink>
        </div>
    </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.Content404 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    > div {
        text-align: center;
    }

    h1 {
        margin-bottom: 1rem;
        font-size: 3.75rem;
        line-height: 1;
        font-weight: 700;
    }

    p {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    a {
        text-decoration: underline;
        display: block;

        &:hover {
            text-decoration: none;
        }
    }
}
</style>
