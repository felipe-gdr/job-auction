import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import View from './view';

const JOBS_FRAGMENT = `
  id
  title
  tags 
  dueDate
  image
  bidCount
  user {
    id
    displayName
    avatar
  }
`

export const JOBS_RECENT_QUERY = gql`
  query ($lastId: ID) {
    jobs:jobsRecent(startAfter: $lastId) {
      ${JOBS_FRAGMENT}
    }
  }
`;

export const JOBS_BY_TAG_QUERY = gql`
  query ($lastId: ID, $tag: String!) {
    jobs:jobsByTag(startAfter: $lastId, tag: $tag) {
      ${JOBS_FRAGMENT}
    }
  }
`;

const getQuery = tag => tag ? JOBS_BY_TAG_QUERY : JOBS_RECENT_QUERY;

const getVariables = tag => tag ? { lastId: null, tag: tag.title } : { lastId: null };

export default ({ tag }) => (
  <Query
    query={getQuery(tag)}
    variables={getVariables(tag)}
    fetchPolicy="cache-and-network"
    notifyOnNetworkStatusChange
  >
    {({ fetchMore, subscribeToMore, networkStatus, ...result }) => (
      <View
        {...result}
        tag={tag}
        fetchingMore={networkStatus === 3}
        onLoadMore={data => {
          return fetchMore({
            variables: {
              lastId: data.jobs && data.jobs.length > 0 ? data.jobs[data.jobs.length - 1].id : null
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return { ...prev, jobs: [...prev.jobs, ...fetchMoreResult.jobs] };
            }
          })
        }}
      />
    )}
  </Query>
);