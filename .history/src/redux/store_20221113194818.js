import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/fiterSlice';
import { filterSlice } from './../../.history/src/redux/slices/fiterSlice_20221113131441';

export const store = configureStore({
  reducer: { counter: counterReducer },
})
