import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProfile, signin, signout } from "../services";

// const initialStateValue = { username: '',  firstName: '', lastName: '' };
const initialState = { 
  isLogged: false,
  credentials: null,
  rememberMe: false
};

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      return await signin({ email, password });
    } 
    catch (error) {
      console.log(error);
    }
  }
);

export const getProfile = createAsyncThunk(
  'user/profile',
  async () => {
    try {
      const data = await getUserProfile();
      console.log(data);
      return { credentials: data };
    } 
    catch (error) {
      console.log(error);
    }
  }
);

export const { actions, reducer } = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      signout();
      state.credentials = null;
      state.isLogged = false;
    },
    rememberUsername: (state, action) => {
      state.rememberMe = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogged = true;
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.credentials = action.payload.credentials;
    })
  }
});

export const { logout, rememberUsername } = actions;
export default reducer;