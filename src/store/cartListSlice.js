import { createSlice } from '@reduxjs/toolkit';

const cartListSlice = createSlice(
  {
    name: 'cartList',
    initialState: [],
    reducers: {
      addToCart: (state, action) => {
        state.push(action.payload);
      },
      removeFromCart: (state, action) => {
        state = state.filter((item) => item.id !== action.payload);
        return state;
      },
      addNumber: (state, action) => {
        state = state.map((item) => {
          if (item.id === action.payload) {
            return { ...item, number: item.number++ };
          }
          return item;
        });
      },
      removeNumber: (state, action) => {
        state = state.map((item) => {
          if (item.id === action.payload) {
            return { ...item, number: item.number-- };
          }
          return item;
        });
      },
      initializeCartList: () => [],
    },
  },
  {
    // mutate 옵션을 true로 설정
    mutate: true,
  }
);
export const { addToCart, removeFromCart, addNumber, removeNumber, initializeCartList } =
  cartListSlice.actions;
export default cartListSlice;
