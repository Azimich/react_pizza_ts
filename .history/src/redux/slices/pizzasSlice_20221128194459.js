// import React from 'react';

// const pizzasSlice = () => {
//   return (
//     <div>pizzasSlice</div>
//   )
// }

// export default pizzasSlice;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: []
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload.items;
    }
  }
}); 


export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
