import React, { useState } from "react";
import TeaButtons from "../components/TeaButtons";
import TeaDesc from "../components/TeaDesc";
import styled from "styled-components";
import makingTea from "../assets/makingTea.jpg";
import { NavLink } from "react-router-dom";
import Home from "./Home";

const DatatWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 30px;
`;

const TeaImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const ToButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ButtonToHome = styled.button`
  margin: 30px;
  width: 200px;
`;

const ButtonToOpinion = styled.button`
  margin: 30px;
  width: 200px;
`;

const Teas = () => {
  const [currentTea, setCurrentTea] = useState(0);

  const currentTeaFn = (id) => {
    setCurrentTea(id);
  };
  return (
    <div>
      <TeaImage src={makingTea} />
      <h1>Tea 101</h1>
      <DatatWrapper>
        <TeaButtons currentTeaFn={currentTeaFn} />
        <TeaDesc currentTea={currentTea} />
      </DatatWrapper>
      <ToButtonsWrapper>
        <NavLink to="/">
          <ButtonToHome>⬅ Back to Homepage</ButtonToHome>
        </NavLink>
        <NavLink to="/opinion">
          <ButtonToOpinion>Leave opinion➡</ButtonToOpinion>
        </NavLink>
      </ToButtonsWrapper>
    </div>
  );
};

export default Teas;
