import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Teas from "./screens/Teas";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/teas"} element={<Teas />}></Route>
    </Routes>
  );
}

export default App;
