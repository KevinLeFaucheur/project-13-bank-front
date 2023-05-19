import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Link, useLocation } from 'react-router-dom';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 0;
  height: 50vh;
  color: #00BC77;

  a, a:link, a:visited, a:hover, a:active {
    text-decoration: underline;
  color: #00BC77;
  }
`

const ErrorTitle = styled.h1`
  font-size: 6rem;
`

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`

export const Error = () => {
  const { state } =  useLocation();

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <ErrorWrapper>
          <ErrorTitle>404</ErrorTitle>
          <ErrorMessage>{state?.message}</ErrorMessage>
          <Link to='/'>Back to home page</Link>
        </ErrorWrapper>
      </main>
      <Footer />
    </>
  )
}
