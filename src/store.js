import { configureStore } from "@reduxjs/toolkit"; 
import { reducer as userReducer } from "./features/user"; 
import { reducer as messageReducer } from "./features/message"; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});