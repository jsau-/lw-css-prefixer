import { Vendor } from './Vendor';

export type PropertyPrefixes = Record<string, Vendor>;

/**
 * A static set of CSS properties mapped against vendor prefixes that
 * should be applied against them.
 */
export const propertyPrefixes: PropertyPrefixes = {
  'animation': Vendor.moz_wk,
  'animation-delay': Vendor.moz_wk,
  'animation-direction': Vendor.moz_wk,
  'animation-duration': Vendor.moz_wk,
  'animation-fill-mode': Vendor.moz_wk,
  'animation-iteration-count': Vendor.moz_wk,
  'animation-name': Vendor.moz_wk,
  'animation-play-state': Vendor.moz_wk,
  'animation-timing-function': Vendor.moz_wk,
  'appearance': Vendor.all,
  'backdrop-filter': Vendor.wk,
  'backface-visibility': Vendor.moz_wk,
  'background-origin': Vendor.moz_wk,
  'background-size': Vendor.moz_wk,
  'border-image': Vendor.moz_wk,
  'border-image-outset': Vendor.moz_wk,
  'border-image-repeat': Vendor.moz_wk,
  'border-image-slice': Vendor.moz_wk,
  'border-image-source': Vendor.moz_wk,
  'border-image-width': Vendor.moz_wk,
  'border-radius': Vendor.moz_wk,
  'box-decoration-break': Vendor.ms_wk,
  'box-shadow': Vendor.moz_wk,
  'box-sizing': Vendor.moz_wk,
  'break-after': Vendor.all,
  'break-before': Vendor.all,
  'break-inside': Vendor.all,
  'clip-path': Vendor.wk,
  'column-count': Vendor.moz_wk,
  'column-fill': Vendor.moz_wk,
  'column-gap': Vendor.moz_wk,
  'column-rule': Vendor.moz_wk,
  'column-rule-color': Vendor.moz_wk,
  'column-rule-style': Vendor.moz_wk,
  'column-rule-width': Vendor.moz_wk,
  'column-span': Vendor.moz_wk,
  'columns': Vendor.moz_wk,
  'filter': Vendor.wk,
  'flex': Vendor.all,
  'flex-wrap': Vendor.all,
  'flow-from': Vendor.ms_wk,
  'flow-into': Vendor.ms_wk,
  'font-feature-settings': Vendor.moz_wk,
  'font-kerning': Vendor.wk,
  'hyphens': Vendor.all,
  'mask': Vendor.ms_wk,
  'mask-border': Vendor.ms_wk,
  'mask-border-mode': Vendor.ms_wk,
  'mask-border-outset': Vendor.ms_wk,
  'mask-border-repeat': Vendor.ms_wk,
  'mask-border-slice': Vendor.ms_wk,
  'mask-border-source': Vendor.ms_wk,
  'mask-border-width': Vendor.ms_wk,
  'mask-clip': Vendor.ms_wk,
  'mask-composite': Vendor.ms_wk,
  'mask-image': Vendor.ms_wk,
  'mask-mode': Vendor.ms_wk,
  'mask-origin': Vendor.ms_wk,
  'mask-position': Vendor.ms_wk,
  'mask-repeat': Vendor.ms_wk,
  'mask-size': Vendor.ms_wk,
  'mask-type': Vendor.ms_wk,
  'object-fit': Vendor.wk,
  'object-position': Vendor.wk,
  'order': Vendor.wk,
  'perspective': Vendor.moz_wk,
  'perspective-origin': Vendor.moz_wk,
  'region-fragment': Vendor.ms_wk,
  'resize': Vendor.moz,
  'scroll-snap-coordinate': Vendor.ms_wk,
  'scroll-snap-destination': Vendor.ms_wk,
  'scroll-snap-points-x': Vendor.ms_wk,
  'scroll-snap-points-y': Vendor.ms_wk,
  'scroll-snap-type': Vendor.ms_wk,
  'shape-image-margin': Vendor.wk,
  'shape-image-outside': Vendor.wk,
  'shape-image-threshold': Vendor.wk,
  'tab-size': Vendor.moz_wk,
  'text-align-last': Vendor.moz,
  'text-decoration-color': Vendor.moz_wk,
  'text-decoration-line': Vendor.moz_wk,
  'text-decoration-skip': Vendor.moz_wk,
  'text-decoration-style': Vendor.moz_wk,
  'text-emphasis': Vendor.ms_wk,
  'text-emphasis-color': Vendor.ms_wk,
  'text-emphasis-position': Vendor.ms_wk,
  'text-emphasis-style': Vendor.ms_wk,
  'text-orientation': Vendor.wk,
  'text-overflow': Vendor.wk,
  'text-size-adjust': Vendor.ms_wk,
  'touch-action': Vendor.ms,
  'transform': Vendor.all,
  'transform-origin': Vendor.all,
  'transform-origin-x': Vendor.all,
  'transform-origin-y': Vendor.all,
  'transform-origin-z': Vendor.moz_wk,
  'transform-style': Vendor.moz_wk,
  'transition-delay': Vendor.moz_wk,
  'transition-duration': Vendor.moz_wk,
  'transition-property': Vendor.moz_wk,
  'transition-timing-function': Vendor.moz_wk,
  'user-select': Vendor.all,
  'wrap-flow': Vendor.ms,
  'wrap-margin': Vendor.ms,
  'wrap-through': Vendor.ms,
  'writing-mode': Vendor.wk,
};
