import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to='/'/>
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </NavbarWrapper>
  )
}