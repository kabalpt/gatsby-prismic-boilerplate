const tags = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'span', 'p', 'quote'];

export const getTag = (props, { defaultTag = 'div', htmlTagsArray = tags } = {}) =>
  Object.keys(props).reduce((acc, prop) => (htmlTagsArray.find(tag => tag === prop) ? prop : acc), defaultTag);
