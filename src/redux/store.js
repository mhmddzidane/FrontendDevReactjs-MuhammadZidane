import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryRedux from "./categoryRedux";
import filterRedux from "./filterRedux";
import PriceRedux from "./PriceRedux";
import restoRedux from "./restoRedux";

const rootReducer = combineReducers({
  categoryList: categoryRedux,
  priceList: PriceRedux,
  restaurants: restoRedux,
  filter: filterRedux,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
