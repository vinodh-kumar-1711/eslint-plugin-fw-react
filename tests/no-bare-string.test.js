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

const error = { message: rule.meta.messages.avoidBareString };
const errors = [error];
ruleTester.run('no-bare-string', rule, {
  valid: [
    `import { useTranslation } from 'react-i18next';
      const Component = () => {
        const { t } = useTranslation();
        return <div>{t('common.submit')}</div>;
      };
    `,
    '<div>(),.&+-=*/#%!?:[]{}- |</div>',
    '<input placeholder={t("some.value")} />',
    '<img alt={t("some.value")} />',
    `<a
      title={t("some.value")}
      placeholder={t("some.value")}
      aria-label={t("some.value")}
      aria-placeholder={t("some.value")}
      aria-roledescription={t("some.value")}
      aria-valuetext={t("some.value")}
      ></a>`,
    `<script
      title="some value"
      placeholder="some value"
      aria-label="some value"
      aria-placeholder="some value"
      aria-roledescription="some value"
      aria-valuetext="some value"
      ></script>`,
    `<style
      title="some value"
      placeholder="some value"
      aria-label="some value"
      aria-placeholder="some value"
      aria-roledescription="some value"
      aria-valuetext="some value"
      ></style>`,
    `<template
      title="some value"
      placeholder="some value"
      aria-label="some value"
      aria-placeholder="some value"
      aria-roledescription="some value"
      aria-valuetext="some value"
      ></template>`,
    `<textarea
      title="some value"
      placeholder="some value"
      aria-label="some value"
      aria-placeholder="some value"
      aria-roledescription="some value"
      aria-valuetext="some value"
      ></textarea>`,
    `<InputGroup placeholder={t("some.value")}  />`,
    `<CustomComponent customTitle="Some value"  />`,
    {
      code: `
          <CustomComponent customTitle={t("some.value")}/>
        `,
      options: [{ globalAttributes: ['customTitle'] }],
    },
    {
      code: `
          <CustomComponent customTitle={t("some.value")}/>
        `,
      options: [{ elementAttributes: { CustomComponent: ['customTitle'] } }],
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
      errors,
    },
    { code: '<div>1234</div>', errors },
    { code: '<input placeholder="some value" />', errors },
    { code: '<img alt="some value" />', errors },
    {
      code: `<a
      title="some value"
      aria-label="some value"
      aria-placeholder="some value"
      aria-roledescription="some value"
      aria-valuetext="some value"
      >
     </a>`,
      errors: Array(5).fill(error),
    },
    {
      code: `
          <InputGroup placeholder="some value"  />
        `,
      errors,
    },
    {
      code: `
          <CustomComponent customTitle="some value"/>
        `,
      options: [{ globalAttributes: ['customTitle'] }],
      errors,
    },
    {
      code: `
          <CustomComponent customTitle="some value"/>
        `,
      options: [{ elementAttributes: { CustomComponent: ['customTitle'] } }],
      errors,
    },
  ],
});
