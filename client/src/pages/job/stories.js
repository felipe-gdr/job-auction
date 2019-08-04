import React from 'react';
import { storiesOf } from '@storybook/react';

import { getJob, getBids } from '../../common/mocks';
import { withApolloProvider, withJobProvider } from '../../common/test/providers';

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
            job: {
                bids,
            }
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
            job: {
                bids: [],
            },
        }
    }
}

storiesOf('Job Page|Job details page', module)
    .addDecorator(withJobProvider(job))
    .addDecorator(withApolloProvider([watchListMock, bidsMock]))
    .add('default state', () => <View job={job} />)
    .add('finished job', () =>
        <View job={{ ...job, finished: true, winingBid: { price: 49.9 } }} bids={bids} />
    );

storiesOf('Job Page|Job details page', module)
    .addDecorator(withJobProvider(job))
    .addDecorator(withApolloProvider([watchListMock, emptyBidsMock]))
    .add('job with no bids', () => <View job={job} />)