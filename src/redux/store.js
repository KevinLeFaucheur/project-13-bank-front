import { configureStore } from "@reduxjs/toolkit"; 
import { reducer as userReducer } from "./slices/user"; 
import { reducer as messageReducer } from "./slices/message"; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});