import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem(state, action) {
            state.push(action.payload);
        },
        removeCartItem(state, action) {
            return state.filter(element => element.id !== action.payload.id);
        },
    },
});

export const {addCartItem, removeCartItem} = cartSlice.actions;
export default cartSlice.reducer;
