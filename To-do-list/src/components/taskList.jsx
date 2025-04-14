import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, buttonLabel }) {
  if (tasks.length === 0) {
    return <p className="empty-list">No tasks here!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          buttonLabel={buttonLabel}
        />
      ))}
    </ul>
  );
}

export default TaskList;
