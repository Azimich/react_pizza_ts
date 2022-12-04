import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/fiterSlice';
import cart from './slices/';

export const store = configureStore({
  reducer: {
    filter,  
    cart,
  },
})
