import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getTags } from '../../../common/mocks';

import View from './view';

const actions = {
    onSelect: action('onSelect'),
};

const tags = getTags();

storiesOf('Search bar used to filter jobs', module)
    .add('default state', () => <View  {...actions} items={tags} />)
    .add('selected state', () => <View  {...actions} items={tags} selected={tags[0]} />); 