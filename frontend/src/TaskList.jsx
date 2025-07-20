import React, { useEffect, useState }from"react";
function TaskList () {
    const [tasks, setTasks]=useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/tasks")
        .then((r) => r.json())
              .then((data) => setTasks(data));

    }, [])
    return (
        <div>
            <h2>
               Tasks
            </h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} {task.completed ? "(Done)" : "(Pending)"}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;