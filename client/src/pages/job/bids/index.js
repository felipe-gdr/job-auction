import React, { useContext } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import View from './view';
import { JobContext } from '../../../contexts/job-context';

export const BIDS_QUERY = gql`
    query($jobId: ID!) {
        job(id: $jobId) {
            bids {
                id
                price
                comment
                createdDate
                user {
                    displayName
                    avatar
                }
            }
        }
    }
`;

export default props => {
    const { job: { id } } = useContext(JobContext);
    return (
        <Query
            query={BIDS_QUERY}
            variables={{ jobId: id }}
        >
            {({ loading, data }) => {
                if (loading) return null;

                return (
                    <View {...props} bids={data && data.job ? data.job.bids : []} />
                )
            }}
        </Query>

    );
}
