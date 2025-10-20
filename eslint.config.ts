import { core } from './src/index.ts';

const files = [
    'src/**/*.ts',
    'build.config.js',
    'eslint.config.ts',
];

export default [
    ...core.map((config) => ({
        ...config,
        files,
    })),
    {
        files,
        rules: {
            '@typescript-eslint/naming-convention': 'off',
            'import-x/no-unused-modules': [
                'error',
                {
                    ignoreExports: [
                        'src/index.ts',
                        'build.config.js',
                        'eslint.config.ts',
                    ],
                    missingExports: true,
                    unusedExports: true,
                },
            ],
        },
    },
];
