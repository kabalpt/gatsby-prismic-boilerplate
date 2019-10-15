/* eslint-disable max-params */
import { css } from 'styled-components';

export const flex = (alignItems, justifyContent, inline, direction, reverse, wrap) => css`
  align-items: ${alignItems ? alignItems : 'center'};
  display: ${inline ? 'inline-flex' : 'flex'};
  flex-direction: ${`${direction ? direction : 'row'}${reverse ? '-reverse' : ''}`};
  flex-wrap: ${wrap ? wrap : 'wrap'};
  justify-content: ${justifyContent ? justifyContent : justifyContent};
`;
