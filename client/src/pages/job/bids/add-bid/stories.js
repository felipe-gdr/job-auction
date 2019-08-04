import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import View from './view';

const actions = {
  onSubmit: action('onSubmit'),
};

storiesOf('Job Page|Add bid form', module)
    .add('default state', () => <View {...actions} />)