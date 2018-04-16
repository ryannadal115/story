import React from 'react';

import { storiesOf } from '@storybook/react';
import ButtonwithCheckbox from '../components/ButtonwithCheckbox';

storiesOf('ButtonwithCheckbox', module)
    .add('Filter Inactive', () => (
        <ButtonwithCheckbox default>Filter Inactive</ButtonwithCheckbox>
    ))
    .add('Filter Active', () => (
        <ButtonwithCheckbox active>Filter Active</ButtonwithCheckbox>
    ))
    .add('Filter Open', () => (
        <ButtonwithCheckbox open>Filter Open</ButtonwithCheckbox>
    ));
