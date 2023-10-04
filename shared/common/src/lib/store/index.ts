/* eslint-disable @nx/enforce-module-boundaries */
import { combineReducers } from 'redux';
import { counterReducer } from '@m-repo/counter-module';
import { chatReducer } from '@m-repo/chat-module';
import { ChatReducerType, CounterReducerType } from '@m-repo/types';

export const rootReducer = combineReducers({
  counterReducer: counterReducer,
  chatReducer: chatReducer,
});

export type RootStoreType = {
  counterReducer: CounterReducerType;
  chatReducer: ChatReducerType;
};
