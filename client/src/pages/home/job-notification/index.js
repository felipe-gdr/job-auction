import React from 'react';
import { Subscription } from 'react-apollo';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router';

import View from './view';

export const JOBS_SUBSCRIPTION = gql`
  subscription onJobAdded {
    jobAdded {
      id
      title
      createdDate
      description
      user {
        id
        avatar
        displayName
      }
    }
  }
`;

const JobNotification = ({ history }) => (
  <Subscription subscription={JOBS_SUBSCRIPTION}>
    {({ loading, data }) => {
      if (loading || !data || !data.jobAdded) return null;

      return (
        <View
          job={data.jobAdded}
          onClick={job => history.push(`/job/${job.id}`)}
        />
      );
    }}
  </Subscription>
);

export default withRouter(JobNotification);
