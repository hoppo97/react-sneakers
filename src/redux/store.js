import { configureStore } from '@reduxjs/toolkit';
import sneakersReducer from './slices/sneakersSlice';

export const store = configureStore({
  reducer: {
    sneakersReducer
  },
});