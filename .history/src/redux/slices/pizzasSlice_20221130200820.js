import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const fetchUserById = createAsyncThunk(
  'pizza/fetchByIdStatus',
  async (userId: number)
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
