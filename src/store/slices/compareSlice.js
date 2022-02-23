import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        addCompareItem(state, action) {
            if (state.length < 2) {
                state.push(action.payload);
            } else {
                state.shift()
                state.push(action.payload);
            }
        },
    },
});

export const {addCompareItem} = compareSlice.actions;
export default compareSlice.reducer;
