import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import { auth } from './../../firebase/firebase.config';
import { connect } from 'react-redux';

const Header = ({ CurrentUser }) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
      <img className="header-icon" src={logo} alt="appIcon" />
      </Link>
      <div className='options'>
        <Link className='option' to='/'>
          HOME
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
  
const mapStatetoProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStatetoProps)(Header);