import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import View from './view';

import { getJobs } from '../../../common/mocks';

const actions = {
  subscribeToNewJobs: action('subscribeToNewJobs'),
  onLoadMore: action('onLoadMore'),
  onClickJob: action('onClickJob'),
};

storiesOf('JobList', module)
  .add('error', () => <View {...actions} error />)
  .add('loading', () => <View {...actions} loading />)
  .add('default', () => <View {...actions} data={{ jobs: getJobs() }} />)