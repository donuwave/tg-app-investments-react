module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    overrides: [
        {
            files: ['src/**/*.test.*'],
            env: { jest: true },
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
        {
            files: ['src/**/*.slice.ts'],
            rules: { 'no-param-reassign': 'off' },
        },
        {
            files: ['src/shared/assets/**/*'],
            rules: { 'max-len': 'off' },
        },
    ],
    extends: [
        'react-app',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/no-unstable-nested-components': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/jsx-key': 'error',
        'react/destructuring-assignment': 'off',

        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',

        'no-mixed-spaces-and-tabs': 'error',
        'no-console': 'warn',
        'no-alert': 'error',
        'no-multi-spaces': 'error',
        semi: 'error',
        'no-duplicate-imports': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'consistent-return': 'off',
        'no-param-reassign': 'off',

        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                singleQuote: true,
            },
        ],

        'max-len': [
            'error',
            {
                code: 100,
            },
        ],

        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                'newlines-between': 'always',
            },
        ],

        'comma-dangle': [
            'error',
            {
                arrays: 'only-multiline',
                objects: 'only-multiline',
                imports: 'only-multiline',
                exports: 'only-multiline',
            },
        ],

        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    '@shared/*/*',
                    '@entities/*/*',
                    '@features/*/*',
                    '@widgets/*/*',
                    '@pages/*/*',
                    '@processes/*/*',
                    '@app/*/*',
                ],
            },
        ],
    },
};
