import { useEffect, useState } from "react";

function TaskList ({ onToggleTask, onDeleteTask }) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then((r) => r.json())
            .then((data) => setTasks(data))
            .catch((error) => {
                console.error("Failed to fetch tasks:", error);
            });
    }, []);
    return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => onToggleTask(task.id, !task.completed)}
              style={{
                cursor: "pointer",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>{" "}
            {task.completed ? "(Done)" : "(Pending)"}
                {""}
            <button onClick={() => onDeleteTask(task.id)} style={{ marginLeft: "10px" }}>
               Delete
            </button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default TaskList;