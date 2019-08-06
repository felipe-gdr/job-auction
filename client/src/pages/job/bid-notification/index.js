import React, { useContext } from 'react';
import { Subscription } from "react-apollo";
import { gql } from "apollo-boost";

import View from './view';
import { JobContext } from '../../../contexts/job-context';
import { UserContext } from '../../../contexts/user-context';

export const BIDS_SUBSCRIPTION = gql`
  subscription onBidAdded {
    bidAdded {
      id
      price
      comment
      createdDate
      job {
        id
      }
      user {
        id
        displayName
        avatar
      }
    }
  }
`;

export default () => {
  const { job } = useContext(JobContext);
  const { user } = useContext(UserContext);

  return (
    <Subscription
      subscription={BIDS_SUBSCRIPTION}
    >
      {({ loading, data }) => {
        if (
          loading ||
          !data ||
          !data.bidAdded ||
          data.bidAdded.job.id !== job.id ||
          data.bidAdded.user.id === user.id
        ) return null;

        return <View bid={data.bidAdded} />;
      }}
    </Subscription>
  );
}