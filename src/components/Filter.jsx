import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getPrice } from "../redux/apiCall";
import { changeCategory, changeOpen, changePrice } from "../redux/filterRedux";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [categoryValue, setCategoryValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const dispatch = useDispatch();

  const { isFetching, categoryList, error } = useSelector(
    (state) => state.categoryList
  );

  const { priceList } = useSelector((state) => state.priceList);

  useEffect(() => {
    getCategory(dispatch);
    getPrice(dispatch);
  }, []);

  useEffect(() => {
    dispatch(changePrice(priceValue));
    dispatch(changeCategory(categoryValue));
    dispatch(changeOpen(openFilter));
  }, [priceValue, categoryValue, openFilter]);

  const handleClear = () => {
    setOpenFilter(false);
    setCategoryValue("");
    setPriceValue("");
  };

  return (
    <div>
      <hr className="mt-3" />
      <div className="flex py-2">
        <p>Filter By:</p>

        <div className="flex flex-col  items-center ">
          <div className="flex mx-3">
            <input
              type="radio"
              checked={openFilter}
              readOnly
              onClick={() => setOpenFilter(!openFilter)}
            />
            <p className="ml-1">Open Now</p>
          </div>
          <hr className="w-[80%] " />
        </div>

        <div className="flex flex-col  items-center ">
          <div className="flex mx-3">
            <select
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
            >
              {priceList?.map((price) => (
                <option value={price.priceId} key={price.priceId}>
                  {price.range}
                </option>
              ))}
            </select>
          </div>
          <hr className="w-[80%] " />
        </div>

        {error ? (
          <p>error get category</p>
        ) : (
          <div className="flex flex-col  items-center ">
            <div className="flex mx-3">
              <select
                value={categoryValue}
                onChange={(e) => setCategoryValue(e.target.value)}
              >
                {isFetching ? (
                  <p>Loading</p>
                ) : (
                  categoryList?.map((cat) => (
                    <option value={cat.id} key={cat.id}>
                      {cat.name}
                    </option>
                  ))
                )}
              </select>
            </div>
            <hr className="w-[80%] " />
          </div>
        )}
        <button
          onClick={handleClear}
          className="ml-auto border-solid border-2 border-black p-1"
        >
          CLEAR ALL
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Filter;
