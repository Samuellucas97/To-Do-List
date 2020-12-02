import { useState } from 'react'

import DefaultLayout from  '../../layouts/DefaultLayout'
import PersonIcon from '@material-ui/icons/Person'
import { Container, TextField }  from '../../components/index'

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled } from './style'

import Paper from '@material-ui/core/Paper';

export default function MyDatas() {
    const [name, setName] = useState('Samuel Lucas de Moura Ferino')
    const [email, setEmail] = useState('samuel1797@gmail.com')
    const [password, setPassword] = useState('muka123')
    const [copassword, setCopassword] = useState('muka123')

    async function handleUpdateMyDatas(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        }

        console.log(data)
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
                            label="Senha"
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
                            label="Repetir senha"
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