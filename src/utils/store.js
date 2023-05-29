import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./ToggleSlice";
import querySlice from "./QuerySlice";



const store = configureStore({
   reducer: {
    toggle: toggleSlice,
    query: querySlice,
    
}
});

export default store;