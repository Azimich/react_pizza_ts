import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { ICartItemProps } from './cartSlice';


type IFechPizzas  = Record<>

export const fetchPizzas = createAsyncThunk <ICartItemProps[]>('pizza/fetchPizzasStatus', async (params: IFechPizzas) => {
    const {order, sortBy, category, search, currentPage} = params;
    const { data } = await axios.get(
      `https://6338bf62383946bc7febc8c5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    // if (data.length === 0) {
    //   return thunkAPI.rejectWithValue('Пустые пиццы')
    // }
    return data;
  }
)

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

  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    }
  }
}); 

export const selectPizzaData = (state: RootState) => state.pizza;
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
