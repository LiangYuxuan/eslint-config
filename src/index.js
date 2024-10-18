import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

import bestPractices from './airbnb/best-practices.js';
import errors from './airbnb/errors.js';
import style from './airbnb/style.js';
import variables from './airbnb/variables.js';
import es6 from './airbnb/es6.js';
// import imports from './airbnb/imports.js';
import strict from './airbnb/strict.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            globals: globals.es6,
        },
        plugins: {
            '@stylistic': stylistic,
            import: importPlugin,
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: [
                        '.mjs',
                        '.js',
                        '.json',
                    ],
                },
            },
            'import/extensions': [
                '.js',
                '.mjs',
                '.jsx',
            ],
            'import/core-modules': [],
            'import/ignore': [
                'node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$',
            ],
        },
    },
    bestPractices,
    errors,
    style,
    variables,
    es6,
    // imports,
    strict,
];
