export default defineNuxtConfig({
    compatibilityDate: '2025-01-29',
    devtools: { enabled: false },
    modules: ['@pinia/nuxt', '@nuxt/eslint'],
    ssr: false,
    css: [
        '~/assets/css/reset.scss',
        '~/assets/css/variables.scss',
        '~/assets/css/global-utilities.scss',
        '~/assets/css/typography.scss',
    ],
    alias: {
        '@/components': './components',
    },
    app: {
        head: {
            htmlAttrs: { lang: 'en' },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
        },
    },
    nitro: {
        devProxy: {
            '/api': {
                target: process.env.SMITHY_API_URL + '/api',
                changeOrigin: true,
            },
        },
    },
});
