import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
    const {order, sortBy, category, search, currentPage} = params;
    const { data } = await axios.get(
      `https://6338bf62383946bc7febc8c5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
    )

    log

    return data;
  }
)

const initialState = {
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
      console.log(fetchPizzas.pending.toString());
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      console.log(fetchPizzas.fulfilled.toString());
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state) => {
      console.log(fetchPizzas.rejected.toString());
      state.status = 'error';
      state.items = [];
    }
  }
}); 


export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
