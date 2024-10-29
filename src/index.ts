import stylistic from '@stylistic/eslint-plugin';
import importx from 'eslint-plugin-import-x';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import bestPractices from './airbnb/best-practices.ts';
import errors from './airbnb/errors.ts';
import es6 from './airbnb/es6.ts';
import imports from './airbnb/imports.ts';
import nodeRules from './airbnb/node.ts';
import strict from './airbnb/strict.ts';
import style from './airbnb/style.ts';
import variables from './airbnb/variables.ts';
import typescript from './typescript.ts';

import type { Linter } from 'eslint';

type Config = Linter.Config;
type Plugin = NonNullable<Config['plugins']>[string];
type Parser = NonNullable<Config['languageOptions']>['parser'];

const general = {
    name: '@rhyster/eslint-config/airbnb/general',
    plugins: {
        '@typescript-eslint': tseslint.plugin as Plugin,
        '@stylistic': stylistic as Plugin,
        'import-x': importx as unknown as Plugin,
    },
    languageOptions: {
        parser: tseslint.parser as Parser,
        parserOptions: {
            projectService: true,
        },
    },
    settings: {
        'import-x/parsers': {
            espree: [
                '.js',
                '.mjs',
            ],
            '@typescript-eslint/parser': [
                '.ts',
                '.d.ts',
            ],
        },
        'import-x/resolver': {
            node: {
                extensions: [
                    '.mjs',
                    '.js',
                    '.json',
                    '.ts',
                    '.d.ts',
                ],
            },
        },
        'import-x/extensions': [
            '.js',
            '.mjs',
            '.ts',
            '.d.ts',
        ],
        'import-x/core-modules': [],
        'import-x/ignore': [
            'node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
        'import-x/external-module-folders': [
            'node_modules',
            'node_modules/@types',
        ],
    },
} as const satisfies Config;

const core = [
    {
        name: '@rhyster/eslint-config/files-ts',
        files: ['**/*.ts'],
    },
    general,
    bestPractices,
    errors,
    style,
    variables,
    es6,
    imports,
    strict,
    typescript,
] as const satisfies Config[];
export default core;

export const node = [
    ...core,
    {
        languageOptions: {
            globals: globals.node,
        },
        plugins: {
            n: nodePlugin,
        },
        ...nodeRules,
    },
] as const satisfies Config[];

export const browser = [
    ...core,
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
] as const satisfies Config[];
