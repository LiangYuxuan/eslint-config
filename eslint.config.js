import js from '@eslint/js';
import core from './src/index.js';

export default [
    js.configs.recommended,
    ...core,
    {
        rules: {
            'import/no-unused-modules': [
                'error',
                {
                    ignoreExports: [
                        'eslint.config.js',
                        'src/index.js',
                        'src/node.js',
                        'src/typescript.js',
                    ],
                    missingExports: true,
                    unusedExports: true,
                },
            ],
        },
    },
];
