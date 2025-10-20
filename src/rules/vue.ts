import vuePlugin from 'eslint-plugin-vue';
import ts from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

import general from './general.ts';

import type { Linter } from 'eslint';

type Config = Linter.Config;
type Plugin = NonNullable<Config['plugins']>[string];
type Parser = NonNullable<Config['languageOptions']>['parser'];

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
    languageOptions: {
        parser: vueParser,
        parserOptions: {
            projectService: true,
            parser: ts.parser as Parser,
            extraFileExtensions: ['.vue'],
        },
    },
} as const satisfies Config;

const vueConfigs: Config = {
    name: '@rhyster/eslint-config/vue-configs',
    rules: {
        'vue/html-indent': ['error', 4],
        'import-x/no-unused-modules': 'off',
    },
} as const satisfies Config;

export default [
    generalVue,
    ...vuePlugin.configs['flat/recommended'] as unknown as Config[],
    setupVue,
    vueConfigs,
];
