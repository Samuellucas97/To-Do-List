import { Grid, CardCustom } from '../../components/index'
import DefaultLayout from '../../layouts/DefaultLayout'
import { TitleStyled } from './style'

const tasks = [
    {
      id: 0,
      title: 'Featured post',
      finishDate: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 1,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
  ];

export default function PendingsTasks() {
    return ( 
        <DefaultLayout>
            <TitleStyled>Tarefas pendentes</TitleStyled>
            <Grid container  style={{justifyContent: 'space-around'}} >
                {tasks.map(task =>(
                  <CardCustom key={task.id}  task={task} />                
                ))}
            </Grid>
        </DefaultLayout>
    )
}