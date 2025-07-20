import {useEffect, useState} from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);

   return (
    <div>
      <h1>To-Do Manager</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.completed ? "✅ Done" : "❌ Not done"}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;
