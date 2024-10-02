const { RuleTester } = require('eslint');
const rule = require('../lib/rules/svg-linter');

const ruleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run('svg-linter', rule, {
  valid: [
    {
      code: `
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 8 6"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.67544 5.02956C3.36302"
            fill="inherit"
          />
        </svg>
      `,
    },
  ],
  invalid: [
    {
      code: `
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 8 6"
          fill="currentColor"
          width="12px"
          height="12px"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.67544 5.02956C3.36302"
            fill="inherit"
          />
        </svg>
      `,
      errors: [
        {
          message: rule.meta.messages.avoidHeightWidth,
        },
      ],
    },
  ],
});
