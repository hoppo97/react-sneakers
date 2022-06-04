import { configureStore } from '@reduxjs/toolkit';
import sneakersReducer from './slices/sneakersSlice';
import cartItemsReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    sneakersReducer,
    cartItemsReducer,
    favoritesReducer,
  },
});