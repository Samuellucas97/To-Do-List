import React from 'react'

import './style.css';

// import api from '../../services/api'

import Container from '@material-ui/core/Container'
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
      border: 0,
      borderRadius: 15,
      color: 'white',
      padding: "10px 30px",
      fontSize:24,
      marginBottom: 15,
    }, 
})


function ButtonStyled() {
    const classes = useStyles()
    return <Button className={classes.root}>Entrar</Button>
}

const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 45
      },
      subtitle1: {
        fontSize: 22,
        marginBottom: 50
      }
    }
})

const Logon = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <AssignmentIcon style={{width: '96vw', height: '20vh'}} />
                <Typography variant="h2">
                Lista de tarefas
                </Typography>
                <Typography variant="subtitle1">
                Uma simples aplicação de gerenciamento de lista de tarefas
                </Typography>
                <ButtonStyled />
            </Container>
        </ThemeProvider>
    )
}

export default Logon;