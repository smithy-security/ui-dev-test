<template>
    <ConfigProvider :use-id="useIdFunction">
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </ConfigProvider>
</template>
<script lang="ts" setup>
import { ConfigProvider } from 'radix-vue';
import { makeServer } from '~/mocks/server';

const useIdFunction = () => useId();
const runtimeConfig = useRuntimeConfig();

if (runtimeConfig.public.mocking && runtimeConfig.public.mocking != 'false') {
    makeServer();
}

useHead({
    title: 'Tech test',
    meta: [
        {
            name: 'description',
            content: 'Smithy technical interview for UI developer',
        },
    ],
});
</script>
