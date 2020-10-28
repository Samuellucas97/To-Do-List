import React, { useState, useEffect } from 'react'

import api from '../../services/api'

const Notifications = () => {

    const [notifications, setNotification] = useState([]);

    useEffect(() => { 
        api.get('notifications')
        .then(response => {
            setNotification(response.data);
        })
    });

    return (
        <div>
            <h1>Notificações</h1>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        <p>{notification.title}</p>

                        <p>{notification.description}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Notifications;