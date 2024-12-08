// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from '../redux/slices/filterSlice';
import likeReducer from '../redux/slices/likeSlice';
import bookingReducer from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    like: likeReducer,
    bookings: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;