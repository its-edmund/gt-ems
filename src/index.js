import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACEID}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
