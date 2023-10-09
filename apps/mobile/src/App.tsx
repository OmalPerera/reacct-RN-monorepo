/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AppNavigator } from './navigator/AppNavigator';
import 'react-native-gesture-handler';
import { ApolloProvider } from '@apollo/client';
import { client } from '@m-repo/network';

export const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppNavigator isNewUser={false} />
      </ApolloProvider>
    </Provider>
  );
};

export default App;
