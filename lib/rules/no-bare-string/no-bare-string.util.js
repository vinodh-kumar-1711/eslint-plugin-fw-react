const {
  DEFAULT_GLOBAL_ATTRIBUTES,
  DEFAULT_ELEMENT_ATTRIBUTES,
  DEFAULT_ALLOWLIST,
  IGNORED_ELEMENTS,
} = require('./no-bare-string.constant');

function sanitizeConfigArray(allowlist = []) {
  return allowlist
    .filter((option) => option !== '')
    .sort((a, b) => b.length - a.length);
}

/**
 * Example:
 * obj1 = { img: ['data-alt'] } }
 * obj2 = { img: ['alt'] } }
 * result = { img: ['data-alt', 'alt'] } }
 */
function mergeObjects(obj1 = {}, obj2 = {}) {
  const result = {};
  for (const [key, value] of Object.entries(obj1)) {
    result[key] = [...(result[key] || []), ...value];
  }
  for (const [key, value] of Object.entries(obj2)) {
    result[key] = [...(result[key] || []), ...value];
  }
  return result;
}

function parseConfig(config) {
  return {
    allowlist: [...sanitizeConfigArray(config.allowlist), ...DEFAULT_ALLOWLIST],
    globalAttributes: [
      ...(config.globalAttributes || []),
      ...DEFAULT_GLOBAL_ATTRIBUTES,
    ],
    elementAttributes: mergeObjects(
      config.elementAttributes,
      DEFAULT_ELEMENT_ATTRIBUTES,
    ),
  };
}

function isValidAttribute(node, config) {
  const attributeTag = node.parent.name.name;
  const attributeName = node.name.name;
  if (IGNORED_ELEMENTS.has(attributeTag)) {
    return false;
  }
  if (config.elementAttributes[attributeTag]) {
    return config.elementAttributes[attributeTag].includes(attributeName);
  }
  return config.globalAttributes.includes(attributeName);
}

module.exports = {
  parseConfig,
  isValidAttribute,
};
