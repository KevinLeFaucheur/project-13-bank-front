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
    try {
      const response = await signin({ email, password });
      console.log(response);
      thunkAPI.dispatch(setMessage(response.message));

      return response;
    } 
    catch ({ response }) {
      thunkAPI.dispatch(setMessage(response.data.message));

      console.log(response.data);

      return thunkAPI.rejectWithValue();
    }
  }
);

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

export const getProfile = createAsyncThunk(
  'user/profile',
  async (payload, thunkAPI) => {
    try {
      const { data } = await getUserProfile();
      thunkAPI.dispatch(setMessage(data.message));
      console.log(data);
      return { credentials: data.body };
    } 
    catch (error) {
      thunkAPI.dispatch(setMessage(error.message));

      return thunkAPI.rejectWithValue();      
    }
  }
);

export const updateProfile = createAsyncThunk(
  'user/update',
  async ({ firstName, lastName }, thunkAPI) => {
    try {
      const response = await updateUserProfile({ firstName, lastName });
      thunkAPI.dispatch(setMessage(response.message));
      console.log(response);
      return response.body;
    } 
    catch (error) {
      thunkAPI.dispatch(setMessage(error.message));

      return thunkAPI.rejectWithValue();      
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
      // console.log('login.rejected');
      state.credentials = null;
      state.isLogged = false;
    })
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload);
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      // console.log('getProfile.fulfilled');
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