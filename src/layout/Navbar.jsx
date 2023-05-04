import React from 'react';
import styled from 'styled-components';
import { Link, Navigate } from "react-router-dom";
import logo from '../images/argentBankLogo.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user';
import Cookies from 'universal-cookie';

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

const NavItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`

export const Navbar = () => {
  const user = useSelector((state) => state.user.value );
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());

    const cookies = new Cookies();
    
    cookies.remove('jwt', { path: '/' });

    console.log(cookies.get('jwt'));

    // Navigate();
  };

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
      {user.username === '' ?
      <div>
        <NavItem to='/signin'>
          <i className="fa fa-user-circle"></i>
          &nbsp;Sign In
        </NavItem>
      </div> 
      :
      <div>
        <NavItem to="/user/accounts">
          <i className="fa fa-user-circle"></i>
          &nbsp;{user?.firstName}&nbsp;
        </NavItem>
        <NavItem onClick={signOut} to="/">
          <i className="fa fa-sign-out"></i>
          &nbsp;Sign Out
        </NavItem>
      </div>}
    </NavbarWrapper>
  )
}