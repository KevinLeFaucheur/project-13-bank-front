import styled from "styled-components"
import { GlobalButton, GlobalInput } from "../styles/GlobalStyle"

export const TransactionWrapper = styled.div`
  background-color: #FFF;
  padding: 5px 5%;
  margin: 2px 0;
`

export const TableRow = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  @media (max-width: 720px) {
    display: none;
  } 
`

export const TableRowResponsive = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 90%;

    .upper, .lower {
      display: flex;
      justify-content: space-between;
    }

    .upper {
      margin-bottom: 10px;
    }

    .lower {
      font-size: 0.75rem;
      color: grey;
    }
  }
`

export const TransactionDetails = styled.div`
  padding: 10px;
  @media (max-width: 720px) {
    padding-left: 0;
  } 
`

export const DetailRow = styled.div`
  text-align: left;
  padding: 0.25rem 0;
  margin-bottom: 2px;
`

export const Select = styled.select`
  visibility: ${(props => props?.visibility)};
`

export const Notes = styled.div`
  display: inline;
  visibility: ${(props => props?.visibility)};
`

export const Button = styled(GlobalButton)`
  padding: 2px;
  margin-left: 0.25rem;

  & > i {
    display: none;
  }

  @media (max-width: 720px) {
    min-width: 2.5rem;

    & > span {
      display: none;
    }

    & > i {
      display: inline;
    }
  } 

`

export const Input = styled(GlobalInput)`

`