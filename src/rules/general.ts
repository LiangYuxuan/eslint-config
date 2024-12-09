import stylistic from '@stylistic/eslint-plugin';
import importx from 'eslint-plugin-import-x';
import ts from 'typescript-eslint';

import type { Linter } from 'eslint';

type Config = Linter.Config;
type Plugin = NonNullable<Config['plugins']>[string];
type Parser = NonNullable<Config['languageOptions']>['parser'];

export default {
    name: '@rhyster/eslint-config/general',
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
