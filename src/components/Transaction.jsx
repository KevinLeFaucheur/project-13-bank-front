import React, { useEffect, useRef, useState } from 'react';
import { 
  Button, CollapseIcon, Column, Content, 
  ContentHeader, ContentReveal, ContentRevealItem, 
  ContentWrapper, DateResponsive, 
  Day, Input, Month, NotesEdit, Select, Year 
} from './Transaction.styled';
import PropTypes from 'prop-types';
import { dateFormat } from '../utils/dateFormat';

export const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectVisible, setSelectVisibility] = useState('collapse');
  const [isNotesVisible, setNotesVisibility] = useState('collapse');

  const [selectValue, setSelectValue] = useState('');
  const [noteInputValue, setNoteInputValue] = useState('');
  const inputRef = useRef('');

  const handleSetSelectValue = (value) => {
    setSelectValue(value);
    setSelectVisibility('collapse');
  }

  const handleSetNotesValue = (value) => {
    setNoteInputValue(value);
    setNotesVisibility('collapse');
  }

  const categories = ["Food", "Animals", "Energy", "Car"];
  const [month, day, year] = dateFormat(transaction?.date);

  return (
    <ContentWrapper>

      <ContentHeader onClick={() => setIsOpen(!isOpen)}>

        <CollapseIcon>{isOpen ? 
              <i className="fa fa-solid fa-angle-down" /> :
              <i className="fa fa-solid fa-angle-up" />}
        </CollapseIcon>

        <Content>
          <Column className='column-date'>{month + ' ' + day + ', ' + year}</Column>

          <DateResponsive>
            <Month>{month}</Month>
            <Day>{day + 'th'}</Day>
            <Year>{year}</Year>
          </DateResponsive>

          <Column className='column-description'>{transaction?.description}</Column>
          <Column className='column-amount'>${transaction?.amount}</Column>
          <Column className='column-balance'>${transaction?.balance}</Column>
        </Content>

      </ContentHeader>

      {isOpen ? 

      <ContentReveal>

        {<ContentRevealItem>Transaction Type: {transaction?.infos?.transactionType}</ContentRevealItem>}

        {<ContentRevealItem>Category:&nbsp;
          <>
            {selectValue}
            <i onClick={() => setSelectVisibility(isSelectVisible === 'visible' ? 'collapse' : 'visible')} className="fa fa-solid fa-pencil" />
          </>
          <Select visibility={isSelectVisible} onChange={(e) => handleSetSelectValue(e.target.value)} name="categories">
            <option value="">--Please choose a category--</option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
          </Select>
            
        </ContentRevealItem>}

        {<ContentRevealItem>Notes:&nbsp;
          {noteInputValue}
          <i onClick={() => setNotesVisibility(isNotesVisible === 'visible' ? 'collapse' : 'visible')} className="fa fa-solid fa-pencil" />

          <NotesEdit visibility={isNotesVisible}>
            <Input id={`transaction-note-${transaction.id}`} ref={inputRef} placeholder='Write something' />
            <Button onClick={() => handleSetNotesValue(inputRef.current.value)}>Save</Button>
            <Button onClick={() => setNotesVisibility('collapse')}>Cancel</Button>
          </NotesEdit>

        </ContentRevealItem>}

      </ContentReveal> : ''}

    </ContentWrapper>
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