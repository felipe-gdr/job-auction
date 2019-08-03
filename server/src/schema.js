const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
      jobsRecent(
        limit: Int
        startAfter: ID
      ) : [Job!]!

      jobsByTag(
        tag: String!
        limit: Int
        startAfter: ID
      ) : [Job!]!

      jobsByUser(
        userId: ID!
        limit: Int
        startAfter: ID
      ) : [Job!]!

      user(username: String id: ID): User 

      tags(query: String): [Tag!]!

      job(id: ID!): Job

      watchList(jobId: ID): [Job!]!

      bids(jobId: ID!): [Bid!]!
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
      finished: Boolean
      winningBid: Float
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
    price: Float!
    comment: String
  }

  type Tag {
    id: ID!
    title: String!
  }
`;
module.exports = typeDefs;