import {createSlice} from "@reduxjs/toolkit"


const transportPostSlice = createSlice({

name :"transportPost",
initialState: 0,


reducers:{
    pr:(state,action)=>{
         state = action.payload


    }
}


})




export const {pr} = transportPostSlice.actions
export default transportPostSlice

