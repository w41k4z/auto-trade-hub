import { combineReducers } from "redux";
import userReducer from "./features/User/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  // Other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
