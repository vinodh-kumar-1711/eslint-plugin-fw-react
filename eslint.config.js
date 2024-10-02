'use strict';
// Import the ESLint plugin locally
const fwReactPlugin = require('./lib');
const eslintPlugin = require('eslint-plugin-eslint-plugin');
const html = require('eslint-plugin-html');

module.exports = [
  eslintPlugin.configs['flat/recommended'],
  {
    files: ['**/*.html', '**/*.svg'],
    plugins: { html, 'fw-react': fwReactPlugin },
    settings: {
      'html/html-extensions': ['.html', '.svg'], // Process both .html and .svg files
    },
    rules: {
      'fw-react/tailwind-class-suggestion': 'warn',
      'fw-react/svg-linter': 'warn',
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
      'fw-react/no-bare-string': 'warn',
    },
  },
];
