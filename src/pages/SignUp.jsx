import React from 'react'
import { useState } from 'react';
import "./SignUp.css"
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoole } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import { Navigate } from 'react-router-dom';

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
      await doCreateUserWithEmailAndPassword(email, password)
    }
  }

  // const onGooleSignIn = (e) = {
  //   if (!isSigningIn) {
  //     setIsSigningIn(true)
  //     doSignInWithGoole().catch
  //   }
  // }

  return(
    <div className='login-container'>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type='text' value={email} onChange={handleEmail} />
        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword} />
        <input type='submit' className='btn-submit'/>
      </form>
    </div>
  );
}