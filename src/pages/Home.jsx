import React from "react";
import Filter from "../components/Filter";
import RestoList from "../components/RestoList";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="px-10 mt-10">
      <Header />
      <Filter />
      <RestoList />
    </div>
  );
};

export default Home;
