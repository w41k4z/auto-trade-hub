import { RootState } from "./type";

export const selectUser = (state: RootState) => state.user.user;
export const selectLoading = (state: RootState) => state.user.isLoading;
