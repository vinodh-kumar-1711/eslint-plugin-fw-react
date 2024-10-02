module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'enforce usage of ps, pe, ms, me Tailwind CSS classes instead of ps, pe, ms, me',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'code',
    schema: [], // no options
    messages: {
      tailwindClassSuggestion: `Use 'ps', 'pe', 'ms', 'me' instead of 'pl', 'pr', 'ml', 'mr' for Tailwind CSS classes.`,
    },
  },
  create(context) {
    const classMap = {
      'pl-': 'ps-',
      'pr-': 'pe-',
      'ml-': 'ms-',
      'mr-': 'me-',
    };

    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          if (!node.value) {
            return;
          }
          const val = node.value.split(' ');
          const classes = Array.isArray(val) ? val : [val];
          const newClasses = classes.map((cls) => {
            const prefix = cls.slice(0, 3);
            return classMap[prefix]
              ? cls.replace(prefix, classMap[prefix])
              : cls;
          });

          if (newClasses.join(' ') !== node.value) {
            context.report({
              node,
              messageId: 'tailwindClassSuggestion',
              fix(fixer) {
                return fixer.replaceText(
                  node,
                  node.raw.replace(node.value, newClasses.join(' ')),
                );
              },
            });
          }
        }
      },
    };
  },
};
