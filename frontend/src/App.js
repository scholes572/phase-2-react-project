import {useEffect, useState} from "react";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to fetch tasks:", err));
  }, []);
   return (
    <div className="App">
      <h1>To-Do Manager</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}


 

export default App;
