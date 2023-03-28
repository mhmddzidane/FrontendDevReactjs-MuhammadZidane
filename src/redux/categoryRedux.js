import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categoryList",
  initialState: {
    isFetching: false,
    error: false,
    categoryList: null,
  },
  reducers: {
    getCategoryStart: (state) => {
      state.isFetching = true;
    },
    getCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categoryList = action.payload;
    },
    getCategoryFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getCategoryStart, getCategorySuccess, getCategoryFail } =
  categorySlice.actions;

export default categorySlice.reducer;
