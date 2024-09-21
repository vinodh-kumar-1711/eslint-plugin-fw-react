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
    schema: [], // no options
    // messages: {
    //   avoidBareString:
    //     'Avoid using bare strings in JSX. Use the t helper from react-i18next for translations.',
    // },
  },
  create(context) {
    return {
      JSXText(node) {
        const text = node.value.trim();
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
    };
  },
};
