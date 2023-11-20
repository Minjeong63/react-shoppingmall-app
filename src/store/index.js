// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import loginSlice from './loginSlice';
import cartListSlice from './cartListSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
    cartList: cartListSlice.reducer,
  },
});
export default store;
