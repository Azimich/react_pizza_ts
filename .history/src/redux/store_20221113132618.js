import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/fiterSlice';

export const store = configureStore({
  reducer: {  counterReducer },
})

console.log("453", store);