import React, { useContext } from 'react';
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { withRouter } from 'react-router-dom';

import { UserContext } from '../../contexts/user-context';

import View from './view';

export const ADD_JOB_MUTATION = gql`
  mutation AddJob(
      $title: String!
      $description: String!
      $userId: ID!
      $tags: [String]
      $dueDate: Date
      $image: String
  ) {
    addJob(
        title: $title
        description: $description 
        userId: $userId 
        tags: $tags 
        dueDate: $dueDate 
        image: $image 
    ) {
        id
        title
        description
        tags 
        dueDate
        image
        bidCount
        user {
            id
            displayName
            avatar
        }
    }
  }
`;

const AddJob = ({ history }) => {
    const { user } = useContext(UserContext);

    const handleOnCompleted = () => history.push('/');

    return (
        <Mutation
            mutation={ADD_JOB_MUTATION}
            onCompleted={handleOnCompleted}
        >
            {(addJob, { loading, error }) => {

                const handleAddJob = data => {
                    addJob({ variables: { ...data, userId: user.id } });
                }

                return <View onSubmit={handleAddJob} loading={loading} error={error} />
            }}
        </Mutation>
    );
}

export default withRouter(AddJob);