import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';

export const withApolloProvider = mocks => wrappedComponent => (
    <MockedProvider mocks={mocks} addTypename={false}>
        {wrappedComponent()}
    </MockedProvider>
)