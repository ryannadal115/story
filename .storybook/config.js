import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import withTheme from '../src/withTheme';

const WrapperRouter = storyFn => (
    <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>
);

const GapDecorator = storyFn => (
    <div style={{ padding: '1rem' }}>{storyFn()}</div>
);

const Wrapper = ({ children }) => <div>{children}</div>;
const WrapperWithTheme = withTheme(Wrapper);

const ThemeDecorator = storyFn => (
    <WrapperWithTheme>{storyFn()}</WrapperWithTheme>
);

addDecorator(GapDecorator);
addDecorator(ThemeDecorator);
addDecorator(WrapperRouter);

function loadStories() {
    require('../src/stories/ButtonwithCheckbox');
    require('../src/stories/MenuFeature');
    require('../src/stories/TextField');
    require('../src/stories/Tabs');
}

configure(loadStories, module);
