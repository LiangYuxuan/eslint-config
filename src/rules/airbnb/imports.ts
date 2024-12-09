import type { Linter } from 'eslint';

export default {
    name: '@rhyster/eslint-config/airbnb/imports',
    rules: {
        // Static analysis:

        // ensure imports point to files/modules that can be resolved
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
        'import-x/no-unresolved': [
            'error', { commonjs: true, caseSensitive: true },
        ],

        // ensure named imports coupled with named exports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md
        'import-x/named': 'error',

        // ensure default import coupled with default export
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md
        'import-x/default': 'off',

        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md
        'import-x/namespace': 'off',

        // Helpful warnings:

        // disallow invalid exports, e.g. multiple defaults
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md
        'import-x/export': 'error',

        // do not allow a default import name to match a named export
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
        'import-x/no-named-as-default': 'error',

        // warn on accessing default export property names that are also named exports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md
        'import-x/no-named-as-default-member': 'error',

        // disallow use of jsdoc-marked-deprecated imports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md
        'import-x/no-deprecated': 'off',

        // Forbid the use of extraneous packages
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import-x/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'test/**', // tape, common npm pattern
                    'tests/**', // also common npm pattern
                    'spec/**', // mocha, rspec-like pattern
                    '**/__tests__/**', // jest pattern
                    '**/__mocks__/**', // jest pattern
                    'test.{js,ts}', // repos with a single test file
                    'test-*.{js,ts}', // repos with multiple top-level test files
                    '**/*{.,_}{test,spec}.{js,ts}', // tests where the extension or filename suffix denotes that it is a test
                    '**/jest.config.js', // jest config
                    '**/jest.setup.js', // jest setup
                    '**/vue.config.js', // vue-cli config
                    '**/webpack.config.js', // webpack config
                    '**/webpack.config.*.js', // webpack config
                    '**/rollup.config.js', // rollup config
                    '**/rollup.config.*.js', // rollup config
                    '**/gulpfile.js', // gulp config
                    '**/gulpfile.*.js', // gulp config
                    '**/Gruntfile{,.js}', // grunt config
                    '**/protractor.conf.js', // protractor config
                    '**/protractor.conf.*.js', // protractor config
                    '**/karma.conf.js', // karma config
                    '**/.eslintrc.js', // eslint config
                ],
                optionalDependencies: false,
            },
        ],

        // Forbid mutable exports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
        'import-x/no-mutable-exports': 'error',

        // Module systems:

        // disallow require()
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md
        'import-x/no-commonjs': 'error',

        // disallow AMD require/define
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md
        'import-x/no-amd': 'error',

        // No Node.js builtin modules
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md
        'import-x/no-nodejs-modules': 'error',

        // Style guide:

        // disallow non-import statements appearing before import statements
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
        'import-x/first': 'error',

        // disallow duplicate imports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
        'import-x/no-duplicates': 'error',

        // disallow namespace imports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md
        'import-x/no-namespace': 'error',

        // Ensure consistent use of file extension within the import path
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md
        'import-x/extensions': [
            'error',
            'always',
            {
                ignorePackages: true,
                checkTypeImports: true,
            },
        ],

        // ensure absolute imports are above relative imports and
        // that unassigned imports are ignored
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
        'import-x/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    orderImportKind: 'asc',
                },
            },
        ],

        // Require a newline after the last import-x/require in a group
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
        'import-x/newline-after-import': 'error',

        // Require modules with a single export to use a default export
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md
        'import-x/prefer-default-export': 'error',

        // Restrict which files can be imported in a given folder
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md
        'import-x/no-restricted-paths': 'off',

        // Forbid modules to have too many dependencies
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md
        'import-x/max-dependencies': ['off', { max: 10 }],

        // Forbid import of modules using absolute paths
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
        'import-x/no-absolute-path': 'error',

        // Forbid require() calls with expressions
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md
        'import-x/no-dynamic-require': 'error',

        // prevent importing the submodules of other modules
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md
        'import-x/no-internal-modules': [
            'off',
            {
                allow: [],
            },
        ],

        // Warn if a module could be mistakenly parsed as a script by a consumer
        // leveraging Unambiguous JavaScript Grammar
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md
        // this should not be enabled until this proposal has at least been *presented* to TC39.
        // At the moment, it's not a thing.
        'import-x/unambiguous': 'off',

        // Forbid Webpack loader syntax in imports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md
        'import-x/no-webpack-loader-syntax': 'error',

        // Prevent unassigned imports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md
        // importing for side effects is perfectly acceptable, if you need side effects.
        'import-x/no-unassigned-import': 'off',

        // Prevent importing the default as if it were named
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md
        'import-x/no-named-default': 'error',

        // Reports if a module's default export is unnamed
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md
        'import-x/no-anonymous-default-export': [
            'off',
            {
                allowArray: false,
                allowArrowFunction: false,
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowLiteral: false,
                allowObject: false,
            },
        ],

        // This rule enforces that all exports are declared at the bottom of the file.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
        'import-x/exports-last': 'error',

        // Reports when named exports are not grouped together in a single export declaration
        // or when multiple assignments to CommonJS module.exports or exports object are present
        // in a single file.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md
        'import-x/group-exports': 'off',

        // forbid default exports. this is a terrible rule, do not use it.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md
        'import-x/no-default-export': 'off',

        // Prohibit named exports. this is a terrible rule, do not use it.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md
        'import-x/no-named-export': 'off',

        // Forbid a module from importing itself
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
        'import-x/no-self-import': 'error',

        // Forbid cyclical dependencies between modules
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
        'import-x/no-cycle': ['error', { maxDepth: '∞' }],

        // Ensures that there are no useless path segments
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
        'import-x/no-useless-path-segments': ['error', { commonjs: true }],

        // dynamic imports require a leading comment with a webpackChunkName
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md
        'import-x/dynamic-import-chunkname': [
            'off',
            {
                importFunctions: [],
                webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
            },
        ],

        // Use this rule to prevent imports to folders in relative parent paths.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md
        'import-x/no-relative-parent-imports': 'off',

        // Reports modules without any exports, or with unused exports
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
        'import-x/no-unused-modules': [
            'error',
            {
                ignoreExports: [],
                missingExports: true,
                unusedExports: true,
            },
        ],

        // Reports the use of import declarations with CommonJS exports
        // in any module except for the main module.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
        'import-x/no-import-module-exports': [
            'error',
            {
                exceptions: [],
            },
        ],

        // Use this rule to prevent importing packages through relative paths.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
        'import-x/no-relative-packages': 'error',

        // enforce a consistent style for type specifiers (inline or top-level)
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],

        // Reports the use of empty named import blocks.
        // https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
        'import-x/no-empty-named-blocks': 'error',
    },
} satisfies Linter.Config;