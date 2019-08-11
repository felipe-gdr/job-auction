import React, { useContext } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import View from './view';
import { UserContext } from '../../contexts/user-context';

// TODO filter watch list by job id
export const USERS_QUERY = gql`
  query {
    users {
      id
      displayName
      avatar
    }
  }
`;

const Nav = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Query query={USERS_QUERY}>
      {({ loading, data }) => {
        const users = !loading && data ? data.users : [];
        return (
          <View
            users={users}
            onChangeLoggedInUser={setUser}
            loggedInUser={user}
          />
        );
      }}
    </Query>
  );
};

export default Nav;
