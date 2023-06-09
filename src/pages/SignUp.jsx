import { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Layout } from '../layout/Layout'
import { GlobalError as Error } from '../styles/GlobalStyle'
import { register, rememberUsername } from '../redux/slices/user'
 
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`

const InputRememberMe = styled.div`
  display: flex;

  label {
    margin-left: 0.25rem;
  }
`

const SignInSection = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;

  .sign-in-button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;

    cursor: pointer;
    text-decoration: underline;
    border: none;
  }

  .fa .sign-in-icon {
    font-size: 5rem;
  }
`

export const SignUp = () => {
  const usernameInput = useRef();
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const passwordInput = useRef();
  const rememberMeInput = useRef();

  const [signup, setSignup] = useState({});

  const { isLogged } = useSelector(state => state.user);
  const { rememberMe } = useSelector(state => state.user);
  const { email } = useSelector(state => state.user);
  const { message } = useSelector(state => state.message);
  const navigate = useNavigate();
  const dispatch = useDispatch();

	const handleRememberMe = () => {
		dispatch(rememberUsername(rememberMeInput.current.checked));
	}

  const handleRegister = (value) => {
    setSignup({ ...signup, ...value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(register(signup)).then(() => { navigate('/login'); });
  }

	useEffect(() => {
		if(rememberMe) {
			usernameInput.value = email;
		}
	}, [email, rememberMe]);

  if(isLogged) {
    return <Navigate to='/user/profile' />;
  }

  return (
    <Layout>
      <main className="main bg-dark">
        <SignInSection>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign Un</h1>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <label htmlFor="username">Username</label>
              <input placeholder='email' type="email" id="username" ref={usernameInput} onChange={e => handleRegister({ email: e.target.value})} required />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="firstName">First Name</label>
              <input placeholder='John' type="text" id="firstName" ref={firstNameInput} onChange={e => handleRegister({ firstName: e.target.value})} required />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="lastName">Last Name</label>
              <input placeholder='Smith' type="text" id="lastName" ref={lastNameInput} onChange={e => handleRegister({ lastName: e.target.value})} required />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={passwordInput} onChange={e => handleRegister({ password: e.target.value})} required />
            </InputWrapper>
            <InputRememberMe>
              <input type="checkbox" id="remember-me" ref={rememberMeInput} onClick={handleRememberMe}/>
              <label htmlFor="remember-me">Remember me</label>
            </InputRememberMe>
            <button type='submit' className="sign-in-button">Sign Up</button>
          </form>
        </SignInSection>
        {message ? <Error>{message}</Error> : ''}
      </main>      
    </Layout>
  )
}