import React from 'react';
import { storiesOf } from '@storybook/react';
import { MockedProvider } from 'react-apollo/test-utils';

import { getJob, getBids } from '../../common/mocks';
import { Provider as JobProvider } from '../../contexts/job-context';

import View from './view';
import { WATCH_LIST_QUERY } from './follow';
import { BIDS_QUERY } from './bids';

const job = getJob();
const bids = getBids();

const watchListMock = {
    request: {
        query: WATCH_LIST_QUERY,
    },
    result: {
        data: {
            watchList: [
                { id: job.id }
            ]
        }
    }
};

const bidsMock = {
    request: {
        query: BIDS_QUERY,
        variables: {
            jobId: job.id
        }
    },
    result: {
        data: {
            bids
        }
    }
}

const emptyBidsMock = {
    request: {
        query: BIDS_QUERY,
        variables: {
            jobId: job.id
        }
    },
    result: {
        data: {
            bids: []
        }
    }
}

storiesOf('Job Page|Job details page', module)
    .addDecorator(story => (
        <JobProvider initialValue={job}>
            <MockedProvider mocks={[watchListMock, bidsMock]} addTypename={false}>
                {story()}
            </MockedProvider>
        </JobProvider>
    ))
    .add('default state', () => <View job={job} />)
    .add('finished job', () =>
        <View job={{ ...job, finished: true, winingBid: { price: 49.9 } }} bids={bids} />
    );

storiesOf('Job Page|Job details page', module)
    .addDecorator(story => (
        <JobProvider initialValue={job}>
            <MockedProvider mocks={[watchListMock, emptyBidsMock]} addTypename={false}>
                {story()}
            </MockedProvider>
        </JobProvider>
    ))
    .add('job with no bids', () => <View job={job} />)