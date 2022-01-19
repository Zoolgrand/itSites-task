import { createSlice } from "@reduxjs/toolkit";
const initialState =[]
const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addToFavorite(state,action){
            state.push({
                id:action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                bladeLength: action.payload.bladeLength,
                material:action.payload.material,
                imageSrc: action.payload.imageSrc,
            })
        },
        removeFromFavorte(state, action){}
    }
})

export const {addToFavorite, removeFromFavorte} = favoriteSlice.actions
export default favoriteSlice.reducer