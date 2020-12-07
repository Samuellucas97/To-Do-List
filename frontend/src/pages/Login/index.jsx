import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, TextField }  from '../../components/index'

import api from '../../services/api'
import { login } from "../../services/auth";

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled, 
    ButtonRegisterStyled } from './style'

import Paper from '@material-ui/core/Paper';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            "username": email,
            "password": password
        }
        try {
            console.log(data)
            const response = await api.post('sign-in', data);

            console.log(response)    
			//login(response.data.token);
            
            //history.push('/home');
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }

    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 20 }}>    
            <DivStyled>
                <AvatarStyled>
                    <LockOutlinedIcon fontSize="large" />
                </AvatarStyled>
                <TitleStyled component="h1" variant="h5">
                    Efetuar acesso
                </TitleStyled>

                <FormStyled onSubmit={handleLogin}>
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
                        autoFocus
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
                        inputProps={{
                            minLength: 8
                        }}
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
                    <ButtonRegisterStyled to="/register">
                        Ainda não fez cadastro? Registrar-se
                    </ButtonRegisterStyled>
                </FormStyled>
            </DivStyled>
            </Paper>
        </Container>
  );
}
