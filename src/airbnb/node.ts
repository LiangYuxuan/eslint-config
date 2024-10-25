import type { Linter } from 'eslint';

export default {
    name: '@rhyster/eslint-config/airbnb/node',
    rules: {
        // enforce return after a callback
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/callback-return.md
        'n/callback-return': 'off',

        // require all requires be top-level
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
        'n/global-require': 'error',

        // enforces error handling in callbacks (node environment)
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
        'n/handle-callback-err': 'off',

        // disallow use of the Buffer() constructor
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-deprecated-api.md
        'n/no-deprecated-api': 'error',

        // disallow mixing regular variable and require declarations
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
        'n/no-mixed-requires': ['off', false],

        // disallow use of new operator with the require function
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
        'n/no-new-require': 'error',

        // disallow string concatenation with __dirname and __filename
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
        'n/no-path-concat': 'error',

        // disallow use of process.env
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
        'n/no-process-env': 'off',

        // disallow process.exit()
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
        'n/no-process-exit': 'off',

        // restrict usage of specified node modules
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-modules.md
        'n/no-restricted-modules': 'off',

        // disallow use of synchronous methods (off by default)
        // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
        'n/no-sync': 'off',

        // No Node.js builtin modules
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
        'import/no-nodejs-modules': 'off',
    },
} satisfies Linter.Config;
