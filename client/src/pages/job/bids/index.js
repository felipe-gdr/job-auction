import React, { useContext } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import View from './view';
import { JobContext } from '../../../contexts/job-context';

export const BIDS_QUERY = gql`
    query($jobId: ID!) {
        bids(jobId: jobId) {
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
                    <View {...props} bids={data.bids} />
                )
            }}
        </Query>

    );
}
