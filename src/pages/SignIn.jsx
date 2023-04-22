import React from 'react'
import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/Navbar'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  }

  .fa .sign-in-icon {
    font-size: 5rem;
  }
`

export const SignIn = () => {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <SignInSection>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <InputWrapper>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </InputWrapper>
            <InputRememberMe>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </InputRememberMe>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <Link className="sign-in-button" to='/user'>Sign In</Link>
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