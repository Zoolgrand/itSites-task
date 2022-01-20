import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    addCompareItem(state, action) {
      if (state.length < 2) {
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          bladeLength: action.payload.bladeLength,
          material: action.payload.material,
          imageSrc: action.payload.imageSrc,
        });
      } else {
        state[0] = state[1];
        state.length = 1;
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          bladeLength: action.payload.bladeLength,
          material: action.payload.material,
          imageSrc: action.payload.imageSrc,
        });
      }
    },
  },
});

export const { addCompareItem } = compareSlice.actions;
export default compareSlice.reducer;
