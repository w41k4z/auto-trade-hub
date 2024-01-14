import { createSlice } from "@reduxjs/toolkit";
import { User, UserState } from "./type";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: {
    accessToken: localStorage.getItem("token") || "",
    role: "",
  },
  isLoading: false,
};

function setUser(state: UserState, action: PayloadAction<User>) {
  state.user = action.payload;
  state.isLoading = false;
}
function setLoading(state: UserState, action: PayloadAction<boolean>) {
  state.isLoading = action.payload;
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser,
    setLoading,
  },
});

export default userSlice.reducer;
