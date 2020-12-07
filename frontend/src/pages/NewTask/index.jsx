import { useState } from 'react'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { Container, TextField }  from '../../components/index'

import DefaultLayout from '../../layouts/DefaultLayout'


import Paper from '@material-ui/core/Paper';

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled } from './style'

export default function NewTask() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [selectedStartDate, setSelectedStartDate] = useState(new Date())
    // const [selectedFinishDate, setSelectFinishDate] = useState(new Date())  


    async function handleNewTask(e) {
        e.preventDefault();

        const data = {
            title,
            description
        }

        console.log(data)
    }


    return (

        <DefaultLayout>
            <Container component="main" maxWidth="md">
                <Paper elevation={3} style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 16 }}>    
            
                <DivStyled>
                    <AvatarStyled>
                        <AddOutlinedIcon fontSize="large" />
                    </AvatarStyled>
                    <TitleStyled component="h1" variant="h5">
                        Cadastrar tarefa
                    </TitleStyled>

                    
                    <FormStyled onSubmit={handleNewTask}>
                        <TextField
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            color="secondary"
                            id="title"
                            label="Título"
                            name="title"
                            autoComplete="title"
                            autoFocus
                        />

                        <TextField
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            color="secondary"
                            required
                            fullWidth
                            multiline
                            rows={10}
                            rowsMax={10} 
                            name="description"
                            label="Descrição"
                            type="text"
                            id="description"

                    
                            autoComplete="description"
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
        </DefaultLayout>
    );
}