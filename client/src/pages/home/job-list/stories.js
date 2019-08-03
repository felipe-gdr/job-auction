import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import View from './view';

import { getJobs } from '../../../common/mocks';

const jobs = getJobs();

const actions = {
  subscribeToNewJobs: action('subscribeToNewJobs'),
  onLoadMore: action('onLoadMore'),
  onClickJob: action('onClickJob'),
};

storiesOf('Home Page|List of jobs', module)
  .addDecorator(StoryRouter())
  .add('default state', () => <View {...actions} data={{ jobs }} />)
  .add('loading state', () => <View {...actions} loading />)
  .add('error state', () => <View {...actions} error />);