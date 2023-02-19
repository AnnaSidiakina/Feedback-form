import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://feedback-form-back-production.up.railway.app/api/messages';

export const addMessage = createAsyncThunk(
  'feedback/addMessage',
  async ({ name, email, message }, thunkAPI) => {
    try {
      const response = await axios.post('/', { name, email, message });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
