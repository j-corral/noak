import React from 'react';

import { Meta } from '@storybook/react';

import { Hero } from '../src/Hero';

export default {
    component: Hero,
    title: 'Components/Hero',
} as Meta;

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithText = Template.bind({});
WithText.args = {
    title: 'Custom Text',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
    title: 'Custom Size',
    fontSize: '250px',
};

export const JustifyLeft = Template.bind({});
JustifyLeft.args = {
    title: 'Left',
    justifyContent: 'left',
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
    title: 'Center',
    justifyContent: 'center',
};

export const JustifyRight = Template.bind({});
JustifyRight.args = {
    title: 'Right',
    justifyContent: 'right',
};

export const CustomGradient = Template.bind({});
CustomGradient.args = {
    title: 'Custom Gradient',
    colorBegin: 'green.500',
    colorEnd: 'yellow.500',
};
