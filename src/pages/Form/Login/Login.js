import React from 'react';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { singInUsingPassword, handleEmail, handlePassword, error, setUser, setError, email, password, setIsLoding } = useAuth()

  const location = useLocation()
  const location_url = location.state?.from;
  const history = useHistory()

  const handleSingIn = (e) => {
    e.preventDefault();
    if (email === '') {
      setError('Enter your email first')
      return
    }
    if (password === '') {
      setError('Please Provide your password')
      return
    }
    setIsLoding(true)
    singInUsingPassword()
      .then(result => {
        setUser(result.user)
        setError('')
        history.push(location_url)
      })
      .catch(error => setError(error.code))
      .finally(setIsLoding(false))
  }
  return (
    <div>
      <p className='goHome'>
        <NavLink exact to='/'>Home</NavLink>/Login
      </p>
      <div className='login-register'>
        <div className='form-container'>
          <h1>Login Here</h1>
          <form onSubmit={handleSingIn}>
            <div>
              <input onBlur={handleEmail} type="email" placeholder='Email' />
            </div>
            <div>
              <input onBlur={handlePassword} type="password" placeholder='Password' />
            </div>
            <p className='error'>{error}</p>
            <input type="submit" value="Login" />
          </form>
          <p className='have-accoutnt'>New member? <Link to='/singup'>SingUp</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;