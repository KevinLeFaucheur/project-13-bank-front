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
 * @param {}  
 * @returns {}
*/
export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await signin({ email, password });

      thunkAPI.dispatch(setMessage(response.message));

      return response;
    } 
    catch ({ response }) {
      thunkAPI.dispatch(setMessage(response.data.message));

      return thunkAPI.rejectWithValue();
    }
  }
);

/**
 * Register Action for the user slice
 * @param {} 
 * @returns {}
*/
export const register = createAsyncThunk(
  'user/register',
  async ({ email, password, firstName, lastName }, thunkAPI) => {
    try {
      const response = await signup({ email, password, firstName, lastName });

      thunkAPI.dispatch(setMessage(response.message));

      return response.message;
    } 
    catch (error) {
      thunkAPI.dispatch(setMessage(error.message));

      return thunkAPI.rejectWithValue();
    }
  }
);

/**
 * Get Profile Action for the user slice
 * @param {} 
 * @returns {}
*/
export const getProfile = createAsyncThunk(
  'user/profile',
  async (payload, thunkAPI) => {
    try {
      const data = await getUserProfile();

      thunkAPI.dispatch(setMessage(data.message));

      return { credentials: data.body };
    } 
    catch (error) {
      thunkAPI.dispatch(setMessage(error.message));

      return thunkAPI.rejectWithValue();      
    }
  }
);

/**
 * Update Profile Action for user slice
 * @param {} 
 * @returns {}
*/
export const updateProfile = createAsyncThunk(
  'user/update',
  async ({ firstName, lastName }, thunkAPI) => {
    try {
      const response = await updateUserProfile({ firstName, lastName });

      thunkAPI.dispatch(setMessage(response.message));

      return response.body;
    } 
    catch (error) {
      thunkAPI.dispatch(setMessage(error.message));

      return thunkAPI.rejectWithValue();      
    }
  }
);

/**
 * User Functionality Slice
 * logout                   : 
 * rememberUserName         :
 * login.fulfiiled          :
 * login.rejected           :
 * register.fulfilled       :
 * getProfile.fulfilled     :
 * updateProfile.fulfilled  :
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