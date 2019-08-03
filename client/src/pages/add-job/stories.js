import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MockedProvider } from 'react-apollo/test-utils';

import View from './view';

import { TAGS_QUERY } from './add-tags';

import { getTags } from '../../common/mocks';

const actions = {
  onSubmit: action('onSubmit'),
};

const tags = getTags();

const mocks = [
  {
    request: {
      query: TAGS_QUERY,
      variables: {}
    },
    result: {
      data: {
        tags
      }
    }
  }
];

storiesOf('Add Job Page|Add job form', module)
  .addDecorator(story => (
    <MockedProvider mocks={mocks} addTypename={false}>
      {story()}
    </MockedProvider>
  ))
  .add('default state', () => <View {...actions} />)