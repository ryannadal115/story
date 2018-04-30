import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';

const tabStyles = theme => ({
  root: {
    ...theme.typography.body,
    fontSize: theme.typography.fontSize,
    outline: 'none',
    userSelect: 'none',
    height: '3.4375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '1.375rem',
    paddingRight: '1.375rem',
    color: theme.palette.ambient.main,
    border: 'transparent',
    borderBottom: `5px solid transparent`,
    cursor: 'pointer',
    '-webkit-appearance': 'none',
    '&:hover': {
      color: theme.palette.accent.main,
    },
  },
  withIcon: {
    marginLeft: '0.9375rem',
  },
  isActive: {
    color: theme.palette.accent.contrastText,
    backgroundColor: theme.palette.accent.main,
    borderBottom: `5px solid ${theme.palette.accent.baseMinus25}`,
    '&:hover': {
      color: theme.palette.accent.contrastText,
    },
  },
});

const BasicTab = ({ onClick, label, isActive, classes, icon }) => (
  <button
    className={[classes.root, isActive ? classes.isActive : undefined].join(
      ' '
    )}
    role="tab"
    onClick={() => onClick()}
  >
    {icon} <span className={icon ? classes.withIcon : undefined}>{label}</span>
  </button>
);

BasicTab.defaultProps = {
  icon: null,
  label: '',
  isActive: false,
};

BasicTab.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  isActive: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TabWithStyles = withStyles(tabStyles)(BasicTab);

const tabsStyles = () => ({
  root: {
    display: 'flex',
  },
});

class Tabs extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        {React.Children.map(this.props.children, (child) => {

            return (
              <div
                onClick={() => {this.props.onChange(child.label)}}
              >
                {child}
              </div>
            );
        })}
      </div>
     )
  }
}

Tabs.defaultProps = {};

Tabs.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export { TabWithStyles as Tab, BasicTab };

export default withStyles(tabsStyles)(Tabs);
