import DefaultLayout from '../../layouts/DefaultLayout'

import {ContainerStyled, 
        TitleStyled, 
        SubtitleStyled, 
        ButtonStyled } from './style'

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
                <ButtonStyled to="/login">ACESSAR</ButtonStyled>          
            </ContainerStyled>
        </DefaultLayout>
    );
}