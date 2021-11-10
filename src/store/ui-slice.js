import {createSlice} from "@reduxjs/toolkit";


const uiSlice=createSlice({
    name:'ui',
    initialState:{cartIsVisiable:false},
    reducers:{
        toogle(state){
            state.cartIsVisiable = !state.cartIsVisiable
        }
    }
})
export default uiSlice;
export const uiActions=uiSlice.actions;