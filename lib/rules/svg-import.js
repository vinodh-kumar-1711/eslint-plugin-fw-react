module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'enforce SVG imports for icons and images to have specific suffixes',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: 'code',
    schema: [], // no options
    messages: {
      iconsSuffixMessage:
        'SVG imports from the assets/icons/ folder should end with ?react',
      imagesSuffixMessage:
        'SVG imports from the assets/images/ folder should not end with ?react. Move it to assets/icons/ folder for inline rendering.',
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;
        if (
          importPath.includes('assets/icons/') &&
          !importPath.endsWith('?react')
        ) {
          context.report({
            node,
            messageId: 'iconsSuffixMessage',
            fix(fixer) {
              const fixedImportPath = `${importPath}?react`;
              return fixer.replaceText(node.source, `'${fixedImportPath}'`);
            },
          });
        }
        if (
          importPath.includes('assets/images/') &&
          importPath.endsWith('?react')
        ) {
          context.report({
            node,
            messageId: 'imagesSuffixMessage',
            fix(fixer) {
              const fixedImportPath = importPath.replaceAll('?react', '');
              return fixer.replaceText(node.source, `'${fixedImportPath}'`);
            },
          });
        }
      },
    };
  },
};
