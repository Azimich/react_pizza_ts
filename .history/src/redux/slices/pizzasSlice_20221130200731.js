import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const fetchUserById = createAsyncThunk(
  'pizza/fetchByI'
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
