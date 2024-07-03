import { React, useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoole } from '../firebase/auth';
import { Alert } from '@mui/material';
import "./Login.css";


export default function Login() {

  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      setErrorMessage("")
      try {
        await doSignInWithEmailAndPassword(email, password)
      } catch {
        setErrorMessage("Failed to log in")
      }
    }
  }

  const onGoogleSignIn = async () => {
    if (!isSigningIn) {
      setIsSigningIn(true)
      setErrorMessage("")
      try {
        await doSignInWithGoole().catch
      } catch {
        setErrorMessage("Failed to log in")
      }
    }
  }

  return(
    <div className='login-container'>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <h2>Login</h2>
      {errorMessage && <Alert style={{ backgroundColor: 'red', color: 'white' }}>{errorMessage}</Alert>}
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type='text' value={email} onChange={handleEmail} />
        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword} />
        <div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <input type='submit' className='btn-submit' value="Log in"/>
      </form>
      <div className='btn-signup-with' onClick={onGoogleSignIn}>
        {/* <img src='../../public/Images/google-icon.png' alt='Google Icon' className='icon'></img> */}
        <span className='text'>Sign in with Google</span>
      </div>
      Need to create an account? <Link to="/signup" className='log-in-redirect-click'>Sign Up</Link>
    </div>
  );
};