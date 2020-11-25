import { useState } from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, TextField }  from '../../components/index'

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled, 
    ButtonRegisterStyled } from './style'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            email,
            password
        }

        console.log(data)
    }


    return (
        <Container component="main" maxWidth="xs">
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
        </Container>
  );
}