import type { Linter } from 'eslint';

export default {
    name: '@rhyster/eslint-config/typescript',
    rules: {
        // https://typescript-eslint.io/rules/naming-convention
        '@typescript-eslint/naming-convention': 'error',
        camelcase: 'off',

        // https://typescript-eslint.io/rules/default-param-last
        '@typescript-eslint/default-param-last': 'error',
        'default-param-last': 'off',

        // https://typescript-eslint.io/rules/dot-notation
        '@typescript-eslint/dot-notation': 'error',
        'dot-notation': 'off',

        // https://typescript-eslint.io/rules/no-array-constructor
        '@typescript-eslint/no-array-constructor': 'error',
        'no-array-constructor': 'off',

        // https://typescript-eslint.io/rules/no-empty-function
        '@typescript-eslint/no-empty-function': 'error',
        'no-empty-function': 'off',

        // https://typescript-eslint.io/rules/no-implied-eval
        '@typescript-eslint/no-implied-eval': 'error',
        'no-implied-eval': 'off',
        'no-new-func': 'off',

        // https://typescript-eslint.io/rules/no-loop-func
        '@typescript-eslint/no-loop-func': 'error',
        'no-loop-func': 'off',

        // https://typescript-eslint.io/rules/no-magic-numbers
        '@typescript-eslint/no-magic-numbers': 'off',
        'no-magic-numbers': 'off',

        // https://typescript-eslint.io/rules/no-shadow
        '@typescript-eslint/no-shadow': 'error',
        'no-shadow': 'off',

        // https://typescript-eslint.io/rules/only-throw-error
        '@typescript-eslint/only-throw-error': 'error',
        'no-throw-literal': 'off',

        // https://typescript-eslint.io/rules/no-unused-expressions
        '@typescript-eslint/no-unused-expressions': 'error',
        'no-unused-expressions': 'off',

        // https://typescript-eslint.io/rules/no-unused-vars
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'off',

        // https://typescript-eslint.io/rules/no-use-before-define
        '@typescript-eslint/no-use-before-define': 'error',
        'no-use-before-define': 'off',

        // https://typescript-eslint.io/rules/no-useless-constructor
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-useless-constructor': 'off',

        // https://typescript-eslint.io/rules/prefer-promise-reject-errors
        '@typescript-eslint/prefer-promise-reject-errors': 'error',
        'prefer-promise-reject-errors': 'off',

        // https://typescript-eslint.io/rules/require-await
        '@typescript-eslint/require-await': 'off',
        'require-await': 'off',

        // https://typescript-eslint.io/rules/return-await
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        'no-return-await': 'off',

        // https://typescript-eslint.io/rules/no-dupe-class-members
        // checked by the TypeScript compiler
        'no-dupe-class-members': 'off',

        // https://typescript-eslint.io/rules/no-redeclare
        // checked by the TypeScript compiler
        'no-redeclare': 'off',

        // https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
        'import-x/named': 'off',
        'import-x/namespace': 'off',
        'import-x/default': 'off',
        'import-x/no-named-as-default-member': 'off',
        'import-x/no-unresolved': 'off',

        // https://typescript-eslint.io/rules/strict-boolean-expressions/
        '@typescript-eslint/strict-boolean-expressions': 'error',
    },
} satisfies Linter.Config;
