import React from "react";

function TaskItem({ task, onToggle, buttonLabel }) {
  return (
    <li className="task-item">
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <button
        onClick={() => onToggle(task.id)}
        className={task.completed ? "undo-button" : "done-button"}
      >
        {buttonLabel}
      </button>
    </li>
  );
}

export default TaskItem;
