import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

import bestPractices from './airbnb/best-practices.js';
import errors from './airbnb/errors.js';
import style from './airbnb/style.js';
import variables from './airbnb/variables.js';
import es6 from './airbnb/es6.js';
import imports from './airbnb/imports.js';
import strict from './airbnb/strict.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        name: '@rhyster/eslint-config/airbnb/general',
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
    imports,
    strict,
];