import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    // your custom flat configs go here, for example:
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'vue/html-self-closing': 'off',
            'vue/no-multiple-template-root': 'off',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    caughtErrors: 'none',
                    'argsIgnorePattern': '^_',
                    'varsIgnorePattern': '^_',
                    'caughtErrorsIgnorePattern': '^_',
                },
            ],
        },
    },
);
