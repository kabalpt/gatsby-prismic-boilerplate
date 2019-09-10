import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Icon } from '../../theme/components';
import { Layout } from '../../components';
import { PlainText } from 'prismic-react-tools';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 10rem;
  text-align: center;
`;

const Homepage = props => {
  const {
    pageContext: {
      document: {
        data: { heading }
      }
    }
  } = props;

  return (
    <Layout>
      <Grid>
        <Row>
          <Col xs={12}>
            <Heading>
              <PlainText content={heading} />
              <Icon icon="like" ml={1} size={3} />
            </Heading>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

Homepage.propTypes = {
  pageContext: PropTypes.object
};

export default Homepage;
