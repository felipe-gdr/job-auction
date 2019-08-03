import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import View from './view';

export const TAGS_QUERY = gql`
    query {
        tags {
            id
            title
        }
    }
`;

export default props => (
    <Query
        query={TAGS_QUERY}
    >
        {({ loading, data }) => {
            const tags = loading ? [] : data.tags.map(tag => tag.title);

            return (
                <View {...props} tags={tags} />
            )
        }}
    </Query>

);