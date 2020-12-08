import { useState, useEffect } from 'react';

import { Grid, CardCustom } from '../../components/index'
import DefaultLayout from '../../layouts/DefaultLayout'
import { TitleStyled } from './style'

import api from '../../services/api'

export default function PendingsTasks() {

    const [tasksPending, setTasksPending] = useState([]);

    const idUser = localStorage.getItem('idUser')

    useEffect(() => { 
        api.get(`tasks/pending/${idUser}`)
        .then(response => {
            setTasksPending(response.data);
        })
    }, [idUser]);

    return ( 
        <DefaultLayout>
            <TitleStyled>Tarefas pendentes</TitleStyled>
            <Grid container  style={{justifyContent: 'space-around'}} >
                {tasksPending.map(task =>(
                  <CardCustom key={task.id}  task={task} path={"tasks/pending/"} idUserCustom={idUser} />                
                ))}
            </Grid>
        </DefaultLayout>
    )
}