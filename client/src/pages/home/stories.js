import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Home from './view';
import { TAGS_QUERY } from './search';
import { JOBS_SUBSCRIPTION } from './job-notification';
import { JOBS_RECENT_QUERY } from './job-list';

import { getTags, getJobs } from '../../common/mocks';
import { withJobProvider, withApolloProvider } from '../../common/test/providers';

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
  .addDecorator(withJobProvider())
  .addDecorator(withApolloProvider(mocks))
  .add('default state', () => <Home />);