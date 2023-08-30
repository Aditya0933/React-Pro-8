
import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlices";

export const store = configureStore({
    reducer:{
        cart: CartSlice
    }
});