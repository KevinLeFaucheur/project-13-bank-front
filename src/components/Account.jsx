import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AccountSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  .account-amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .account-amount-description {
    margin: 0;
  }

  .account-title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  @media (min-width: 720px) {
    flex-direction: row;
  }
`

const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;  
  
  @media (min-width: 720px) {
    &.cta {
      flex: 0;
    }
  }
`

const ViewTransactions = styled(Link)`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;

  @media (min-width: 720px) {
    width: 200px;
  }
`

export const Account = ({ account }) => {
  const { title, amount, description } = account;

  return (
    <AccountSection>
      <ContentWrapper>
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
        <p className="account-amount-description">{description}</p>
      </ContentWrapper>
      <ContentWrapper className="cta">
        <ViewTransactions to="/user/transactions" state={{ account: account }}>View transactions</ViewTransactions>
      </ContentWrapper>
    </AccountSection>
  )
}
