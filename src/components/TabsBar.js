// @flow

import * as React from 'react';
import { withStyles } from 'material-ui';
import Tabs, { Tab } from './Tabs';
import Icon from './Icon';

type Props = {
  classes: any,
};

type State = {};

const styles = theme => ({
  root: {
    height: '65px',
    backgroundColor: theme.palette.ambient.basePlus90,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '12.25rem',
    boxSizing: 'border-box',
    borderBottom: `5px solid white`,
  },
});

class TabsBar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {active: 'Monitor'};
  }

  handleChange = active => this.setState({active});

  render() {
    const { classes } = this.props;
    const content = {
      Monitor: 'Tab A',
      Configuration: 'Tab B',
      EquipmentInfo: 'Tab C',
      };

      return(
        <div className={classes.root}>
            <Tabs
              active={this.state.active}
              onChange={this.handleChange}
            >
              <Tab
                label="Monitor"
                icon={<Icon icon="monitor" />}
              />
              <Tab
                label="Configuration"
                icon={<Icon icon="configuration" />}
              />
              <Tab
                label="EquipmentInfo"
                icon={<Icon icon="equipmentInfo" />}
              />
              </Tabs>
            <p>{content[this.state.active]}</p>
          </div>
      );
  }
}

export default withStyles(styles)(TabsBar);
