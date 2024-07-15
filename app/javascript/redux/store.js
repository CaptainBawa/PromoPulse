import { configureStore } from '@reduxjs/toolkit';
import businessReducer from './slice/businessSlice';

const store = configureStore({
  reducer: {
    business: businessReducer,
  },
});
export default store;
