import { Action, ChatReducerType } from '@m-repo/types';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: ChatReducerType = {
  conversationThread: [],
  isReplyPending: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState: INITIAL_STATE,
  reducers: {
    updateThread: (state, action: Action) => {
      state.conversationThread = state.conversationThread.concat(
        action.payload
      );
    },
    isLoading: (state, action: Action) => {
      state.isReplyPending = action.payload;
    },
    setValue: {
      reducer: (state, action: Action) => {
        state.isReplyPending = action.payload;
      },
      prepare: (e, gap) => {
        return { payload: e - gap };
      },
    },
  },
});

export const { updateThread, setValue, isLoading } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
