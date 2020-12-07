import DefaultLayout from '../../layouts/DefaultLayout'
import { Grid, CardCustom } from '../../components/index'
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
    {
      id: 2,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        '',
    },
  ];

export default function FinishedsTasks() {
    return ( 
        <DefaultLayout>    
            <TitleStyled>Tarefas concluídas</TitleStyled>    
            <Grid container style={{justifyContent: 'space-around'}} >
                {tasks.map(task =>(
                  <CardCustom key={task.id}  task={task} />                
                ))}
            </Grid>
        </DefaultLayout>
    )
}