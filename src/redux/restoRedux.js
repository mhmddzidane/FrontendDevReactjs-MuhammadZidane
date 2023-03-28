import { createSlice } from "@reduxjs/toolkit";

const restoSlice = createSlice({
  name: "restaurants",
  initialState: {
    isFetching: false,
    error: false,
    resto: null,
    restoDetail: null,
  },
  reducers: {
    getRestoStart: (state) => {
      state.isFetching = true;
    },
    getRestoSuccess: (state, action) => {
      state.isFetching = false;
      state.resto = action.payload;
    },
    getRestoDetailSuccess: (state, action) => {
      state.isFetching = false;
      state.restoDetail = action.payload;
    },
    getRestoFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getRestoStart,
  getRestoSuccess,
  getRestoDetailSuccess,
  getRestoFail,
} = restoSlice.actions;

export default restoSlice.reducer;
