import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../form.css';

const Singup = () => {
  const { handleEmail, handlePassword, singUpUsingPassword, error, handleName, handleConPass } = useAuth()
  return (
    <div>
      <p className='goHome'>
        <NavLink to='/'>Home</NavLink>/Sing Up
      </p>
      <div className='login-register'>
        <div className='form-container'>
          <h1>Sing Up Here</h1>
          <form onSubmit={singUpUsingPassword}>
            <div>
              <input onBlur={handleName} type="text" placeholder='Your Name' />
            </div>
            <div>
              <input onBlur={handleEmail} type="email" placeholder='Email' />
            </div>
            <div>
              <input onBlur={handlePassword} type="password" placeholder='Password' />
            </div>
            <div>
              <input onBlur={handleConPass} type="password" placeholder='Confirm Password' />
            </div>
            <p className='error'>{error}</p>
            <input type="submit" value="Sing Up" />
          </form>
          <p className='have-accoutnt'>Already have an account? <Link to='/login'>Login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;