import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { Container, TextField }  from '../../components/index'

import 'date-fns';

import Grid from '@material-ui/core/Grid';

import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DefaultLayout from '../../layouts/DefaultLayout'

import api from '../../services/api'

import Paper from '@material-ui/core/Paper';

import {
    FormStyled,
    DivStyled,
    AvatarStyled, 
    TitleStyled,
    SubmitButtonStyled } from './style'

export default function PendingsTaskEdit(props) {
    const { match: { params } } = props
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [selectedStartDate, setSelectedStartDate] = useState(new Date(Date.now()))
    const [selectedFinishDate, setSelectedFinishDate] = useState(new Date(Date.now()))  

    const idUser = localStorage.getItem('idUser')
    const idTask = params.idTask
    
    const history = useHistory();


    useEffect(() => { 
        api.get(`tasks/${idUser}/${idTask}`)
        .then(response => {
            setTitle(response.data.title);
            setDescription(response.data.description);
            setSelectedStartDate(response.data.beginDate);
            setSelectedFinishDate(response.data.endDate);
        })
    }, [idUser, idTask]);


    async function handleUpdatingTask(e) {
        e.preventDefault();

        const data = {
            "title": title,
            "description": description, 
            "beginDate": selectedStartDate,
            "endDate": selectedFinishDate,
            "idUserCustom": idUser,
            "isConcluded": false
        }

        
        try {
            await api.put(`/tasks/${idTask}`, data);
            
            alert('Tarefa cadastrada com sucesso!')

            history.push('/tasks/pendings');
            
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
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
                        Atualizar tarefa
                    </TitleStyled>

                    
                    <FormStyled onSubmit={handleUpdatingTask}>
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

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <Grid item>                            
                                <KeyboardDatePicker
                                    disableToolbar
                                    fullWidth
                                    required
                                    variant="outlined"
                                    color="secondary"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-start"
                                    label="Início da tarefa"
                                    value={selectedStartDate}
                                    onChange={date => setSelectedStartDate(date)}
                                    KeyboardButtonProps = {{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <KeyboardDatePicker
                                    disableToolbar
                                    fullWidth
                                    required
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    color="secondary"
                                    id="date-finish"
                                    label="Fim da tarefa"
                                    value={selectedFinishDate}
                                    onChange={date => setSelectedFinishDate(date)}
                                    KeyboardButtonProps = {{
                                    'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        </MuiPickersUtilsProvider>

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
    )
}