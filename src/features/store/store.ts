import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import series from "../reducers/series";

const store = configureStore({
    reducer: {
       user,
       series 
    }
})

export default store