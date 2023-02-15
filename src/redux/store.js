import { configureStore } from '@reduxjs/toolkit';
import { feedbackReducer } from './slice';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
