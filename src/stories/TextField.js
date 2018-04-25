import React from 'react';

import { storiesOf } from '@storybook/react';

import TextField from '../components/TextField';

storiesOf('TextField', module)
  .add('Regular', () => <TextField placeholder="Type something here" />)
  .add('Disabled', () => (
    <TextField placeholder="Type something here" disabled />
  ));
