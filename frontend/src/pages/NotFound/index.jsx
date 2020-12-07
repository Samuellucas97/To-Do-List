import {ContainerStyled, 
    TitleStyled, 
    SubtitleStyled, 
    ButtonStyled } from './style'

import { Link as RouterLink } from 'react-router-dom';

export default function NotFound() {
return (  
  <ContainerStyled >
        <TitleStyled variant="h2" >
            Erro 404
        </TitleStyled>
        <SubtitleStyled variant="subtitle1">
            A página que você está buscando não foi encontrada
        </SubtitleStyled>
        <ButtonStyled variant="contained" color="secondary" component={RouterLink} to={"/"} size="large">PÁGINA INICIAL</ButtonStyled>          
    </ContainerStyled>
);
}