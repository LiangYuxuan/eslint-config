import js from '@eslint/js';
import core from './src/index.js';

export default [
    js.configs.recommended, ...core,
];
