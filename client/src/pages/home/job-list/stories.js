import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import View from './view';

import { getJobs } from '../../../common/mocks';

const actions = {
  subscribeToNewJobs: action('subscribeToNewJobs'),
  onLoadMore: action('onLoadMore'),
  onClickJob: action('onClickJob'),
};

storiesOf('JobList', module)
  .addDecorator(StoryRouter())
  .add('error', () => <View {...actions} error />)
  .add('loading', () => <View {...actions} loading />)
  .add('default', () => <View {...actions} data={{ jobs: getJobs() }} />)