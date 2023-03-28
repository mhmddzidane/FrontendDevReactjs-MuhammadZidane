import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    category: null,
    open: null,
    price: null,
  },
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeOpen: (state, action) => {
      state.open = action.payload;
    },
    changePrice: (state, action) => {
      state.price = action.payload;
    },
    clearFilter: (state, action) => {
      state.category = action.payload;
      state.open = action.payload;
      state.price = action.payload;
    },
  },
});

export const { changeCategory, changeOpen, changePrice, clearFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
