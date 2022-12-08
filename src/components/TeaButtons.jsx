import React from "react";
import styled from "styled-components";
import getTeas from "../services/getTeas";

const TeaButtonStyled = styled.div`
  grid-column: 1/2;
  display: grid;
`;

const Button = styled.button`
  width: 200px;
  margin: 5px;
`;

const TeaButtons = ({ currentTeaFn }) => {
  return (
    <TeaButtonStyled>
      {getTeas.map((tea) => {
        return (
          <Button key={tea.id} onClick={() => currentTeaFn(tea.id)}>
            What is {tea.name}
          </Button>
        );
      })}
    </TeaButtonStyled>
  );
};

export default TeaButtons;
