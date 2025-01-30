import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        setupNodeEvents() {
            // implement node event listeners here
        },
        screenshotOnRunFailure: false,
        baseUrl: 'http://localhost:5002',
        defaultCommandTimeout: 30000,
        pageLoadTimeout: 30000,
        video: false,
        viewportWidth: 1920,
        viewportHeight: 1080,
        watchForFileChanges: false,
        numTestsKeptInMemory: 0,
    },
    env: {
        preserveCookies: true,
    },
    component: {
        devServer: {
            framework: 'vue',
            bundler: 'vite',
        },
    },
});
