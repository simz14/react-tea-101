import React, { useState } from "react";
import TeaButtons from "../components/TeaButtons";
import TeaDesc from "../components/TeaDesc";
import styled from "styled-components";

const Teas = () => {
  const [currentTea, setCurrentTea] = useState(0);

  const currentTeaFn = (id) => {
    setCurrentTea(id);
  };
  return (
    <div>
      <h1>Tea 101</h1>
      <div>
        <TeaButtons currentTeaFn={currentTeaFn} />
        <TeaDesc currentTea={currentTea} />
        <img src="../assets/makingTea" />
      </div>
    </div>
  );
};

export default Teas;
