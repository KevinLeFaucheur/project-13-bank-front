import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
  color: #FFF;
  font-weight: 600;

  @media (max-width: 720px) {
    font-size: 0.8rem;
  }

  &.header--modal {
    color: #2c3e50;
    padding: 0;
    
    @media (max-width: 720px) {
      display: none;
    }
  } 
`

export const TableItem = styled.div`
  width: ${props => props.width};
`

export const TableHeader = ({ items }) => {
  return (
    <HeaderContainer>
      {items.map(item => <TableItem colWidth={item.width}>{item.name}</TableItem>)}
    </HeaderContainer>
  )
}
