const isFillPropInvalid = (node) => {
  const fillProp = node.attributes.find(
    (attr) => attr.name && attr.name.name === 'fill',
  );

  return (
    fillProp &&
    !['currentColor', 'inherit', 'none'].includes(fillProp.value.value)
  );
};

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'enforce SVG icon to be monochromatic',
      category: 'Best Practices',
      recommended: false,
    },
    messages: {
      useHTMLColor:
        'SVG and Path elements should use the currentColor or inherit value only',
    },
    schema: [], // no options
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (['svg', 'path'].includes(node.name.name)) {
          if (isFillPropInvalid(node)) {
            context.report({
              node,
              messageId: 'useHTMLColor',
            });
          }
        }
      },
    };
  },
};
