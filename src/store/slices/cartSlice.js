import { createSlice } from "@reduxjs/toolkit";
const initialState =[]
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItem(state,action){
            state.push({
                id:action.payload.id,
                imageSrc: action.payload.imageSrc,
                title: action.payload.title,
                price: action.payload.title
            })
        },
        removeCartItem(state, action){}
    }
})

export const {addCartItem, removeCartItem} = cartSlice.actions
export default cartSlice.reducer