import { configureStore } from '@reduxjs/toolkit';
import sneakersReducer from './slices/sneakersSlice';
import cartItemsReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    sneakersReducer,
    cartItemsReducer,
  },
});