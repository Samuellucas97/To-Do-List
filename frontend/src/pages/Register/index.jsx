import React, { useState } from 'react'

import api from '../../services/api'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        };

        try {
            const response = await api.post('signup', data);    
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
    }


    return (
        <div>
            <form onSubmit={handleRegister}>
                <input 
                    placeholder="Nome da ONG" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input 
                    type="email"
                    placeholder="E-mail"      
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Password"      
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Register;