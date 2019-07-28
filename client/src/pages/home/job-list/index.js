import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { JOBS_SUBSCRIPTION } from '../job-subscription';

import View from './view';

const JOBS_RECENT_QUERY = gql`
  query ($lastId: ID) {
    jobs:jobsRecent(startAfter: $lastId) {
      id
      title
      tags 
    }
  }
`;

const JOBS_BY_TAG_QUERY = gql`
  query ($lastId: ID, $tag: String!) {
    jobs:jobsByTag(startAfter: $lastId, tag: $tag) {
      id
      title
      tags 
    }
  }
`;

const getQuery = tag => tag ? JOBS_BY_TAG_QUERY : JOBS_RECENT_QUERY;

const getVariables = tag => tag ? { lastId: null, tag: tag.title } : { lastId: null };

export default ({ tag }) => (
    <Query
        query={getQuery(tag)}
        variables={getVariables(tag)}
    >
        {({ fetchMore, subscribeToMore, ...result }) => (
            <View
                {...result}
                tag={tag}
                onLoadMore={() =>
                    fetchMore({
                        variables: {
                            lastId: result.data.jobs && result.data.jobs.length > 0 && result.data.jobs[result.data.jobs.length - 1].id
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return { ...prev, jobs: [...prev.jobs, ...fetchMoreResult.jobs] };
                        }
                    })
                }
                subscribeToNewJobs={() =>
                    subscribeToMore({
                        document: JOBS_SUBSCRIPTION,
                        updateQuery: (prev, { subscriptionData }) => {
                            if (!subscriptionData.data) return prev;
                            if (tag && !subscriptionData.data.jobAdded.tags.find(t => tag.title === t)) return prev;

                            const newFeedItem = subscriptionData.data.jobAdded;

                            return { ...prev, jobs: [newFeedItem, ...prev.jobs] };
                        }
                    })
                }
            />
        )}
    </Query>
);