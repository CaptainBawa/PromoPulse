import { configureStore } from '@reduxjs/toolkit';
// import laptopsReducer from './slice/laptopsSlice';

const store = configureStore({
  reducer: {
    // laptops: laptopsReducer,
  },
});
export default store;
