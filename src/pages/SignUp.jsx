import React from 'react'
import { useState } from 'react';
import "./SignUp.css"
import { doCreateUserWithEmailAndPassword, doSignInWithGoole } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import { Navigate, Link } from 'react-router-dom';
import { Alert } from '@mui/material';


export default function SignUp() {
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
      try {
        setErrorMessage("")
        await doCreateUserWithEmailAndPassword(email, password)
      } catch {
        setErrorMessage("Failed to create an account")
        setIsSigningIn(false)
      }
    }
  }

  const onGoogleSignUp = async () => {
    if (!isSigningIn) {
      setIsSigningIn(true)
      try {
        await doSignInWithGoole().catch
      } catch {
        setErrorMessage("Failed to create an account")
      }
    }
  }

  return(
    <div className='login-container'>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <h2>Sign Up</h2>
      {errorMessage && <Alert style={{ backgroundColor: 'red', color: 'white' }}>{errorMessage}</Alert>}
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type='text' value={email} onChange={handleEmail} />
        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword} />
        <button disabled={isSigningIn} type='submit' className='btn-submit'>Sign Up</button>
      </form>
      <div className='btn-signup-with' onClick={onGoogleSignUp}>
        {/* <img src='../../public/Images/google-icon.png' alt='Google Icon' className='icon'></img> */}
        <span className='text'>Sign in with Google</span>
      </div>
      <div className='log-in-redirect-text'>
      Already have an account? <Link to="/login" className='log-in-redirect-click'>Log In</Link>
      </div>
    </div>
  );
}