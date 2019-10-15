import { Col as FlexboxCol, Grid as FlexboxGrid, Row as FlexboxRow } from 'react-styled-flexboxgrid';
import { generateProps, mq } from 'styled-gen';
import styled, { css } from 'styled-components';

const Col = styled(FlexboxCol)`
  ${generateProps};
`;

const Grid = styled(FlexboxGrid)`
  ${mq.upTo(
    'desktop',
    css`
      width: 100%;
    `
  )}

  ${generateProps};
`;

const Row = styled(FlexboxRow)`
  ${generateProps};
`;

export { Col, Grid, Row };
