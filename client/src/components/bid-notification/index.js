import React, { useContext } from 'react';
import { Subscription } from 'react-apollo';
import { gql } from 'apollo-boost';

import View from './view';
import { UserContext } from '../../contexts/user-context';
import { withRouter } from 'react-router';

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

const noop = () => {};

const BidNotification = ({ filterBid, onReceiveBid = noop, history }) => {
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
        )
          return null;

        if (filterBid && !filterBid(data.bidAdded)) return null;

        const handleClick = () => history.push(`/job/${data.bidAdded.job.id}`);

        return <View bid={data.bidAdded} onClick={handleClick} />;
      }}
    </Subscription>
  );
};

export default withRouter(BidNotification);
