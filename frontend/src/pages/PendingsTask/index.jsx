import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { Grid, CardCustom } from '../../components/index'
import DefaultLayout from '../../layouts/DefaultLayout'
import { TitleStyled } from './style'

import api from '../../services/api'

export default function PendingsTasks() {

    const history = useHistory();

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
                  <CardCustom key={task.id}  task={task} history={history} path={"/tasks/pendings/"} idUserCustom={idUser} />                
                ))}
            </Grid>
        </DefaultLayout>
    )
}