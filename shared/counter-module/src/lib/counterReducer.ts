/* eslint-disable @nx/enforce-module-boundaries */
import { SET_COUNTER } from '../../../common/src/';
import { Action } from '@m-repo/types';

const INITIAL_STATE = {
  currentNumber: 1,
};

export const counterReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        currentNumber: action.payload,
      };
    default:
      return state;
  }
};
