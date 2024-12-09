import js from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';
import ts from 'typescript-eslint';

import bestPractices from './rules/airbnb/best-practices.ts';
import errors from './rules/airbnb/errors.ts';
import es6 from './rules/airbnb/es6.ts';
import imports from './rules/airbnb/imports.ts';
import nodeRules from './rules/airbnb/node.ts';
import strict from './rules/airbnb/strict.ts';
import style from './rules/airbnb/style.ts';
import variables from './rules/airbnb/variables.ts';
import browserRules from './rules/browser.ts';
import general from './rules/general.ts';
import typescript from './rules/typescript.ts';
import vueRules from './rules/vue.ts';

import type { Linter } from 'eslint';

type Config = Linter.Config;

const coreConfigs = [
    js.configs.recommended,
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

export const core = coreConfigs.map((config) => ({
    ...config,
    files: ['src/**/*.ts'],
})) satisfies Config[];

export const node = [
    ...core,
    {
        name: '@rhyster/eslint-config/setup-node',
        files: ['src/**/*.ts'],
        languageOptions: {
            globals: globals.node,
        },
        plugins: {
            n: nodePlugin,
        },
    },
    {
        ...nodeRules,
        files: ['src/**/*.ts'],
    },
] as const satisfies Config[];

export const browser = [
    ...core,
    {
        ...browserRules,
        files: ['src/**/*.ts'],
    },
] as const satisfies Config[];

export const vue = [
    ...browser.map((config) => ({
        ...config,
        files: ['src/**/*.ts', 'src/**/*.vue'],
    })),
    ...vueRules.map((config) => ({
        ...config,
        files: ['src/**/*.vue'],
    })),
] as const satisfies Config[];
