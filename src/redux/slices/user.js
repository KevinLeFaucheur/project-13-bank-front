import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProfile, signin, signout, signup, updateUserProfile } from "../../services/auth";
import { setMessage } from "./message";

const initialState = { 
  isLogged: false,
  credentials: null,
  rememberMe: false
};

/**
 * Login Action for the user slice
 * @returns { data: { 
 *              body: {
 *                token: string
 *              }, 
 *              message: string, 
 *              status: number
 *              }, 
 *           } data object
*/
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await signin({ email, password });

      thunkAPI.dispatch(setMessage(data.message));

      return data;
    } 
    catch ({ response }) {
      thunkAPI.dispatch(setMessage(response.data.message));

      return thunkAPI.rejectWithValue();
    }
  }
);

/**
 * Register Action for the user slice
 * @returns { data: { 
 *              body: {
*                token: string
*              }, 
*              message: string, 
*              status: number
*              }, 
*           } data object
*/
export const register = createAsyncThunk(
  'user/register',
  async ({ email, password, firstName, lastName }, thunkAPI) => {
    try {
      const data = await signup({ email, password, firstName, lastName });

      thunkAPI.dispatch(setMessage(data.message));

      return data.message;
    } 
    catch ({ response }) {
      thunkAPI.dispatch(setMessage(response.data.message));

      return thunkAPI.rejectWithValue();
    }
  }
);

/**
 * Get Profile Action for the user slice
 * @returns { data: { 
 *              body: {
*                token: string
*              }, 
*              message: string, 
*              status: number
*              }, 
*           } data object
*/
export const getProfile = createAsyncThunk(
  'user/profile',
  async (payload, thunkAPI) => {
    try {
      const data = await getUserProfile();

      thunkAPI.dispatch(setMessage(data.message));

      return { credentials: data.body };
    } 
    catch ({ response }) {
      thunkAPI.dispatch(setMessage(response.data.message));

      return thunkAPI.rejectWithValue();      
    }
  }
);

/**
 * Update Profile Action for user slice
 * @returns { data: { 
 *              body: {
*                token: string
*              }, 
*              message: string, 
*              status: number
*              }, 
*           } data object
*/
export const updateProfile = createAsyncThunk(
  'user/update',
  async ({ firstName, lastName }, thunkAPI) => {
    try {
      const data = await updateUserProfile({ firstName, lastName });

      thunkAPI.dispatch(setMessage(data.message));

      return data.body;
    } 
    catch ({ response }) {
      thunkAPI.dispatch(setMessage(response.data.message));

      return thunkAPI.rejectWithValue();      
    }
  }
);

/**
 * User Functionality Slice
 * logout                   : clears credentials, sets isLogged false
 * rememberUserName         : memorizes 'Remember Me' checkbox value
 * login.fulfiiled          : sets isLogged to true
 * login.rejected           : resets credentials
 * register.fulfilled       : 
 * getProfile.fulfilled     : memorizes credentials to store
 * updateProfile.fulfilled  : updates credentials as requested
*/
export const { actions, reducer } = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state, action, thunkAPI) => {
      signout();
      state.credentials = null;
      state.isLogged = false;
    },
    rememberUsername: (state, action) => {
      state.rememberMe = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.isLogged = true;
    })
    builder.addCase(login.rejected, (state) => {
      state.credentials = null;
      state.isLogged = false;
    })
    builder.addCase(register.fulfilled, (state, action) => {
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.credentials = action.payload.credentials;
    })
    builder.addCase(getProfile.rejected, (state, action) => {
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      const { firstName, lastName } = action.payload;

      state.credentials = {
        ...state.credentials,
        firstName,
        lastName
      };
    })
    builder.addCase(updateProfile.rejected, (state, action) => {
    })
  }
});

export const { logout, rememberUsername } = actions;
export default reducer;