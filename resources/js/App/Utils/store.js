import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import PageSlice from "./Reducers/PageSlice";
import UserDataSlice from "./Reducers/UserDataSlice";

export const store = configureStore({
    reducer: {
        page: PageSlice,
        userData: UserDataSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
