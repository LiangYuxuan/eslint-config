import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

import node from './airbnb/node.js';

/** @type {import('eslint').Linter.Config} */
export default {
    languageOptions: {
        globals: globals.node,
    },
    plugins: {
        n: nodePlugin,
    },
    ...node,
};
