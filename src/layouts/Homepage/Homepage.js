import { Col, Div, Grid, Icon, Row } from '../../theme/components';
import { Heading, Text } from '../../theme/components/Typography';
import { Layout } from '../../components';
import { PlainText } from 'prismic-react-tools';
import PropTypes from 'prop-types';
import React from 'react';

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
            <Heading h2 mb={10}>
              <PlainText content={heading} />
              <Icon icon="like" ml={1} size={3} />
            </Heading>
            <Div bgPrimary flex={{ md: 'null center', xs: 'flex-start flex-end' }} size="5 10" white>
              <Text large>Content</Text>
            </Div>
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
