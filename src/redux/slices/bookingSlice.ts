// bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  bookings: { id: number; questName: string; date: string; time: string; }[];
}

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking(state, action: PayloadAction<{ questName: string; date: string; time: string }>) {
      state.bookings.push({ ...action.payload, id: Date.now() });
    },
    removeBooking(state, action: PayloadAction<number>) {
      state.bookings = state.bookings.filter((booking) => booking.id !== action.payload);
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
