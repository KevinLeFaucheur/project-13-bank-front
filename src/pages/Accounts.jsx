import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Account } from '../components/Account';
import { H2 } from '../styles/Headers';
import { accounts } from '../data/accountsMock';

import { getUserProfile } from '../services';
import Cookies from 'universal-cookie';

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
  // const user = useSelector((state) => state.user.value );
  const [user, setUser] = useState({});

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {

      const jwt = new Cookies().get('jwt', { path: '/' });

      console.log(jwt);

      return await getUserProfile(jwt);
    }

    // call the function
    fetchData()
      .then(data => setUser({ firstName: data.body.firstName, lastName: data.body.lastName }))
      .catch(console.error);

    // 
  }, []);

  return (
    <main className="main bg-dark">
      <Header>
        <h1>Welcome back<br />{user?.firstName + ' ' +  user?.lastName}!</h1>
        <EditButton>Edit Name</EditButton>
      </Header>
      <H2>Accounts</H2>
      {accounts.map(account => <Account key={account.id} account={account} />)}
    </main>
  )
}
