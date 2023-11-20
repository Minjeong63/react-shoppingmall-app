import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    login: (state) => (state = true),
  },
});
export const { login } = loginSlice.actions;
export default loginSlice;
