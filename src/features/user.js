import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProfile, signin, signout, signup, updateUserProfile } from "../services/auth";

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

export const register = createAsyncThunk(
  'user/register',
  async ({ email, password, firstName, lastName }, thunkAPI) => {
    try {
      return await signup({ email, password, firstName, lastName });
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
      return { credentials: data };
    } 
    catch (error) {
      console.log(error);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'user/update',
  async ({ firstName, lastName }, thunkAPI) => {
    try {
      const data = await updateUserProfile({ firstName, lastName });
      return data ;
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
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogged = true;
    })
    builder.addCase(login.rejected, (state, action) => {
      state.credentials = null;
      state.isLogged = false;
    })
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload);
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.credentials = action.payload.credentials;
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      const { firstName, lastName } = action.payload;
      state.credentials = {
        ...state.credentials,
        firstName,
        lastName
      };
    })
  }
});

export const { logout, rememberUsername } = actions;
export default reducer;