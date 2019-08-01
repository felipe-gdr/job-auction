import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getJob, getBids } from '../../common/mocks';

import View from './view';

const job = getJob();
const bids = getBids();

storiesOf('Job details page', module)
    .add('default state', () => <View job={job} bids={bids}/>)
    .add('job with no bids', () => <View job={job} bids={[]}/>)
    .add('finished job', () =>
        <View job={{ ...job, finished: true, winingBid: { price: 49.9 } }} bids={bids} />
    ); 