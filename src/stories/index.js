import React from 'react';

import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import ButtonReadme from '../components/Button/README.md';
import { withDocs } from 'storybook-readme';

import '../index.css';
import Button from '../components/Button/Button';

storiesOf('Button', module).add(
  'with text',
  withDocs(ButtonReadme, () => (
    <Button onClick={action('Clicked')}>Hello World!</Button>
  ))
);
