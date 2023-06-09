import { useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import { Transaction } from '../components/Transaction'
import { transactions } from '../data/transactionsMock'
import { Modal } from '../components/Modal'
import { GlobalIcon as Icon } from '../styles/GlobalStyle'
import { TableHeader } from '../components/TableHeader'

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

const Table = styled.div`
  width: 100%;
  font-weight: bold;
`

const TransactionWrapper = styled.div`
  position: relative;
`

export const Transactions = () => {
  const { state } = useLocation();
  const account = state?.account;
  const { title, amount, description } = account;

  const [modalTransaction, setModalTransaction] = useState(0);

  const toggleModal = (transaction) => {
    setModalTransaction(transaction);
    document.getElementById('modal').classList.toggle('open');
  };

  const items = [
    { name: 'DATE', width: '15%' }, 
    { name: 'DESCRIPTION', width: '35%' }, 
    { name: 'AMOUNT', width: '25%' }, 
    { name: 'BALANCE', width: '25%' }
  ];

  return (
    <main className="main bg-dark">
      <ContentWrapper>
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        <p className="account-amount-description">{description}</p>
      </ContentWrapper>

      <TableWrapper>      
        <TableHeader items={items} />
        <Table>
          {transactions.map(transaction => 
            <TransactionWrapper key={transaction?.id}>
              <Transaction transaction={transaction} />
              <Icon onClick={() => toggleModal(transaction)} className="modal--icon fa fa-regular fa-eye toggle-button" />
            </TransactionWrapper>
          )}
        </Table>
      </TableWrapper>
      <Modal transaction={modalTransaction} />
    </main>
  )
}
