import { useState, useEffect } from 'react';

import DefaultLayout from '../../layouts/DefaultLayout'
import { Grid, CardNotification } from '../../components/index'
import { TitleStyled } from './style'

import api from '../../services/api'

export default function Notifications() {

    const [notifications, setNotifications] = useState([]);

    const idUser = localStorage.getItem('idUser')

    useEffect(() => { 
        api.get(`notifications/${idUser}`)
        .then(response => {
            setNotifications(response.data);
        })
    }, [idUser]);

    return ( 
        <DefaultLayout>    
            <TitleStyled>Notificações</TitleStyled>    
            <Grid container style={{justifyContent: 'space-around'}} >
                {notifications.map(notification =>(
                  <CardNotification key={notification.id}  notification={notification} />                
                ))}
            </Grid>
        </DefaultLayout>
    )
}