import React, { useState }  from 'react'

import api from '../../services/api'

const NewTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleNewTask(e) {
        e.preventDefault();

        const data = {
            "title": title,
            "description": description,
            "beginDate": null,
            "endDate": null
        };

        try {    
            await api.post('tasks', data, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                credentials: 'same-origin',
            })
            .then(response => {
                console.log(response.data);
            })

        } catch (err) {
            alert('Erro ao cadastrar. Tente novamente');
        }
    }


    return (
        <div>
            <form onSubmit={handleNewTask}>
                <input 
                    placeholder="Título da tarefa" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)} 
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default NewTask;