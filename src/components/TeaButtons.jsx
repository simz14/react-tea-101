import React from "react";
import getTeas from "../services/getTeas";

const TeaButtons = ({ currentTeaFn }) => {
  return (
    <div>
      {getTeas.map((tea) => {
        return (
          <button key={tea.id} onClick={() => currentTeaFn(tea.id)}>
            What is {tea.name}
          </button>
        );
      })}
    </div>
  );
};

export default TeaButtons;
