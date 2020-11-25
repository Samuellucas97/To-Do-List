import {ContainerStyled, 
        TitleStyled, 
        SubtitleStyled, 
        ButtonStyled } from './style'

export default function Home() {
    return (  
      <ContainerStyled >
            <TitleStyled variant="h2" >
                Lista de tarefas
            </TitleStyled>
            <SubtitleStyled variant="subtitle1">
                Uma simples aplicação de gerenciamento de lista de tarefas
            </SubtitleStyled>
            <ButtonStyled to="/login">ACESSAR</ButtonStyled>          
        </ContainerStyled>
    );
}