import { SET_COUNTER } from '../../shared/common/';
import { Action } from '@m-repo/types';

const INITIAL_STATE = {
  currentNumber: 1,
};

const counterReducer = (state = INITIAL_STATE, action: Action) => {
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

export default counterReducer;
