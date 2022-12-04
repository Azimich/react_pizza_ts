import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const fetchPizzas = createAsyncThunk('pizza/fetchPizzas',
  async () => {
    const response = await userAPI.fetchUserById(userId)
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
