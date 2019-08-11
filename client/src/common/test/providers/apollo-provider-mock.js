import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';

import { getTags, getJobs, getJob, getBids } from '../../mocks';
import { TAGS_QUERY } from '../../../pages/home/search';
import { JOBS_SUBSCRIPTION } from '../../../pages/home/job-notification';
import { JOBS_RECENT_QUERY } from '../../../pages/home/job-list';
import { BIDS_SUBSCRIPTION } from '../../../components/bid-notification';

import { WATCH_LIST_QUERY } from '../../../pages/job/follow';
import { BIDS_QUERY } from '../../../pages/job/bids';

const tags = getTags();
const jobs = getJobs();
const bids = getBids();
const job = getJob();

export const createMock = (name, { query, variables = null, data = {} }) => ({
  [name]: {
    request: {
      query,
      variables
    },
    result: {
      data
    }
  }
});

const defaultMocks = {
  ...createMock('BIDS_SUBSCRIPTION', { query: BIDS_SUBSCRIPTION }),
  ...createMock('BIDS_QUERY', {
    query: BIDS_QUERY,
    variables: { jobId: job.id },
    data: { job: { id: job.id, bids } }
  }),
  ...createMock('WATCH_LIST_QUERY', {
    query: WATCH_LIST_QUERY,
    data: { watchList: [{ id: job.id }] }
  }),
  ...createMock('TAGS_QUERY', { query: TAGS_QUERY, data: { tags } }),
  ...createMock('JOBS_SUBSCRIPTION', { query: JOBS_SUBSCRIPTION }),
  ...createMock('JOBS_RECENT_QUERY', {
    query: JOBS_RECENT_QUERY,
    variables: { lastId: null },
    data: { jobs }
  })
};

const getDuplicatedSubscriptions = () => [
  createMock('BIDS_SUBSCRIPTION', { query: BIDS_SUBSCRIPTION })
    .BIDS_SUBSCRIPTION,
  createMock('BIDS_SUBSCRIPTION', { query: BIDS_SUBSCRIPTION })
    .BIDS_SUBSCRIPTION
];

const getMockValues = mockMap => {
  const mergedMocks = { ...defaultMocks, ...mockMap };

  return [...Object.values(mergedMocks), ...getDuplicatedSubscriptions()];
};

export const withApolloProvider = (mockMap = {}) => wrappedComponent => (
  <MockedProvider mocks={getMockValues(mockMap)} addTypename={false}>
    {wrappedComponent()}
  </MockedProvider>
);
