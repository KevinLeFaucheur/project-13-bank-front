import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { dateFormat } from '../utils/dateFormat';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 1rem;
  margin: 2px 0;

  @media (max-width: 720px) {
    padding: 0.5rem;
  }
`
const ContentHeader = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  cursor: pointer;

  @media (max-width: 720px) {
    font-size: 1rem;
  }
`

const CollapseIcon = styled.div`
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

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const DateResponsive = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }

`

const Day = styled.div`

`

const Month = styled.div`

`

const Year = styled.div`

`

const Column = styled.div`
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

const ContentReveal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: calc(1rem + 20px);
`

const ContentRevealItem = styled.div`
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

const Select = styled.select`
  visibility: ${(props => props?.visibility ? 'visible' : 'collapse')};
`

const Button = styled.button`
  cursor: pointer;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  min-width: 100px;
  padding: 2px;
  margin-left: 0.25rem;
`

const NotesEdit = styled.div`
  display: inline;
  visibility: ${(props => props?.visibility ? 'visible' : 'collapse')};
`

const Input = styled.input`
  font-weight: bold;
  padding: 2px;
  width: 30%;
`

export const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryEditing, setIsCategoryEditing] = useState(false);
  const [isNotesEditing, setIsNotesEditing] = useState(false);

  const [selectValue, setSelectValue] = useState('');
  const [noteInputValue, setNoteInputValue] = useState('');
  const inputRef = useRef('');

  const handleSetSelectValue = (value) => {
    setSelectValue(value);
    setIsCategoryEditing(!isCategoryEditing);
  }

  const handleSetNotesValue = (value) => {
    setNoteInputValue(value);
    setIsNotesEditing(!isNotesEditing);
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
            <i onClick={() => setIsCategoryEditing(!isCategoryEditing)} className="fa fa-solid fa-pencil" />
          </>
          <Select visibility={isCategoryEditing}  onChange={(e) => handleSetSelectValue(e.target.value)} name="categories">
            <option value="">--Please choose a category--</option>
            {categories.map(category => <option key={category} value={category}>{category}</option>)}
          </Select>
        </ContentRevealItem>}
        {<ContentRevealItem>Notes:&nbsp;
          {noteInputValue}
          <i onClick={() => setIsNotesEditing(!isNotesEditing)} className="fa fa-solid fa-pencil" />
          <NotesEdit visibility={isNotesEditing}>
            <Input id={`transaction-note-${transaction.id}`} ref={inputRef} placeholder='Write something' />
            <Button onClick={() => handleSetNotesValue(inputRef.current.value)}>Save</Button>
            <Button onClick={() => setIsNotesEditing(!isNotesEditing)}>Cancel</Button>
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