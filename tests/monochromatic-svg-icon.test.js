const { RuleTester } = require('eslint');
const rule = require('../lib/rules/monochromatic-svg-icon');

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

ruleTester.run('monochromatic-svg-icon', rule, {
  valid: [
    {
      code: `
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 8 6"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.67544 5.02956C3.36302"
            fill="currentColor"
          />
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
          fill="black"
        ></svg>
      `,
      errors: [{ message: rule.meta.messages.useHTMLColor }],
    },
    {
      code: `
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.67544 5.02956C3.36302"
          fill="#cccc"
        />
      `,
      errors: [{ message: rule.meta.messages.useHTMLColor }],
    },
  ],
});
