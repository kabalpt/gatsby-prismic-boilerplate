import * as components from '../';
import { GlobalStyle } from '../../theme/components';
import { PrismicReactToolsProvider } from 'prismic-react-tools';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import theme from '../../theme';

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <PrismicReactToolsProvider components={components}>
        <GlobalStyle />
        <React.Fragment>{children}</React.Fragment>
      </PrismicReactToolsProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
