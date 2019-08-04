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

export default props => {
    const { user, setUser } = useContext(UserContext);

    return (
        <Query
            query={USERS_QUERY}
        >
            {({ loading, data }) => {
                if (loading) return null;

                return (
                    <View
                        users={data.users}
                        onChangeLoggedInUser={setUser}
                        loggedInUser={user}
                    />
                )
            }}
        </Query>

    );
}

