'use strict';

// Import the ESLint plugin locally
const fwReactPlugin = require('./lib');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // requireConfigFile: false,
    // babelOptions: {
    //   presets: ['@babel/preset-env', '@babel/preset-react'],
    // },
  },
  // plugins: [fwReactPlugin],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  extends: ['eslint:recommended', 'plugin:eslint-plugin/recommended', 'plugin:prettier/recommended'],
  rules: {
    'fw-react/no-bare-strings': 'error',
    'fw-react/svg-import-suffix': 'error',
    'fw-react/icon-component-usage': 'error',
  },
  // settings: { react: { version: 'detect' } },
  // overrides: [
  //   {
  //     files: ['lib/rules/**/*.js'],
  //     languageOptions: {
  //       sourceType: 'commonjs',
  //       ecmaVersion: 'latest',
  //     },
  //     rules: {
  //       'eslint-plugin/require-meta-docs-description': 'error',
  //     },
  //   },
  // ],
};
