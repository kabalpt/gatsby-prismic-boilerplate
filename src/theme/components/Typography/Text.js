import { generateProps, variations } from 'styled-gen';
import { getTag } from '../../helpers';
import styled, { css } from 'styled-components';

const textVariations = {
  default: css`
    font-size: 1rem;
  `,

  large: css`
    font-size: 1.5rem;
  `,

  small: css`
    font-size: 0.75rem;
  `
};

export const Text = styled.p.attrs(props => ({
  as: getTag(props, { defaultTag: 'p' })
}))`
  color: yellow;

  font-weight: ${({ theme }) => theme.fonts.weights.light};
  text-align: left;

  ${variations(textVariations)}
  ${generateProps};
`;
