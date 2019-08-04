import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import View from './view';

const actions = {
  onSave: action('onSave'),
};

storiesOf('Add Job Page|Add images for a job', module)
    .add('default state', () => <View {...actions} />)