import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuFeature from '../components/MenuFeature';

storiesOf('MenuFeature', module)
    .add('Normal', () => <MenuFeature />)
    .add('Active', () => <MenuFeature active />);