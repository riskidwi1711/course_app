import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import PageSlice from "./Reducers/PageSlice";

export const store = configureStore({
    reducer: {
        page: PageSlice,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false,
    })
});
