import { useState, useEffect } from 'react';

import DefaultLayout from '../../layouts/DefaultLayout'
import { Grid, CardFinished } from '../../components/index'
import { TitleStyled } from './style'

import api from '../../services/api'

export default function FinishedsTasks() {

    const [tasksFinished, setTasksFinished] = useState([]);

    const idUser = localStorage.getItem('idUser')

    useEffect(() => { 
        api.get(`tasks/concluded/${idUser}`)
        .then(response => {
            setTasksFinished(response.data);
        })
    }, [idUser]);

    return ( 
        <DefaultLayout>    
            <TitleStyled>Tarefas concluídas</TitleStyled>    
            <Grid container style={{justifyContent: 'space-around'}} >
                {tasksFinished.map(task =>(
                  <CardFinished key={task.id}  task={task} />                
                ))}
            </Grid>
        </DefaultLayout>
    )
}