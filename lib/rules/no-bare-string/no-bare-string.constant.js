const DEFAULT_GLOBAL_ATTRIBUTES = [
  'title',
  'placeholder',
  'aria-label',
  'aria-placeholder',
  'aria-roledescription',
  'aria-valuetext',
];

const DEFAULT_ELEMENT_ATTRIBUTES = {
  img: ['alt'],
};

const DEFAULT_ALLOWLIST = [
  '&lpar;', // (
  '&rpar;', // )
  '&comma;', // ,
  '&period;', // .
  '&amp;', // &
  '&AMP;', // &
  '&plus;', // +
  '&minus;', // -
  '&equals;', // =
  '&ast;', // *
  '&midast;', // *
  '&sol;', // /
  '&num;', // #
  '&percnt;', // %
  '&excl;', // !
  '&quest;', // ?
  '&colon;', // :
  '&lsqb;', // [
  '&lbrack;', // [
  '&rsqb;', // ]
  '&rbrack;', // ]
  '&lcub;', // {
  '&lbrace;', // {
  '&rcub;', // }
  '&rbrace;', // }
  '&lt;', // <
  '&LT;', // <
  '&gt;', // >
  '&GT;', // >
  '&bull;', // •
  '&bullet;', // •
  '&mdash;', // —
  '&ndash;', // –
  '&nbsp;', // non-breaking space
  '&Tab;',
  '&NewLine;',
  '&verbar;', // |
  '&vert;', // |
  '&VerticalLine;', // |
  '(',
  ')',
  ',',
  '.',
  '&',
  '+',
  '-',
  '=',
  '*',
  '/',
  '#',
  '%',
  '!',
  '?',
  ':',
  '[',
  ']',
  '{',
  '}',
  '<',
  '>',
  '•',
  '—',
  ' ',
  '|',
];

const IGNORED_ELEMENTS = new Set([
  'pre',
  'script',
  'style',
  'template',
  'textarea',
]);

module.exports = {
  IGNORED_ELEMENTS,
  DEFAULT_GLOBAL_ATTRIBUTES,
  DEFAULT_ELEMENT_ATTRIBUTES,
  DEFAULT_ALLOWLIST,
};
