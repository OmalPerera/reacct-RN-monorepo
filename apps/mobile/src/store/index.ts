/* eslint-disable @nx/enforce-module-boundaries */
import { rootReducer } from '@m-repo/common';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
