const { RuleTester } = require('eslint');
const rule = require('../lib/rules/svg-import');

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

ruleTester.run('svg-import', rule, {
  valid: [
    {
      code: "import ChevDownIcon from 'src/assets/icons/chevron-down.svg?react';",
    },
    {
      code: "import EmptyStateImg from 'src/assets/images/empty-state.svg';",
    },
  ],
  invalid: [
    {
      code: "import ChevDownIcon from 'src/assets/icons/chevron-down.svg';",
      errors: [
        {
          message: rule.meta.messages.iconsSuffixMessage,
        },
      ],
      output:
        "import ChevDownIcon from 'src/assets/icons/chevron-down.svg?react';",
    },
    {
      code: "import EmptyStateImg from 'src/assets/images/empty-state.svg?react';",
      errors: [
        {
          message: rule.meta.messages.imagesSuffixMessage,
        },
      ],
      output: "import EmptyStateImg from 'src/assets/images/empty-state.svg';",
    },
  ],
});
