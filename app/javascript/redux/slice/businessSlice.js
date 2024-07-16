import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  business: [],
  status: 'idle',
  error: null,
};

export const fetchBusiness = createAsyncThunk('business/fetchBusiness', async () => {
  try {
    const response = await axios.get('/show_businesses');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Businesses.');
  }
});

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBusiness.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchBusiness.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        business: action.payload,
      }))
      .addCase(fetchBusiness.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default businessSlice.reducer;

export const selectBusiness = (state) => state.business.business;
export const selectBusinessStatus = (state) => state.business.status;
export const selectBusinessError = (state) => state.business.error;
