import React from "react";
import getTeas from "../services/getTeas";

const TeaDesc = ({ currentTea }) => {
  return (
    <div>
      {getTeas.map((tea) => {
        if (tea.id == currentTea) {
          return <p key={tea.id}>{tea.description}</p>;
        }
      })}
    </div>
  );
};

export default TeaDesc;
