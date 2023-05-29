import { createSlice } from "@reduxjs/toolkit";

const ToggleSlice = createSlice({
    name: "toggle",
    initialState:{
        isSidebarOpen: true,
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isSidebarOpen = !(state.isSidebarOpen);
            
        },
        closeMenu:(state)=>{
            state.isSidebarOpen = false;
        },
        openMenu:(state)=>{
            state.isSidebarOpen = true;
        }
    }
})
export const{toggleMenu,closeMenu, openMenu} = ToggleSlice.actions;
export default ToggleSlice.reducer;