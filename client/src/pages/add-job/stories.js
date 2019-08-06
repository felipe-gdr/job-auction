import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import View from './view';

import { withApolloProvider } from '../../common/test/providers'

const actions = {
  onSubmit: action('onSubmit'),
};

storiesOf('Add Job Page|Add job form', module)
  .addDecorator(withApolloProvider())
  .add('default state', () => <View {...actions} />)
  .add('loading state', () => <View {...actions} loading />);