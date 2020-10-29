import React from 'react'
import { Link } from 'react-router-dom';
import { ContainerStyled, RowStyled } from './style'


const Profile = () => {
    return (
        <ContainerStyled>
            <RowStyled>
                <h2>Usuário</h2>
            </RowStyled>
            <RowStyled>
                <h2>Tarefas</h2>
                <Link className="button" to="/tasks/new">Cadastrar tarefa</Link>
                <Link className="button" to="/tasks/finished">Ver tarefas concluídas</Link>
                <Link className="button" to="/tasks/pending">Ver tarefas pendentes</Link>
                <Link className="button" to="/tasks/scheduler">Ver tarefas agendadas</Link>

            </RowStyled>
        </ContainerStyled>
    )
}

export default Profile;