/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: [
    'airbnb',
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  env: {
    'commonjs': true,
    'node': true,
    'jest': true
  },
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-undef': 'off',
    'import/extensions': 'always',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'array-callback-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-destructuring': 'off',
    'object-shorthand': 'off',
    'radix': 'off'
  }
};