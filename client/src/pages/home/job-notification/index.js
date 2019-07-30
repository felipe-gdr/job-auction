import React, { useState } from 'react';
import { Subscription } from "react-apollo";
import { gql } from "apollo-boost";
import { withRouter } from 'react-router';

import View from './view';

export const JOBS_SUBSCRIPTION = gql`
  subscription onCommentAdded {
    jobAdded {
      id
      title
      createdDate
      description
      user {
        avatar
      }
    }
  }
`;

const JobNotification = ({ history }) => (
  <Subscription
    subscription={JOBS_SUBSCRIPTION}
  >
    {({ loading, data }) => {
      if (loading || !data) return null;

      return <View job={data.jobAdded} onClick={job => history.push(`/job/${job.id}`)} />;
    }}
  </Subscription>
);

export default withRouter(JobNotification);