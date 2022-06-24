import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gC7G4gjYj0RY4YgsR22Cq4/Untitled?node-id=0%3A10'
 }
}
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Hello World',
};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gC7G4gjYj0RY4YgsR22Cq4/Storybook-Design-System-Test?node-id=34%3A8'
 }
}

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
