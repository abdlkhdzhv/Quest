import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './slices/filterSlice';


const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
