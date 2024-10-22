import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

import node from './airbnb/node.js';

// eslint-disable-next-line import/no-unused-modules
export default {
    languageOptions: {
        globals: globals.node,
    },
    plugins: {
        n: nodePlugin,
    },
    ...node,
};
