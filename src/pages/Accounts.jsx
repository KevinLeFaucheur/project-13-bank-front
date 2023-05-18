import React from 'react';
import { Account } from '../components/Account';
import { H2 } from '../styles/Headers';
import { accounts } from '../data/accountsMock';

import { AccountsHeader } from '../components/AccountsHeader';

export const Accounts = () => {

  return (
    <main className="main bg-dark">
      <AccountsHeader />
      {accounts.map(account => <Account key={account.id} account={account} />)}
    </main>
  )
}
