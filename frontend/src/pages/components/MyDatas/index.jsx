import DefaultLayout from  '../../../layouts/DefaultLayout'
import PersonIcon from '@material-ui/icons/Person'
import { Container, TextField }  from '../../../components/index'

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled } from './style'

export default function MyDatas() {
    return (
        <DefaultLayout>
           <Container component="main" maxWidth="xs">
                <DivStyled>
                    <AvatarStyled>
                        <PersonIcon fontSize="large" />
                    </AvatarStyled>
                    <TitleStyled component="h1" variant="h5">
                        Meus dados
                    </TitleStyled>

                    <FormStyled>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color="secondary"
                            id="email"
                            label="Nome completo"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color="secondary"
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
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
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            required
                            fullWidth
                            name="password"
                            label="Repetir senha"
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
                            Atualizar
                        </SubmitButtonStyled>
                    </FormStyled>
                </DivStyled>
            </Container>
        </DefaultLayout>
    )
}