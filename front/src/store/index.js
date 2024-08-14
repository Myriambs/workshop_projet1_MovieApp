import { configureStore } from "@reduxjs/toolkit";

import movieSlice from './movieSlice'
import authSlice from './authSlice'
export default configureStore({
    reducer:{
        movie:movieSlice,
        authuser : authSlice
    }
})