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
    this.state = {
      activeTab: 0,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedTab) {
    this.setState({
      activeTab: selectedTab,
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Tabs
          className={classes.tabs}
          activeKey={this.state.activeTab}
          onSelect={this.handleSelect}
        >
          <Tab activeKey={0} label="Monitor" icon={<Icon icon="monitor" />} />
          <Tab
            activeKey={1}
            label="Configuration"
            icon={<Icon icon="configuration" />}
          />
          <Tab
            activeKey={2}
            label="EquipmentInfo"
            icon={<Icon icon="equipmentInfo" />}
          />
          <Tab
            activeKey={3}
            label="Maintenance"
            icon={<Icon icon="maintenance" />}
          />
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(TabsBar);
