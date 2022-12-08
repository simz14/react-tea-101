import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Opinion from "./screens/Opinion";
import Teas from "./screens/Teas";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/teas"} element={<Teas />}></Route>
      <Route path={"/opinion"} element={<Opinion />}></Route>
    </Routes>
  );
}

export default App;
