import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// configure default options
// disable cache and use redux store instead
const defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all'
  }
};

// configure link options with graphQL endpoint
const link = new HttpLink({
  uri: `${window.location.protocol}//${window.location.hostname}:${process.env.SERVER_PORT}/graphql`,
});

// create cache for the client
const cache = new InMemoryCache({
  addTypename: false
});

// clear client
const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

export default client;
