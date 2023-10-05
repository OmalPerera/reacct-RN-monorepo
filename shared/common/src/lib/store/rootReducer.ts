import { combineReducers } from 'redux';
import { chatReducer } from '@m-repo/chat-module';
import { counterReducer } from '@m-repo/counter-module';
import { ChatReducerType, CounterReducerType } from '@m-repo/types';

export const rootReducer = combineReducers({
  counterReducer: counterReducer,
  chatReducer: chatReducer,
});

export type RootStoreType = {
  counterReducer: CounterReducerType;
  chatReducer: ChatReducerType;
};
