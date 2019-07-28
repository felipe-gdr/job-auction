import React, { useState } from 'react';
import { Subscription } from "react-apollo";
import { gql } from "apollo-boost";

import View from './view';

export const JOBS_SUBSCRIPTION = gql`
  subscription onCommentAdded {
    jobAdded {
      id
      title
      tags
    }
  }
`;

const TIMEOUT = 5000;

export default () => {
  const [jobs, setJobs] = useState([]);

  const addJob = job => setJobs([...jobs, job]);
  const removeJob = job => setJobs(jobs.filter(j => j.id !== job.id))

  const onDataReceived = ({ subscriptionData: { data } }) => {
    addJob(data.jobAdded);

    setTimeout(() => {
      removeJob(data.jobAdded)
    }, TIMEOUT);
  }

  return (
    <Subscription
      subscription={JOBS_SUBSCRIPTION}
      onSubscriptionData={onDataReceived}
    >
      {({ loading }) => {
        if (loading) return null;

        return <View jobs={jobs} onRemoveJob={removeJob} />;
      }}
    </Subscription>
  );
}
