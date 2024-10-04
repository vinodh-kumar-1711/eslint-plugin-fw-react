module.exports = {
  meta: {
    name: 'eslint-plugin-fw-react',
    version: '0.0.1',
  },
  configs: {
    recommended: {
      plugins: ['fw-react'],
      rules: {
        'fw-react/tailwind-class-suggestion': 'error',
        'fw-react/svg-import': 'error',
        'fw-react/svg-linter': 'error',
        'fw-react/no-bare-string': 'error',
        'fw-react/monochromatic-svg-icon': 'error',
      },
    },
  },
  rules: {
    'tailwind-class-suggestion': require('./rules/tailwind-class-suggestion'),
    'svg-import': require('./rules/svg-import'),
    'no-bare-string': require('./rules/no-bare-string'),
    'svg-linter': require('./rules/svg-linter'),
    'monochromatic-svg-icon': require('./rules/monochromatic-svg-icon'),
  },
};
