import React, { useEffect, useState }from"react";
function TaskList () {
    const [tasks, setTasks]=useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/tasks")
        .then((r) => r.json())
        .then((data) => setTasks(data));

    }
    )
}