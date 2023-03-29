import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

enum sortPropertyEnum {
  RATTING_DESC = 'rating',
  RATTING_ASC = 'rating',
}

export interface ISort {
  name: string;
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price',
}

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  setFilters: "",
  sort: ISort;
}

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  setFilters: "",
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  }
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction <number>) {
      state.categoryId = action.payload;
    },

    setSearchValue(state, action: PayloadAction <string>) {
      state.searchValue = action.payload;
    },

    setSort(state, action: PayloadAction <ISort>) {
      state.sort = action.payload;
    },

    setCurrentPage(state, action: PayloadAction <number>) {
      state.currentPage = action.payload;
    },

    setFilters(state, action: PayloadAction <FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort;
        state.currentPage = Number(action.payload.currentPage);
        state.categoryId = Number(action.payload.categoryId);
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sort = {
          name: 'популярности',
          sortProperty: 'rating',
        }
      }
    },

  }
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { 
  setCategoryId, 
  setSort, 
  setCurrentPage, 
  setFilters,
  setSearchValue
} = filterSlice.actions;

export default filterSlice.reducer;
