import { createSlice } from '@reduxjs/toolkit';

const feedbackInitialState = {};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: feedbackInitialState,
  reducers: {
    addFeedback: {
      reducer(state, action) {
        state.feedback = action.payload;
      },
    },
  },
});
export const { addFeedback } = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;
