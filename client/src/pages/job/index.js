import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { JobContext } from '../../contexts/job-context';
import View from './view';

const JOB_QUERY = gql`
  query($id: ID!) {
    job(id: $id) {
      id
      title
      description
      dueDate
      createdDate
      tags
      finished
      winningBid
      user {
          id
          displayName
          avatar
      }
    }
  }
`;

const Job = ({ match: { params: { id } }, history }) => {
  const { job, setJob } = useContext(JobContext);

  const handleBack = () => history.push('/');

  return (
    <Query
      query={JOB_QUERY}
      variables={{ id }}>
      {result => {
        const { data, loading, error } = result;

        if (data.job) {
          setJob(data.job);
        }

        return job ? (
          <View job={job} onBack={handleBack} loading={loading} error={error} />
        ) : null
      }}
    </Query>
  );
}

export default withRouter(Job);