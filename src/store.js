import { configureStore } from "@reduxjs/toolkit"; 
import { reducer as userReducer } from "./features/user"; 

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});