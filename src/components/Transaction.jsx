import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 1rem;
  margin: 2px 0;
`
const ContentHeader = styled.div`
  display: flex;
`

const CollapseIcon = styled.div`
  width: 20px;
  margin-right: 1rem;

  i {
    font-size: 1.5rem;
    font-weight: 800;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ContentReveal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ContentRevealItem = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  text-align: left;

  i {
    width: 16px;
    height: 16px;
    margin-left: 1rem;
  }
`

export const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryEditing, setIsCategoryEditing] = useState(false);
  const [isNotesEditing, setIsNotesEditing] = useState(false);

  const selectRef = useRef('');
  const noteInputRef = useRef('');

  const openCollapseHandler = () => {
    setIsOpen(!isOpen);
    // setIsCategoryEditing(!isCategoryEditing);
    // setIsNotesEditing(!isNotesEditing);
  }

  const handleCategoryEdit = () => {
    setIsCategoryEditing(!isCategoryEditing);
  }

  const handleNoteEdit = () => {
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
          <div>{month + ' ' + day + 'th, ' + year}</div>
          <div>{transaction?.description}</div>
          <div>${transaction?.amount}</div>
          <div>${transaction?.balance}</div>
        </Content>
      </ContentHeader>
      {isOpen ? 
      <ContentReveal>
        {<ContentRevealItem>Transaction Type: {transaction?.infos?.transactionType}</ContentRevealItem>}
        {<ContentRevealItem>Category:&nbsp;
          {!isCategoryEditing ? 
          <>
            {/* {transaction?.infos?.category} */ selectRef === '' ? '' : selectRef.current.value}
            <i onClick={handleCategoryEdit} className="fa fa-solid fa-pencil" />
          </>
          :
          <select onChange={handleCategoryEdit} ref={selectRef} name="categories" id="category-select">
            <option value="">--Please choose a category--</option>
            <option value="Food">Food</option>
            <option value="Animals">Animals</option>
            <option value="Energy">Energy</option>
          </select>}
        </ContentRevealItem>}
        {<ContentRevealItem>Notes:&nbsp;
        {!isNotesEditing ?
        <>
          {/* {transaction?.infos?.notes} */ noteInputRef === '' ? '' : noteInputRef.current.value}
          <i onClick={handleNoteEdit} className="fa fa-solid fa-pencil" />
        </>
        :
        <>
          <input ref={noteInputRef} placeholder='Write something' /><button onClick={handleNoteEdit}>Save</button><button onClick={handleNoteEdit}>Cancel</button>
        </>}
        </ContentRevealItem>}
      </ContentReveal> : ''}
    </ContentWrapper>
  )
}
