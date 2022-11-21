import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/fiterSlice';

export const store = configureStore({
  reducer: { counter: counterReducer },
})
