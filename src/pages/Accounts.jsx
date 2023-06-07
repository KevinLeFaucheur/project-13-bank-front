import { Account } from '../components/Account';
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
