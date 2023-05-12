import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Footer } from '../layout/Footer';
import { Navbar } from '../layout/Navbar';
import { useSelector } from 'react-redux';

export const User = () => {
  const { isLogged } = useSelector((state) => state.user );

  return (
    isLogged ?
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
    :
    <Navigate to={'/signin'} state={{ message: 'Please log in!' }} />
  )
}
