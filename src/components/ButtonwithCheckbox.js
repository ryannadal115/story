import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';

const styles = theme => ({
  default: {
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: theme.typography.fontSize,
    textAlign: 'center',
    verticalAlign: 'baseline',
    padding: '0.397rem 2.3125rem',
    borderRadius: '0.5rem',
    color: theme.palette.ambient.main,
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.ambient.main}`,
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color',
    '&:hover': {
      color: theme.palette.accent.contrastText,
      backgroundColor: theme.palette.ambient.basePlus25,
      borderColor: 'transparent',
    },
  },
  active: {
    color: theme.palette.accent.main,
    backgroundColor: 'transparent',
    borderColor: theme.palette.accent.main,
    borderWidth: '2px',
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
      borderColor: 'transparent',
    },
  },
  open: {
    color: theme.palette.accent.contrastText,
    backgroundColor: theme.palette.accent.baseMinus10,
    borderColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
      borderColor: 'transparent',
    },
  },
  dropDown: {
    marginTop: '10px',
    zIndex: '1',
    width: '200px',
  },
  fieldSet: {
    height: '40px',
    width: '100%',
    border: `1px solid #EBECED`,
    padding: '10px 20',
  },
  inputLabel: {
    top: '10px',
    cursor: 'pointer',
    display: 'inline-flex',
    position: 'relative',
    fontFamily: theme.typography.fontFamily,
  },
  icon: {
    cursor: 'pointer',
    fill: theme.palette.accent.main,
    width: '1em',
    height: '1em',
    fontSize: '24px',
    display: 'inline-block',
    userSelect: 'none',
    verticalAlign: 'baseline',
  },
  inputCheckbox: {
    top: '0',
    left: '0',
    width: '100%',
    cursor: 'inherit',
    height: '100%',
    margin: '0',
    opacity: '0',
    padding: '0',
    position: 'absolute',
  },
  CheckboxText: {
    marginLeft: '5px',
    left: '20px',
    fontSize: theme.typography.fontSize,
    color: theme.palette.ambient.main,
    backgroundColor: 'transparent',
    textDecoration: 'none',
    transition: 'all .5s',
    '&:hover': {
      color: theme.palette.accent.baseMinus10,
    },
  },
});

class ButtonwithCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    const { classes, active, open, value, checked, onChange } = this.props;

    return (
      <div>
        <button
          className={[
            classes.default,
            active ? classes.active : undefined,
            open ? classes.open : undefined,
          ].join(' ')}
          onClick={this.showMenu}
        >
          Filter Checkbox
        </button>
        {this.state.showMenu ? (
          <div className={classes.dropDown}>
            <fieldset className={classes.fieldSet}>
              <label htmlFor={value} className={classes.inputLabel}>
                <svg
                  className={classes.icon}
                  focusable="false"
                  viewBox="0 0 18 18"
                  aria-hidden="true"
                >
                  {checked ? (
                    <path d="M0.779052143,7.98095238 C0.779052143,11.9580766 4.00360546,15.1828526 7.98095238,15.1828526 C11.9582993,15.1828526 15.1828526,11.9580766 15.1828526,7.98095238 C15.1828526,4.0038282 11.9582993,0.779052143 7.98095238,0.779052143 C4.00360546,0.779052143 0.779052143,4.0038282 0.779052143,7.98095238 Z M-0.019047619,7.98095238 C-0.019047619,3.56306221 3.5628148,-0.019047619 7.98095238,-0.019047619 C12.39909,-0.019047619 15.9809524,3.56306221 15.9809524,7.98095238 C15.9809524,12.3988425 12.39909,15.9809524 7.98095238,15.9809524 C3.5628148,15.9809524 -0.019047619,12.3988425 -0.019047619,7.98095238 Z M12.9126723,3.78648873 L7.9116174,11.6163329 C7.81269357,11.6528997 7.6974863,11.6200006 7.63423486,11.5296682 L4.71113174,7.3550443 C4.58472171,7.17451207 4.33589584,7.13063735 4.1553636,7.25704738 C3.97483137,7.38345741 3.93095666,7.63228328 4.05736669,7.81281552 L6.98046981,11.9874394 C7.30849442,12.4559071 7.95479899,12.569868 8.42326669,12.2418434 L8.53068514,12.129764 L13.5852805,4.216095 C13.703913,4.0303594 13.6495151,3.7836203 13.4637795,3.6649878 C13.2780439,3.54635531 13.0313048,3.60075312 12.9126723,3.78648873 Z" />
                  ) : (
                    <path d="M0.779052143,7.98095238 C0.779052143,11.9580766 4.00360546,15.1828526 7.98095238,15.1828526 C11.9582993,15.1828526 15.1828526,11.9580766 15.1828526,7.98095238 C15.1828526,4.0038282 11.9582993,0.779052143 7.98095238,0.779052143 C4.00360546,0.779052143 0.779052143,4.0038282 0.779052143,7.98095238 Z M-0.019047619,7.98095238 C-0.019047619,3.56306221 3.5628148,-0.019047619 7.98095238,-0.019047619 C12.39909,-0.019047619 15.9809524,3.56306221 15.9809524,7.98095238 C15.9809524,12.3988425 12.39909,15.9809524 7.98095238,15.9809524 C3.5628148,15.9809524 -0.019047619,12.3988425 -0.019047619,7.98095238 Z" />
                  )}
                </svg>
                <input
                  id={value}
                  type="checkbox"
                  checked={checked}
                  value={value}
                  onChange={onChange}
                  className={classes.inputCheckbox}
                />
                <span className={classes.CheckboxText}>Checkbox</span>
              </label>
            </fieldset>
          </div>
        ) : null}
      </div>
    );
  }
}

ButtonwithCheckbox.defaultProps = {
  open: false,
  active: false,
  checked: false,
  value: '',
  onChange: null,
};

ButtonwithCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  active: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default withStyles(styles)(ButtonwithCheckbox);
