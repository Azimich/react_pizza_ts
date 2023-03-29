import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';



type IFechPizzas  = Record<string, string>;



interface IPizza {
  id: string;
  title: string;
  types: number[];
  price: number;
  rating: number;
  imageUrl: string;
  sizes: number[];
}

interface IPizzaSliceState {
  items: IPizza[];
  status: 'loading' | 'success' | 'error'
}

const initialState: IPizzaSliceState = {
  items: [],
  status: 'loading', // loading | success | error
}

const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action: PayloadAction<ICartItemProps>) => {
      state.status = 'loading';
      state.items = [];
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    })

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
    })
  }

  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchPizzas.rejected]: (state, action) => {
  //     state.status = 'error';
  //     state.items = [];
  //   }
  // }
}); 

export const selectPizzaData = (state: RootState) => state.pizza;
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;