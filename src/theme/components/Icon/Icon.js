import { generateProps } from 'styled-gen';
import { get } from 'lodash';
import { size as setSize } from 'polished';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// import icon libs
import ui from './icons/ui';

const iconsCollections = {
  // declare icon libs
  ui
};

const defaultFamily = 'ui';

const renderPaths = icon => icon.paths.map((path, index) => <path d={path} key={`path-${index}`} />);

const IconSvg = ({ family, icon, className }) => {
  const selectedFamily = get(iconsCollections, family) || get(iconsCollections, defaultFamily);
  const selectedIcon = get(selectedFamily, icon);

  if (!selectedIcon) {
    /* eslint-disable-next-line */
    console.warn(`There are no icon "${icon}" in the "${family || defaultFamily}" family`);

    return null;
  }

  return (
    <svg className={className} role="img" viewBox={selectedIcon.viewbox} xmlns="http://www.w3.org/2000/svg">
      {renderPaths(selectedIcon)}
    </svg>
  );
};

export const Icon = styled(IconSvg)`
  ${({ size }) => setSize(`${size || 1}rem`)};

  fill: currentColor;
  line-height: 1;
  vertical-align: middle;

  ${generateProps}
`;

IconSvg.propTypes = {
  className: PropType.string,
  family: PropType.string,
  icon: PropType.string.isRequired
};
