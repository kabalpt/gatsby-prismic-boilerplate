/* eslint-disable sort-keys */
const weights = {
  black: 900,
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300
};

const families = {
  sans: 'Avenir'
};

const sizes = {
  xxs: 0.625,
  xs: 0.75,
  sm: 0.875,
  base: 1,
  md: 1.125,
  lg: 1.25,
  xl: 1.375,
  xxl: 1.5,

  h1: 3.375,
  h2: 3,
  h3: 2.25,
  h4: 1.75,
  h5: 1.25,
  h6: 0.875
};

const config = [{ family: 'Avenir', path: 'static/fonts/avenir', prefix: 'avenir-', weights }];

const size = sz => (sizes[sz] ? `${sizes[sz]}rem` : null);

export const fonts = {
  config,
  families,
  size,
  sizes,
  weights
};
