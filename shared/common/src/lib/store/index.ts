/* eslint-disable @nx/enforce-module-boundaries */
import { combineReducers } from 'redux';
import { counterReducer } from '../../../../counter-module/src/';
import { chatReducer } from '../../../../chat-module/src/';
import { ChatReducerType, CounterReducerType } from '@m-repo/types';

export const rootReducer = combineReducers({
  counterReducer: counterReducer,
  chatReducer: chatReducer,
});

export type RootStoreType = {
  counterReducer: CounterReducerType;
  chatReducer: ChatReducerType;
};
