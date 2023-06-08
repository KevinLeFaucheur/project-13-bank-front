import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DetailRow, TableRow, TableRowResponsive, TransactionDetails } from './Transaction.styled';
import { GlobalIcon as Icon } from '../styles/GlobalStyle'
import { dateFormat } from '../utils/dateFormat';
import { TableHeader, TableItem } from './TableHeader';

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

const TableWrapper = styled.div`
  padding-right: 5%;
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

  // const items = [
  //   { name: `${month + ' ' + day + ', ' + year}`, width: '15%' }, 
  //   { name: `${transaction?.description}`, width: '35%' }, 
  //   { name: `${transaction?.amount}`, width: '25%' }, 
  //   { name: `${transaction?.balance}`, width: '25%' }
  // ];
  
  const items = [
    { name: 'DATE', width: '15%' }, 
    { name: 'DESCRIPTION', width: '35%' }, 
    { name: 'AMOUNT', width: '25%' }, 
    { name: 'BALANCE', width: '25%' }
  ];

  return (
    <Background id='modal'>
      {transaction ?
      <Dialog>
        <Icon onClick={close} className="modalClose--icon fa fa-regular fa-eye" />

        <div id='modal-body'>
          <TableWrapper>
            <TableHeader className='header--modal' items={items} />

            <TableRow>
              <TableItem colWidth='15%'>{month + ' ' + day + ', ' + year}</TableItem>
              <TableItem colWidth='35%'>{transaction?.description}</TableItem>
              <TableItem colWidth='25%'>${transaction?.amount}</TableItem>
              <TableItem colWidth='25%'>${transaction?.balance}</TableItem>
            </TableRow>
          </TableWrapper>
            
          <TableRowResponsive>
            <div className='upper'>
              <div>{transaction?.description}</div>
              <div>${transaction?.amount}</div>
            </div>
            <div className='lower'>
              <div>{month + ' ' + day + ', ' + year}</div>
              <div>${transaction?.balance}</div>
            </div>
          </TableRowResponsive>

          <Separator />

          <TransactionDetails>
            <DetailRow>Transaction Type: {transaction?.infos?.transactionType}</DetailRow>
            <DetailRow>Category:&nbsp;{selectValue}</DetailRow>
            <DetailRow>Notes:&nbsp;{noteInputValue}</DetailRow>
          </TransactionDetails>
          
        </div>
      </Dialog> : ''}
    </Background>
  )   
}
