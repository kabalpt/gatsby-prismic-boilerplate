/* eslint-disable prettier/prettier */
/* eslint-disable sort-keys */
import { flex } from '../helpers';
import { margin, padding, size } from 'polished';

/**
 * check documentation for
 * props generator:
 *
 * styled-gen
 * https://github.com/psoaresbj/styled-gen/tree/master/src/generator
 */

export const generator = {
  namedProps: [
    { prefix: 'bg', list: 'colors', cssProp: 'background-color' },
    { prefix: 'font', list: 'fonts.weights', cssProp: 'font-weight' },
    { prefix: 'font', list: 'fonts.sizes', cssProp: 'font-size', units: 'rem' },
    { prefix: 'lineHeight', list: 'fonts.sizes', cssProp: 'line-height' },
    { list: 'colors', cssProp: 'color' },
    { list: { left: 'left', right: 'right', center: 'center' }, cssProp: 'text-align' },
    { list: { flex: 'flex', inlineFlex: 'inline-flex', block: 'block', inlineBlock: 'inline-block' }, cssProp: 'display' },
    { list: { flex: 'flex', inlineFlex: 'inline-flex', block: 'block', inlineBlock: 'inline-block' }, cssProp: 'display' },
  ],

  spaceProps: [
    { prop: 'padding', units: 'rem' },
    { prop: 'margin', units: 'rem' }
  ],

  variableProps: [
    { name: 'display', cssProp: 'display' },
    { name: 'textAlign', list: { left: 'left', right: 'right', center: 'center' }, cssProp: 'text-align' },
    // helper fns
    { name: 'flex', helperFn: flex },
    { name: 'margin', helperFn: margin, units: 'rem' },
    { name: 'padding', helperFn: padding, units: 'rem' },
    { name: 'size', helperFn: size, units: 'rem' },
  ]
};
