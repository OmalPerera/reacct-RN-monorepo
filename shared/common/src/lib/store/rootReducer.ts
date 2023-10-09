import { combineReducers } from 'redux';
import { chatReducer } from '@m-repo/chat-module';
import { counterReducer } from '@m-repo/counter-module';

export const rootReducer = combineReducers({
  counterReducer: counterReducer,
  chatReducer: chatReducer,
});
