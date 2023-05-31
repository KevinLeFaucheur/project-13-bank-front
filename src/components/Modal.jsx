import React from 'react';
import styled from 'styled-components';
import { 
  Button, CollapseIcon, Column, Content, 
  ContentHeader, ContentResponsive, ContentReveal, ContentRevealItem, 
  ContentWrapper, DateResponsive, 
  Day, Input, Month, NotesEdit, Select, Year 
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
  padding-top: calc(30px + 2rem);
  /* background-color: rgba(#2c3e50, 1); */
  background-color: #FFF;
`

const EyeButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 5px;
`

const Separator = styled.div`
  margin: 10px 0;
  height: 2px;
  background-color: #2c3e50;
`

export const Modal = ({ transaction }) => {
  const [month, day, year] = dateFormat(transaction?.date);

  console.log(year);

  const close = () => {
    document.getElementById('modal').classList.remove('open');
  }

  return (
    <Background id='modal'>
      {transaction ?
      <Dialog>
        <EyeButton onClick={close} className="fa fa-regular fa-eye"></EyeButton>
        <div id='modal-body'>
          <ContentWrapper>

            <ContentHeader>

            <Content>
              <Column className='column-date'>{month + ' ' + day + ', ' + year}</Column>
              <Column className='column-description'>{transaction?.description}</Column>
              <Column className='column-amount'>${transaction?.amount}</Column>
              <Column className='column-balance'>${transaction?.balance}</Column>
            </Content>

            <ContentResponsive>
              <div className='upper'>
                <div>{transaction?.description}</div>
                <div>${transaction?.amount}</div>
              </div>
              <div className='lower'>
                <div>{month + ' ' + day + ', ' + year}</div>
                <div>${transaction?.balance}</div>
              </div>
            </ContentResponsive>

            </ContentHeader>

            <Separator />

            <ContentReveal>

              {<ContentRevealItem>Transaction Type: {transaction?.infos?.transactionType}</ContentRevealItem>}

              {<ContentRevealItem>Category:&nbsp;
                {/* <>
                  {selectValue}
                  <i onClick={() => setIsCategoryEditing(!isCategoryEditing)} className="fa fa-solid fa-pencil" />
                </>
                <Select visibility={isCategoryEditing}  onChange={(e) => handleSetSelectValue(e.target.value)} name="categories">
                  <option value="">--Please choose a category--</option>
                  {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </Select> */}
              </ContentRevealItem>}

              {<ContentRevealItem>Notes:&nbsp;
                {/* {noteInputValue}
                <i onClick={() => setIsNotesEditing(!isNotesEditing)} className="fa fa-solid fa-pencil" />

                <NotesEdit visibility={isNotesEditing}>
                  <Input id={`transaction-note-${transaction.id}`} ref={inputRef} placeholder='Write something' />
                  <Button onClick={() => handleSetNotesValue(inputRef.current.value)}>Save</Button>
                  <Button onClick={() => setIsNotesEditing(!isNotesEditing)}>Cancel</Button>
                </NotesEdit> */}

              </ContentRevealItem>}

            </ContentReveal>

          </ContentWrapper>
        </div>
      </Dialog> : ''}
    </Background>
  )   
}
