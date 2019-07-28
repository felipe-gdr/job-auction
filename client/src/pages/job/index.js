import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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
      user {
          username
          displayName
      }
    }
  }
`;

export default ({ match: { params: { id }}}) => (
    <Query 
        query={JOB_QUERY}
        variables={{ id }}>
        {({ data, loading, error }) => {
            if (loading) return "loading";

            return <View job={data.job} />
        }}
    </Query>
);