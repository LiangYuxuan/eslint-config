import globals from 'globals';

import type { Linter } from 'eslint';

export default {
    name: '@rhyster/eslint-config/airbnb/browser',
    languageOptions: {
        globals: globals.browser,
    },
} as const satisfies Linter.Config;
