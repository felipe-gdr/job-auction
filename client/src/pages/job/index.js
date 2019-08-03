import React, { useContext } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import View from './view';
import { JobContext } from '../../contexts/job-context';

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
          username
          displayName
      }
    }
  }
`;

export default ({ match: { params: { id } } }) => {
  const { setJob } = useContext(JobContext);

  return (
    <Query
      query={JOB_QUERY}
      variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return "loading";

        setJob(data.job);

        return (
          <View job={data.job} />
        )
      }}
    </Query>
  );
}
