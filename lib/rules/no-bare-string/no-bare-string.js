const { parseConfig, isValidAttribute } = require('./no-bare-string.util');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'disallow bare strings in React JSX templates and always use react-i18next t helper for rendering translated content',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: null, // not fixable automatically
    schema: [
      {
        type: 'object',
        properties: {
          allowlist: { type: 'array' },
          globalAttributes: { type: 'array' },
          elementAttributes: { type: 'object' },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      avoidBareString:
        'Avoid using bare strings in JSX. Use the t helper from react-i18next for translations.',
    },
  },
  create(context) {
    const config = parseConfig(context.options[0] || {});

    const getBareString = (strVal) => {
      const allowlist = config.allowlist;

      for (const entry of allowlist) {
        if (strVal.includes(entry)) {
          strVal = strVal.replaceAll(entry, '');
        }
      }

      return strVal.trim() === '' ? null : strVal;
    };
    return {
      JSXText(node) {
        const text = getBareString(node.value);

        if (text && !/^{.*}$/.test(text)) {
          context.report({
            node,
            messageId: 'avoidBareString',
          });
        }
      },
      JSXExpressionContainer(node) {
        if (
          node.expression.type === 'Literal' &&
          typeof node.expression.value === 'string'
        ) {
          context.report({
            node,
            messageId: 'avoidBareString',
          });
        }
      },
      JSXAttribute(node) {
        if (
          node.value &&
          node.value.type === 'Literal' &&
          typeof node.value.value === 'string' &&
          isValidAttribute(node, config)
        ) {
          const text = getBareString(node.value.value);

          if (text) {
            context.report({
              node,
              messageId: 'avoidBareString',
            });
          }
        }
      },
    };
  },
};
