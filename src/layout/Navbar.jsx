import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../images/argentBankLogo.png';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  .main-nav a.router-link-exact-active {
    color: #42b983;
  }

  .main-nav-logo {
    display: flex;
    align-items: center;
  }

  .main-nav-logo-image {
    max-width: 100%;
    width: 200px;
  }
`

const SignIn = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
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
        <SignIn to='/signin'>
          <i className="fa fa-user-circle"></i>
          &nbsp;Sign In
        </SignIn>
      </div>     
      <div>
        <a class="main-nav-item" href="./user.html">
          <i class="fa fa-user-circle"></i>
          &nbsp;Tony
        </a>
        <a class="main-nav-item" href="./index.html">
          <i class="fa fa-sign-out"></i>
          &nbsp;Sign Out
        </a>
      </div>
    </NavbarWrapper>
  )
}