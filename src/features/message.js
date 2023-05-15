import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: '' };

export const { actions, reducer } = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = '';
    }
  }
});

export const { setMessage, clearMessage } = actions;
export default reducer;