import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
// import Icon from './Icon';

const styles = theme => ({
    default: {
        display: 'inline-block',
        fontWeight: 100,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        border: '2px solid transparent',
        padding: '0.397rem 2.3125rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        backgroundColor: theme.palette.ambient.baseMinus10,
        transition:
            'color .15s ease-in-out,background-color .15s ease-in-out,border-color',
        '&:hover': {
            backgroundColor: theme.palette.accent.main,
            borderBottom: `5px solid ${theme.palette.accent.baseMinus75}`,
        },
    },
    active: {
        color: theme.palette.accent.basePlus90,
        backgroundColor: theme.palette.accent.baseMinus25,
        borderBottom: `5px solid ${theme.palette.accent.baseMinus75}`,
    },
    icon: {
        cursor: 'pointer',
        fill: '#fff',
    },
    dropDown: {
        margin: 0,
        zIndex: '1',
        width: '200px',
        marginTop:'3px'
    },
    fieldSet: {
        height: '40px',
        width: '100%',
        border: `1px solid #EBECED`,
        padding: 0,
    },
    link: {
        position: 'relative',
        top: '9px',
        left: '20px',
        color: theme.palette.accent.basePlus25,
        fontSize: theme.typography.fontSize,
        backgroundColor: 'transparent',
        textDecoration: 'none',
        transition: 'all .5s',
        '&:hover': {
            color: theme.palette.accent.baseMinus10,
        },
    },
});

class MenuFeature extends Component {
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
        const { classes, active } = this.props;

        return (
            <div>
                <button
                    className={[
                        classes.default,
                        active ? classes.active : undefined,
                    ].join(' ')}
                    onClick={this.showMenu}
                >
                    {/*<Icon*/}
                        {/*size={25}*/}
                        {/*className={classes.icon}*/}
                        {/*icon="more"*/}
                    {/*/>*/}
                </button>
                {this.state.showMenu ? (
                    <div className={classes.dropDown}>
                        <fieldset className={classes.fieldSet}>
                            <a href="example.com" className={classes.link}>
                                Text Link
                            </a>
                        </fieldset>
                        <fieldset className={classes.fieldSet}>
                            <a href="example.com" className={classes.link}>
                                Text Link
                            </a>
                        </fieldset>
                        <fieldset className={classes.fieldSet}>
                            <a href="example.com" className={classes.link}>
                                Text Link
                            </a>
                        </fieldset>
                    </div>
                ) : null}
            </div>
        );
    }
}

MenuFeature.defaultProps = {
    active: false,
};

MenuFeature.propTypes = {
    classes: PropTypes.object.isRequired,
    active: PropTypes.bool,
};

export default withStyles(styles)(MenuFeature);
