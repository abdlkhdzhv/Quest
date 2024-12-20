import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikeState {
  liked: boolean[];
}

const initialState: LikeState = {
  liked: [false, false, false], 
};

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      state.liked[action.payload] = !state.liked[action.payload];
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
