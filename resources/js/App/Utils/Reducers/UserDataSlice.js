import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        email: "",
        name: "",
        permissions: "",
        role: "",
        roles: "",
        notifications: []
    },
    isLoggedIn: null,
};

export const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        initialUserData: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { initialUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
