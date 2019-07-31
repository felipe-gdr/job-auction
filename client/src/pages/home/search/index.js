import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import View from './view';

const TAGS_QUERY = gql`
  query {
    tags {
      id
      title
    }
  }
`;

export default ({ onSelect, selected }) => (
    <Query query={TAGS_QUERY}>
        {({ data, loading, error }) => {
            if (loading) return "loading";

            return <View onSelect={onSelect} items={data.tags} selected={selected}/>
        }}
    </Query>
)