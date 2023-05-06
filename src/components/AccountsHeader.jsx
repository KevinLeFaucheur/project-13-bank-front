import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../features/user';

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
  const [isEditing, setIsEditing] = useState(false);
  const { infos } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(infos);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  // if (!infos) {
  //   return <Navigate to="/signin" />;
  // };

  const handleIsEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Header>
      {isEditing ? 
      <>
        <h1>Welcome back</h1>
        <HeaderEdit>
          <HeaderLeft>
              <Input placeholder={`${infos?.firstName}`} />
              <Button onClick={handleIsEdit} >Save</Button>
          </HeaderLeft>
          <HeaderRight>
              <Input placeholder={`${infos?.lastName}`} />
              <Button onClick={handleIsEdit} >Cancel</Button>
          </HeaderRight>
        </HeaderEdit>
      </>
      : 
      <>
        <h1>Welcome back<br />{infos?.firstName + ' ' +  infos?.lastName}!</h1>
        <Button onClick={handleIsEdit}>Edit Name</Button>
      </>}
    </Header>
  )
}
