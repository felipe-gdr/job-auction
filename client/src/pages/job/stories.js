import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MockedProvider } from 'react-apollo/test-utils';

import { getJob, getBids } from '../../common/mocks';

import View from './view';
import { WATCH_LIST_QUERY } from './follow';

const job = getJob();
const bids = getBids();

const mocks = [
    {
        request: {
            query: WATCH_LIST_QUERY,
        },
        result: {
            data: {
                watchList: [
                    { id: 1 }, { id: 2 }
                ]
            }
        }
    }
];

storiesOf('Job Page|Job details page', module)
    .addDecorator(story => (
        <MockedProvider mocks={mocks} addTypename={false}>
            {story()}
        </MockedProvider>
    ))
    .add('default state', () => <View job={job} bids={bids} />)
    .add('job with no bids', () => <View job={job} bids={[]} />)
    .add('finished job', () =>
        <View job={{ ...job, finished: true, winingBid: { price: 49.9 } }} bids={bids} />
    ); 