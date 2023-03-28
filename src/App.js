import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailResto from "./pages/DetailResto";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/detail/:id" element={<DetailResto />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
