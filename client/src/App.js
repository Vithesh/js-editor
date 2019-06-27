import React from 'react';
import { ApolloProvider } from 'react-apollo';

import client from './apollo/client';
import Routes from './features/routes';

const App = () => {
  return (
    <ApolloProvider client={ client }>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
