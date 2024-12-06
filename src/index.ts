import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importx from 'eslint-plugin-import-x';
import nodePlugin from 'eslint-plugin-n';
import vuePlugin from 'eslint-plugin-vue';
import globals from 'globals';
import ts from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

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
        '@typescript-eslint': ts.plugin as Plugin,
        '@stylistic': stylistic as Plugin,
        'import-x': importx as unknown as Plugin,
    },
    languageOptions: {
        parser: ts.parser as Parser,
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

const browserRules = {
    name: '@rhyster/eslint-config/airbnb/browser',
    languageOptions: {
        globals: globals.browser,
    },
} as const satisfies Config;

const generalVue = {
    ...general,
    name: '@rhyster/eslint-config/airbnb/general-vue',
    plugins: {
        ...general.plugins,
        vue: vuePlugin as Plugin,
    },
    settings: {
        ...general.settings,
        'import-x/parsers': {
            ...general.settings['import-x/parsers'],
            'vue-eslint-parser': [
                '.vue',
            ],
        },
        'import-x/resolver': {
            node: {
                extensions: [
                    ...general.settings['import-x/resolver'].node.extensions,
                    '.vue',
                ],
            },
        },
        'import-x/extensions': [
            ...general.settings['import-x/extensions'],
            '.vue',
        ],
    },
} as const satisfies Config;

const setupVue: Config = {
    name: '@rhyster/eslint-config/setup-vue',
    files: ['**/*.vue'],
    languageOptions: {
        parser: vueParser,
        parserOptions: {
            projectService: true,
            parser: ts.parser,
            extraFileExtensions: ['.vue'],
        },
    },
} as const satisfies Config;

export const core = [
    js.configs.recommended,
    {
        name: '@rhyster/eslint-config/files-ts',
        files: ['**/*.ts'],
    },
    general,
    ...ts.configs.strictTypeChecked as unknown as Config[],
    ...ts.configs.stylisticTypeChecked as unknown as Config[],
    bestPractices,
    errors,
    style,
    variables,
    es6,
    imports,
    strict,
    typescript,
] as const satisfies Config[];

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
    browserRules,
] as const satisfies Config[];

export const vue = [
    js.configs.recommended,
    {
        name: '@rhyster/eslint-config/files-ts',
        files: ['**/*.ts'],
    },
    {
        name: '@rhyster/eslint-config/files-vue',
        files: ['**/*.vue'],
    },
    generalVue,
    ...ts.configs.strictTypeChecked.map((config) => {
        if (config.files?.includes('**/*.ts') === true) {
            return {
                ...config,
                files: [...config.files, '**/*.vue'],
            };
        }

        return config;
    }) as unknown as Config[],
    ...ts.configs.stylisticTypeChecked.map((config) => {
        if (config.files?.includes('**/*.ts') === true) {
            return {
                ...config,
                files: [...config.files, '**/*.vue'],
            };
        }

        return config;
    }) as unknown as Config[],
    bestPractices,
    errors,
    style,
    variables,
    es6,
    imports,
    strict,
    typescript,
    browserRules,
    ...vuePlugin.configs['flat/recommended'] as unknown as Config[],
    setupVue,
] as const satisfies Config[];
