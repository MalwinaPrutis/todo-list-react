import React from "react";
import "./style.css";

const Buttons = ({
  tasks,
  hideDone,
  toggleHideCompleted,
  setAllCompleted,
}) => (
  <div className="todoSectionContainer">
    {tasks.length > 0 && (
      <>
        <button
          onClick={toggleHideCompleted}
          className="todoSectionContainer__buttons"
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          onClick={setAllCompleted}
          className="todoSectionContainer__buttons"
          disabled={tasks.every(({ completed }) => completed)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;