import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Notes', () => <Sidebar />)
  .add('Twitters', () => <Sidebar activeColor="twitter" />)
  .add('Articles', () => <Sidebar activeColor="article" />);
