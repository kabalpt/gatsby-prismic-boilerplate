import { generateProps, variations } from 'styled-gen';
import { getTag } from '../../helpers';
import styled, { css } from 'styled-components';

const headings = {
  default: css`
    color: red;
    font-size: 5rem;
  `,

  h2: css`
    color: blue;
    font-size: 3rem;
  `
};

export const Heading = styled.h1.attrs(props => ({
  as: getTag(props, { defaultTag: 'h1' })
}))`
  color: yellow;

  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin-top: 10rem;
  text-align: center;

  ${variations(headings)}
  ${generateProps};
`;
