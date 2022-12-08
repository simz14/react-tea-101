import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonToHome = styled.button`
  margin: 30px;
  width: 200px;
`;

const ButtonToOpinion = styled.button`
  margin: 30px;
  width: 200px;
`;

const Opinion = () => {
  return (
    <div>
      <h1>Opinion🤔</h1>
      <NavLink to="/">
        <ButtonToHome>Home</ButtonToHome>
      </NavLink>
      <NavLink to="/teas">
        <ButtonToOpinion>Teas</ButtonToOpinion>
      </NavLink>
    </div>
  );
};
export default Opinion;
