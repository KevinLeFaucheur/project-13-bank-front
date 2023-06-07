import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { 
  DetailRow, Icon, TransactionBody, TransactionBodyResponsive, TransactionContainer, TransactionDetails, TransactionItem, TransactionsHeader 
} from './Transaction.styled';
import { dateFormat } from '../utils/dateFormat';

const Background = styled.div`
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &.open {
    visibility: visible;
  }
`

const Dialog = styled.div`
  position: absolute;
  left: 10%;
  top: 25%;
  width: 80%;
  min-height: 200px;
  border-radius: 5px;
  padding: 1rem;
  background-color: #FFF;
  
  @media (max-width: 720px) {
    left: 0;
    width: 100%;
    border-radius: 0;
  }
`

const Separator = styled.div`
  margin: 10px 0;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.15);
`

export const Modal = ({ transaction }) => {
  const [month, day, year] = dateFormat(transaction?.date);
  const [selectValue, setSelectValue] = useState('');
  const [noteInputValue, setNoteInputValue] = useState('');

  useEffect(() => {
    setSelectValue(localStorage.getItem(`category-${transaction?.id}`));
    setNoteInputValue(localStorage.getItem(`note-${transaction?.id}`));
  }, [transaction.id])

  const close = () => {
    document.getElementById('modal').classList.remove('open');
  }

  return (
    <Background id='modal'>
      {transaction ?
      <Dialog>
        <Icon onClick={close} className="modalClose--icon fa fa-regular fa-eye" />

        <div id='modal-body'>

          <TransactionContainer>

            <TransactionsHeader className='header--modal'>
              <TransactionItem className='column-date'>DATE</TransactionItem>
              <TransactionItem className='column-description'>DESCRIPTION</TransactionItem>
              <TransactionItem className='column-amount'>AMOUNT</TransactionItem>
              <TransactionItem className='column-balance'>BALANCE</TransactionItem>
            </TransactionsHeader>

            <TransactionBody>
              <TransactionItem className='column-date'>{month + ' ' + day + ', ' + year}</TransactionItem>
              <TransactionItem className='column-description'>{transaction?.description}</TransactionItem>
              <TransactionItem className='column-amount'>${transaction?.amount}</TransactionItem>
              <TransactionItem className='column-balance'>${transaction?.balance}</TransactionItem>
            </TransactionBody>

            <TransactionBodyResponsive>
              <div className='upper'>
                <div>{transaction?.description}</div>
                <div>${transaction?.amount}</div>
              </div>
              <div className='lower'>
                <div>{month + ' ' + day + ', ' + year}</div>
                <div>${transaction?.balance}</div>
              </div>
            </TransactionBodyResponsive>

            <Separator />

            <TransactionDetails>

              <DetailRow>Transaction Type: {transaction?.infos?.transactionType}</DetailRow>

              <DetailRow>Category:&nbsp;
                {selectValue}
                {/* <Icon onClick={() => setSelectVisibility(isSelectVisible === 'visible' ? 'collapse' : 'visible')} className="fa fa-solid fa-pencil" />
                <Select visibility={isSelectVisible} onChange={(e) => handleSetSelectValue(e.target.value)} name="categories">
                  <option value="">--Please choose a category--</option>
                  {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </Select> */}
              </DetailRow>
              
              <DetailRow>Notes:&nbsp;
                {noteInputValue}
                {/* <Icon onClick={() => setNotesVisibility(isNotesVisible === 'visible' ? 'collapse' : 'visible')} className="fa fa-solid fa-pencil" />
                <Notes visibility={isNotesVisible}>
                  <Input id={`transaction-note-${transaction.id}`} ref={inputRef} placeholder='Write something' />
                  <Button onClick={() => handleSetNotesValue(inputRef.current.value)}>Save</Button>
                  <Button onClick={() => setNotesVisibility('collapse')}>Cancel</Button>
                </Notes> */}
              </DetailRow>

            </TransactionDetails>

          </TransactionContainer>
          
        </div>
      </Dialog> : ''}
    </Background>
  )   
}
