'use strict';
// Import the ESLint plugin locally
const fwReactPlugin = require('./lib');
const eslintPlugin = require('eslint-plugin-eslint-plugin');

module.exports = [
  eslintPlugin.configs['flat/recommended'],
  {
    files: ['**/*.svg'],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: { 'fw-react': fwReactPlugin },
    rules: {
      'fw-react/tailwind-class-suggestion': 'warn',
      'fw-react/svg-linter': 'warn',
      'fw-react/monochromatic-svg-icon': 'warn',
    },
  },
  {
    files: ['lib/rules/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
    },
    rules: {
      'eslint-plugin/require-meta-docs-description': 'error',
    },
  },
  {
    files: ['examples/**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    // Using the eslint-plugin-fw-react plugin defined locally
    plugins: { 'fw-react': fwReactPlugin },
    rules: {
      'fw-react/tailwind-class-suggestion': 'warn',
      'fw-react/svg-import': 'warn',
      'fw-react/no-bare-string': [
        'error',
        {
          allowlist: [],
          globalAttributes: [],
          elementAttributes: {},
        },
      ],
    },
  },
];
