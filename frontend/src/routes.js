import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles'
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Profile from './pages/Profile/index'
import NotFound from './pages/NotFound/index'
import FinishedsTask from './pages/FinishedsTask/index'
import FinishedsTaskEdit from './pages/FinishedsTask/edit'
import PendingsTask from './pages/PendingsTask/index'
import PendingsTaskEdit from './pages/PendingsTask/edit'
import ScheduledsTask from './pages/ScheduledsTask/index'
import ScheduledsTaskEdit from './pages/ScheduledsTask/edit'
import NewTask  from './pages/NewTask/index'


const Routes = () => (
    <BrowserRouter>
        <>
        <CssBaseline />
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/home"  exact component={Home} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/tasks/new" exact component={NewTask} />
            <Route path="/tasks/pendings" exact component={PendingsTask} />
            <Route path="/tasks/pendings/:taskId" exact component={PendingsTaskEdit} />
            <Route path="/tasks/finisheds" exact component={FinishedsTask} />
            <Route path="/tasks/finisheds/:taskId" exact component={FinishedsTaskEdit} />
            <Route path="/tasks/scheduleds" exact component={ScheduledsTask} />
            <Route path="/tasks/scheduleds/:taskId" exact component={ScheduledsTaskEdit} />
            <Route component={NotFound}/>
        </Switch>
        <GlobalStyle />
        </>        
    </BrowserRouter>
);

export default Routes;