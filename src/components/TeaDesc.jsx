import React from "react";
import styled from "styled-components";
import getTeas from "../services/getTeas";

const TeaDescStyled = styled.div`
  grid-column: 2/5;
  background-color: #dbd7b4;
  padding: 25px;
  border-radius: 15px;
`;

const TeaParagraph = styled.p`
  margin: 0;
`;

const TeaDesc = ({ currentTea }) => {
  return (
    <TeaDescStyled>
      {getTeas.map((tea) => {
        if (tea.id == currentTea) {
          return <TeaParagraph key={tea.id}>{tea.description}</TeaParagraph>;
        }
      })}
    </TeaDescStyled>
  );
};

export default TeaDesc;
