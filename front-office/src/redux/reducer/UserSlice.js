import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
        role: "",
        accessToken: localStorage.getItem("token") || "",
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
            state.role = action.payload.role
        },
        logout: (state) => {
            state.user = null
            state.accessToken = ""
            state.role = ""
        },
    }
})

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.accessToken;
export default userSlice.reducer;