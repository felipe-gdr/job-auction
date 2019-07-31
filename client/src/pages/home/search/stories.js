import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getTags } from '../../../common/mocks';

import View from './view';

const actions = {
    onSelect: action('onSelect'),
};

const tags = getTags();

storiesOf('Search', module)
    .add('default', () => <View  {...actions} items={tags} />)
    .add('with selected', () => <View  {...actions} items={tags} selected={tags[0]} />); 