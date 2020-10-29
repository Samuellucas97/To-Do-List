import React, { useState, useEffect }  from 'react'

import api from '../../services/api'

const FinishedTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => { 
        api.get('tasks/concluded')
        .then(response => {
            setTasks(response.data);
        })
    }, []);

    return (
        <div>
            <h1>Tarefas Concluídas</h1>
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

export default FinishedTask;