import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import View from './view';

const actions = {
    onChangeLoggedInUser: action('onChangeLoggedInUser'),
};

const users = [
    {
        id: 1,
        displayName: 'User 1',
        avatar: 'https://robohash.org/maioresnequevoluptatem.jpg?size=50x50&set=set1'
    }
]

storiesOf('Nav', module)
    .add('default', () => (
        <View users={users} {...actions} />
    )); 