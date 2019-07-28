import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pages from './pages';
import * as serviceWorker from './serviceWorker';

import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloLink, split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
});

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: {
        reconnect: true,
    },
});

const terminatingLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return (
        kind === 'OperationDefinition' && operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
);
  
const link = ApolloLink.from([terminatingLink]);
  
const cache = new InMemoryCache();
  
const client = new ApolloClient({
    link,
    cache,
});

function Main() {
    return (
        <ApolloProvider client={client}>
            <Pages />
        </ApolloProvider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
