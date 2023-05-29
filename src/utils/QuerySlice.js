import { createSlice } from "@reduxjs/toolkit";

const QuerySlice = createSlice({
    name:"query",
    initialState:{},
    reducers:{
        addToCache:(state,action)=>{
        Object.assign(state,action.payload)
        }

    }
})
export const{addToCache} = QuerySlice.actions;
export default QuerySlice.reducer;