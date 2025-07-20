import { useState } from "react";

function TaskForm ({ onAddTask }) {
    const [title, setTitle] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const newTask = {
            title,
            completed: false
        };

        fetch("http://localhost:3000/tasks", 
        {
            method: "POST",
            headers: {
                "Content-Type" :"application/json"
            },
            body: JSON.stringify(newTask)
        })
        .then((res) => res.json())
        .then((data) => {
            onAddTask(data);
            setTitle(""); 
        })
        .catch((error) => {
            console.error("Error adding task:", error);
        });
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
    
