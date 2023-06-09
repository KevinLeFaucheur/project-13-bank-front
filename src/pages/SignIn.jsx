import { useEffect, useRef, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Layout } from '../layout/Layout'
import { GlobalError as Error } from '../styles/GlobalStyle'
import { login, rememberUsername } from '../redux/slices/user'
import { clearMessage } from '../redux/slices/message'
import { getRememberMeCookie, removeRememberMeCookie, setRememberMeCookie } from '../services/auth'
 
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

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const usernameInput = useRef();
  const passwordInput = useRef();
  const rememberMeInput = useRef();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { isLogged } = useSelector(state => state.user);
  const { rememberMe } = useSelector(state => state.user);
  const { email } = useSelector(state => state.user);
  const { message } = useSelector(state => state.message);

  /** Memorize 'Remember Me' checkbox value, clear cookie if unchecked */
	const handleRememberMe = () => {
    if(!rememberMeInput.current.checked) {
      removeRememberMeCookie();
			usernameInput.current.value = '';
      setUsername(null);
    }
		dispatch(rememberUsername(rememberMeInput.current.checked));
	}

  /** Submit the login request to the User slice, 
   *  Sets email in cookie if 'Remember Me' is checked
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(login({ email: username, password }))
      .unwrap()
      .then(() => {
        if(rememberMe) {
          setRememberMeCookie({ email: username });
        }
        navigate('/user/profile'); 
      })
      .catch(error => {
        console.log(error);
      })
  }

	useEffect(() => {
    dispatch(clearMessage());

    /** Tries to fill up username if 'Remember Me' was previously set to memorize */
		if(rememberMe && getRememberMeCookie()) {
      rememberMeInput.current.checked = rememberMe;
			usernameInput.current.value = getRememberMeCookie()?.email;
      setUsername(getRememberMeCookie()?.email);
		}
	}, [email, rememberMe, dispatch])

  if(isLogged) {
    return <Navigate to='/user/profile' />;
  }

  return (
    <Layout>
      <main className="main bg-dark">
        <SignInSection>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {state?.message ? <p>{state.message} or <a href='/signup'>sign up</a></p> : ''}
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <label htmlFor="username">Username</label>
              <input type="email" id="username" ref={usernameInput} onChange={e => setUsername(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={passwordInput} onChange={e => setPassword(e.target.value)}/>
            </InputWrapper>
            <InputRememberMe>
              <input type="checkbox" id="remember-me" ref={rememberMeInput} onClick={handleRememberMe}/>
              <label htmlFor="remember-me">Remember me</label>
            </InputRememberMe>
            <button type='submit' className="sign-in-button">Sign In</button>
          </form>
        </SignInSection>
        {message ? <Error>{message}</Error> : ''}
      </main>     
    </Layout>
  )
}