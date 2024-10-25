import type { Linter } from 'eslint';

export default {
    name: '@rhyster/eslint-config/airbnb/strict',
    rules: {
        // babel inserts `'use strict';` for us
        strict: ['error', 'never'],
    },
} satisfies Linter.Config;
