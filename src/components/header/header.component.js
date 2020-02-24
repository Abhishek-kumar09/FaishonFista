import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { auth } from './../../firebase/firebase.config';

const Header = ({ CurrentUser }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
      <img className="header-icon" src={logo} alt="appIcon" />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {CurrentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );

export default Header;