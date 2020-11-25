import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { Container, TextField }  from '../../../components/index'

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled } from './style'

export default function NewTask() {
  return (
    <Container component="main" maxWidth="xs">
        <DivStyled>
            <AvatarStyled>
                <AddOutlinedIcon fontSize="large" />
            </AvatarStyled>
            <TitleStyled component="h1" variant="h5">
                Cadastrar tarefa
            </TitleStyled>

            <FormStyled>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    color="secondary"
                    id="email"
                    label="Título"
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
                    multiline
                    rows={10}
                    rowsMax={10} 
                    name="password"
                    label="Descrição"
                    type="text"
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
    </Container>
  );
}