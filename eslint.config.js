const antfu = require('@antfu/eslint-config').default;

const config = antfu({
    stylistic: {
        indent: 4,
        semi: true,
    },
    rules: {
        'eqeqeq': 'warn',
        'prefer-regex-literals': 'off',
        'func-call-spacing': ['error', 'never'],
        'prefer-spread': 'off',
        'no-console': 'off',
        'no-unused-vars': 'warn',
        'no-prototype-builtins': 'warn',
        'curly': ['error', 'all'],

        'unused-imports/no-unused-vars': 'warn',

        'ts/no-this-alias': 'off',
        'ts/no-namespace': 'off',

        'import/no-commonjs': 'off',
        'import/no-unused-modules': 'error',

        'node/handle-callback-err': 'off',
        'node/prefer-global/process': 'off',

        'style/no-mixed-operators': 'off',
        'style/brace-style': ['error', '1tbs'],

        'vue/eqeqeq': 'warn',
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1,
            },
            multiline: {
                max: 1,
            },
        }],
        'vue/no-unused-refs': 'warn',
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            registeredComponentsOnly: true,
            ignores: [],
        }],
    },
}, {
    ignores: [
        'src/vender',
    ],
});

module.exports = config;
