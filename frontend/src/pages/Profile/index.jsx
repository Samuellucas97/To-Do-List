import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import MyDatas from '../components/MyDatas/index'
import FinishedsTask from '../components/FinishedsTask/index'
import PendingsTask from '../components/PendingsTask/index'
import ScheduledsTask from '../components/ScheduledsTask/index'
import NewTask  from '../components/NewTask/index'

import Header from '../../components/Header'


const sections = [
    { title: 'Pendentes', url: '/tasks/pendings' },
    { title: 'Agendadas', url: '/tasks/scheduleds' },
    { title: 'Finalizadas', url: '/tasks/finisheds' }
];


export default function Profile() {
    return (
        <Router>
            <Header title="Tarefas" sections={sections} />
            <Switch>
                <Route path="/profile" >                
                    <MyDatas />
                </Route> 
                <Route path="/tasks/new" >
                    <NewTask />
                </Route> 
                <Route path="/tasks/pendings" >
                    <PendingsTask />
                </Route>
                <Route path="/tasks/finisheds" >
                    <FinishedsTask />
                </Route>
                <Route path="/tasks/scheduleds" >
                    <ScheduledsTask />
                </Route>
            </Switch> 
        </Router>
      
    )
}