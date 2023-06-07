import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, updateProfile } from '../redux/slices/user';
import { GlobalButton, GlobalInput } from '../styles/GlobalStyle';

const Header = styled.header`
  color: #FFF;
  margin-bottom: 2rem;
`

const Button = styled(GlobalButton)`
  padding: 10px;

  &.button--edit {
    width: inherit;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`

const Input = styled(GlobalInput)`
  padding: 10px;
  margin-bottom: 1rem;
  width: 100%;
`

const HeaderEdit = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;

  @media (max-width: 720px) {
    width: 80%;
    margin: 0 auto;
  }
`

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;

  @media (max-width: 720px) {
    margin-right: 0.5rem; 
  }
`

const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;

  @media (max-width: 720px) {
    margin-left: 0.5rem;
  }
`

export const AccountsHeader = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { credentials } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const firstNameRef = useRef('');
  const lastNameRef = useRef('');

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleIsEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    setIsEditing(!isEditing);
    if(firstNameRef.current.value === '' || lastNameRef.current.value === '') return;
    dispatch(updateProfile({ firstName: firstNameRef.current.value, lastName: lastNameRef.current.value }));
  };

  return (
    <Header>
      {isEditing ? 
      <>
        <h1>Welcome back</h1>
        <HeaderEdit>
          <HeaderLeft>
              <Input ref={firstNameRef} placeholder={`${credentials?.firstName}`} />
              <Button onClick={handleSaveEdit} >Save</Button>
          </HeaderLeft>
          <HeaderRight>
              <Input ref={lastNameRef} placeholder={`${credentials?.lastName}`} />
              <Button onClick={handleIsEdit} >Cancel</Button>
          </HeaderRight>
        </HeaderEdit>
      </>
      : 
      <>
        <h1>Welcome back<br />{credentials?.firstName + ' ' +  credentials?.lastName}!</h1>
        <Button className='button--edit' onClick={handleIsEdit}>Edit Name</Button>
      </>}
    </Header>
  )
}
