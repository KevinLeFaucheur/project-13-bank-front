import React from 'react'
import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/Navbar'
import { Account } from '../components/Account'
import { accounts } from '../data/accountsMock'
import styled from 'styled-components'
import { H2 } from '../styles/Headers'

const H1 = styled.h1`

`

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

export const User = () => {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <Header>
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <EditButton>Edit Name</EditButton>
        </Header>
        <H2>Accounts</H2>
        {accounts.map(account => <Account account={account} />)}
      </main>
      <Footer />
    </>
  )
}
