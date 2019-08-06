import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getJob, getBids } from '../../common/mocks';
import {
    withApolloProvider,
    withJobProvider,
    withUserProvider
} from '../../common/test/providers';

import View from './view';
import { WATCH_LIST_QUERY } from './follow';
import { BIDS_QUERY } from './bids';
import { BIDS_SUBSCRIPTION } from '../../components/bid-notification';

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
                id: job.id,
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
                id: job.id,
                bids: [],
            },
        }
    }
}

const bidSubscriptionMock = {
    request: {
        query: BIDS_SUBSCRIPTION
    },
    result: {
        data: {},
    }
}

const actions = {
    onBack: action('onBack'),
};

storiesOf('Job Page|Job details page', module)
    .addDecorator(withJobProvider(job))
    .addDecorator(withUserProvider())
    .addDecorator(withApolloProvider([watchListMock, bidsMock, bidSubscriptionMock, bidSubscriptionMock]))
    .add('default state', () => <View job={job} {...actions} />)
    .add('finished job', () =>
        <View job={{ ...job, finished: true, winingBid: { price: 49.9 } }} bids={bids} {...actions} />
    )
    .add('loading state', () => <View job={job} loading />);

storiesOf('Job Page|Job details page', module)
    .addDecorator(withJobProvider(job))
    .addDecorator(withUserProvider())
    .addDecorator(withApolloProvider([watchListMock, emptyBidsMock, bidSubscriptionMock, bidSubscriptionMock]))
    .add('job with no bids', () => <View job={job} {...actions} />)