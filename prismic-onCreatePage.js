const langs = require('./langs-config');

module.exports = ({ document }) => {
  let path;
  const {
    data: { pathPrefix },
    id,
    lang,
    uid
  } = document;

  if (uid === 'homepage') {
    path = `${langs[lang].default ? '' : langs[lang].path}/`;
  } else {
    path = `${langs[lang].default ? '' : langs[lang].path}/${pathPrefix ? `${pathPrefix}` : ''}/${uid || id}`;
  }

  return {
    document,
    path
  };
};
