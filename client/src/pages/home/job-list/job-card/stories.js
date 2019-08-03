import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getJob } from '../../../../common/mocks';

import View from './view';
import Loading from './loading';

const actions = {
    onClick: action('onClick'),
};

storiesOf('Home Page|Job item to be displayed on the list', module)
    .add('default state', () => <View job={getJob()} {...actions} />)
    .add('loading state', () => <Loading />);