import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getTags } from '../../../common/mocks';

import View from './view';

const tags = getTags().map(tag => tag.title);

const actions = {
  onChange: action('onChange')
};

storiesOf('Add Job Page|Add tags for a job', module).add(
  'default state',
  () => <View {...actions} tags={tags} />
);
