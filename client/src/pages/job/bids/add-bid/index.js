import React, { useContext } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import { JobContext } from '../../../../contexts/job-context';
import { UserContext } from '../../../../contexts/user-context';

import View from './view';

import { BIDS_QUERY } from '../index';

export const ADD_BID_MUTATION = gql`
  mutation AddBid($userId: ID!, $jobId: ID!, $price: Float!, $comment: String) {
    addBid(jobId: $jobId, userId: $userId, price: $price, comment: $comment) {
      id
      price
      comment
      createdDate
      user {
        id
        displayName
        avatar
      }
    }
  }
`;

export default () => {
  const { user } = useContext(UserContext);
  const { job } = useContext(JobContext);

  return (
    <Mutation
      mutation={ADD_BID_MUTATION}
      update={(cache, { data: { addBid } }) => {
        const data = cache.readQuery({
          query: BIDS_QUERY,
          variables: { jobId: job.id }
        });
        const cachedJob = data.job;

        cache.writeQuery({
          query: BIDS_QUERY,
          data: {
            job: {
              ...cachedJob,
              bids: [addBid, ...cachedJob.bids]
            }
          }
        });
      }}
    >
      {addBid => {
        const handleAddBid = data => {
          addBid({ variables: { ...data, jobId: job.id, userId: user.id } });
        };

        return <View onSubmit={handleAddBid} />;
      }}
    </Mutation>
  );
};
