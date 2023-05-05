import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { getUserProfile } from '../services';

const Header = styled.header`
  color: #fff;
  margin-bottom: 2rem;
`

const Button = styled.button`
  cursor: pointer;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  min-width: 120px;
  padding: 10px;
`

const Input = styled.input`
  font-weight: bold;
  padding: 10px;
  margin-bottom: 1rem;
`
const HeaderEdit = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;
`

const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
`

export const AccountsHeader = () => {
  // const user = useSelector((state) => state.user.value );
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleIsEdit = () => {
    setIsEditing(!isEditing);
  };

  const fetchData = async () => {

    const jwt = new Cookies().get('jwt', { path: '/' });

    console.log(jwt);

    return await getUserProfile(jwt);
  };

  useEffect(() => {
    // declare the data fetching function

    // call the function
    fetchData()
      .then(data => setUser({ firstName: data.body.firstName, lastName: data.body.lastName }))
      .catch(console.error);

    // 
  }, []);

  return (
    <Header>
      {isEditing ? 
      <>
        <h1>Welcome back</h1>
        <HeaderEdit>
          <HeaderLeft>
              <Input placeholder={`${user?.firstName}`} />
              <Button onClick={handleIsEdit} >Save</Button>
          </HeaderLeft>
          <HeaderRight>
              <Input placeholder={`${user?.lastName}`} />
              <Button onClick={handleIsEdit} >Cancel</Button>
          </HeaderRight>
        </HeaderEdit>
      </>
      : 
      <>
        <h1>Welcome back<br />{user?.firstName + ' ' +  user?.lastName}!</h1>
        <Button onClick={handleIsEdit}>Edit Name</Button>
      </>}
    </Header>
  )
}
