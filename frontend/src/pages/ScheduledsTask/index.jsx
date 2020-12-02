
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
    {
      id: 3,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 4,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 5,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 6,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 7,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 8,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 9,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 10,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 11,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 12,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 13,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 14,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      id: 15,
      title: 'Post title',
      finishDate: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
  ];

export default function ScheduledsTasks() {
    return ( 
        <DefaultLayout> 
            <TitleStyled>Tarefas agendadas</TitleStyled>
            <Grid container  style={{justifyContent: 'space-around'}} >
                {tasks.map(task =>(
                  <CardCustom key={task.id}  task={task} />                
                ))}
            </Grid>
        </DefaultLayout>
    )
}