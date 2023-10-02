/* eslint-disable @nx/enforce-module-boundaries */
import { rootReducer } from '../shared/common/src/lib/store/';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
