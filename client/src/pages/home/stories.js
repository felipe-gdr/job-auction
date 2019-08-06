import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Home from './view';

import { withJobProvider, withApolloProvider, withUserProvider } from '../../common/test/providers';

storiesOf('Home Page|Main', module)
  .addDecorator(StoryRouter())
  .addDecorator(withJobProvider())
  .addDecorator(withApolloProvider())
  .addDecorator(withUserProvider())
  .add('default state', () => <Home />);