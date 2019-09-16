const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({ path: `.env.${activeEnv}` });

const prismicConfig = require('./prismic-config');

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      options: {
        background_color: `#50A2E5`,
        display: `minimal-ui`,
        icon: `static/img/gatsby-icon.png`,
        name: `gatsby-prismic-boilerplate`,
        short_name: `prismic-boilerplate`,
        start_url: `/`,
        theme_color: `#50A2E5`
      },
      resolve: `gatsby-plugin-manifest`
    },
    {
      options: prismicConfig,
      resolve: `gatsby-source-prismic-with-magic`
    }
  ],
  siteMetadata: {
    author: `@kabalpt`
  }
};
