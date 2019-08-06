import React, { useContext } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import View from './view';
import { JobContext } from '../../../contexts/job-context';
import { UserContext } from '../../../contexts/user-context';
import { BIDS_SUBSCRIPTION } from '../../../components/bid-notification';

export const BID_FRAGMENT = `
    id
    price
    comment
    createdDate
    user {
        id
        displayName
        avatar
    }
`

export const BIDS_QUERY = gql`
    query($jobId: ID!) {
        job(id: $jobId) {
            id
            bids {
                ${BID_FRAGMENT}
            }
        }
    }
`;

export default props => {
    const { job } = useContext(JobContext);
    const { user } = useContext(UserContext);
    return (
        <Query
            query={BIDS_QUERY}
            variables={{ jobId: job.id }}
        >
            {({ loading, data, subscribeToMore }) => {
                return (
                    <View
                        {...props}
                        loading={loading}
                        bids={data && data.job ? data.job.bids : []}
                        subscribeToNewBids={() =>
                            subscribeToMore({
                                document: BIDS_SUBSCRIPTION,
                                updateQuery: (prev, { subscriptionData }) => {
                                    if (!subscriptionData.data || !subscriptionData.data.bidAdded) return prev;
                                    if (subscriptionData.data.bidAdded.user.id === user.id) return prev;
                                    if (subscriptionData.data.bidAdded.job.id !== job.id) return prev;

                                    const updatedJob = { ...prev.job, bids: [subscriptionData.data.bidAdded, ...prev.job.bids, ] }

                                    return { ...prev, job: updatedJob };
                                }
                            })
                        }
                    />
                )
            }}
        </Query>

    );
}
