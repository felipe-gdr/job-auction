import React from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import View from './view';

// TODO filter watch list by job id
export const WATCH_LIST_QUERY = gql`
    query {
        watchList {
            id
        }
    }
`;

// TODO get jobId from the context
const jobId = 1;

export default props => (
    <Query
        query={WATCH_LIST_QUERY}
    >
        {({ loading, data }) => {
            if (loading) return null;

            return (
                <View {...props} isFollowing={!!data.watchList.find(job => job.id === jobId)} />
            )
        }}
    </Query>

);