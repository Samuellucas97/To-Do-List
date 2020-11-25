import styled from 'styled-components'
import { Container, Typography } from '../../components/index'
import { Link } from 'react-router-dom'

export const ContainerStyled = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-top: 250px;
`

export const TitleStyled = styled(Typography)`
font-size: 45px;
`

export const SubtitleStyled = styled(Typography)`
font-size: 22px;
margin-bottom: 50px;
`

export const ButtonStyled = styled(Link)`
background: linear-gradient(45deg, #FE6B8B, #FF8E53);
border: 0;
border-radius: 15px;
color: white;
padding: 10px 30px;
font-size:24px;
margin-bottom: 15px;
max-width: 250px;
`

