import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './slices/filterSlice';
import likeReducer from './slices/likeSlice';
import bookingReducer from './slices/bookingSlice';
import authReducer from "./slices/authSlice";
import favoriteReducer from "./slices/addFavoriteQuest"
const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    like: likeReducer,
    favorite: favoriteReducer,
    bookings: bookingReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;