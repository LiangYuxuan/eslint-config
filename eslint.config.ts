import js from '@eslint/js';

import core from './src/index.ts';

import type { Linter } from 'eslint';

export default [
    js.configs.recommended,
    ...core,
    {
        rules: {
            '@typescript-eslint/naming-convention': 'off',
        },
    },
    {
        rules: {
            'import-x/no-unused-modules': [
                'error',
                {
                    ignoreExports: [
                        'eslint.config.ts',
                        'src/index.ts',
                    ],
                    missingExports: true,
                    unusedExports: true,
                },
            ],
        },
    },
] satisfies Linter.Config[];
