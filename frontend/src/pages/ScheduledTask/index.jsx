import React, { useState, useEffect } from 'react'

import api from '../../services/api'

const SchedulerTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => { 
        api.get('tasks/scheduler')
        .then(response => {
            setTasks(response.data);
        })
    }, []);

    return (
        <div>
            <h1>Tarefas Agendadas</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <p>{task.title}</p>

                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SchedulerTask;