import { configureStore } from '@reduxjs/toolkit';
import cartReduser from './slices/cartSlice';
import favoriteReduser from './slices/favoriteSlice';
import compareReduser from './slices/compareSlice';

export const store = configureStore({
  reducer: {
    cart: cartReduser,
    favorite: favoriteReduser,
    compare: compareReduser,
  },
});
