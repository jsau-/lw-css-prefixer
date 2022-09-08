import { CSSVendorBitmask } from '../CSSVendorBitmask';
import { isPropertyVendorPrefixed } from '../util/isPropertyVendorPrefixed';
import { addVendorPrefixes } from '../util/addVendorPrefixes';
import type { Plugin } from './Plugin';

const prefixMask = CSSVendorBitmask.moz_webkit;

export const calc: Plugin = (property, value) => {
  if (
    !isPropertyVendorPrefixed(property) ||
    value.indexOf('calc(') === -1
  ) {
    return
  }

  return addVendorPrefixes(property, prefixMask).map((prefixedName) => [prefixedName, value]);
};
