import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles'

import Profile from './pages/Profile/index'
import FinishedTask from './pages/FinishedTask/index'
import Logon from './pages/Logon/index'
import NewTask from './pages/NewTask/index'
import Notifications from './pages/Notifications/index'
import PendingTask from './pages/PendingTask/index'
import Register from './pages/Register/index'
import ScheduledTask from './pages/ScheduledTask/index'

const Routes = () => (
    <BrowserRouter>
        <>
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/tasks/new" exact component={NewTask}/>
            <Route path="/tasks/pendings" exact component={PendingTask}/>
            <Route path="/tasks/finisheds" exact component={FinishedTask}/>
            <Route path="/tasks/scheduleds" exact component={ScheduledTask}/>
            <Route path="/notifications" exact component={Notifications}/>
        </Switch>
        <GlobalStyle />
        </>        
    </BrowserRouter>
);

export default Routes;