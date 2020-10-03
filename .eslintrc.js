// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:css-modules/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/react'
  ],

  plugins: ['css-modules', 'prettier', 'jest', 'jsdoc', 'node', 'promise'],

  globals: {
    __DEV__: true,
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },

  rules: {
    curly: 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never'
      }
    ],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'jest/expect-expect': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/no-export': 'off',
    'jest/no-identical-title': 'off',
    'jest/no-mocks-import': 'off',
    'jest/no-test-callback': 'off',
    'jest/valid-expect': 'off',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'error',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/valid-types': 'error',

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info']
      }
    ],
    'no-negated-condition': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error'
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
};
