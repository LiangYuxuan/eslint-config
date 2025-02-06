import type { Linter } from 'eslint';

export default {
    name: '@rhyster/eslint-config/airbnb/style',
    rules: {
        // enforce line breaks after opening and before closing array brackets
        // https://eslint.style/rules/default/array-bracket-newline
        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        // object option alternative: { multiline: true, minItems: 3 }

        // enforce line breaks between array elements
        // https://eslint.style/rules/default/array-element-newline
        '@stylistic/array-element-newline': ['error', { consistent: true, multiline: true, minItems: 3 }],

        // enforce spacing inside array brackets
        // https://eslint.style/rules/default/array-bracket-spacing
        '@stylistic/array-bracket-spacing': ['error', 'never'],

        // enforce spacing inside single-line blocks
        // https://eslint.style/rules/default/block-spacing
        '@stylistic/block-spacing': ['error', 'always'],

        // enforce one true brace style
        // https://eslint.style/rules/default/brace-style
        '@stylistic/brace-style': [
            'error',
            '1tbs',
            { allowSingleLine: true },
        ],

        // require camel case names
        // https://eslint.org/docs/rules/camelcase
        camelcase: 'error',

        // enforce or disallow capitalization of the first letter of a comment
        // https://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': [
            'off',
            'never',
            {
                line: {
                    ignorePattern: '.*',
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true,
                },
                block: {
                    ignorePattern: '.*',
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true,
                },
            },
        ],

        // require trailing commas in multiline object literals
        // https://eslint.style/rules/default/comma-dangle
        '@stylistic/comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
                enums: 'always-multiline',
                generics: 'always-multiline',
                tuples: 'always-multiline',
            },
        ],

        // enforce spacing before and after comma
        // https://eslint.style/rules/default/comma-spacing
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],

        // enforce one true comma style
        // https://eslint.style/rules/default/comma-style
        '@stylistic/comma-style': [
            'error',
            'last',
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                    ExportAllDeclaration: false,
                    ExportNamedDeclaration: false,
                    ImportExpression: false,
                    SequenceExpression: false,
                    ClassDeclaration: false,
                    ClassExpression: false,
                    TSDeclareFunction: false,
                    TSFunctionType: false,
                    TSConstructorType: false,
                    TSEmptyBodyFunctionExpression: false,
                    TSMethodSignature: false,
                    TSCallSignatureDeclaration: false,
                    TSConstructSignatureDeclaration: false,
                    TSEnumBody: false,
                    TSTypeLiteral: false,
                    TSInterfaceBody: false,
                    TSIndexSignature: false,
                    TSInterfaceDeclaration: false,
                    TSTupleType: false,
                    TSTypeParameterDeclaration: false,
                    TSTypeParameterInstantiation: false,
                },
            },
        ],

        // disallow padding inside computed properties
        // https://eslint.style/rules/default/computed-property-spacing
        '@stylistic/computed-property-spacing': ['error', 'never'],

        // enforces consistent naming when capturing the current execution context
        // https://eslint.org/docs/rules/consistent-this
        'consistent-this': 'off',

        // enforce newline at the end of file, with no multiple empty lines
        // https://eslint.style/rules/default/eol-last
        '@stylistic/eol-last': ['error', 'always'],

        // https://eslint.style/rules/default/function-call-argument-newline
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],

        // enforce spacing between functions and their invocations
        // https://eslint.style/rules/default/func-call-spacing
        '@stylistic/func-call-spacing': ['error', 'never'],

        // requires function names to match the name of the variable or property to which they are
        // assigned
        // https://eslint.org/docs/rules/func-name-matching
        'func-name-matching': [
            'off',
            'always',
            {
                includeCommonJSModuleExports: false,
                considerPropertyDescriptor: true,
            },
        ],

        // require function expressions to have a name
        // https://eslint.org/docs/rules/func-names
        'func-names': 'error',

        // enforces use of function declarations or expressions
        // https://eslint.org/docs/rules/func-style
        'func-style': ['error', 'expression'],

        // require line breaks inside function parentheses
        // if there are line breaks between parameters
        // https://eslint.style/rules/default/function-paren-newline
        '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

        // disallow specified identifiers
        // https://eslint.org/docs/rules/id-denylist
        'id-denylist': 'off',

        // this option enforces minimum and maximum identifier lengths
        // (variable names, property names etc.)
        // https://eslint.org/docs/rules/id-length
        'id-length': 'off',

        // require identifiers to match the provided regular expression
        // https://eslint.org/docs/rules/id-match
        'id-match': 'off',

        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.style/rules/default/implicit-arrow-linebreak
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

        // this option sets a specific tab width for your code
        // https://eslint.style/rules/default/indent
        '@stylistic/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
            },
        ],
        '@stylistic/indent-binary-ops': ['error', 4],

        // specify whether double or single quotes should be used in JSX attributes
        // https://eslint.style/rules/default/jsx-quotes
        '@stylistic/jsx-quotes': ['off', 'prefer-double'],

        // enforces spacing between keys and values in object literal properties
        // https://eslint.style/rules/default/key-spacing
        '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // require a space before & after certain keywords
        // https://eslint.style/rules/default/keyword-spacing
        '@stylistic/keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
                overrides: {
                    return: { after: true },
                    throw: { after: true },
                    case: { after: true },
                },
            },
        ],

        // enforce position of line comments
        // https://eslint.style/rules/default/line-comment-position
        '@stylistic/line-comment-position': [
            'off',
            {
                position: 'above',
                ignorePattern: '',
                applyDefaultIgnorePatterns: true,
            },
        ],

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // https://eslint.style/rules/default/linebreak-style
        '@stylistic/linebreak-style': ['error', 'unix'],

        // require or disallow an empty line between class members
        // https://eslint.style/rules/default/lines-between-class-members
        '@stylistic/lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: false },
        ],

        // enforces empty lines around comments
        // https://eslint.style/rules/default/lines-around-comment
        '@stylistic/lines-around-comment': 'off',

        // Require or disallow logical assignment logical operator shorthand
        // https://eslint.org/docs/rules/logical-assignment-operators
        'logical-assignment-operators': [
            'error',
            'always',
            {
                enforceForIfStatements: true,
            },
        ],

        // specify the maximum depth that blocks can be nested
        // https://eslint.org/docs/rules/max-depth
        'max-depth': ['off', 4],

        // specify the maximum length of a line in your program
        // https://eslint.style/rules/default/max-len
        '@stylistic/max-len': [
            'error',
            100,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],

        // specify the max number of lines in a file
        // https://eslint.org/docs/rules/max-lines
        'max-lines': [
            'off',
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true,
            },
        ],

        // enforce a maximum function length
        // https://eslint.org/docs/rules/max-lines-per-function
        'max-lines-per-function': [
            'off',
            {
                max: 50,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true,
            },
        ],

        // specify the maximum depth callbacks can be nested
        // https://eslint.org/docs/rules/max-nested-callbacks
        'max-nested-callbacks': 'off',

        // limits the number of parameters that can be used in the function declaration.
        // https://eslint.org/docs/rules/max-params
        'max-params': ['off', 3],

        // specify the maximum number of statement allowed in a function
        // https://eslint.org/docs/rules/max-statements
        'max-statements': ['off', 10],

        // restrict the number of statements per line
        // https://eslint.style/rules/default/max-statements-per-line
        '@stylistic/max-statements-per-line': ['off', { max: 1 }],

        // enforce a particular style for multiline comments
        // https://eslint.style/rules/default/multiline-comment-style
        '@stylistic/multiline-comment-style': ['off', 'starred-block'],

        // require multiline ternary
        // https://eslint.style/rules/default/multiline-ternary
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],

        // require a capital letter for constructors
        // https://eslint.org/docs/rules/new-cap
        'new-cap': [
            'error',
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: [
                    'Immutable.Map',
                    'Immutable.Set',
                    'Immutable.List',
                ],
            },
        ],

        // disallow the omission of parentheses when invoking a constructor with no arguments
        // https://eslint.style/rules/default/new-parens
        '@stylistic/new-parens': 'error',

        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // https://eslint.style/rules/default/newline-per-chained-call
        '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        // disallow use of the Array constructor
        // https://eslint.org/docs/rules/no-array-constructor
        'no-array-constructor': 'error',

        // disallow use of bitwise operators
        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 'error',

        // disallow use of the continue statement
        // https://eslint.org/docs/rules/no-continue
        'no-continue': 'error',

        // disallow comments inline after code
        // https://eslint.org/docs/rules/no-inline-comments
        'no-inline-comments': 'off',

        // disallow if as the only statement in an else block
        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 'error',

        // disallow un-paren'd mixes of different operators
        // httphttps://eslint.style/rules/default/no-mixed-operators
        '@stylistic/no-mixed-operators': [
            'error',
            {
                // the list of arithmetic groups disallows mixing `%` and `**`
                // with other arithmetic operators.
                groups: [
                    ['%', '**'],
                    ['%', '+'],
                    ['%', '-'],
                    ['%', '*'],
                    ['%', '/'],
                    ['/', '*'],
                    [
                        '&',
                        '|',
                        '<<',
                        '>>',
                        '>>>',
                    ],
                    [
                        '==',
                        '!=',
                        '===',
                        '!==',
                    ],
                    ['&&', '||'],
                ],
                allowSamePrecedence: false,
            },
        ],

        // disallow mixed spaces and tabs for indentation
        // https://eslint.style/rules/default/no-mixed-spaces-and-tabs
        '@stylistic/no-mixed-spaces-and-tabs': 'error',

        // disallow use of chained assignment expressions
        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': ['error'],

        // disallow multiple empty lines
        // only one newline at the end
        // and no new lines at the beginning
        // https://eslint.style/rules/default/no-multiple-empty-lines
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

        // disallow negated conditions
        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 'off',

        // disallow nested ternary expressions
        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'error',

        // disallow calls to the Object constructor without an argument
        // https://eslint.org/docs/rules/no-object-constructor
        'no-object-constructor': 'error',

        // disallow use of unary operators, ++ and --
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'error',

        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            // {
            //     selector: 'ForOfStatement',
            //     message:
            //         'iterators/generators require regenerator-runtime,
            //            which is too heavyweight for this guide to allow them.
            //            Separately, loops should be avoided in favor of array iterations.',
            // },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // disallow tab characters entirely
        // https://eslint.style/rules/default/no-tabs
        '@stylistic/no-tabs': 'error',

        // disallow the use of ternary operators
        // https://eslint.org/docs/rules/no-ternary
        'no-ternary': 'off',

        // disallow trailing whitespace at the end of lines
        // https://eslint.style/rules/default/no-trailing-spaces
        '@stylistic/no-trailing-spaces': [
            'error',
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],

        // disallow dangling underscores in identifiers
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': [
            'error',
            {
                allow: [],
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: true,
            },
        ],

        // disallow the use of Boolean literals in conditional expressions
        // also, prefer `a || b` over `a ? a : b`
        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        // disallow whitespace before properties
        // https://eslint.style/rules/default/no-whitespace-before-property
        '@stylistic/no-whitespace-before-property': 'error',

        // enforce the location of single-line statements
        // https://eslint.style/rules/default/nonblock-statement-body-position
        '@stylistic/nonblock-statement-body-position': [
            'error',
            'beside',
            { overrides: {} },
        ],

        // require padding inside curly braces
        // https://eslint.style/rules/default/object-curly-spacing
        '@stylistic/object-curly-spacing': ['error', 'always'],

        // enforce line breaks between braces
        // https://eslint.style/rules/default/object-curly-newline
        '@stylistic/object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ObjectPattern: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ImportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
                ExportDeclaration: {
                    minProperties: 4,
                    multiline: true,
                    consistent: true,
                },
            },
        ],

        // enforce "same line" or "multiple line" on object properties.
        // https://eslint.style/rules/default/object-property-newline
        '@stylistic/object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],

        // allow just one var statement per function
        // https://eslint.org/docs/rules/one-var
        'one-var': ['error', 'never'],

        // require a newline around variable declaration
        // https://eslint.style/rules/default/one-var-declaration-per-line
        '@stylistic/one-var-declaration-per-line': ['error', 'always'],

        // require assignment operator shorthand where possible or prohibit it entirely
        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': ['error', 'always'],

        // Requires operator at the beginning of the line in multiline statements
        // https://eslint.style/rules/default/operator-linebreak
        '@stylistic/operator-linebreak': [
            'error',
            'before',
            { overrides: { '=': 'none' } },
        ],

        // disallow padding within blocks
        // https://eslint.style/rules/default/padded-blocks
        '@stylistic/padded-blocks': [
            'error',
            {
                blocks: 'never',
                classes: 'never',
                switches: 'never',
            },
            {
                allowSingleLineBlocks: true,
            },
        ],

        // Require or disallow padding lines between statements
        // https://eslint.style/rules/default/padding-line-between-statements
        '@stylistic/padding-line-between-statements': 'off',

        // Disallow the use of Math.pow in favor of the ** operator
        // https://eslint.org/docs/rules/prefer-exponentiation-operator
        'prefer-exponentiation-operator': 'error',

        // Prefer use of an object spread over Object.assign
        // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-object-spread': 'error',

        // require quotes around object literal property names
        // https://eslint.style/rules/default/quote-props
        '@stylistic/quote-props': [
            'error',
            'as-needed',
            { keywords: false, unnecessary: true, numbers: false },
        ],

        // specify whether double or single quotes should be used
        // https://eslint.style/rules/default/quotes
        '@stylistic/quotes': [
            'error',
            'single',
            { avoidEscape: true },
        ],

        // require or disallow use of semicolons instead of ASI
        // https://eslint.style/rules/default/semi
        '@stylistic/semi': ['error', 'always'],

        // enforce spacing before and after semicolons
        // https://eslint.style/rules/default/semi-spacing
        '@stylistic/semi-spacing': ['error', { before: false, after: true }],

        // Enforce location of semicolons
        // https://eslint.style/rules/default/semi-style
        '@stylistic/semi-style': ['error', 'last'],

        // requires object keys to be sorted
        // https://eslint.org/docs/rules/sort-keys
        'sort-keys': [
            'off',
            'asc',
            { caseSensitive: false, natural: true },
        ],

        // sort variables within the same declaration block
        // https://eslint.org/docs/rules/sort-vars
        'sort-vars': 'off',

        // require or disallow space before blocks
        // https://eslint.style/rules/default/space-before-blocks
        '@stylistic/space-before-blocks': 'error',

        // require or disallow space before function opening parenthesis
        // https://eslint.style/rules/default/space-before-function-paren
        '@stylistic/space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],

        // require or disallow spaces inside parentheses
        // https://eslint.style/rules/default/space-in-parens
        '@stylistic/space-in-parens': ['error', 'never'],

        // require spaces around operators
        // https://eslint.style/rules/default/space-infix-ops
        '@stylistic/space-infix-ops': 'error',

        // Require or disallow spaces before/after unary operators
        // https://eslint.style/rules/default/space-unary-ops
        '@stylistic/space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false,
                overrides: {},
            },
        ],

        // require or disallow a space immediately following the // or /* in a comment
        // https://eslint.style/rules/default/spaced-comment
        '@stylistic/spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                    markers: [
                        '=',
                        '!',
                        '/',
                    ], // space here to support sprockets directives, slash for TS /// comments
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: [
                        '=',
                        '!',
                        ':',
                        '::',
                    ], // space here to support sprockets directives and flow comment types
                    balanced: true,
                },
            },
        ],

        // Enforce spacing around colons of switch statements
        // https://eslint.style/rules/default/switch-colon-spacing
        '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

        // Require or disallow spacing between template tags and their literals
        // https://eslint.style/rules/default/template-tag-spacing
        '@stylistic/template-tag-spacing': ['error', 'never'],

        // require or disallow the Unicode Byte Order Mark
        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': ['error', 'never'],

        // require regex literals to be wrapped in parentheses
        // https://eslint.style/rules/default/wrap-regex
        '@stylistic/wrap-regex': 'off',
    },
} satisfies Linter.Config;
