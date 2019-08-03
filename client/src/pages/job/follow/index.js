import React, { useContext } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import View from './view';
import { JobContext } from '../../../contexts/job-context';

// TODO filter watch list by job id
export const WATCH_LIST_QUERY = gql`
    query {
        watchList {
            id
        }
    }
`;

export default props => {
    const { job: { id } } = useContext(JobContext);
    return (
        <Query
            query={WATCH_LIST_QUERY}
        >
            {({ loading, data }) => {
                if (loading) return null;

                return (
                    <View {...props} isFollowing={!!data.watchList.find(job => job.id === id)} />
                )
            }}
        </Query>

    );
}
