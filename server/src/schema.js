const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
      jobsRecent(
        limit: Int
        startAfter: ID
      ) : [Job]

      jobsByTag(
        tag: String!
        limit: Int
        startAfter: ID
      ) : [Job]

      jobsByUser(
        userId: ID!
        limit: Int
        startAfter: ID
      ) : [Job]

      user(username: String id: ID): User 

      tags(query: String): [Tag]!

      job(id: ID!): Job
  }

  type Subscription {
    jobAdded: Job
  }

  type Mutation {
    addJob(
      title: String!
      description: String!
      userId: ID!
      tags: [String]
      dueDate: Date
      image: String
    ): Job
  }

  type Job {
      id: ID!
      createdDate: Date 
      dueDate: Date
      user: User
      title: String!
      description: String
      tags: [String!]
      image: String
  }

  type User {
    id: ID
    username: String
    displayName: String
    avatar: String
  }

  type Bid {
    id: ID!
    createdDate: Date!
    user: User! 
    job: Job! 
    offer: Float!
  }

  type Tag {
    id: ID!
    title: String!
  }
`;
module.exports = typeDefs;