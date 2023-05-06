import React, { useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Footer } from '../layout/Footer';
import { Navbar } from '../layout/Navbar';
import { login } from '../features/user';
 
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
  const emailInput = useRef();
  const passwordInput = useRef();
  const rememberMeInput = useRef();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rememberMe, setRememberMe] = useState();

  const { isLogged } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

      dispatch(login({ email, password }))
        .then(() => {
          navigate('/user/accounts')
        });
  }

  if(isLogged) {
    return <Navigate to='/user/accounts' />
  }

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <SignInSection>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <label htmlFor="email">Username</label>
              <input type="text" id="email" ref={emailInput} onChange={e => setEmail(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={passwordInput} onChange={e => setPassword(e.target.value)}/>
            </InputWrapper>
            <InputRememberMe>
              <input type="checkbox" id="remember-me" ref={rememberMeInput} onClick={e => setRememberMe(e.target.value)}/>
              <label htmlFor="remember-me">Remember me</label>
            </InputRememberMe>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            {/* {<Link onClick={() => login({ email: email, password })} className="sign-in-button" to='/user/accounts'>Sign In</Link>} */}
            <button type='submit' className="sign-in-button">Sign In</button>
            {/* <!-- SHOULD BE THE BUTTON BELOW -->
            <!-- <button className="sign-in-button">Sign In</button> -->
            <!--  --> */}
          </form>
        </SignInSection>
      </main>
      <Footer />
    </>
  )
}