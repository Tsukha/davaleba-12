import React, { useState, useEffect } from "react";
import TaskForm from "./components/taskFrom";
import TaskList from "./components/taskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const unfinishedTasks = tasks.filter((task) => !task.completed);
  const finishedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <div className="tasks-container">
        <div className="column">
          <h2>Tasks To Do</h2>
          <TaskList
            tasks={unfinishedTasks}
            onToggle={toggleTaskStatus}
            buttonLabel="Done"
          />
        </div>
        <div className="column">
          <h2>Completed Tasks</h2>
          <TaskList
            tasks={finishedTasks}
            onToggle={toggleTaskStatus}
            buttonLabel="Remove"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
