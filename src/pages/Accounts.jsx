import React from 'react';
import styled from 'styled-components';
import { Account } from '../components/Account';
import { H2 } from '../styles/Headers';
import { accounts } from '../data/accountsMock';

import { useSelector } from 'react-redux';

const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`

const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`

export const Accounts = () => {
  const user = useSelector((state) => state.user.value );

  return (
    <main className="main bg-dark">
      <Header>
        <h1>Welcome back<br />{user?.firstName + user?.lastName}!</h1>
        <EditButton>Edit Name</EditButton>
      </Header>
      <H2>Accounts</H2>
      {accounts.map(account => <Account key={account.id} account={account} />)}
    </main>
  )
}
