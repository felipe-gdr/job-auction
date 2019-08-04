import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import View from './view';

import { TAGS_QUERY } from './add-tags';

import { getTags } from '../../common/mocks';
import { withApolloProvider } from '../../common/test/providers'

const actions = {
  onSubmit: action('onSubmit'),
};

const tags = getTags();

const mocks = [
  {
    request: {
      query: TAGS_QUERY,
    },
    result: {
      data: {
        tags
      }
    }
  }
];

storiesOf('Add Job Page|Add job form', module)
  .addDecorator(withApolloProvider(mocks))
  .add('default state', () => <View {...actions} />);