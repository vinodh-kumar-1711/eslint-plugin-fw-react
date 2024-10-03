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
      description: 'enforce proper linting for SVG elements',
      category: 'Best Practices',
      recommended: false,
    },
    messages: {
      avoidHeightWidth:
        'SVG elements should not have height or width attributes.',
      useHTMLColor:
        'SVG and Path elements should use the currentColor or inherit value only',
      mandatoryViewBox: 'SVG elements should have a viewBox attribute.',
    },
    schema: [], // no options
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name === 'svg') {
          const hasHeight = node.attributes.some(
            (attr) => attr.name && attr.name.name === 'height',
          );
          const hasWidth = node.attributes.some(
            (attr) => attr.name && attr.name.name === 'width',
          );

          const hasViewBox = node.attributes.some(
            (attr) => attr.name && attr.name.name === 'viewBox',
          );

          if (hasHeight || hasWidth) {
            context.report({
              node,
              messageId: 'avoidHeightWidth',
            });
          }

          if (isFillPropInvalid(node)) {
            context.report({
              node,
              messageId: 'useHTMLColor',
            });
          }

          if (!hasViewBox) {
            context.report({
              node,
              messageId: 'mandatoryViewBox',
            });
          }
        }

        if (node.name.name === 'path') {
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
