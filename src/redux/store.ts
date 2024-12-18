// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './slices/filterSlice';
import likeReducer from './slices/likeSlice';
import bookingReducer from './slices/bookingSlice';
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    like: likeReducer,
    bookings: bookingReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;