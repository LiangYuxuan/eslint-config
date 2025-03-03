import type { Linter } from 'eslint';

export default {
    name: '@rhyster/eslint-config/airbnb/es6',
    rules: {
        // enforces no braces where they can be omitted
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': [
            'error',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            },
        ],

        // require parens in arrow function arguments
        // https://eslint.style/rules/default/arrow-parens
        '@stylistic/arrow-parens': ['error', 'always'],

        // require space before/after arrow function's arrow
        // https://eslint.style/rules/default/arrow-spacing
        '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

        // verify super() callings in constructors
        // https://eslint.org/docs/rules/constructor-super
        'constructor-super': 'error',

        // enforce the spacing around the * in generator functions
        // https://eslint.style/rules/default/generator-star-spacing
        '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],

        // disallow modifying variables of class declarations
        // https://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // disallow arrow functions where they could be confused with comparisons
        // https://eslint.style/rules/default/no-confusing-arrow
        '@stylistic/no-confusing-arrow': [
            'error',
            {
                allowParens: true,
            },
        ],

        // disallow modifying variables that are declared using const
        // https://eslint.org/docs/rules/no-const-assign
        'no-const-assign': 'error',

        // disallow duplicate class members
        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // disallow importing from the same path more than once
        // https://eslint.org/docs/rules/no-duplicate-imports
        // replaced by https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md
        'no-duplicate-imports': 'off',

        // Disallow specified names in exports
        // https://eslint.org/docs/rules/no-restricted-exports
        'no-restricted-exports': [
            'error',
            {
                restrictedNamedExports: [
                    'default', // use `export default` to provide a default export
                    'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
                ],
            },
        ],

        // disallow specific imports
        // https://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': [
            'off',
            {
                paths: [],
                patterns: [],
            },
        ],

        // disallow to use this/super before super() calling in constructors.
        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',

        // disallow useless computed property keys
        // https://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // disallow unnecessary constructor
        // https://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],

        // require let or const instead of var
        // https://eslint.org/docs/rules/no-var
        'no-var': 'error',

        // require method and property shorthand syntax for object literals
        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],

        // suggest using arrow functions as callbacks
        // https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],

        // suggest using of const declaration for variables that are never modified after declared
        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],

        // Prefer destructuring from arrays and objects
        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: true,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],

        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 'error',

        // use rest parameters instead of arguments
        // https://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 'error',

        // suggest using the spread syntax instead of .apply()
        // https://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 'error',

        // suggest using template literals instead of string concatenation
        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': 'error',

        // disallow generator functions that do not have yield
        // https://eslint.org/docs/rules/require-yield
        'require-yield': 'error',

        // enforce spacing between object rest-spread
        // https://eslint.style/rules/default/rest-spread-spacing
        '@stylistic/rest-spread-spacing': ['error', 'never'],

        // import sorting
        // https://eslint.org/docs/rules/sort-imports
        'sort-imports': [
            'off',
            {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: [
                    'none',
                    'all',
                    'multiple',
                    'single',
                ],
            },
        ],

        // require a Symbol description
        // https://eslint.org/docs/rules/symbol-description
        'symbol-description': 'error',

        // enforce usage of spacing in template strings
        // https://eslint.style/rules/default/template-curly-spacing
        '@stylistic/template-curly-spacing': 'error',

        // enforce spacing around the * in yield* expressions
        // https://eslint.style/rules/default/yield-star-spacing
        '@stylistic/yield-star-spacing': ['error', 'after'],
    },
} satisfies Linter.Config;
