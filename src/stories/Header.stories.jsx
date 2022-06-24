import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

LoggedIn.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/gC7G4gjYj0RY4YgsR22Cq4/Storybook-Design-System-Test?node-id=1%3A15'
 }
}

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
