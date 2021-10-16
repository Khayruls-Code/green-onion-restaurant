import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo3.png'
import { FiShoppingCart } from 'react-icons/fi';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, singOutUser } = useAuth()
  return (
    <div className='header'>
      <div className="container">
        <div className="header-row">
          <div className="logo">
            <Link to='/'><img src={logo} alt="logo" /></Link>
          </div>
          <div className="header-btns">
            <NavLink className='cartIcon' to='/cart'><FiShoppingCart /></NavLink>
            {
              user.email ?
                <div className='singOut'>
                  <button onClick={singOutUser} className='singOutBtn'>Sing Out</button>
                  <h3>{user.displayName}</h3>
                </div>
                :
                <div>
                  <NavLink className='login-btn' to='/login'>Login</NavLink>
                  <NavLink className='singup-btn' to='/singup'>Sing Up</NavLink>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;