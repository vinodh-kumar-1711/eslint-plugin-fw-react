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
      },
    },
  },
  rules: {
    'tailwind-class-suggestion': require('./rules/tailwind-class-suggestion'),
  },
};
