import { configureStore } from "@reduxjs/toolkit";
import chatslice from "../features/Chatslice/chatslice";

export const store =configureStore({
    reducer:{
        chat:chatslice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch