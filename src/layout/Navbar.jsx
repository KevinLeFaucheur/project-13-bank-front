import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../images/argentBankLogo.png';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link className="main-nav-logo" to='/'>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to='/signin'>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </NavbarWrapper>
  )
}