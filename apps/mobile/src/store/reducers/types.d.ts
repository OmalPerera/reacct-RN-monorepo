import { ChatReducerType } from '@m-repo/types';
import { CounterReducerType } from '@m-repo/types';

export type Action = {
  type: string;
  payload: any;
};

export type RootStoreType = {
  counterReducer: CounterReducerType;
  chatReducer: ChatReducerType;
};
