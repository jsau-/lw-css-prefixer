import type { Plugin } from '../prefixer';

const replacements: Record<string, string[]> = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex'],
};

export const display: Plugin = (property, value) => {
  if (typeof value !== 'string' || property !== 'display') {
    return;
  }

  const replaceValueWith = replacements[value];

  if (!replaceValueWith) {
    return;
  }

  return replaceValueWith.map(v => [property, v]);
};
