import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'
import { Container, TextField }  from '../../components/index'

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled } from './style'

import Paper from '@material-ui/core/Paper';

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [copassword, setCopassword] = useState('')

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        };

        try {
            const response = await api.post('signup', data);
            console.log(response)    
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }

        console.log(data)


        history.push('/login');
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 16 }}>    
            <DivStyled>
                <AvatarStyled>
                    <PersonAddOutlinedIcon fontSize="large" />
                </AvatarStyled>
                <TitleStyled component="h1" variant="h5">
                    Registrar-se
                </TitleStyled>

                <FormStyled onSubmit={handleRegister}>
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
                        type="email"
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
                        inputProps={{
                            minLength: 8
                          }}
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
                        name="password"
                        label="Repetir senha"
                        inputProps={{
                            minLength: 8
                          }}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <SubmitButtonStyled
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                    >
                        Confirmar
                    </SubmitButtonStyled>
                </FormStyled>
            </DivStyled>
            </Paper>
        </Container>
  );
}