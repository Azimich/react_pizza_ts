import { createSlice } from '@reduxjs/toolkit';

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
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  }
});

export const { 
  setCategoryId, 
  setSort, 
  setCurrentPage, 
  setFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
