import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import View from './view';

const actions = {
  onSubmit: action('onSubmit'),
};

storiesOf('Add bid form', module)
    .add('default state', () => <View {...actions} />)