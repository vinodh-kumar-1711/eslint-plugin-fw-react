const { RuleTester } = require('eslint');
const rule = require('../lib/rules/no-bare-string');

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

ruleTester.run('no-bare-string', rule, {
  valid: [
    {
      code: `
        import { useTranslation } from 'react-i18next';
        const Component = () => {
          const { t } = useTranslation();
          return <div>{t('common.submit')}</div>;
        };
      `,
    },
  ],
  invalid: [
    {
      code: `
        import { useTranslation } from 'react-i18next';
        const Component = () => {
          const { t } = useTranslation();
          return <div>Hello world</div>;
        };
      `,
      errors: [
        {
          message: rule.meta.messages.avoidBareString,
        },
      ],
    },
  ],
});
