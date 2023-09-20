/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AppNavigator } from './navigator/AppNavigator';
import 'react-native-gesture-handler';

export const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator isNewUser={false} />
    </Provider>
  );
};

export default App;
