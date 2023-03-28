import axios from "axios";
import {
  getCategoryFail,
  getCategoryStart,
  getCategorySuccess,
} from "./categoryRedux";
import { getPriceFail, getPriceSuccess } from "./PriceRedux";

import {
  getRestoStart,
  getRestoSuccess,
  getRestoFail,
  getRestoDetailSuccess,
} from "./restoRedux";

export const getRestaurantFilter = async (dispatch, category, open, price) => {
  let apiUrl = "http://localhost:3000/restaurant?";

  if (category.category == "" && open.open == "" && price.price == "") {
    apiUrl = "http://localhost:3000/restaurant";
  } else {
    if (category.category) {
      apiUrl += `catId=${category.category}&`;
    }
    if (open.open) {
      apiUrl += `open=${open.open}&`;
    }
    if (price.price) {
      apiUrl += `priceId=${price.price}&`;
    }
  }

  dispatch(getRestoStart);
  try {
    const res = await axios.get(apiUrl);
    dispatch(getRestoSuccess(res.data));
  } catch (error) {
    dispatch(getRestoFail());
  }
};

export const getRestoDetail = async (dispatch, id) => {
  dispatch(getRestoStart);
  try {
    const res = await axios.get(`http://localhost:3000/restaurant/${id.id}`);
    dispatch(getRestoDetailSuccess(res.data));
  } catch (error) {
    dispatch(getRestoFail());
  }
};

export const getCategory = async (dispatch) => {
  dispatch(getCategoryStart);
  try {
    const res = await axios.get("http://localhost:3000/category");
    dispatch(getCategorySuccess(res.data));
  } catch (error) {
    dispatch(getCategoryFail());
  }
};

export const getPrice = async (dispatch) => {
  dispatch(getRestoStart);
  try {
    const res = await axios.get("http://localhost:3000/price");
    dispatch(getPriceSuccess(res.data));
  } catch (error) {
    dispatch(getPriceFail());
  }
};
