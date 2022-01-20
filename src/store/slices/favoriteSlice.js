import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        bladeLength: action.payload.bladeLength,
        material: action.payload.material,
        imageSrc: action.payload.imageSrc,
      });
    },
    removeFromFavorite(state, action) {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id == action.payload.id) {
          state.splice(i, 1);
        }
      }
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
