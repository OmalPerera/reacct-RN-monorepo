import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { BASE_URL } from './url';

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});
