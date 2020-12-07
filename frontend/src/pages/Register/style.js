import styled from 'styled-components'
import { Button , Typography, Avatar}  from '../../components/index'
import { Link } from 'react-router-dom'

export const FormStyled = styled.form `
width: 100%;
margin-top: 10px;
`

export const DivStyled = styled.div `
margin-top: 120px;
display: flex;
flex-direction: column;
align-items: center;
`
export const AvatarStyled = styled(Avatar)`
margin: 20px 0px;
width: 56px;
height: 56px;
background-color: #f50057;
`
export const TitleStyled = styled(Typography)`
font-size: 30px;
`
export const SubmitButtonStyled = styled(Button)`
margin: 20px 0px;
`
export const ButtonRegisterStyled = styled(Link)`
font-size: 17px;
color: #90caf9;
`