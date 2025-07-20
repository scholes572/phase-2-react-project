import { useEffect, useState } from "react";

function TaskList ({tasks: propTasks, onToggleTask}) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/tasks")
        .then((r) => r.json())
              .then((data) => setTasks(data));

    }, [])
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;