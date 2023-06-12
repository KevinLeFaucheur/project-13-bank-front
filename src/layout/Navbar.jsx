import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import logo from '../images/argentBankLogo.png';
import { logout } from '../redux/slices/user';
import { setMessage } from '../redux/slices/message';

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

  &.sign-out {
    span {
      @media (max-width: 720px) {
        display: none;
      }
    }
    i {
      font-size: 1rem;
    }
  }
`

export const Navbar = () => {
  const { credentials } = useSelector((state) => state.user );
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
    dispatch(setMessage('User logged out.'));
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
      {!credentials ?
      <div>
        <NavItem to='/login'>
          <i className="fa fa-user-circle"></i>
          &nbsp;Sign In
        </NavItem>
      </div> 
      :
      <div>
        <NavItem to="/user/profile">
          <i className="fa fa-user-circle"></i>
          &nbsp;{credentials.firstName}&nbsp;
        </NavItem>
        <NavItem className='sign-out' onClick={handleSignOut} to="/">
          <i className="fa fa-sign-out"></i>
          <span>&nbsp;Sign Out</span>
        </NavItem>
      </div>}
    </NavbarWrapper>
  )
}