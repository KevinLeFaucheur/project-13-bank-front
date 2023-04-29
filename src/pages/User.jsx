import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/Navbar'

export const User = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
