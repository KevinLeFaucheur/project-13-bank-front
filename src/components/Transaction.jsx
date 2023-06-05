import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { dateFormat } from '../utils/dateFormat';

import { Button, DetailRow, Icon, Input, Notes, Select, TransactionBody, TransactionBodyResponsive, TransactionContainer, TransactionDetails, TransactionItem, TransactionWrapper } from './Transaction.styled';

export const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectVisible, setSelectVisibility] = useState('collapse');
  const [isNotesVisible, setNotesVisibility] = useState('collapse');

  const [selectValue, setSelectValue] = useState('');
  const [noteInputValue, setNoteInputValue] = useState('');
  const inputRef = useRef('');

  const handleSetSelectValue = (value) => {
    localStorage.setItem(`category-${transaction?.id}`, value); // Set to database once API is ready
    setSelectValue(value);
    setSelectVisibility('collapse');
  }

  const handleSetNotesValue = (value) => {
    localStorage.setItem(`note-${transaction?.id}`, value); // Set to database once API is ready
    setNoteInputValue(value);
    setNotesVisibility('collapse');
  }

  const categories = ["Food", "Animals", "Energy", "Car"];
  const [month, day, year] = dateFormat(transaction?.date);

  return (
    <TransactionWrapper>
      <Icon className={`collapse--icon fa fa-solid ${isOpen ? 'fa-angle-down' : 'fa-angle-up'}`}></Icon>

      <TransactionContainer>

        <TransactionBody onClick={() => setIsOpen(!isOpen)}>
          <TransactionItem className='column-date'>{month + ' ' + day + ', ' + year}</TransactionItem>
          <TransactionItem className='column-description'>{transaction?.description}</TransactionItem>
          <TransactionItem className='column-amount'>${transaction?.amount}</TransactionItem>
          <TransactionItem className='column-balance'>${transaction?.balance}</TransactionItem>
        </TransactionBody>

        <TransactionBodyResponsive onClick={() => setIsOpen(!isOpen)}>
          <div className='upper'>
            <div>{transaction?.description}</div>
            <div>${transaction?.amount}</div>
          </div>
          <div className='lower'>
            <div>{month + ' ' + day + ', ' + year}</div>
            <div>${transaction?.balance}</div>
          </div>
        </TransactionBodyResponsive>

        {isOpen ?
          <TransactionDetails>

          <DetailRow>Transaction Type: {transaction?.infos?.transactionType}</DetailRow>

          <DetailRow>Category:&nbsp;
            {selectValue}
            <Icon onClick={() => setSelectVisibility(isSelectVisible === 'visible' ? 'collapse' : 'visible')} className="pen--icon fa fa-solid fa-pencil" />
            <Select visibility={isSelectVisible} onChange={(e) => handleSetSelectValue(e.target.value)} name="categories">
              <option value="">--Please choose a category--</option>
              {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </Select>
          </DetailRow>
          
          <DetailRow>Notes:&nbsp;
            {noteInputValue}
            <Icon onClick={() => setNotesVisibility(isNotesVisible === 'visible' ? 'collapse' : 'visible')} className="pen--icon fa fa-solid fa-pencil" />
            <Notes visibility={isNotesVisible}>
              <Input id={`transaction-note-${transaction.id}`} ref={inputRef} placeholder='Write a note' />
              <Button onClick={() => handleSetNotesValue(inputRef.current.value)}>Save</Button>
              <Button onClick={() => setNotesVisibility('collapse')}>Cancel</Button>
           </Notes>
          </DetailRow>

        </TransactionDetails> : ''}

      </TransactionContainer>

    </TransactionWrapper>
  )
};

Transaction.propTypes = {

  transaction: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    description: PropTypes.string,
    amount: PropTypes.number,
    balance: PropTypes.number,

    infos: PropTypes.shape({
      transactionType: PropTypes.string,
      category: PropTypes.string,
      notes: PropTypes.string,
    })
  })
}