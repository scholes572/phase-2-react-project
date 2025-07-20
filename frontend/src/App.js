import {useEffect, useState} from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTask = (id, newCompletedStatus) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: newCompletedStatus }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        const updatedTasks = tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
      });
  };

  return (
    <div className="App">
      <h1>To-Do Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
    </div>
  );
}

export default App;
