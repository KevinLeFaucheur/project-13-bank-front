import styled from "styled-components"

export const TransactionWrapper = styled.div`
  background-color: #FFF;
  padding: 5px 5%;
  margin: 2px 0;
`

export const TransactionContainer = styled.div`
`

export const TransactionBody = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  @media (max-width: 720px) {
    display: none;
  } 
`

export const TransactionBodyResponsive = styled.div`
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

export const TransactionItem = styled.div`
  &.column-date {
    width: 15%;
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

export const Icon = styled.i`
  cursor: pointer;

  &.collapse--icon {
    position: absolute;
    top: 0.7rem;
    left: 1.4rem;
    font-size: 1.5rem;
    font-weight: 800;

    @media (max-width: 720px) {
      display: none;
    }
  }
  &.modal--icon {
    position: absolute;
    top: 0.7rem;
    right: 1.4rem;  
    font-size: 1rem;

    @media (max-width: 720px) {
      top: 0.9rem;
      right: 0.9rem; 
    }
  }
  &.modalClose--icon {
    position: absolute;
    top: 1.6rem;
    right: 1.4rem;  
    font-size: 1rem;

    @media (max-width: 720px) {
      right: 1rem; 
    }
  }
  &.pen--icon {
    font-size: 1rem;
    margin: 0 0.5rem;
  }
`

export const TransactionsHeader = styled.div`
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

export const Select = styled.select`
  visibility: ${(props => props?.visibility)};
`

export const Button = styled.button`
  cursor: pointer;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #FFF;
  font-weight: bold;
  min-width: 100px;
  padding: 2px;
  margin-left: 0.25rem;
`

export const Notes = styled.div`
  display: inline;
  visibility: ${(props => props?.visibility)};
`

export const Input = styled.input`
  font-weight: bold;
  padding: 2px;
  width: 30%;

  &::placeholder {
    font-weight: 300;
  }
`