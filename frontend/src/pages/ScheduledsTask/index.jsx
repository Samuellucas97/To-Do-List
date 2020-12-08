import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { Grid, CardCustom } from '../../components/index'
import DefaultLayout from '../../layouts/DefaultLayout'
import { TitleStyled } from './style'

import api from '../../services/api'

export default function ScheduledsTasks() {

  const history = useHistory();
  const [tasksScheduler, setTasksScheduler] = useState([]);

  const idUser = localStorage.getItem('idUser')
  
  useEffect(() => { 
      api.get(`tasks/scheduler/${idUser}`)
      .then(response => {
          setTasksScheduler(response.data);
      })
  }, [idUser]);


    return ( 
        <DefaultLayout> 
            <TitleStyled>Tarefas agendadas</TitleStyled>
            <Grid container  style={{justifyContent: 'space-around'}} >
                {tasksScheduler.map(task =>(
                  <CardCustom key={task.id}  task={task} />                
                ))}
            </Grid>
        </DefaultLayout>
    )
}