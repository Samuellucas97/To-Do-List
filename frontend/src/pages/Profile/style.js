import styled from 'styled-components'

export const ContainerStyled = styled.div `
  display: flex;
  flex-direction: column;
`

export const RowStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 0;
  > a {
    font-size: 14px;
    text-decoration: none;
    color: var(--color-blue);
    padding: 2.5px 0;
    & + a {
      padding-left: 10px;
      margin-left: 10px;
      border-left: 1px solid var(--color-border);
    }
  }
`;


export const PaneStyled = styled.div`
  background: var(--color-white);
  box-shadow: var(--panel-shadow);
  display: grid;
  grid-template-columns: 65fr 35fr;
`;
