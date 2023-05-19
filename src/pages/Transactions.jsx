import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Transaction } from '../components/Transaction'

import { transactions } from '../data/transactionsMock'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 8rem;

  .account-amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .account-amount-description {
    margin: 0;
  }

  .account-title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  width: 100%;
  flex: 1;  
  
  @media (min-width: 720px) {
    &.cta {
      flex: 0;
    }
  }
`

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4px;
  color: #fff;
  padding: 0 2rem 0 calc(2rem + 20px);

  @media (max-width: 720px) {
    padding: 0;
  }
`

const Column = styled.div`
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

const Table = styled.div`
  width: 100%;
  font-weight: bold;
`

export const Transactions = () => {
  const { state } = useLocation();
  const account = state?.account;
  const { title, amount, description } = account;

  return (
      <main className="main bg-dark">
        <ContentWrapper>
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
          <p className="account-amount-description">{description}</p>
        </ContentWrapper>

        <TableWrapper>      
          <TableHeader>
            <Column className='column-date'>DATE</Column>
            <Column className='column-description'>DESCRIPTION</Column>
            <Column className='column-amount'>AMOUNT</Column>
            <Column className='column-balance'>BALANCE</Column>
          </TableHeader>
          <Table>
            {transactions.map(transaction => 
              <Transaction key={transaction?.id} transaction={transaction} />
            )};
          </Table>
        </TableWrapper>
      </main>
  )
}
