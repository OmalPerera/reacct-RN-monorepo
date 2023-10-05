import { Action } from '@m-repo/types';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentNumber: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    setCounter: (state, action: Action) => {
      state.currentNumber = action.payload;
    },
  },
});

export const { setCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
