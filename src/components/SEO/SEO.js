import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

export const SEO = ({ defaultSeo, title, ...other }) => {
  const { title: defaultTitle, ...defaultOther } = defaultSeo;

  const defaultMeta = Object.keys(defaultOther).reduce((result, metaName) => {
    return defaultOther[metaName] ? { ...result, [metaName]: defaultOther[metaName] } : result;
  }, {});

  const otherMeta = Object.keys(other).reduce((result, metaName) => {
    return other[metaName] ? { ...result, [metaName]: other[metaName] } : result;
  }, {});

  const metaObj = Object.assign({}, defaultMeta, otherMeta);
  const meta = Object.keys(metaObj).map(name => ({ content: other[name], name }));

  return <Helmet meta={meta} title={title || defaultTitle} />;
};

SEO.propTypes = {
  defaultSeo: PropTypes.object,
  title: PropTypes.string
};
