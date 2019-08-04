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

      users: [User!]!

      tags(query: String): [Tag!]!

      job(id: ID!): Job

      watchList(jobId: ID): [Job!]!
  }

  type Subscription {
    jobAdded: Job
    bidAdded: Bid
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

    addBid(
      userId: ID!
      jobId: ID!
      price: Float!
      comment: String
    ): Bid
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
      bidCount: Int
      bids: [Bid!]!
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