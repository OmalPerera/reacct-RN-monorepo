/* eslint-disable @nx/enforce-module-boundaries */
import { rootReducer } from '../shared/common/src/lib/store/';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { ChatReducerType } from '@m-repo/types';
import { CounterReducerType } from '@m-repo/types';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

export type RootStoreType = {
  counterReducer: CounterReducerType;
  chatReducer: ChatReducerType;
};
