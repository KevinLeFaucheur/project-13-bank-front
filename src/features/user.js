import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProfile, signin, signout, signup, updateUserProfile } from "../services/auth";
import { setMessage } from "./message";

const initialState = { 
  isLogged: false,
  credentials: null,
  rememberMe: false
};

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    const response = await signin({ email, password });
    thunkAPI.dispatch(setMessage(response.message));
    return response;
    // try {
    //   const response = await signin({ email, password });
    //   console.log(response);
    //   return response;
    // } 
    // catch (error) {
    //   console.log('rejectWithValue');
    //   return thunkAPI.rejectWithValue();
    // }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async ({ email, password, firstName, lastName }, thunkAPI) => {
    const response = await signup({ email, password, firstName, lastName });
    thunkAPI.dispatch(setMessage(response.message));
    return response.message;
    // try {
    //   return await signup({ email, password, firstName, lastName });
    // } 
    // catch (error) {
    //   console.log(error);
    // }
  }
);

export const getProfile = createAsyncThunk(
  'user/profile',
  async (something, thunkAPI) => {
    const response = await getUserProfile();
    thunkAPI.dispatch(setMessage(response.message));
    console.log(response);
    return { credentials: response.body };
    // try {
    //   const response = await getUserProfile();
    //   thunkAPI.dispatch(setMessage(response.message));
    //   console.log(response.message);
    //   return { credentials: response.body };
    // } 
    // catch (error) {
    //   console.log(error);
    // }
  }
);

export const updateProfile = createAsyncThunk(
  'user/update',
  async ({ firstName, lastName }, thunkAPI) => {
    try {
      const response = await updateUserProfile({ firstName, lastName });
      thunkAPI.dispatch(setMessage(response.message));
      return response ;
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
      console.log('login.rejected');
      state.credentials = null;
      state.isLogged = false;
    })
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload);
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      console.log('getProfile.fulfilled');
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