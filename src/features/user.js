import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = { username: '',  firstName: '', lastName: '' };

export const { actions, reducer } = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  }
});

export const { login, logout } = actions;
export default reducer;