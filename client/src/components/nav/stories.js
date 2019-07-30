import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import View from './view';

const actions = {
    onClick: action('onClick'),
};

storiesOf('Nav', module)
    .add('default', () => (
        <View />
    )); 