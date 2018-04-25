import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';

import ICONS from '../constants';

const styles = () => ({
  root: {
    fill: 'currentColor',
  },
});

const Icon = ({ size, icon, classes, className, onClick }) => (
  <svg
    onClick={onClick}
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 20 20"
  >
    <path
      className={[classes.root, className || undefined].join(' ')}
      d={ICONS[icon]}
    />
  </svg>
);

Icon.propTypes = {
  size: PropTypes.number,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  size: 25,
  className: '',
  onClick: () => {},
};

export default withStyles(styles)(Icon);
