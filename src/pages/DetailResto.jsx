import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRestoDetail } from "../redux/apiCall";

const DetailResto = () => {
  const { id } = useParams();

  const { isFetching, restoDetail, error } = useSelector(
    (state) => state.restaurants
  );

  const dispatch = useDispatch();

  useEffect(() => {
    getRestoDetail(dispatch, { id });
  }, [id]);

  return (
    <div className="px-10 mt-10">
      <h1 className="font-bold text-xl">Detail Restaurant</h1>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col ">
            <h1 className=" text-4xl mt-3 ">{restoDetail?.name}</h1>
            <img
              src={restoDetail?.image}
              alt="resto"
              className="h-[300px] w-[400px] py-5"
            />
            <p className="text-2xl">Rp. {restoDetail?.price}</p>
            <div className="flex">
              {Array?.from(Array(restoDetail?.rating), (e, i) => {
                return (
                  <p key={i} className="text-4xl">
                    &#9733;
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-5">REVIEW</h2>
            {restoDetail?.review?.map((review, index) => (
              <div
                key={index}
                className="border-solid border-2 border-black py-1 px-2 my-2"
              >
                <p>{review.name}</p>
                <img
                  src={review.image}
                  alt="review"
                  className="h-[100px] w-[100px]"
                />
                <div className="flex">
                  {Array.from(Array(parseInt(review?.rate)), (e, i) => {
                    return (
                      <p key={i} className="text-lg">
                        &#11088;
                      </p>
                    );
                  })}
                </div>
                <p>{review.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <p>Error Get Detail Resto</p>}
    </div>
  );
};

export default DetailResto;
