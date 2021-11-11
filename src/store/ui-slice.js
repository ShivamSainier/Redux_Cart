import {createSlice} from "@reduxjs/toolkit";


const uiSlice=createSlice({
    name:'ui',
    initialState:{cartIsVisiable:false,
    notification:null
    },
    reducers:{
        setNotifications(state,action){
            state.notification={
                status:action.payload.stats,
                title:action.payload.title, 
                message:action.payload.message
            }
        }
        toogle(state){
            state.cartIsVisiable = !state.cartIsVisiable
        }
    }
})
export default uiSlice;
export const uiActions=uiSlice.actions;