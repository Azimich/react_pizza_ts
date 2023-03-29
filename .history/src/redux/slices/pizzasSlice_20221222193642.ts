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

enum Status {
  LOADING = 'loading',
  SUCCES = 'success',
  E
}

interface IPizzaSliceState {
  items: IPizza[];
  status: 'loading' | 'success' | 'error'
}

const initialState: IPizzaSliceState = {
  items: [],
  status: 'loading', // loading | success | error
}

export const fetchPizzas = createAsyncThunk <IPizza[], Record<string, string>> ('pizza/fetchPizzasStatus', async (params) => {
    const {order, sortBy, category, search, currentPage} = params;
    const { data } = await axios.get <IPizza[]> (
      `https://6338bf62383946bc7febc8c5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    return data;
  }
)

const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action: PayloadAction<IPizza>) => {
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
}); 

export const selectPizzaData = (state: RootState) => state.pizza;
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
