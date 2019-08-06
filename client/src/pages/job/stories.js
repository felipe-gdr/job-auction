import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import { getJob, getBids } from '../../common/mocks';
import {
    withApolloProvider,
    withJobProvider,
    withUserProvider,
    createMock
} from '../../common/test/providers';
import { BIDS_QUERY } from './bids';

import View from './view';

const actions = {
    onBack: action('onBack'),
};

const job = getJob();
const bids = getBids();

const emptyBidsMock = createMock('BIDS_QUERY', { query: BIDS_QUERY, variables: { jobId: job.id }, data: { job: { id: job.id, bids: [] } } });

storiesOf('Job Page|Job details page', module)
    .addDecorator(StoryRouter())
    .addDecorator(withJobProvider(job))
    .addDecorator(withUserProvider())
    .addDecorator(withApolloProvider())
    .add('default state', () => <View job={job} {...actions} />)
    .add('finished job', () =>
        <View job={{ ...job, finished: true, winingBid: { price: 49.9 } }} bids={bids} {...actions} />
    )
    .add('loading state', () => <View job={job} loading />);

storiesOf('Job Page|Job details page', module)
    .addDecorator(StoryRouter())
    .addDecorator(withJobProvider(job))
    .addDecorator(withUserProvider())
    .addDecorator(withApolloProvider(emptyBidsMock))
    .add('job with no bids', () => <View job={job} {...actions} />)