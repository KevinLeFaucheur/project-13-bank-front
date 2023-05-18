import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 1rem;
  margin: 2px 0;

  @media (max-width: 720px) {
    padding: 0.75rem;
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

const DateWrapper = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
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

const Description = styled.div`
  @media (max-width: 720px) {
    max-width: 100px;
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
    visibility: ${(props => props.visibility ? 'collapse' : 'visible')};
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin-left: 1rem;
  }
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

const Select = styled.select`
  visibility: ${(props => props.visibility ? 'visible' : 'collapse')};
`

const NotesEdit = styled.div`
  display: flex;
  visibility: ${(props => props.visibility ? 'visible' : 'collapse')};
`

const Input = styled.input`
  font-weight: bold;
  padding: 2px;
`

export const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryEditing, setIsCategoryEditing] = useState(false);
  const [isNotesEditing, setIsNotesEditing] = useState(false);

  const [selectValue, setSelectValue] = useState('');
  const [noteInputValue, setNoteInputValue] = useState('');
  const inputRef = useRef('');

  const openCollapseHandler = () => {
    setIsOpen(!isOpen);
  }

  const handleCategoryEdit = () => {
    setIsCategoryEditing(!isCategoryEditing);
  }

  const handleSetSelectValue = (value) => {
    setSelectValue(value);
    setIsCategoryEditing(!isCategoryEditing);
  }

  const handleNoteEdit = () => {
    setIsNotesEditing(!isNotesEditing);
  }

  const handleSetNotesValue = (value) => {
    setNoteInputValue(value);
    setIsNotesEditing(!isNotesEditing);
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const date = new Date(transaction?.date);
  const [month, day, year] = [
    months[date.getMonth()],
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <ContentWrapper>
      <ContentHeader onClick={openCollapseHandler}>
        <CollapseIcon>{isOpen ? 
              <i className="fa fa-solid fa-angle-down"></i> :
              <i className="fa fa-solid fa-angle-up"></i>}
        </CollapseIcon>
        <Content>
          <DateWrapper>{month + ' ' + day + 'th, ' + year}</DateWrapper>
          <DateResponsive>
            <Month>{month}</Month>
            <Day>{day + 'th'}</Day>
            <Year>{year}</Year>
          </DateResponsive>
          <Description>{transaction?.description}</Description>
          <div>${transaction?.amount}</div>
          <div>${transaction?.balance}</div>
        </Content>
      </ContentHeader>
      {isOpen ? 
      <ContentReveal>
        {<ContentRevealItem>Transaction Type: {transaction?.infos?.transactionType}</ContentRevealItem>}
        {<ContentRevealItem>Category:&nbsp;
          <>
            {selectValue}
            <i /*visibility={isCategoryEditing}*/ onClick={handleCategoryEdit} className="fa fa-solid fa-pencil" />
          </>
          <Select visibility={isCategoryEditing} onChange={(e) => handleSetSelectValue(e.target.value)} name="categories" id="category-select">
            <option value="">--Please choose a category--</option>
            <option value="Food">Food</option>
            <option value="Animals">Animals</option>
            <option value="Energy">Energy</option>
          </Select>
        </ContentRevealItem>}
        {<ContentRevealItem>Notes:&nbsp;
        <>
          {noteInputValue}
          <i /*visibility={isNotesEditing}*/ onClick={handleNoteEdit} className="fa fa-solid fa-pencil" />
        </>
        <NotesEdit visibility={isNotesEditing}>
          <Input ref={inputRef} placeholder='Write something' />
          <Button onClick={() => handleSetNotesValue(inputRef.current.value)}>Save</Button>
          <Button onClick={handleNoteEdit}>Cancel</Button>
        </NotesEdit>
        </ContentRevealItem>}
      </ContentReveal> : ''}
    </ContentWrapper>
  )
}
