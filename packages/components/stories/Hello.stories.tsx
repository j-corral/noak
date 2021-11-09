import React from 'react';

import { Meta } from '@storybook/react';

import { Hello } from '../src/Hello';

export default {
    component: Hello,
    title: 'Components/Hello',
} as Meta;

export const Primary: React.VFC<{}> = () => Hello('toto');
