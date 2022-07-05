import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  ApolloClient, InMemoryCache
} from "@apollo/client";
import { TodoTypePolicies } from './data/todo/cache/todoCache';


export const client = new ApolloClient({
  uri: 'https://api-eu-west-2.graphcms.com/v2/cl4czje2m530c01z618vm3ozh/master',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
