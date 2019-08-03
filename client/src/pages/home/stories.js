import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { MockedProvider } from 'react-apollo/test-utils';

import Home from './view';
import { TAGS_QUERY } from './search';
import { JOBS_SUBSCRIPTION } from './job-notification';
import { JOBS_RECENT_QUERY } from './job-list';
import { Provider as JobProvider } from '../../contexts/job-context';

import { getTags, getJobs } from '../../common/mocks';

const tags = getTags();
const jobs = getJobs();

const mocks = [
  {
    request: {
      query: TAGS_QUERY,
    },
    result: {
      data: {
        tags
      }
    }
  },
  {
    request: {
      query: JOBS_SUBSCRIPTION,
      variable: {},
    },
    result: {
      data: {}
    }
  },
  {
    request: {
      query: JOBS_SUBSCRIPTION,
      variable: {},
    },
    result: {
      data: {}
    }
  },
  {
    request: {
      query: JOBS_SUBSCRIPTION,
      variable: {},
    },
    result: {
      data: {}
    }
  },
  {
    request: {
      query: JOBS_RECENT_QUERY, 
      variables: {
        lastId: null,
      },
    },
    result: {
      data: {
        jobs
      },
    }
  }
];

storiesOf('Home Page|Main', module)
  .addDecorator(StoryRouter())
  .addDecorator(story => <JobProvider>{story()}</JobProvider>)
  .addDecorator(story => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {story()}
    </MockedProvider>
  ))
  .add('default state', () => <Home />);