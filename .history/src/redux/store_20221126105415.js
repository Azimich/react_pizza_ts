import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/fiterSlice';
import cart from './slices/fiterSlice';

export const store = configureStore({
  reducer: {
    filter,  
    cart,
  },
})
