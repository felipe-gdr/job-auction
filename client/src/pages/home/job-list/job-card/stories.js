import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getJob } from '../../../../common/mocks';

import View from './view';
import Loading from './loading';

const actions = {
    onClick: action('onClick'),
};

storiesOf('JobCard', module)
    .add('default', () => <View job={getJob()} {...actions} />)
    .add('loading', () => <Loading />);