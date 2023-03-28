import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "priceList",
  initialState: {
    isFetching: false,
    error: false,
    priceList: null,
  },
  reducers: {
    getPriceStart: (state) => {
      state.isFetching = true;
    },
    getPriceSuccess: (state, action) => {
      state.isFetching = false;
      state.priceList = action.payload;
    },
    getPriceFail: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getPriceStart, getPriceSuccess, getPriceFail } =
  priceSlice.actions;

export default priceSlice.reducer;
