export type User = {
  role: string;
  accessToken: string;
};
export type UserState = {
  user: User | null;
  isLoading: boolean;
};
export type RootState = {
  user: UserState;
};
