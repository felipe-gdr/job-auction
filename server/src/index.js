const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const scalars = require('./scalars');

const PORT = process.env.PORT || 4000;

const app = express();

const apolloServer = new ApolloServer({ typeDefs, resolvers: { ...resolvers, ...scalars } });

apolloServer.applyMiddleware({ app });

const httpServer = createServer(app);

apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`)
})