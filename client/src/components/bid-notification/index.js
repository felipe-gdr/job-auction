import React, { useContext } from 'react';
import { Subscription } from "react-apollo";
import { gql } from "apollo-boost";

import View from './view';
import { UserContext } from '../../contexts/user-context';

export const BIDS_SUBSCRIPTION = gql`
  subscription onBidAdded {
    bidAdded {
      id
      price
      comment
      createdDate
      job {
        id
        title
      }
      user {
        id
        displayName
        avatar
      }
    }
  }
`;

const noop = () => { };

export default ({ filterBid, onReceiveBid = noop }) => {
  const { user } = useContext(UserContext);

  return (
    <Subscription
      subscription={BIDS_SUBSCRIPTION}
      onSubscriptionData={onReceiveBid}
    >
      {({ loading, data }) => {
        if (
          loading ||
          !data ||
          !data.bidAdded ||
          data.bidAdded.user.id === user.id
        ) return null;

        if (filterBid && !filterBid(data.bidAdded)) return null;

        return <View bid={data.bidAdded} />;
      }}
    </Subscription>
  );
}