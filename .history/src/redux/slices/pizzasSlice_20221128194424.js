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
    setItem(state, action) {
      state.
    }
  }
}); 


export const { addItem, removeItem, minusItem, clearItem } = pizzasSlice.actions;
export default pizzasSlice.reducer;
