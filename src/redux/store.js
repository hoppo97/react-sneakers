import { configureStore } from '@reduxjs/toolkit';
import sneakersReducer from './slices/sneakersSlice';
import cartItemsReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice';
import ordersReducer from './slices/ordersSlice';

export const store = configureStore({
  reducer: {
    sneakersReducer,
    cartItemsReducer,
    favoritesReducer,
    ordersReducer,
  },
});