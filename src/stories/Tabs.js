import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tabs, { Tab } from '../components/Tabs/Tabs';
import Icon from '../components/Icon';

storiesOf('Tabs', module)
  .add('With text', () => (
    <Tabs>
      <Tab onClick={action('clicked tab 1')} label="Tab Item Active" isActive />
      <Tab onClick={action('clicked tab 2')} label="Tab Item" />
      <Tab onClick={action('clicked tab 3')} label="Tab Item" />
    </Tabs>
  ))
  .add('With text and icon', () => (
    <Tabs>
      <Tab
        isActive
        onClick={action('clicked tab 1')}
        label="Monitor"
        icon={<Icon icon="monitor" />}
      />
      <Tab
        onClick={action('clicked tab 2')}
        label="Sensor Health"
        icon={<Icon icon="sensorHealth" />}
      />
      <Tab
        onClick={action('clicked tab 3')}
        label="Configuration"
        icon={<Icon icon="configuration" />}
      />
      <Tab
        onClick={action('clicked tab 4')}
        label="EquipmentInfo"
        icon={<Icon icon="equipmentInfo" />}
      />
      <Tab
        onClick={action('clicked tab 5')}
        label="Maintenance"
        icon={<Icon icon="maintenance" />}
      />
    </Tabs>
  ));
