import React, { useState } from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 0.75rem 2rem;
  margin: 2px 0;
`

const CollapseIcon = styled.div`
  width: 20px;

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

  const openCollapseHandler = () => {
    setIsOpen(!isOpen);
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const date = new Date(transaction?.date);
  const [month, day, year] = [
    months[date.getMonth()],
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <ContentWrapper onClick={openCollapseHandler} >
      <Content>
        <CollapseIcon>{isOpen ? 
              <i className="fa fa-solid fa-angle-down"></i> :
              <i className="fa fa-solid fa-angle-up"></i>}
        </CollapseIcon>
        <div>{month + ' ' + day + 'th, ' + year}</div>
        <div>{transaction?.description}</div>
        <div>${transaction?.amount}</div>
        <div>${transaction?.balance}</div>
      </Content>
      {isOpen ? 
      <ContentReveal>
        {<ContentRevealItem>Transaction Type: {transaction?.infos?.transactionType}</ContentRevealItem>}
        {<ContentRevealItem>Category: {transaction?.infos?.category}<i className="fa fa-solid fa-pencil"></i></ContentRevealItem>}
        {<ContentRevealItem>Notes: {transaction?.infos?.notes}<i className="fa fa-solid fa-pencil"></i></ContentRevealItem>}
      </ContentReveal> : ''}
    </ContentWrapper>
  )
}
