import * as React from 'react';
import { withStyles } from 'material-ui';

import Icon from './Icon';
import classNames from '../utils/classNames';

type Props = {
  placeholder: string,
  classes: any,
  disabled: boolean,
  value:string|number
};

const styles = theme => ({
  wrapper: {
    position: 'relative',
    width: '200px',
    height: '40px',
    boxShadow: '0 0 20px 0 #D8D8D8',
    border: `1px solid ${theme.palette.ambient.basePlus90}`,
    '&:hover ': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&:disabled': {
      border: `1px solid ${theme.palette.ambient.basePlus90}`,
    },
  },
  input: {
    boxSizing: 'border-box',
    border: 'none',
    height: '100%',
    margin: '0 10px',
    padding: 0,
    outline: 'none',
    userSelect: 'none',
    fontSize: '14px',
    fontWeight: '200',
    transition: 'width .5s ease-out, height .5s ease-out',
    color: 'black',
    backgroundColor: 'white',
    '&-ms-::placeholder, &-webkit-::placeholder, &::placeholder': {
      color: 'black',
      fontSize: '12px',
      backgroundColor: 'white',
    },
    '& + svg': {
      fill: theme.palette.primary.main,
      cursor: 'text',
      position: 'absolute',
      top: '50%',
      right: '15px',
      transform: 'translateY(-50%)',
    },
    '&:focus::placeholder': {
      outline: 'none',
      color: theme.palette.primary.main,
    },
    '&:focus::-moz-placeholder': {
      outline: 'none',
      color: theme.palette.primary.main,
    },
    '&:focus:-ms-placeholder': {
      outline: 'none',
      color: theme.palette.primary.main,
    },
  },
  icon: {
    fill: 'currentColor',
  },
  disabled: {
    opacity: 0.65,
    cursor: 'not-allowed',
    '&:hover ': {
      border: `1px solid white`,
    },
  },
});

const TextField = ({ classes, disabled = false, placeholder, value }: Props) => (
  <div className={classNames([classes.wrapper, disabled ? classes.disabled : undefined,])}>
    <input
      className={classNames([
        classes.input,
        disabled ? classes.disabled : undefined,
      ])}
      placeholder={placeholder}
      type="text"
      value={value}
      disabled={disabled}
    />
    <Icon size={16} icon="search" className={classes.icon} />
  </div>
);

export default withStyles(styles)(TextField);
