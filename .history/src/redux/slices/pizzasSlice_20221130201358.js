import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus',
  async () => {
          const { data } = await axios.get(`https://6338bf62383946bc7febc8c5.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`)

    return response.data
  }
)

const initialState = {
  items: []
}

const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  }
}); 


export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
