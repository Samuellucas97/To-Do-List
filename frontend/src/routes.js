import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles'
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Profile from './pages/Profile/index'

const Routes = () => (
    <BrowserRouter>
        <>
        <CssBaseline />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/profile" exact component={Profile}/>
        </Switch>
        <GlobalStyle />
        </>        
    </BrowserRouter>
);

export default Routes;