import { React, useState } from 'react';
import { useAuth } from '../contexts/authContext';
import { Navigate, Link } from 'react-router-dom';
import { doPasswordReset } from '../firebase/auth';
import { Alert } from '@mui/material';
import "../pages/Login.css";


export default function ForgotPassword() {

  const { resetPassword } = useAuth();

  const [email, setEmail] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      setErrorMessage("")
      try {
        await doPasswordReset(email)
        setMessage("Check your inbox for further")
      } catch {
        setErrorMessage("Failed to reset password")
      }
    }
  }

  return(
    <div className='login-container'>
      {resetPassword && (<Navigate to={'/login'} replace={true} />)}
      <h2>Forgot Password</h2>
      {errorMessage && <Alert style={{ backgroundColor: 'red', color: 'white' }}>{errorMessage}</Alert>}
      {message && <Alert style={{ backgroundColor: 'green', color: 'white' }}>{message}</Alert>}
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input type='text' value={email} onChange={handleEmail} />
        <div>
          <Link to="/login">Login</Link>
        </div>
        <input type='submit' className='btn-submit' value="Reset Password"/>
      </form>
      Need to create an account? <Link to="/signup" className='log-in-redirect-click'>Sign Up</Link>
    </div>
  );
};