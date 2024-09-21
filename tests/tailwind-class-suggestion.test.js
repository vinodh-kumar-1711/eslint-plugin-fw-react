const { RuleTester } = require('eslint');
const rule = require('../lib/rules/tailwind-class-suggestion');

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

ruleTester.run('tailwind-class-suggestion', rule, {
  valid: [
    {
      code: `
        export const Test = () => {
          return (
            <>
              <span className="ps-4">Hello world</span>
            </>
          );
        };
      `,
    },
    { code: 'const customClass="pe-4"' },
    { code: 'const customClass="ms-2";' },
    { code: 'const customClass="me-2";' },
  ],
  invalid: [
    {
      code: 'const customClass="pl-4";',
      errors: [{ message: rule.meta.messages.tailwindClassSuggestion }],
      output: 'const customClass="ps-4";',
    },
    {
      code: 'const customClass="pr-4";',
      errors: [{ message: rule.meta.messages.tailwindClassSuggestion }],
      output: 'const customClass="pe-4";',
    },
    {
      code: 'const customClass="ml-4";',
      errors: [{ message: rule.meta.messages.tailwindClassSuggestion }],
      output: 'const customClass="ms-4";',
    },
    {
      code: 'const customClass="mr-4";',
      errors: [{ message: rule.meta.messages.tailwindClassSuggestion }],
      output: 'const customClass="me-4";',
    },
  ],
});
