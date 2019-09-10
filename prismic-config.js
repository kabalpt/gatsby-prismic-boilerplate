const langs = require('./langs-config');
const onCreatePage = require('./prismic-onCreatePage');
const onCretePages = require('./prismic-onCreatePages');

module.exports = {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  langs,
  layoutsKey: 'page_-_',
  layoutsNameExceptions: {},
  layoutsPath: 'src/layouts',
  onCreatePage,
  onCretePages,
  repositoryName: process.env.PRISMIC_REPOSITORY_NAME
};
