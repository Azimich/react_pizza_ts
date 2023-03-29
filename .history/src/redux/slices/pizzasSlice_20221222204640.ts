import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';


interface IPizza {
  id: string;
  title: string;
  types: number[];
  price: number;
  rating: number;
  imageUrl: string;
  sizes: number[];
}

export enum Status {
  LOADING = 'loading',
  SUCCES = 'success',
  ERROR = 'error',
}

interface IPizzaSliceState {
  items: IPizza[];
  status: Status
}

const initialState: IPizzaSliceState = {
  items: [],
  status: Status.LOADING
}

export type SearchPizzaParams = {
  order: string;
  sortBy: string; 
  category: string; 
  search: string; 
  currentPage: string;}

export const fetchPizzas = createAsyncThunk <IPizza[], SearchPizzaParams> ('pizza/fetchPizzasStatus', async (params) => {
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
      state.status = Status.LOADING;
      state.items = [];
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = Status.SUCCES;
      state.items = action.payload;
    })

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  }
}); 

export const selectPizzaData = (state: RootState) => state.pizza;
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
