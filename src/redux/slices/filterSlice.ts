// filterSlice.ts
import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

export interface FilterState {
    questType: string;
    players: string;
    date: string;
    time: string;
  }
  
  const initialState: FilterState = {
    questType: '',
    players: '',
    date: '',
    time: '',
  };
  
  
  export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      setFilter: (state, action: PayloadAction<{ key: keyof FilterState; value: string }>) => {
        state[action.payload.key] = action.payload.value;
      },
    },
  });
  
  export const { setFilter } = filterSlice.actions;