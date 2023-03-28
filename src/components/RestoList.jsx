import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRestaurantFilter } from "../redux/apiCall";

const RestoList = () => {
  const [numResto, setNumResto] = useState(4);
  const { isFetching, resto, error } = useSelector(
    (state) => state.restaurants
  );
  const dispatch = useDispatch();

  const { category, open, price } = useSelector((state) => state.filter);

  console.log(category);

  useEffect(() => {
    getRestaurantFilter(dispatch, { category }, { open }, { price });
  }, [category, open, price]);

  const restoToDisplay = resto?.slice(0, numResto);

  return (
    <div className="mt-4 pb-8">
      <h1 className="text-lg">All Restaurants</h1>
      <div className="flex flex-wrap justify-evenly">
        {isFetching ? (
          <p>loading</p>
        ) : resto?.length == 0 ? (
          <p>No Restaurant Found!</p>
        ) : (
          restoToDisplay?.map((resto) => (
            <div className="w-[250px] mt-5" key={resto.id}>
              <img src={resto.image} alt="food" className="w-full h-[200px]" />
              <p>{resto.name}</p>

              <div className="flex">
                {Array.from(Array(parseInt(resto.rating)), (e, i) => {
                  return <p key={i}>&#9733;</p>;
                })}
              </div>

              <div className="flex text-xs mt-3">
                <p>
                  {resto.catName} &#x2022; Rp.{resto.price}
                </p>
                <div className="ml-auto">
                  {resto.open == true ? (
                    <div className="flex items-center ">
                      <span className="h-2 w-2 bg-green-500 rounded-full inline-block mr-1"></span>
                      <p>OPEN NOW</p>
                    </div>
                  ) : (
                    <div className="flex items-center ">
                      <span className="h-2 w-2 bg-red-500 rounded-full inline-block mr-1"></span>
                      <p>CLOSED</p>
                    </div>
                  )}
                </div>
              </div>
              <Link to={`/detail/${resto.id}`}>
                <button className="bg-blue-900 text-white w-full py-2 mt-3">
                  LEARN MORE
                </button>
              </Link>
            </div>
          ))
        )}
        {error && <p>Failed to get Restaurants List</p>}
      </div>
      {restoToDisplay?.length < resto?.length && (
        <div className="text-center pt-7">
          <button
            onClick={() => setNumResto(numResto + 4)}
            className="border-solid border-2 border-black py-1 px-7"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default RestoList;
