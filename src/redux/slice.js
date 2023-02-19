import { createSlice } from '@reduxjs/toolkit';
import { addMessage } from './operation';

const feedbackInitialState = {
  feedback: {},
  isLoading: false,
  error: null,
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: feedbackInitialState,
  extraReducers: {
    [addMessage.pending](state) {
      state.isLoading = true;
    },
    [addMessage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.feedback = action.payload;
    },
    [addMessage.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   addFeedback: {
  //     reducer(state, action) {
  //       state.feedback = action.payload;
  //     },
  //   },
  // },
});
export const { addFeedback } = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;
