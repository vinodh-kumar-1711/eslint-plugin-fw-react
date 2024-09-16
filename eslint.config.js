'use strict';

// Import the ESLint plugin locally
const fwReactPlugin = require('./lib');
const eslintPlugin = require('eslint-plugin-eslint-plugin');

module.exports = [
  eslintPlugin.configs['flat/recommended'],
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      ecmaVersion: 'latest',
    },
    // Using the eslint-plugin-fw-react plugin defined locally
    plugins: { 'fw-react': fwReactPlugin },
    rules: {
      'eslint-plugin/require-meta-docs-description': 'error',
      'fw-react/tailwind-class-suggestion': 'warn',
    },
  },
];
