import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite(state, action) {
            state.push(action.payload);
        },
        removeFromFavorite(state, action) {
            return state.filter(element => element.id !== action.payload.id);
        },
    },
});

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
