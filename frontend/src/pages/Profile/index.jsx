import { useState, useEffect } from 'react';

import DefaultLayout from  '../../layouts/DefaultLayout'
import PersonIcon from '@material-ui/icons/Person'
import { Container, TextField }  from '../../components/index'

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled } from './style'

import api from '../../services/api'

import Paper from '@material-ui/core/Paper';

export default function MyDatas() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [copassword, setCopassword] = useState('')

    const idUser = localStorage.getItem('idUser')

    useEffect(() => { 
        api.get(`/user/${idUser}`)
        .then(response => {
            setName(response.data.name);
            setEmail(response.data.username);
        })
    }, [idUser]);

    async function handleUpdateMyDatas(e) {
        e.preventDefault();

        if (password === copassword) {
            const data = {
                "name": name,
                "username": email,
                "password": password
            }

            try {
                await api.put(`/users/${idUser}`, data);
                
                alert('Dados atualizados com sucesso!')
                
            } catch (err) {
                alert('Erro no cadastro, tente novamente');
            }
        }
        else {
            alert('As senhas não são compatíveis!')
        }
    }

    return (
        <DefaultLayout>
           <Container component="main" maxWidth="xs">
                
                <Paper elevation={3} style={{ paddingLeft: 16, paddingRight: 16 }}>    
                <DivStyled>
                    <AvatarStyled>
                        <PersonIcon fontSize="large" />
                    </AvatarStyled>
                    <TitleStyled component="h1" variant="h5">
                        Meus dados
                    </TitleStyled>

                    <FormStyled  onSubmit={handleUpdateMyDatas}>
                        <TextField
                            value={name}
                            onChange={e => setName(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color="secondary"
                            id="name"
                            label="Nome completo"
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />

                        <TextField
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color="secondary"
                            id="email"
                            label="Email"
                            disabled
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            required
                            fullWidth
                            name="password"
                            label="Nova senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <TextField
                            value={copassword}
                            onChange={e => setCopassword(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            required
                            fullWidth
                            name="copassword"
                            label="Repetir nova senha"
                            type="password"
                            id="copassword"
                            autoComplete="current-copassword"
                        />
                        <SubmitButtonStyled
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Atualizar
                        </SubmitButtonStyled>
                    </FormStyled>
                </DivStyled>
                </Paper>
            </Container>
        </DefaultLayout>
    )
}