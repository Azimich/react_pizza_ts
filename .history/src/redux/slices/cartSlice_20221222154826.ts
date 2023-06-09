import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


export interface ICartItemProps {
  id: string;
  title: string;
  type: string;
  price: number;
  count: number;
  imageUrl: string;
  size: number;
}

interface ICartSliceSate {
  totalPrice: number;
  items: ICartItemProps[];
}

const initialState: ICartSliceSate = {
  totalPrice: 0,
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItemProps>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      
      if (findItem) {
        findItem.count ++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0)
    },

    minusItem(state, action: PayloadAction <> ) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count --;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id === action.payload);
    },
    
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  }
}); 

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id)
export const { addItem, removeItem, minusItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
