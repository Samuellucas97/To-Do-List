import DefaultLayout from '../../layouts/DefaultLayout'

import {ContainerStyled, 
        TitleStyled, 
        SubtitleStyled } from './style'

export default function Home() {
    return (  
      <DefaultLayout>
        <ContainerStyled >
                <TitleStyled variant="h2" >
                    Bem vindo!
                </TitleStyled>
                <SubtitleStyled variant="subtitle1">
                    Uma simples aplicação de gerenciamento de lista de tarefas
                </SubtitleStyled>
                <SubtitleStyled variant="subtitle1">
                    Funcionalidades do sistema
                    <ul>
                        <li>Gerenciamento de tarefas pendentes</li>
                        <li>Gerenciamento de tarefas agendadas</li>
                        <li>Gerenciamento de tarefas concluídas</li>
                    </ul>
                </SubtitleStyled>
            </ContainerStyled>
        </DefaultLayout>
    );
}