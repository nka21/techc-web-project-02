module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'eqeqeq': ['error', 'always'],
        'curly': ['error', 'all'],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'arrow-body-style': ['error', 'as-needed'],
        'prefer-const': 'error',
        'no-var': 'error',
    },
};
