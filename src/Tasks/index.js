import React from "react";
import "./style.css";

const Tasks = ({
  tasks,
  hideCompletedTasks,
  removeTask,
  toggleTaskCompleted,
}) => (
  <ul className="todoTasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`todoTasks__item ${
          task.completed && hideCompletedTasks ? "todoTasks__items--hidden" : ""
        }`}
      >
        <button
          className="todoTasks__button"
          onClick={() => toggleTaskCompleted(task.id)}
        >
          {task.completed ? "✔" : ""}
        </button>
        <span
          className={`${
            task.completed ? "todoTasks__item--toggleCompleted" : ""
          }`}
        >
          {task.id} - {task.content} 
        </span>
        <button
          className="todoTasks__button todoTasks__button--deleted"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;