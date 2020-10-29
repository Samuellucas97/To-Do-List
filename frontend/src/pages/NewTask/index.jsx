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
            "beginDate": "2020-10-20",
            "endDate": "2020-11-22"
        };

        try {
            console.log(data);
            await api.post('tasks', data);

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