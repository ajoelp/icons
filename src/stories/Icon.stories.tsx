import React from 'react';
import { Icon, Props } from '../';
import { Story } from '@storybook/react';

export default {
  title: 'Icon',
  component: Icon,
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
const Template: Story<Props> = props => <Icon {...props} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'solid',
  icon: 'Adjustments',
};
