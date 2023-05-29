import styled from "styled-components"

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 1rem;
  margin: 2px 0;
  font-weight: bold;

  @media (max-width: 720px) {
    padding: 0.5rem;
  }
`

export const ContentHeader = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  cursor: pointer;

  @media (max-width: 720px) {
    font-size: 1rem;
  }
`

export const CollapseIcon = styled.div`
  width: 20px;
  margin-right: 1rem;

  i {
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 800;
  }

  @media (max-width: 720px) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const DateResponsive = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }

`

export const Day = styled.div`

`

export const Month = styled.div`

`

export const Year = styled.div`

`

export const Column = styled.div`
  &.column-date {
    width: 15%;
    
    @media (max-width: 720px) {
      display: none;
    }
  }
  &.column-description {
    width: 35%; 
  }
  &.column-amount {
    width: 25%;    
  }
  &.column-balance {
    width: 25%;    
  }
`

export const ContentReveal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: calc(1rem + 20px);
`

export const ContentRevealItem = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  text-align: left;

  i {
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin: 0 1rem;
  }
`

export const Select = styled.select`
  visibility: ${(props => props?.visibility)};
`

export const Button = styled.button`
  cursor: pointer;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  min-width: 100px;
  padding: 2px;
  margin-left: 0.25rem;
`

export const NotesEdit = styled.div`
  display: inline;
  visibility: ${(props => props?.visibility)};
`

export const Input = styled.input`
  font-weight: bold;
  padding: 2px;
  width: 30%;
`