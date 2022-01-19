import { configureStore } from '@reduxjs/toolkit';
import cartReduser from './slices/cartSlice'
import favoriteReduser from './slices/favoriteSlice'


export const store = configureStore({
  reducer: {
    cart: cartReduser,
    favorite:favoriteReduser
  },
});
