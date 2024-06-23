import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/Auth";
import CartSliceReducer from "./Slices/Cart";

const store=configureStore({
    reducer:{
        auth:AuthSliceReducer,
        cart:CartSliceReducer,
    }
})
export default store