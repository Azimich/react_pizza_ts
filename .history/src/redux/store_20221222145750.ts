import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/fiterSlice';
import cart from './slices/cartSlice';
import pizza from './slices/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter,  
    cart,
    pizza,
  },
})
type RootState = ReturnType<FuncType>;